/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wztdvw2v2bhdpcp",
    "created": "2024-09-18 09:19:26.506Z",
    "updated": "2024-09-18 09:19:26.506Z",
    "name": "babies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v5txiesn",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("wztdvw2v2bhdpcp");

  return dao.deleteCollection(collection);
})
