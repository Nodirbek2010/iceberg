// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const validUsername = "admin";
  const validPassword = "123";

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Initialize useNavigate hook
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (username === "" || password === "") {
      toast.error("Please fill in both fields.", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (username === validUsername && password === validPassword) {
      toast.success("Login Successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Redirect to "/admin/home" after a short delay
      setTimeout(() => {
        navigate("/admin/home");
      }, 2000); // 2-second delay to let the toast finish
    } else {
      toast.error("Username or password is incorrect.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Tizimga Kirish
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold mb-2"
            >
              Foydalanuvchi nomi
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Parol
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Kirish
          </button>
        </form>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
