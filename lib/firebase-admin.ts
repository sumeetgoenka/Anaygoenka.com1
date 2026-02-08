import { cert, getApps, initializeApp, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const SERVICE_ACCOUNT_ENV = 'FIREBASE_SERVICE_ACCOUNT';

type ServiceAccountJson = ServiceAccount & { private_key?: string };

function parseServiceAccount(): ServiceAccount {
  const raw = process.env[SERVICE_ACCOUNT_ENV];
  if (!raw) {
    throw new Error(`${SERVICE_ACCOUNT_ENV} is not set`);
  }
  let parsed: ServiceAccount;
  try {
    parsed = JSON.parse(raw) as ServiceAccountJson;
  } catch (error) {
    throw new Error(`${SERVICE_ACCOUNT_ENV} is not valid JSON`);
  }
  const serviceAccount = parsed as ServiceAccountJson;
  const privateKey = serviceAccount.private_key;
  if (typeof privateKey === 'string') {
    serviceAccount.private_key = privateKey.replace(/\\n/g, '\n');
  }
  return parsed;
}

let cachedDb: ReturnType<typeof getFirestore> | null = null;

export function assertFirebaseAdminConfig() {
  parseServiceAccount();
}

export function getAdminDb() {
  if (cachedDb) return cachedDb;
  const serviceAccount = parseServiceAccount();
  const app =
    getApps().length === 0
      ? initializeApp({
          credential: cert(serviceAccount),
        })
      : getApps()[0];
  cachedDb = getFirestore(app);
  return cachedDb;
}
