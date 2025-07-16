"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"account" | "subscription" | "settings">("account");

  const [userData, setUserData] = useState({
    firstName: "Olivia",
    lastName: "Bennet",
    email: "oliviabennet123@gmail.com",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData({
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          email: response.data.user.email,
        });
      } catch (error) {
        console.warn("Using fallback boilerplate data due to error:", error);
        // fallback to default boilerplate data (already set)
      }
    };

    fetchData();
  }, []);


  const SidebarItem = (label: string, key: "account" | "subscription" | "settings") => (
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
        <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "3rem", color: "#1e1e2f" }}>FileMint</div>

        {/* Profile Image */}
                <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#1e2b50',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            marginBottom: '2rem',
          }}
        >
          OB
        </div>


        {SidebarItem("Account", "account")}
        {SidebarItem("Subscription", "subscription")}
        {SidebarItem("Settings", "settings")}

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login"; // or use a router.push if you're using next/navigation
          }}
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

            {/* Inside Account Tab */}
            <div>
              <div style={{ fontWeight: 600, marginTop: "1rem" }}>Email</div>
              <div style={{ margin: "4px 0" }}>{userData.email}</div>
              <div style={{ color: "#304ffe", textDecoration: "underline", cursor: "pointer" }}>Change</div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", maxWidth: "400px" }}>
              <label>First Name</label>
              <input
                type="text"
                value={userData.firstName}
                placeholder="First Name"
                style={{
                  padding: "15px 10px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                  marginBottom: "0.8rem",
                }}
                readOnly
              />
              <label>Last Name</label>
              <input
                type="text"
                value={userData.lastName}
                placeholder="Last Name"
                style={{
                  padding: "15px 10px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                  marginBottom: "0.8rem",
                }}
                readOnly
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
            <div style={{ color: "#304ffe", textDecoration: "underline", fontWeight: 600, marginBottom: "1.5rem", cursor: "pointer" }}>
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
              <div style={{ margin: "4px 0" }}>No longer wish to receive promotional emails from us? You can do so here.</div>
              <div style={{ color: "red", cursor: "pointer" }}>Disable Emails</div>
            </div>

            <div>
              <div style={{ fontWeight: 600, fontSize: "18px" }}>Manage Account</div>
              <div style={{ color: "red", cursor: "pointer", marginTop: "4px" }}>Delete Account</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
