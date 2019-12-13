const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const yummyBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    yummyBurger.selectAll(function (data) {
        let burgObject = {
            burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function (req, res) {
    yummyBurger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    yummyBurger.updateOne(req.params.id, function (data) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// router.delete("/api/cats/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     yummyBurger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;
