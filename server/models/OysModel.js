const mongoose = require("mongoose");

const oysterSchema = {
    firstName: String,
    lastName: String,
    email: String,
    pwd: String
}

const Oyster = mongoose.model("oysters", oysterSchema);

module.exports = Oyster;