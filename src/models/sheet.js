const mongoose = require('mongoose');

const sheetSchema = mongoose.Schema({
    name: {type: String, required: true},
    user_id: {type: String, required: true, unique: true},
    entires: {type: [String], required: false},
    collection_id: {type: String, required: false}
}, { timestamps: true });

module.exports = mongoose.model('sheet', sheetSchema);