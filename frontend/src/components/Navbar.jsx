// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useAuth();

//   return (
//     <nav className=" text-white shadow-md p-3">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-red-500">
//           CraveCart
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6">
//           <Link to="/" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">Home</Link>

//           {/* Show dashboard links based on user role */}
//           {user?.role === "user" && (
//             <>
//             <Link to="/user-dashboard" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">
//               Dashboard
//             </Link>
//             <Link to="/cart" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">Cart</Link>
//             </>
            
//           )}

//           {user?.role === "restaurant" && (
//             <Link to="/restaurant-dashboard" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">
//               Restaurant Panel
//             </Link>
//           )}

//           {/* Auth Buttons */}
//           {user ? (
//             <button 
//               onClick={logout} 
//               className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link to="/login" className=" bg-white text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">Login</Link>
//               <Link 
//                 to="/register" 
//                 className="bg-white text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="text-white shadow-md p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          CraveCart
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">Home</Link>

          {/* Show dashboard links based on user role */}
          {user?.role === "user" && (
            <>
              <Link to="/user-dashboard" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">
                Dashboard
              </Link>
              <Link to="/cart" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">
                Cart
              </Link>
              <Link to="/orders" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">
                My Orders
              </Link>
            </>
          )}

          {user?.role === "restaurant" && (
            <Link to="/restaurant-dashboard" className="text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition duration-300">
              Restaurant Panel
            </Link>
          )}

          {/* Auth Buttons */}
          {user ? (
            <button 
              onClick={logout} 
              className="bg-red-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-red-500 border border-red-500 px-4 py-2 rounded transition duration-300 hover:bg-red-600 hover:text-white">
                Login
              </Link>
              <Link to="/register" className="text-red-500 border border-red-500 px-4 py-2 rounded transition duration-300 hover:bg-red-600 hover:text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
