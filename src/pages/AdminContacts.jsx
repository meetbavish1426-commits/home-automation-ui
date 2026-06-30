import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const API_URL = "https://backend-seven-green-81.vercel.app";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/admin/contacts`);
      const contactsData = await res.json();

      console.log("Fetched contacts:", contactsData);

      setContacts(contactsData.contacts || []);
    } catch (error) {
      console.log("Error fetching data:", error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // removed unused user management (no users on this page)

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
  

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
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