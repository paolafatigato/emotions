const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// On Vercel: set GOOGLE_APPLICATION_CREDENTIALS_JSON env var with the full service account JSON string
// Locally: set GOOGLE_APPLICATION_CREDENTIALS to the path of the service account JSON file
try {
  if (!admin.apps.length) {
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
      const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
      admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    } else {
      admin.initializeApp(); // uses GOOGLE_APPLICATION_CREDENTIALS file path locally
    }
  }
} catch (e) {
  console.error('Firebase Admin init error:', e.message);
}

const db = admin.firestore();

// Load stripe key from env
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID; // price/product you created
const stripe = require('stripe')(STRIPE_SECRET);

const app = express();
app.use(cors({
  origin: true,  // allow any origin (fine for a public site)
  allowedHeaders: ['Content-Type', 'Authorization']
}));
// Handle preflight for all routes
app.options('*', cors({ origin: true, allowedHeaders: ['Content-Type', 'Authorization'] }));

// ── WEBHOOK must be registered BEFORE bodyParser.json() so body stays as raw Buffer
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const uid = session.metadata && session.metadata.firebaseUid;
    if (uid) {
      db.collection('users').doc(uid).set({ premium: true }, { merge: true })
        .then(() => console.log('Premium flag set for', uid))
        .catch(e => console.error('Error writing premium flag', e));
    } else if (session.customer_email) {
      admin.auth().getUserByEmail(session.customer_email).then(user => {
        db.collection('users').doc(user.uid).set({ premium: true }, { merge: true });
      }).catch(e => console.error('Cannot map email to user', e));
    }
  }

  res.json({ received: true });
});

app.use(bodyParser.json());

// Helper: verify Firebase ID token from Authorization header
async function verifyFirebaseToken(req) {
  const auth = req.headers.authorization || '';
  if (!auth.startsWith('Bearer ')) throw new Error('Missing auth token');
  const idToken = auth.split('Bearer ')[1];
  const decoded = await admin.auth().verifyIdToken(idToken);
  return decoded.uid;
}

// Create Checkout Session
app.post('/createCheckoutSession', async (req, res) => {
  try {
    const uid = await verifyFirebaseToken(req);
    const origin = req.body.origin || req.headers.origin || null;
    // You can pass priceId in body or use env STRIPE_PRICE_ID
    const priceId = req.body.priceId || STRIPE_PRICE_ID;
    if (!priceId) return res.status(400).send('Missing priceId');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: req.body.email || undefined,
      metadata: { firebaseUid: uid },
      success_url: 'https://emotions-website.vercel.app/?premium=success',
      cancel_url: 'https://emotions-website.vercel.app/?premium=canceled'
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message || String(err));
  }
});

// (webhook handler moved above bodyParser.json — see above)

// Export for Vercel serverless (module.exports = app)
// or run standalone locally (node index.js)
if (require.main === module) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log('Server listening on http://localhost:' + PORT));
} else {
  module.exports = app;
}
