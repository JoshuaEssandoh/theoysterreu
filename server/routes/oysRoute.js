const express = require("express");
const router = express.Router();
const Oyster = require("../../models/OysModel");

router.route("/postValues").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const pwd = req.body.pwd;
    //Creates a new note model
    const newOyster = new Oyster({
        firstName,
        lastName,
        email,
        pwd
    });

    newOyster.save();
})

module.exports = router;