function Alerts() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🚨 Alerts</h1>

      <div style={{ background:"#7f1d1d",padding:"10px",borderRedius:"8px" }}>
        ⚠️ Gas detected in Kitchen 
      </div>
      <br></br>
      <div style={{ background:"rgba(255, 166, 0, 0.96)" , padding:"10px",borderRedius:"8px"}}>
        🚪 Door opened
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    paddingTop: "80px",
    background: "transparent",
  },
  title: {
    marginBottom: "20px",
    color: "rgba(255, 254, 254, 1)",
  },
  alertCard: {
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    fontWeight: "bold",
    boxShadow: " 0 2px 6px rgba(255, 254, 254, 1)",
  },
  warning: {
    background: "#ef4444",
    color: "white",
  },
  info: {
    background: "#f97316",
    color: "white",
     
  },
};

export default Alerts;

 

 

