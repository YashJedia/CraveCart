import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{restaurant.name}</h2>
          <p className="text-gray-500">{restaurant.category}</p>
          <p className="text-gray-600 font-semibold">⭐ {restaurant.rating} / 5</p>
        </div>
      </div>
    </Link>
  );
}
