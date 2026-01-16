import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore, setLogLevel } from 'firebase/firestore';

const appId = process.env.NEXT_PUBLIC_APP_ID || 'kukuconnect-default';
const firebaseConfigStr = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;
const firebaseConfig = firebaseConfigStr ? JSON.parse(firebaseConfigStr) : {};

// Set Firebase log level for debugging
// setLogLevel('debug'); // Uncomment if needed

let app;
let db: Firestore | undefined;
let auth: Auth | undefined;

if (Object.keys(firebaseConfig).length > 0) {
    try {
        if (!getApps().length) {
            app = initializeApp(firebaseConfig);
        } else {
            app = getApp();
        }
        db = getFirestore(app);
        auth = getAuth(app);
    } catch (e) {
        console.error("Firebase init error:", e);
    }
} else {
    console.warn("Firebase config not found. Running in offline/mock mode.");
}

export { app, db, auth, appId };
