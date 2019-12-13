// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const yummyBurger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (data) {
            cb(data);
        })
    },
    //   all: function(cb) {
    //     orm.all("burgers", function(res) {
    //       cb(res);
    //     });
    //   },
    insertOne: function (cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function (data) {
            cb(data);
        })
    },
    // The variables cols and vals are arrays.
    //   create: function(cols, vals, cb) {
    //     orm.create("burgers", cols, vals, function(res) {
    //       cb(res);
    //     });
    //   },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", true, burgerId, function (data) {
            cb(data);
        })
    }
    //   update: function(objColVals, condition, cb) {
    //     orm.update("burgers", objColVals, condition, function(res) {
    //       cb(res);
    //     });
    //   },
    //   delete: function(condition, cb) {
    //     orm.delete("burgers", condition, function(res) {
    //       cb(res);
    //     });
    //   }
};

// Export the database functions for the controller (catsController.js).
module.exports = yummyBurger;