import { useEffect, useState } from "react";
import API from "../utils/api";
import RestaurantCard from "../components/RestaurantCard";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await API.get("/api/restaurants");
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants", error);
      }
    };
    fetchRestaurants();
  }, []);

  // Filter restaurants based on search
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
        Browse Restaurants
      </h1>

      <input
        type="text"
        placeholder="Search restaurants..."
        className="w-full p-2 mb-4 border rounded-md focus:ring-red-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
}
