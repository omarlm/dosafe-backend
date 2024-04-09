const admin = require('firebase-admin');
require('dotenv').config();

const base64Config = process.env.FIREBASE_CONFIG;

const decodedConfig = JSON.parse(Buffer.from(base64Config, 'base64').toString('utf-8'));

const serviceAccount = decodedConfig;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
