import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils"; // ensure this exists

function Signup() {
  const [signupInfo, setSignupInfo] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) return handleError("All fields are required");

    try {
      const res = await fetch("https://deploy-mern-app-1-api.vercel.app/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupInfo),
      });

      const result = await res.json();
      if (result.success) {
        handleSuccess(result.message);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(result?.error?.details?.[0]?.message || result.message);
      }
    } catch (err) {
      handleError("Something went wrong.");
    }
  };

  const handleGoogleSignup = () => {
    handleError("Google signup not implemented yet."); // placeholder
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Create an Account</h2>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              placeholder="Choose a strong password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition"
          >
            Sign up
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">or</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline font-semibold">
            Log in
          </Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
