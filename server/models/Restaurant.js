const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
