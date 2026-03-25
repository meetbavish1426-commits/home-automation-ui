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
    <div style={styles.card}>
      <h3>{device.name}</h3>
      <p>Status: 
        <span style={{ color: device.status ? "#22c55e" : "#ef4444" }}>
          {device.status ? " ON" : " OFF"}
        </span>
      </p>

      <button
        onClick={() => toggleDevice(device.id)}
        style={{
          ...styles.button,
          background: device.status ? "#ef4444" : "#22c55e",
        }}
      >
        Turn {device.status ? "OFF" : "ON"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    maxwidth: "220px",
    width: "100%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
  },
  button: {
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
};

export default DeviceCard;
