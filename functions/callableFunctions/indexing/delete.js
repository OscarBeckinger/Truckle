const { ALGOLIA_ADMINKEY } = require("../../config");
const { ALGOLIA_APPID } = require("../../config");

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const algoliasearch = require("algoliasearch");
if (admin.apps.length === 0) {
    admin.initializeApp();
}
const ALGOLIA_APP_ID = ALGOLIA_APPID;
const ALGOLIA_ADMIN_KEY = ALGOLIA_ADMINKEY;
const ALGOLIA_INDEX_NAME = "menu_items";

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

exports.removeItemFromIndex = functions.firestore
    .document("menuitems/{itemId}")
    .onDelete((snap, context) => {
        const itemId = snap.id;
        return index.deleteObject(itemId);
    });