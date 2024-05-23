const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Items'
     }]
});

module.exports = mongoose.model('category', categorySchema);
