const jwt = require("jsonwebtoken");
const Restaurant = require("../models/Restaurant");


const verifyRestaurant = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied! No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const restaurant = await Restaurant.findById(decoded.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    req.restaurant = restaurant; // Attach restaurant to request object
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = { verifyRestaurant };
