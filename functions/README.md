Setup & deploy (Firebase Cloud Functions)

1. Install dependencies

```bash
cd functions
npm install
```

2. Configure environment variables (use Firebase env config or your host):

- `STRIPE_SECRET_KEY` = your Stripe secret key
- `STRIPE_WEBHOOK_SECRET` = your Stripe webhook signing secret
- `STRIPE_PRICE_ID` = your product price ID

If using Firebase Functions:

```bash
firebase functions:config:set stripe.secret="sk_live_..." stripe.price_id="price_..." stripe.webhook_secret="whsec_..."
# deploy
firebase deploy --only functions
```

Or set environment variables in your host (e.g. Vercel, Cloud Run).

3. Update `CREATE_CHECKOUT_SESSION_URL` in `premium_system.js` with your deployed function URL.

4. In Stripe Dashboard create a webhook endpoint pointing to `<YOUR_FUNCTION_URL>/webhook` and add the `checkout.session.completed` event. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`.

Notes
- Client must be signed in before starting Checkout; the client sends a Firebase ID token to the function to map the purchase to a `uid`.
- The webhook marks `users/{uid}.premium = true` in Firestore immediately when payment completes.
