"use client"; // Add this line to mark the file as a client-side component

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13+

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send request to the backend API
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      // If successful, you can redirect or store authentication data
      alert(response.data.message);
      // For example, redirect to the dashboard
      router.push("/dashboard");

      // Optionally, store JWT in localStorage or cookies
      localStorage.setItem("token", response.data.token); // or use cookies
    } catch (error: any) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h1 style={{ textAlign: "center", color: "black" }}>
            Log In To <span style={{ color: "#1D4ED8" }}>FileMint</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Show error message if credentials are invalid */}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button
                type="submit"
                style={{
                  padding: "12px 20px",
                  backgroundColor: "#1D4ED8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                Log In
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <p>
                Don't have an account?{" "}
                <Link href="/signup" style={{ color: "#1D4ED8" }}>
                  Create Account
                </Link>
              </p>
            </div>
          </form>

          <div style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#1D4ED8",
                border: "1px solid #1D4ED8",
                padding: "10px 20px",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Continue with Google
            </button>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#1D4ED8",
                border: "1px solid #1D4ED8",
                padding: "10px 20px",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
