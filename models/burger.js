// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function (burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function (res) {
            cb(res);
        })
    },

    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", true, burgerId, function (res) {
            cb(res);
        })
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;