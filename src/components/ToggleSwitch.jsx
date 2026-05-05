function ToggleSwitch({ isOn, onToggle }) {
  return (
    <div
      className="toggle-switch"
      onClick={onToggle}
      style={{
        ...styles.container,
        backgroundColor: isOn ? "#10b981" : "#6b7280",
      }}
    >
      <div
        className="toggle-knob"
        style={{
          ...styles.knob,
          transform: isOn ? "translateX(24px)" : "translateX(2px)",
        }}
      />
      <span style={styles.label}>
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  );
}

const styles = {
  container: {
    width: "50px",
    height: "28px",
    borderRadius: "14px",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 6px",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
  },

  knob: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },

  label: {
    fontSize: "10px",
    fontWeight: "600",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    zIndex: 1,
  },
};

// Add hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .toggle-switch:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .toggle-switch:active .toggle-knob {
    transform: scale(0.9);
  }
`;
document.head.appendChild(styleSheet);
