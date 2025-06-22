import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { handleError, handleSuccess } from "../utils";
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) return handleError("All fields required");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();

      localStorage.setItem("token", token);
      localStorage.setItem("loggedInUser", user.displayName || "User");
      localStorage.setItem("userId", user.uid);

      handleSuccess("Login successful");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      handleError("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      localStorage.setItem("token", token);
      localStorage.setItem("loggedInUser", user.displayName || "Google User");
      localStorage.setItem("userId", user.uid);

      handleSuccess(`Welcome, ${user.displayName || "Google User"}!`);
      navigate("/");
    } catch (error) {
      handleError("Google login failed: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 px-4 text-white">
      <div className="bg-gray-900 border border-gray-700 shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">Welcome Back</h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-400 text-sm">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <FcGoogle size={22} />
          <span className="text-sm">Continue with Google</span>
        </button>

        <p className="mt-5 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
