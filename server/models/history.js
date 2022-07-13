const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    user: String,
    code: String
})

module.exports = mongoose.model("history", HistorySchema);