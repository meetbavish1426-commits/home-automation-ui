import React from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          backgroundColor: "#f5f7fb",
          padding: "30px",
          color: "#111",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <p>Welcome to Admin Panel</p>
          <p>Use sidebar to open contact messages.</p>
        </div>
      </div>
    </div>
  );
}

 