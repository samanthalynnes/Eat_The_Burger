// Import MySQL connection.
const connection = require("./connection.js");

// Object for all our SQL statement functions.
const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM ??";

        console.log(queryString);
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function (table, cols, vals, condition, cb) {
        const queryString = "UPDATE ?? SET ??=? WHERE id=?";

        console.log(queryString);
        connection.query(queryString, [table, cols, vals, condition], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};

// Export the orm object for the model (burger.js).
module.exports = orm;
