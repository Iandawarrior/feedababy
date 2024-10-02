/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hd7dv8rufr3sroo",
    "created": "2024-09-23 00:26:57.822Z",
    "updated": "2024-09-23 00:26:57.822Z",
    "name": "feed_record",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lvihehbv",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "wztdvw2v2bhdpcp",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "i80xnnig",
        "name": "feed_time",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "d5c8dd9e",
        "name": "feed_amount_in_ml",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hd7dv8rufr3sroo");

  return dao.deleteCollection(collection);
})
