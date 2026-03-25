function Sensors() {
  const sensors = [
    { name: "Temperature", value: "28°C", status: "normal" },
    { name: "Humidity", value: "60%", status: "normal" },
    { name: "Gas Sensor", value: "Safe", status: "safe" },
    { name: "Motion", value: "No Motion", status: "safe" },
  ];

  return (
    <>
    <div style={styles.page}> 
      <h1 style={styles.title}>📡 Sensor Monitoring</h1>

      <div style={styles.grid}>
        {sensors.map((s, i) => (
          <div key={i} style={styles.card}>
            <h3>{s.name}</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{s.value}</p>
            <span
              style={{
                ...styles.badge,
                background: s.status === "safe" ? "#22c55e" : "#ef4444",
              }}
            >
              {s.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

const styles = {
  page:{
    height: "100vh",
    paddingTop: "80px",
  }, 
  
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: " rgba(62, 184, 250, 0.5)",
    padding: "20px",
    borderRadius: "12px",
    width: "220px",
     boxShadow: "0 2px 6px rgba(255, 254, 254, 1)",
  },
  badge: {
    padding: "5px 10px",
    borderRadius: "6px",
    color: "white",
    fontSize: "12px",
  },
  title:{
  color:"white"
  }
};

export default Sensors;

