import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await API.get(`/api/restaurant/${id}`);
        setRestaurant(res.data);
        setMenu(res.data.menu);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, [id]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {restaurant ? (
        <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-red-500">{restaurant.name}</h2>
          <p className="text-gray-600">{restaurant.category}</p>
          
          <h3 className="text-xl font-semibold mt-4">Menu</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menu.map((item) => (
              <div key={item._id} className="p-4 border rounded-lg bg-white shadow">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <p className="text-gray-600">${item.price}</p>
                <button
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading menu...</p>
      )}
    </div>
  );
}
