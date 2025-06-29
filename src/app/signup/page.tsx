"use client";
import React from "react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      {/* Centered Signup Form Section */}
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
            Create a <span style={{ color: "#1D4ED8" }}>FileMint</span> Account
          </h1>

          <form>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
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
              />
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
              />
              <small
                style={{
                  color: "#888",
                  fontSize: "12px",
                  display: "block",
                  marginTop: "5px",
                }}
              >
                Must be at least 8 characters
              </small>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "14px" }}>
                <input type="checkbox" required style={{ marginRight: "8px" }} />
                I agree to the{" "}
                <a href="#" style={{ color: "#1D4ED8", textDecoration: "underline" }}>
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#1D4ED8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <p>
                Already have an account?{" "}
                <Link href="/login" style={{ color: "#1D4ED8" }}>
                  Log In
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

export default SignUpPage;
