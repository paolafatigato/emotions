/* ═══════════════════════════════════════════════════════════════════
   PREMIUM SYSTEM — paolafatigato.github.io/emotions
   
   Architecture: Firebase Auth (email/password) + Firestore premium flag
   Payment: Gumroad (user buys → gets license key → enters here → unlocks)
   
   SETUP STEPS (one-time):
   1. Go to console.firebase.google.com → your project → add web app
   2. Enable "Email/Password" auth in Authentication > Sign-in methods
   3. Enable Firestore Database (start in test mode, then add rules below)
   4. Replace firebaseConfig below with your actual values
   5. Create a Gumroad product → set "Thank You" page URL to your site
   
   FIRESTORE SECURITY RULES (paste in Firebase console):
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
═══════════════════════════════════════════════════════════════════ */

// ── 1. FIREBASE CONFIG — replace with yours ────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyDBAp8XiD_ejAX6JTffi_LUtKm4xLwGvwc",
  authDomain: "emotions-d38c1.firebaseapp.com",
  projectId: "emotions-d38c1",
  storageBucket: "emotions-d38c1.firebasestorage.app",
  messagingSenderId: "57757612864",
  appId: "1:57757612864:web:cd3d739d618358ad9558a5"
};

// ── 2. GUMROAD PRODUCT LINK ────────────────────────────────────────
const GUMROAD_LINK = "https://gumroad.com/l/YOUR_PRODUCT_ID"; // ← change this (fallback)

// ── 2b. CLOUD FUNCTIONS / STRIPE ENDPOINT (Vercel)
// This endpoint will create a Stripe Checkout Session and must verify the
// Firebase ID token sent from the client. Replace with your deployed function URL.
const CREATE_CHECKOUT_SESSION_URL = "https://emotions-website.vercel.app/createCheckoutSession"; // ← Vercel endpoint

// ── 3. PREMIUM FEATURES CONFIG ─────────────────────────────────────
// Define which pages/features are locked and what free users can see
const PREMIUM_CONFIG = {
  dice: {
    locked: true,
    freePreview: {
      // Free users: basic mode only, just 1 sentence visible
      allowedMode: 'basic',
      maxSentences: 1,
      message: "🔒 Unlock the <strong>Synonym Mode</strong> and all 12 sentences with Premium!"
    }
  },
  match: {
    locked: true,
    freePreview: {
      maxCards: 4, // Free: see 4 pairs only
      message: "🔒 See all 12 emotion pairs with Premium!"
    }
  },
  journal: { locked: false },  // free
  tictactoe: { locked: false }, // free
  wheel: { locked: false },     // free
  compare: {
    locked: true,
    freePreview: {
      allowedMode: 'comp',       // Free: comparatives only, no superlatives
      maxChallenges: 3,
      message: "🔒 Unlock <strong>Superlatives</strong> and all 14 challenges with Premium!"
    }
  },
  coping: { locked: false },    // free
};

// ══════════════════════════════════════════════════════════════════
// PREMIUM UI INJECTION — adds modal, badge, lock overlays to the DOM
// ══════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────
// BUY PREMIUM (client) — starts Stripe Checkout via Cloud Function
// Requires: user signed in, CREATE_CHECKOUT_SESSION_URL set to your function
async function buyPremium() {
  if (!_auth || !_auth.currentUser) {
    openAuthModal('premium');
    return;
  }
  try {
    const idToken = await _auth.currentUser.getIdToken(/* forceRefresh */ true);
    const resp = await fetch(CREATE_CHECKOUT_SESSION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + idToken
      },
      body: JSON.stringify({ priceId: undefined })
    });
    if (!resp.ok) {
      const txt = await resp.text();
      alert('Payment init failed: ' + txt);
      return;
    }
    const data = await resp.json();
    // redirect to Checkout
    if (data.url) {
      window.location.href = data.url;
    } else if (data.sessionId) {
      // optional: use Stripe.js to redirect if provided
      window.location.href = '/';
    } else {
      alert('Unexpected response from payment server.');
    }
  } catch (err) {
    console.error(err);
    alert('Could not start payment: ' + (err.message || err));
  }
}

function injectPremiumUI() {
  const css = `
    /* ── PREMIUM BADGE (nav) ── */
    .premium-badge {
      flex-shrink:0; padding:6px 14px; border-radius:40px;
      background: linear-gradient(135deg,#f9a825,#ff6b6b);
      color:#fff; font-size:12px; font-weight:800; cursor:pointer;
      border:none; white-space:nowrap; margin-left:auto;
      box-shadow:0 2px 10px rgba(249,168,37,.35);
      transition:all .2s;
    }
    .premium-badge:hover{transform:translateY(-1px);box-shadow:0 4px 16px rgba(249,168,37,.4)}
    .premium-badge.is-premium{
      background:linear-gradient(135deg,#06d6a0,#118ab2);
      cursor:default;
    }

    /* ── LOCK OVERLAY on nav buttons ── */
    .nav-btn-wrap { position:relative; display:inline-flex; }
    .lock-icon {
      position:absolute; top:-4px; right:-4px;
      background:#f9a825; color:#fff; border-radius:50%;
      width:16px; height:16px; font-size:9px;
      display:flex; align-items:center; justify-content:center;
      font-weight:900; pointer-events:none;
    }

    /* ── PREMIUM BANNER (inside locked pages) ── */
    .premium-banner {
      background:linear-gradient(135deg,#fff8e1,#fff3cd);
      border:2px solid #f9a825; border-radius:16px;
      padding:20px 24px; margin:0 0 20px; text-align:center;
      box-shadow:0 4px 20px rgba(249,168,37,.15);
    }
    .premium-banner-icon { font-size:36px; margin-bottom:8px; }
    .premium-banner-title {
      font-size:16px; font-weight:900; color:#c05500; margin-bottom:6px;
    }
    .premium-banner-desc { font-size:13px; color:#7a5000; margin-bottom:14px; line-height:1.5; }
    .btn-get-premium {
      display:inline-block; padding:11px 28px; border-radius:40px;
      background:linear-gradient(135deg,#f9a825,#ff6b6b);
      color:#fff; font-size:14px; font-weight:800;
      border:none; cursor:pointer; text-decoration:none;
      box-shadow:0 4px 16px rgba(249,168,37,.35);
      transition:all .2s;
    }
    .btn-get-premium:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(249,168,37,.45)}
    .btn-already-premium {
      display:inline-block; margin-top:8px; font-size:12px;
      color:#a07020; cursor:pointer; text-decoration:underline; background:none; border:none;
    }

    /* ── BLUR OVERLAY on locked content ── */
    .premium-blur-wrap { position:relative; }
    .premium-blur-wrap.is-blurred > *:not(.premium-overlay) {
      filter:blur(4px); pointer-events:none; user-select:none;
    }
    .premium-overlay {
      position:absolute; inset:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; z-index:10;
      background:rgba(255,255,255,.6); border-radius:16px;
      padding:20px;
    }
    .premium-overlay-text {
      font-size:13px; font-weight:700; color:#c05500;
      text-align:center; margin-bottom:12px; line-height:1.5;
    }

    /* ── AUTH MODAL ── */
    .auth-modal-bg {
      position:fixed; inset:0; background:rgba(0,0,0,.5);
      z-index:9000; display:flex; align-items:center; justify-content:center;
      padding:20px;
    }
    .auth-modal {
      background:#fff; border-radius:24px; padding:32px 28px;
      max-width:400px; width:100%; box-shadow:0 20px 60px rgba(0,0,0,.2);
      position:relative;
    }
    .auth-modal-close {
      position:absolute; top:16px; right:16px;
      background:none; border:none; font-size:20px; cursor:pointer; color:#999;
    }
    .auth-modal-title {
      font-size:20px; font-weight:900; color:#333; margin-bottom:4px; text-align:center;
    }
    .auth-modal-sub { font-size:13px; color:#999; text-align:center; margin-bottom:20px; }
    .auth-tab-row {
      display:flex; border:2px solid #eee; border-radius:12px;
      overflow:hidden; margin-bottom:18px;
    }
    .auth-tab {
      flex:1; padding:9px; text-align:center;
      font-size:13px; font-weight:700; color:#999;
      background:#fafafa; border:none; cursor:pointer; transition:all .2s;
    }
    .auth-tab.active { background:#6c63ff; color:#fff; }
    .auth-input {
      width:100%; padding:11px 14px; border:2px solid #eee; border-radius:10px;
      font-family:inherit; font-size:14px; margin-bottom:12px; outline:none;
      transition:border-color .2s;
    }
    .auth-input:focus { border-color:#6c63ff; }
    .auth-submit {
      width:100%; padding:13px; border-radius:12px;
      background:linear-gradient(135deg,#6c63ff,#a855f7);
      color:#fff; font-size:15px; font-weight:800;
      border:none; cursor:pointer; transition:all .2s; margin-bottom:10px;
    }
    .auth-submit:hover{transform:translateY(-1px);box-shadow:0 4px 16px rgba(108,99,255,.35)}
    .auth-error { font-size:12px; color:#e53935; text-align:center; margin-bottom:8px; min-height:16px; }
    .auth-divider {
      text-align:center; font-size:12px; color:#bbb; margin:10px 0;
      position:relative;
    }
    .auth-divider::before,.auth-divider::after {
      content:''; position:absolute; top:50%; width:40%; height:1px; background:#eee;
    }
    .auth-divider::before{left:0} .auth-divider::after{right:0}
    .btn-buy-gumroad {
      width:100%; padding:11px; border-radius:12px;
      background:linear-gradient(135deg,#f9a825,#ff6b6b);
      color:#fff; font-size:14px; font-weight:800;
      border:none; cursor:pointer; text-decoration:none;
      display:block; text-align:center; transition:all .2s;
    }
    .btn-buy-gumroad:hover{transform:translateY(-1px)}
    .auth-note { font-size:11px; color:#bbb; text-align:center; margin-top:8px; line-height:1.4; }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Auth modal HTML
  const modalHTML = `
  <div class="auth-modal-bg" id="auth-modal" style="display:none">
    <div class="auth-modal">
      <button class="auth-modal-close" onclick="closeAuthModal()">✕</button>
      <div style="text-align:center;font-size:36px;margin-bottom:8px">🌟</div>
      <div class="auth-modal-title">Emotions Platform</div>
      <div class="auth-modal-sub">Sign in or create a free account</div>
      <div class="auth-tab-row">
        <button class="auth-tab active" id="tab-login" onclick="switchAuthTab('login')">Sign In</button>
        <button class="auth-tab" id="tab-signup" onclick="switchAuthTab('signup')">Create Account</button>
      </div>
      <div class="auth-error" id="auth-error"></div>
      <input class="auth-input" type="email" id="auth-email" placeholder="Email address">
      <input class="auth-input" type="password" id="auth-pass" placeholder="Password">
      <input class="auth-input" type="password" id="auth-pass2" placeholder="Confirm password" style="display:none">
      <button class="auth-submit" onclick="authSubmit()">Sign In</button>
      <div class="auth-divider">or</div>
      <button class="btn-buy-gumroad" onclick="buyPremium()">⭐ Buy Premium — unlock everything</button>
      <div class="auth-note">After purchase, sign in above. Your premium status is activated automatically.</div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ══════════════════════════════════════════════════════════════════
// FIREBASE INIT & AUTH LOGIC
// ══════════════════════════════════════════════════════════════════
let _firebaseApp, _auth, _db, _currentUser = null, _isPremium = false;

async function initFirebase() {
  // Dynamic import (CDN)
  const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
  const { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence }
    = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
  const { getFirestore, doc, getDoc, setDoc, onSnapshot }
    = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

  _firebaseApp = initializeApp(firebaseConfig);
  _auth = getAuth(_firebaseApp);
  // Ensure auth state persists across page reloads
  try {
    await setPersistence(_auth, browserLocalPersistence);
  } catch (e) {
    console.warn('Could not set auth persistence:', e && e.message ? e.message : e);
  }
  _db = getFirestore(_firebaseApp);

  // Store refs globally for modal functions
  window._fbAuth = { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, _auth };
  window._fbDb = { getFirestore, doc, getDoc, setDoc, _db };

  onAuthStateChanged(_auth, async (user) => {
    _currentUser = user;
    if (user) {
      // Real-time listener: update premium status immediately when Firestore changes
      if (window.__userUnsub) window.__userUnsub();
      const userRef = doc(_db, 'users', user.uid);
      window.__userUnsub = onSnapshot(userRef, (snap) => {
        _isPremium = snap.exists() && snap.data().premium === true;
        updatePremiumUI();
      });
    } else {
      _isPremium = false;
      if (window.__userUnsub) { window.__userUnsub(); window.__userUnsub = null; }
      updatePremiumUI();
    }
  });
}

function updatePremiumUI() {
  const badge = document.getElementById('premium-badge');
  if (!badge) return;
  if (_currentUser && _isPremium) {
    badge.textContent = '⭐ Premium';
    badge.classList.add('is-premium');
    badge.onclick = () => { if(confirm('Sign out?')) window._fbAuth.signOut(window._fbAuth._auth); };
    // Remove all blur overlays
    document.querySelectorAll('.premium-blur-wrap').forEach(el => el.classList.remove('is-blurred'));
    document.querySelectorAll('.premium-overlay').forEach(el => el.remove());
    // Re-enable locked buttons
    document.querySelectorAll('.nav-btn[data-locked]').forEach(btn => btn.removeAttribute('data-locked'));
    // Unlock synonym mode button — reset all visual restrictions
    const synBtn = document.getElementById('dm-syn');
    if (synBtn) {
      synBtn.removeAttribute('disabled');
      synBtn.style.opacity = '';
      synBtn.title = '';
      synBtn.style.pointerEvents = '';
    }
    // Unlock superlatives button
    const superBtn = document.getElementById('cmp-btn-super');
    if (superBtn) {
      superBtn.removeAttribute('disabled');
      superBtn.style.opacity = '';
      superBtn.title = '';
      superBtn.style.pointerEvents = '';
    }
    // Remove all "Get Premium" banners shown to free users
    document.querySelectorAll('.premium-banner').forEach(el => el.remove());
  } else if (_currentUser) {
    badge.textContent = '🔒 Go Premium';
    badge.classList.remove('is-premium');
    badge.onclick = () => openAuthModal('premium');
  } else {
    badge.textContent = '🔒 Sign In';
    badge.classList.remove('is-premium');
    badge.onclick = () => openAuthModal('login');
  }
  applyFreeRestrictions();
}

// ══════════════════════════════════════════════════════════════════
// FREE USER RESTRICTIONS
// ══════════════════════════════════════════════════════════════════
function applyFreeRestrictions() {
  if (_isPremium) return; // Nothing to restrict

  // ── DICE: lock Synonym Mode button ──────────────────────────────
  const synBtn = document.getElementById('dm-syn');
  if (synBtn) {
    // keep the button clickable so the wrapped `setDiceMode` can intercept
    synBtn.removeAttribute('disabled');
    synBtn.title = '🔒 Premium feature';
    synBtn.style.opacity = '0.5';
    // Add banner above dice step bar
    addPremiumBanner('dice-step-bar', PREMIUM_CONFIG.dice.freePreview.message, 'before');
  }

  // ── COMPARE: lock Superlatives button ──────────────────────────
  const superBtn = document.getElementById('cmp-btn-super');
  if (superBtn) {
    // keep clickable; mode switching is intercepted by wrapped setCmpMode or by auth flow
    superBtn.removeAttribute('disabled');
    superBtn.style.opacity = '0.5';
    addPremiumBanner('cmp-btn-super', PREMIUM_CONFIG.compare.freePreview.message, 'after');
  }
}

function addPremiumBanner(anchorId, message, position) {
  const anchor = document.getElementById(anchorId);
  if (!anchor || anchor.previousElementSibling?.classList.contains('premium-banner')) return;
  const banner = document.createElement('div');
  banner.className = 'premium-banner';
  banner.innerHTML = `
    <div class="premium-banner-icon">🌟</div>
    <div class="premium-banner-title">Unlock Premium Features</div>
    <div class="premium-banner-desc">${message}</div>
    <button class="btn-get-premium" onclick="buyPremium()">⭐ Get Premium</button>
    <br>
    <button class="btn-already-premium" onclick="openAuthModal('login')">Already have an account? Sign in</button>
  `;
  if (position === 'before') anchor.parentNode.insertBefore(banner, anchor);
  else anchor.parentNode.insertBefore(banner, anchor.nextSibling);
}

// ══════════════════════════════════════════════════════════════════
// AUTH MODAL
// ══════════════════════════════════════════════════════════════════
let _authMode = 'login';

function openAuthModal(mode) {
  _authMode = mode || 'login';
  document.getElementById('auth-modal').style.display = 'flex';
  if (mode === 'premium') switchAuthTab('signup');
  else switchAuthTab('login');
  document.getElementById('auth-error').textContent = '';
}

function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

function switchAuthTab(tab) {
  _authMode = tab;
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('auth-pass2').style.display = tab === 'signup' ? 'block' : 'none';
  document.querySelector('.auth-submit').textContent = tab === 'login' ? 'Sign In' : 'Create Account';
  document.getElementById('auth-error').textContent = '';
}

async function authSubmit() {
  const email = document.getElementById('auth-email').value.trim();
  const pass = document.getElementById('auth-pass').value;
  const pass2 = document.getElementById('auth-pass2').value;
  const errEl = document.getElementById('auth-error');
  errEl.textContent = '';

  if (!email || !pass) { errEl.textContent = 'Please fill in all fields.'; return; }

  try {
    const { signInWithEmailAndPassword, createUserWithEmailAndPassword, _auth } = window._fbAuth;
    const { doc, setDoc, _db } = window._fbDb;

    if (_authMode === 'signup') {
      if (pass !== pass2) { errEl.textContent = 'Passwords do not match.'; return; }
      const cred = await createUserWithEmailAndPassword(_auth, email, pass);
      // Create user doc (premium: false by default)
      await setDoc(doc(_db, 'users', cred.user.uid), { email, premium: false, createdAt: new Date() });
    } else {
      await signInWithEmailAndPassword(_auth, email, pass);
    }
    closeAuthModal();
  } catch (err) {
    const msgs = {
      'auth/user-not-found': 'No account found with this email.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'Email already registered. Try signing in.',
      'auth/weak-password': 'Password must be at least 6 characters.',
      'auth/invalid-email': 'Please enter a valid email.',
    };
    errEl.textContent = msgs[err.code] || 'Something went wrong. Try again.';
  }
}

// ══════════════════════════════════════════════════════════════════
// INIT — call this at end of your <script> block
// ══════════════════════════════════════════════════════════════════
function premiumSystemInit() {
  injectPremiumUI();
  initFirebase();

  // Add premium badge to nav
  const nav = document.querySelector('nav');
  if (nav) {
    const badge = document.createElement('button');
    badge.id = 'premium-badge';
    badge.className = 'premium-badge';
    badge.textContent = '🔒 Sign In';
    nav.appendChild(badge);
  }

  // Fallback click handlers: ensure Synonyms / Superlatives open auth modal for non-premium users
  setTimeout(()=>{
    const synBtn = document.getElementById('dm-syn');
    if (synBtn) {
      synBtn.addEventListener('click', (e)=>{
        // if user not premium, open modal and prevent switching mode
        if (!_isPremium) { e.preventDefault(); openAuthModal('premium'); }
      });
    }
    const superBtn = document.getElementById('cmp-btn-super');
    if (superBtn) {
      superBtn.addEventListener('click', (e)=>{
        if (!_isPremium) { e.preventDefault(); openAuthModal('premium'); }
      });
    }
  },80);
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', premiumSystemInit);
} else {
  premiumSystemInit();
}

// ───────────────────────────────────────────────────────────────────
// Expose functions used by inline onclick attributes (module scripts are scoped)
// and wrap `setDiceMode` so clicking 'synonyms' opens auth modal for free users.
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.authSubmit = authSubmit;
window.buyPremium = buyPremium;

// If the main page defined setDiceMode (it does in index.html), wrap it
if (window.setDiceMode && typeof window.setDiceMode === 'function') {
  const __origSetDiceMode = window.setDiceMode.bind(window);
  window.setDiceMode = function(mode){
    if (!_isPremium && mode === 'synonym'){
      openAuthModal('premium');
      return;
    }
    return __origSetDiceMode(mode);
  };
}