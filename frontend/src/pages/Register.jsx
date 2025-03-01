
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", formData);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-red-500 text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 border rounded-md" type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input className="w-full p-3 border rounded-md" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="w-full p-3 border rounded-md" type="password" name="password" placeholder="Password" onChange={handleChange} required />

          {/* Role Selection */}
          <label className="block text-gray-600">Register as:</label>
          <select name="role" onChange={handleChange} className="w-full p-3 border rounded-md">
            <option value="user">Customer</option>
            <option value="restaurant">Restaurant Owner</option>
          </select>

          <button className="w-full p-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">Sign Up</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <button onClick={() => navigate("/login")} className="text-red-500">Login</button>
        </p>
      </div>
    </div>
  );
}
