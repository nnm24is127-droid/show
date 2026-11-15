ENTO PROTEINS – EXPO SALES TRACKER
=====================================
Internal Business Application for Trade Shows & Commercial Distribution
Firebase Project: ento-proteins
Authorized Editor: rizwanarahiman135@gmail.com

1. AUTHENTICATION & APPROVAL LIFECYCLE
--------------------------------------
- Login & Signup: Users open the app to a dedicated, branded authentication screen.
- Self-Registration: New users register with their Full Name, Email, and Password.
- Automatic Role Assignment: Default role is "Viewer", and status is set to "Pending".
- Gatekeeping: Unauthenticated, pending, or disabled users are strictly prevented from viewing or modifying business data (Expos, Leads, Orders).
- Pending Screen: Pending users see an "Account Pending Approval" screen with real-time updates when an Editor approves them.
- Editor Approval Dashboard: The authorized Editor (rizwanarahiman135@gmail.com) has a dedicated "User Approvals" tab to Approve, Reject, or Disable users with real-time Firestore sync.

2. FIREBASE & CLOUD SETUP
-------------------------
1. Go to https://console.firebase.google.com and select project "ento-proteins".
2. Build > Authentication:
   - Sign-in method > Enable "Email/Password".
   - Users tab: Register the Editor account:
     * Email: rizwanarahiman135@gmail.com
     * Password: (Set a secure password)
3. Build > Firestore Database:
   - Rules tab > Paste the rules from firestore.rules and click "Publish".
4. Project settings (gear icon) > General > Your apps > Web (</>):
   - Copy apiKey, authDomain, projectId, appId into index.html (or enter them in the app's Settings tab).

3. FIRESTORE SECURITY RULES
---------------------------
Security rules in firestore.rules strictly enforce:
- Unauthenticated users cannot read or write any business data.
- Pending or rejected users cannot access expos, leads, or orders.
- Approved viewers can ONLY read business records.
- Only rizwanarahiman135@gmail.com can create, update, or delete expos, leads, and orders.
- Only rizwanarahiman135@gmail.com can approve users or modify roles.
- Users cannot modify their own status or escalate permissions.

4. DEPLOYMENT TO GITHUB PAGES
-----------------------------
GitHub Pages automatically builds from the main branch via .github/workflows/static.yml.
Live URL: https://nnm24is127-droid.github.io/show/
