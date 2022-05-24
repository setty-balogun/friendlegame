const mongoose = require("mongoose");

const GameCodeSchema = new mongoose.Schema({
    code: String,
    word: String,
})

module.exports = mongoose.model("GameCode", GameCodeSchema);