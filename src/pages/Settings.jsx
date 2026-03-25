function Settings() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>⚙️ Settings</h1>

      <div style={styles.settingCard}>
        🔔 Notifications
        <span style={styles.value}>ON</span>
      </div>

      <div style={styles.settingCard}>
        🌙 Dark Mode
        <span style={styles.value}>OFF</span>
      </div>

      <div style={styles.settingCard}>
        🔒 Security System
        <span style={styles.value}>ENABLED</span>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    paddingTop: "80px",
    backgroundColor: "transparent",
    
  },
  title: {
    marginBottom: "20px",
    color:"white",
  },
  settingCard: {
    backgroundColor: " rgba(62, 184, 250, 0.5)",
    
    color: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
     boxShadow: "0 2px 6px rgba(255, 254, 254, 1)",
  },
  value: {
    background: "#1e40af",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
  },
};

export default Settings;

