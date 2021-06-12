const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    platform: String,
    img: String,
    store: String,
    value: Number,
    currency: String,
    originalPrice: Number,
    currentPrice: Number,
    sale: Boolean,
    description: { type: String, default: " " },
    discount: Number,
    region: String,
});

module.exports = mongoose.model("Product", productSchema);
