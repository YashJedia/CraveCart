import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">Crave Cart</h1>
      <div>
        {user ? (
          <>
            <span className="text-gray-700 mr-4">Welcome, {user.name}</span>
            <button onClick={logout} className="px-4 py-2 bg-gray-500 text-white rounded-md">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 bg-red-500 text-white rounded-md mx-2">Login</Link>
            <Link to="/register" className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-600 hover:text-white rounded-md">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
