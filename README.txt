EXPO SALES TRACKER - SETUP (free, about 20 minutes, no Claude account needed)

1. Go to console.firebase.google.com, sign in with Google, Add project (turn off Analytics).
2. Build > Authentication > Get started > Email/Password > Enable.
   Users tab > Add user. Create two:
   - Editor: the person who enters data (e.g. sales@yourco.com + password)
   - Viewer: ONE shared login for all other people (e.g. team@yourco.com + password). Give this email and password to your 9 viewers.
   (Emails need not be real inboxes.)
3. Build > Firestore Database > Create database > Production mode.
   Rules tab > replace everything with the text below, put the EDITOR email, Publish:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{col}/{id} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.email == 'sales@yourco.com';
    }
  }
}

4. Project settings (gear) > Your apps > Web (</>) > register. Copy apiKey, authDomain, projectId, appId
   into the CFG block near the bottom of index.html. Set EDITOR_EMAIL to the same editor email as in the rules.
5. Host the folder free: go to app.netlify.com/drop and drag this whole folder in. You get a link.
   Then in Firebase > Authentication > Settings > Authorized domains > Add domain: your netlify domain (without https://).
6. On each Samsung/Android phone: open the link in Chrome > menu (3 dots) > Install app. It appears on the home screen like a normal app.
   iPhone: Safari > Share > Add to Home Screen.

Editor sees Add/Edit buttons. Viewers see everything live but cannot change anything.
