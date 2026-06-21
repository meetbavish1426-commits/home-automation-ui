import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const API_URL =
  "https://backend-nxrhj9qpz-meetbavish1426-1401s-projects.vercel.app";

export default function AdminContacts() {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const [usersRes, contactsRes] = await Promise.all([
        fetch(`${API_URL}/api/users`),
        fetch(`${API_URL}/api/contact`),
      ]);

      const usersData = await usersRes.json();
      const contactsData = await contactsRes.json();

      console.log("Fetched users:", usersData);
      console.log("Fetched contacts:", contactsData);

      setUsers(Array.isArray(usersData) ? usersData : []);
      setContacts(Array.isArray(contactsData) ? contactsData : []);
    } catch (error) {
      console.log("Error fetching data:", error);
      setUsers([]);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/users/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      alert(data.message);

      fetchData();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      alert(data.message);

      fetchData();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#f5f7fb",
          color: "#111",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Admin Panel</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* USERS SECTION */}
            <h2 style={{ marginBottom: "15px" }}>Registered Users</h2>

            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              users.map((item) => (
                <div
                  key={item._id}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "20px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3>{item.username}</h3>

                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>

                  <p>
                    <strong>Phone:</strong> {item.phone}
                  </p>

                  <p>
                    <strong>BHK:</strong> {item.bhk}
                  </p>

                  <button
                    onClick={() => handleDeleteUser(item._id)}
                    style={{
                      marginTop: "10px",
                      padding: "10px 14px",
                      border: "none",
                      borderRadius: "8px",
                      backgroundColor: "#f97316",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Delete User
                  </button>
                </div>
              ))
            )}

            {/* CONTACT SECTION */}
            <h1 style={{ marginBottom: "15px", marginTop: "40px" }}>
              Contact Messages
            </h1>

            {contacts.length === 0 ? (
              <p>No messages found</p>
            ) : (
              contacts.map((item) => (
                <div
                  key={item._id}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "20px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3>{item.name}</h3>

                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>

                  <p>
                    <strong>Subject:</strong> {item.subject}
                  </p>

                  <p>
                    <strong>Message:</strong> {item.message}
                  </p>

                  <button
                    onClick={() => handleDeleteContact(item._id)}
                    style={{
                      marginTop: "10px",
                      padding: "10px 14px",
                      border: "none",
                      borderRadius: "8px",
                      backgroundColor: "#f97316",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Delete Message
                  </button>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}    
  
 


// http://localhost:5173/admin/contacts