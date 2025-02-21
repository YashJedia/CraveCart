import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", formData);
      login(data.token, data.user);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert( err, "Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-red-500 text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 border rounded-md" type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input className="w-full p-3 border rounded-md" type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button className="w-full p-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">Login</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          New here? <button onClick={() => navigate("/register")} className="text-red-500">Sign up</button>
        </p>
      </div>
    </div>
  );
}
