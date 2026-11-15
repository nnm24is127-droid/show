ENTO PROTEINS – EXPO SALES TRACKER
=====================================
Internal Business Application for Trade Shows & Commercial Distribution

1. QUICK OVERVIEW
-----------------
This application tracks the end-to-end commercial lifecycle for ENTO PROTEINS at trade shows and expos:
- Expo Management: Stall registration, location, setup cost, and return-on-investment (ROI) tracking.
- Lead Management: B2B stall visitors, feed mills, poultry/aqua farms, contact info, and product interest.
- Order Management: Agreed product sales, quantity, unit pricing, list discounts, payment terms, and delivery destinations.
- Order Tracking: 6-stage logistics fulfillment from packaging to end consumer:
    1. Order confirmed
    2. Packed
    3. Dispatched (with LR #, vehicle #, and logistics carrier)
    4. In transit
    5. Delivered
    6. Placed with end consumer
- Multi-User Access: Role-based access control with Editor (write) and Viewer (read-only) roles.
- Cloud Synchronization: Real-time multi-device sync via Google Cloud Firestore, with full offline local storage support.

2. FIREBASE & CLOUD SETUP
-------------------------
1. Go to https://console.firebase.google.com, sign in with your Google account, and click "Add project".
2. Build > Authentication > Get started > Sign-in method > Email/Password > Enable.
   - Users tab > Add user:
     * Editor: e.g. sales@entoproteins.com (has full add/edit/delete access)
     * Viewer: e.g. team@entoproteins.com (shared login for viewers; read-only live sync)
3. Build > Firestore Database > Create database (Production mode).
   - Rules tab > Paste the following security rules and click Publish:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{col}/{id} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.email == 'sales@entoproteins.com';
    }
  }
}

4. Project settings (gear icon) > General > Your apps > Web (</>) > Register app.
   Copy apiKey, authDomain, projectId, appId into:
   - Either the CFG block in index.html, OR
   - Open the application, go to Settings, and paste your Firebase credentials directly.

5. FREE HOSTING (NETLIFY / GITHUB PAGES)
----------------------------------------
- Drag and drop this folder into https://app.netlify.com/drop
- In Firebase Console > Authentication > Settings > Authorized domains > Add your Netlify domain.
- The application also works on GitHub Pages: https://nnm24is127-droid.github.io/show/

6. INSTALL ON ANDROID SMARTPHONES (PWA)
---------------------------------------
1. Open your Netlify or GitHub Pages link in Google Chrome on your Android smartphone.
2. Tap the Chrome menu (3 vertical dots in upper right) > Tap "Install app" (or "Add to Home screen").
3. The official ENTO PROTEINS Expo Sales Tracker icon will appear on your phone home screen and open in standalone full-screen mode like a native Android app.
