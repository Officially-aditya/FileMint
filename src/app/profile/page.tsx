// src/app/settings/page.tsx
'use client';
import React, { useState, FormEvent } from "react";

const SettingsPage: React.FC = () => {
  // 1) include 'signup'
  const [activeTab, setActiveTab] = useState<"account" | "subscription" | "settings" | "signup">("account");

  const SidebarItem = (label: string, key: "account" | "subscription" | "settings" | "signup") => (
    <div
      onClick={() => setActiveTab(key)}
      style={{
        width: "80%",
        height: "30px",
        padding: "1rem 2rem",
        cursor: "pointer",
        fontWeight: 600,
        color: "#1e1e1e",
        backgroundColor: activeTab === key ? "#e6e8f2" : "transparent",
        borderLeft: activeTab === key ? "4px solid #1e2b50" : "none",
      }}
    >
      {label}
    </div>
  );

  // stub for signup submission
  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    alert("Signed up!");
  };

  return (
    <div style={{ display: "flex", fontFamily: "Georgia, serif", height: "100vh", backgroundColor: "#fdf9f7" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "360px",
          backgroundColor: "#f7f7f9",
          borderRight: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "3rem", color: "#1e1e2f" }}>
          FileMint
        </div>

        {/* Profile Image */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#1e2b50",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            marginBottom: "2rem",
          }}
        >
          OB
        </div>

        {SidebarItem("Account", "account")}
        {SidebarItem("Subscription", "subscription")}
        {SidebarItem("Settings", "settings")}
        {SidebarItem("Sign Up", "signup") /* added */}

        {/* Logout Button */}
        <button
          style={{
            marginTop: "auto",
            width: "80%",
            padding: "1rem 2rem",
            backgroundColor: "#e63946",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            border: "none",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "3rem" }}>
        {activeTab === "account" && (
          <>
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "1rem" }}>Account</div>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <img
                src="/profile-icon.png"
                alt="Profilepic"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "1rem",
                }}
              />
              <div style={{ color: "#000", fontSize: "16px", cursor: "pointer" }}>✏️ Update profile</div>
            </div>

            <div>
              <div style={{ fontWeight: 600, marginTop: "1rem" }}>Email</div>
              <div style={{ margin: "4px 0" }}>oliviabennet123@gmail.com</div>
              <div style={{ color: "#304ffe", textDecoration: "underline", cursor: "pointer" }}>Change</div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", maxWidth: "400px" }}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                style={{
                  padding: "15px 10px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                  marginBottom: "0.8rem",
                }}
              />
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  padding: "15px 10px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                  marginBottom: "0.8rem",
                }}
              />
              <button
                style={{
                  backgroundColor: "#1e2b50",
                  color: "#fff",
                  padding: "15px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                }}
              >
                Save Changes
              </button>
            </div>

            <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "2rem" }}>Change Password</div>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", maxWidth: "400px" }}>
              {["Current Password", "New Password", "Repeat Password"].map((label, index) => (
                <div key={index} style={{ position: "relative", marginBottom: "1rem" }}>
                  <input
                    type="password"
                    placeholder={label}
                    style={{
                      padding: "15px 12px",
                      fontSize: "14px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      width: "100%",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    👁️
                  </span>
                </div>
              ))}
              <button
                style={{
                  backgroundColor: "#1e2b50",
                  color: "#fff",
                  padding: "15px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                }}
              >
                Save Changes
              </button>
            </div>
          </>
        )}

        {activeTab === "subscription" && (
          <>
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "1.5rem" }}>Subscriptions</div>
            <div
              style={{
                color: "#304ffe",
                textDecoration: "underline",
                fontWeight: 600,
                marginBottom: "1.5rem",
                cursor: "pointer",
              }}
            >
              Upgrade to Premium 💎
            </div>
            {[
              "Full access to all tools in FileMint",
              "Unlimited storage for all your files",
              "Work on Web, Mobile and Desktop",
              "Convert scanned PDF to Word with ORC, Sign with digital signatures, audio to PDF, PDF language Converter, API Generator, Bulk PDF Merge",
              "No Ads.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "18px" }}>
                <span style={{ color: "green", fontSize: "20px", marginRight: "10px" }}>✓</span> {item}
              </div>
            ))}
          </>
        )}

        {activeTab === "settings" && (
          <>
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "1.5rem" }}>Preferences</div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontWeight: 600, fontSize: "18px" }}>Language</div>
              <div style={{ margin: "4px 0" }}>English</div>
              <div style={{ color: "#304ffe", textDecoration: "underline", cursor: "pointer" }}>Change</div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontWeight: 600, fontSize: "18px" }}>Email Notifications</div>
              <div style={{ margin: "4px 0" }}>
                No longer wish to receive promotional emails from us? You can do so here.
              </div>
              <div style={{ color: "red", cursor: "pointer" }}>Disable Emails</div>
            </div>

            <div>
              <div style={{ fontWeight: 600, fontSize: "18px" }}>Manage Account</div>
              <div style={{ color: "red", cursor: "pointer", marginTop: "4px" }}>Delete Account</div>
            </div>
          </>
        )}

        {/* Sign Up panel */}
        {activeTab === "signup" && (
          <>
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "1.5rem" }}>Create Your Account</div>
            <form
              onSubmit={handleSignUp}
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "400px",
                gap: "1.5rem",
              }}
            >
              {[
                { name: "firstName", label: "First Name", type: "text" },
                { name: "lastName", label: "Last Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map(({ name, label, type }) => (
                <div key={name} style={{ position: "relative" }}>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    required
                    style={{
                      width: "100%",
                      padding: "20px 12px 8px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                    }}
                  />
                  <label
                    htmlFor={name}
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      fontSize: "12px",
                      color: "#555",
                      pointerEvents: "none",
                    }}
                  >
                    {label}
                  </label>
                </div>
              ))}

              <div style={{ position: "relative" }}>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  style={{
                    width: "100%",
                    padding: "20px 12px 8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />
                <label
                  htmlFor="password"
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    fontSize: "12px",
                    color: "#555",
                    pointerEvents: "none",
                  }}
                >
                  Password
                </label>
                <small style={{ color: "#888", fontSize: "12px", display: "block" }}>
                  Must be at least 8 characters
                </small>
              </div>

              <label style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                <input type="checkbox" required style={{ marginRight: "8px" }} />
                I agree to the{" "}
                <a href="#" style={{ color: "#304ffe", textDecoration: "underline", marginLeft: "4px" }}>
                  Terms & Conditions
                </a>
              </label>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg,#1e2b50,#2d3a6b)",
                  color: "#fff",
                  padding: "15px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Sign Up Now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
