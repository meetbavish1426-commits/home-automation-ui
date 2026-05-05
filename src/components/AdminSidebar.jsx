import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Contact Messages", path: "/admin/contacts" },
    { name: "Users", path: "/admin/users" },
  ];

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#0A2540",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "30px", color: "#f97316" }}>Admin Panel</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "12px 15px",
                borderRadius: "8px",
                background: isActive ? "#f97316" : "transparent",
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}