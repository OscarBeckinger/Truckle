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

exports.updateItemIndex = functions.firestore
    .document("menuitems/{itemId}")
    .onUpdate((change, context) => {
        const newData = change.after.data();
        const item = {
            objectID: context.params.itemId,
            title: newData.title,
            description: newData.description,
            associatedTruck: newData.associatedTruck,
            imageurl: newData.imageurl,
        };

        return index.saveObject(item).catch((error) => {
            console.error(`Error when indexing item ${context.params.itemId}`, error);
            throw new functions.https.HttpsError("internal", `Error when indexing article: ${error.message}`);
        });
    });