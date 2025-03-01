// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UserDashboard from "./pages/UserDashboard";
// import RestaurantDashboard from "./pages/RestaurantDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./pages/Home"
// import RestaurantList from "./pages/RestaurantList"
// import RestaurantMenu from "./pages/RestaurantMenu"

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
 
//          {/* Default Home Page */}
//          <Route path="/" element={<Home />} />

//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/restaurants" element={<RestaurantList />} />
//         <Route path="/restaurant/:id/menu" element={<RestaurantMenu />} />
     

//         {/* Protected Routes */}
//         <Route 
//           path="/user-dashboard" 
//           element={
//             <ProtectedRoute role="user">
//               <UserDashboard />
//             </ProtectedRoute>
//           } 
//         />
//         <Route 
//           path="/restaurant-dashboard" 
//           element={
//             <ProtectedRoute role="restaurant"> 
//               <RestaurantDashboard />
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;

// Location: frontend/src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import OrdersPage from "./pages/OrdersPage";
// import AdminDashboard from "./pages/AdminDashboard";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import { useAuth } from "./context/AuthContext";

// const App = () => {
//   const { user } = useAuth();

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/orders" element={user ? <OrdersPage /> : <LoginPage />} />
//         <Route path="/admin" element={user?.isAdmin ? <AdminDashboard /> : <HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// Location: frontend/src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import RestaurantList from "./pages/RestaurantList";
import RestaurantMenu from "./pages/RestaurantMenu";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<Home />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurant/:id/menu" element={<RestaurantMenu />} />

        {/* Protected Routes */}
        <Route 
          path="/user-dashboard" 
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/restaurant-dashboard" 
          element={
            <ProtectedRoute role="restaurant"> 
              <RestaurantDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cart" 
          element={<CartPage />} 
        />
        <Route 
          path="/checkout" 
          element={<CheckoutPage />} 
        />
        <Route 
          path="/orders" 
          element={user ? <OrdersPage /> : <Login />} 
        />
      </Routes>
    </>
  );
}

export default App;
