import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password)
      return handleError("All fields are required");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        skillsOffered: [],
        skillsWanted: [],
        createdAt: new Date()
      });

      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("loggedInUser", name);
      localStorage.setItem("userId", user.uid);

      handleSuccess("Account created successfully");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error("Signup Error:", err);
      handleError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName || "Google User",
          email: user.email,
          skillsOffered: [],
          skillsWanted: [],
          createdAt: new Date()
        });
      }

      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("loggedInUser", user.displayName || "Google User");
      localStorage.setItem("userId", user.uid);

      handleSuccess("Signed up with Google");
      navigate("/");
    } catch (error) {
      console.error("Google Signup Error:", error);
      handleError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 text-white">
      <div className="bg-gray-900 border border-gray-700 shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-400 text-sm">or</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <FcGoogle size={22} />
          <span className="text-sm">Continue with Google</span>
        </button>

        <p className="mt-5 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-400 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
}

// NOTE: If you see a "transport error" in the console but signup works and data is stored in Firebase,
// this is usually a warning from Firebase or the browser and can be ignored unless it blocks functionality.

// If you get a "Bad Gateway" error on login, check your login code for any API calls to a backend server.
// Make sure your backend is running and the endpoint URL is correct. If you use only Firebase Auth, you should not get a 502 error.

export default Signup;
