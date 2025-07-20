const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    city: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', historySchema);
