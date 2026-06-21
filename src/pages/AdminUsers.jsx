import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  // DELETE FUNCTION
  const deleteUser = (id) => {
    if (!window.confirm("Are you sure to delete this user?")) return;

    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then(() => {
        alert("User deleted");
        fetchUsers(); // refresh list
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ display: "flex", background: "#ffffff" }}>
      
      <AdminSidebar />

      <div style={{ padding: "20px", width: "100%", background: "#ffffff" }}>
        <h2 style={{ marginBottom: "20px" }}>All Users</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
          }}
        >
          <thead>
            <tr style={{ background: "#f97316", color: "white" }}>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Password</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td style={styles.td}>{user.username}</td>
                <td style={styles.td}>{user.phone}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.password}</td>
               

                <td style={styles.td}>
                  <button
                    onClick={() => deleteUser(user._id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// STYLES
const styles = {
  th: {
    padding: "12px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
};