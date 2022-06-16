const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    user: String,
    curr: String
})

module.exports = mongoose.model("history", HistorySchema);