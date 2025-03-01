import { useEffect, useState } from "react";
import API from "../utils/api";

export default function RestaurantDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch restaurant orders
    const fetchOrders = async () => {
      try {
        const res = await API.get("/api/orders");
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold text-red-500">Restaurant Dashboard</h2>
      <p className="text-gray-600">Manage your orders and menu.</p>

      <h3 className="mt-6 text-xl font-semibold">Orders</h3>
      <div className="bg-white p-4 shadow rounded-lg mt-2">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="border-b py-2">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          ))
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    </div>
  );
}
