// import ToggleSwitch from "./ToggleSwitch";

// function DeviceCard({ device, toggleDevice }) {
//   return (
//     <div style={styles.card}>
//       <h4>{device.name}</h4>
//       <p>Status: {device.status ? "ON" : "OFF"}</p>
//       <ToggleSwitch
//         isOn={device.status}
//         onToggle={() => toggleDevice(device.id)}
//       />
//     </div>
//   );
// }

// const styles = {
//   card: {
//     border: "1px solid #ccc",
//     padding: "15px",
//     borderRadius: "8px",
//     width: "200px",
//   },
// };

// export default DeviceCard;


function DeviceCard({ device, toggleDevice }) {
  return (
    <div className="device-card" style={styles.card}>
      <div style={styles.iconContainer}>
        <span style={styles.icon}>
          {device.type === "light" ? "💡" :
           device.type === "fan" ? "🌪️" :
           device.type === "ac" ? "❄️" :
           device.type === "tv" ? "📺" :
           device.type === "speaker" ? "🔊" : "📱"}
        </span>
      </div>

      <div style={styles.content}>
        <h3 style={styles.title}>{device.name}</h3>
        <div style={styles.statusContainer}>
          <span style={styles.statusLabel}>Status:</span>
          <span style={{
            ...styles.status,
            color: device.status ? "#10b981" : "#ef4444",
            backgroundColor: device.status ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)"
          }}>
            {device.status ? "ON" : "OFF"}
          </span>
        </div>
      </div>

      <button
        className="device-button"
        onClick={() => toggleDevice(device.id)}
        style={{
          ...styles.button,
          background: device.status
            ? "linear-gradient(135deg, #ef4444, #dc2626)"
            : "linear-gradient(135deg, #10b981, #059669)",
        }}
      >
        <span style={styles.buttonText}>
          {device.status ? "Turn OFF" : "Turn ON"}
        </span>
        <span style={styles.buttonIcon}>
          {device.status ? "⏹️" : "▶️"}
        </span>
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    padding: "24px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "280px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },

  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },

  icon: {
    fontSize: "3rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
  },

  content: {
    textAlign: "center",
    marginBottom: "20px",
  },

  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    margin: "0 0 12px 0",
  },

  statusContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },

  statusLabel: {
    fontSize: "0.9rem",
    color: "#6b7280",
    fontWeight: "500",
  },

  status: {
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  button: {
    width: "100%",
    border: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    position: "relative",
    overflow: "hidden",
  },

  buttonText: {
    zIndex: 2,
  },

  buttonIcon: {
    fontSize: "1rem",
    zIndex: 2,
  },
};

// Add hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .device-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .device-card:hover .device-button {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }

  .device-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s;
  }

  .device-card:hover::before {
    left: 100%;
  }
`;
document.head.appendChild(styleSheet);

export default DeviceCard;
