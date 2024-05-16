const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: String,
});

module.exports = mongoose.model('Items', itemsSchema);
