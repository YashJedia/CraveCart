const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
  image: String
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
