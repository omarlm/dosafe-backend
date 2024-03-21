const admin = require('firebase-admin')
const serviceAccount = require('../../secrets/dosafe-6e5d7-firebase-adminsdk-x18ke-7961c611c2.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

module.exports = db
