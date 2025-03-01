const express = require("express");
const Restaurant = require("../models/Restaurant");
const { verifyRestaurant } = require("../middleware/authMiddleware"); // ✅ Ensure correct import

const router = express.Router();

// ✅ Create a new restaurant (Protected Route)
router.post("/", verifyRestaurant, async (req, res) => {
  const { name, category, image, rating, address } = req.body;

  try {
    const newRestaurant = new Restaurant({
      name,
      category,
      image,
      rating,
      address,
      owner: req.restaurant.id, // Set owner as logged-in restaurant
    });

    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: "Error creating restaurant" });
  }
});


// Get restaurant details and menu by ID
router.get("/:id", async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id).populate("menu");
      if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
  
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Error fetching restaurant data" });
    }
  });
  

module.exports = router;
