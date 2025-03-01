// import { useEffect, useState } from "react";
// import API from "../utils/api";

// export default function UserDashboard() {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     // Fetch all restaurants
//     const fetchRestaurants = async () => {
//       try {
//         const res = await API.get("/api/restaurants");
//         setRestaurants(res.data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
//     };
//     fetchRestaurants();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h2 className="text-3xl font-semibold text-red-500">Welcome to Crave Cart</h2>
//       <p className="text-gray-600">Choose from the best restaurants near you.</p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         {restaurants.map((restaurant) => (
//           <div key={restaurant._id} className="bg-white p-4 shadow rounded-lg">
//             <h3 className="text-xl font-semibold">{restaurant.name}</h3>
//             <p className="text-gray-600">{restaurant.description}</p>
//             <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
//               View Menu
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-6">User Dashboard</h1>
      <Link
        to="/restaurants"
        className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600"
      >
        Browse Restaurants 🍽️
      </Link>
    </div>
  );
}
