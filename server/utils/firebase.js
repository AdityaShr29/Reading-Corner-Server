const { initializeApp, cert} = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('../book-shelf-64f97-firebase-adminsdk-mw7tz-3ce9f3916e.json');

initializeApp({
  credential: cert(serviceAccount)
})

const db = getFirestore();

module.exports = { db };