var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

// routes 
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function (results) {
            // send the ID of new
            res.json({ id: results.insertID });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (results) {
        if (results.changedRows == 0) {
            // if no rows were changed, then the ID must exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cats.delete(condition, function (results) {
        if (results.affectedRowds == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;