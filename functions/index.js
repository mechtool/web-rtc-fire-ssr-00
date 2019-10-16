const functions = require('firebase-functions');
const universal = require(`${process.cwd()}/dist/server`).app;

exports.ssr = functions.https.onRequest(universal);
