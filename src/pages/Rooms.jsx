import { useContext, useState } from "react";
import { HomeContext } from "../context/HomeContext";
import axios from "axios";

function Rooms() {
  const { rooms, toggleRoom, toggleDevice, addRoom } =
    useContext(HomeContext);

  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [iotLight, setIotLight] = useState(false);

  const handleAddRoom = () => {
    if (!roomName.trim()) return;
    addRoom(roomName);
    setRoomName("");
    setShowModal(false);
  };
//   const handleIotLightToggle = async () => {
//   try {
//     const res = await axios.post("http://localhost:5000/api/light/toggle");
//     setIotLight(res.data.status);
//   } catch (error) {
//     console.log("Light toggle error:", error);
//   }
// };
const handleIotLightToggle = async () => {
  try {
    const newStatus = !iotLight;

    const res = await axios.post("http://localhost:5000/api/light/set", {
      status: newStatus,
    });

    setIotLight(res.data.status);
  } catch (error) {
    console.log("Light error:", error);
  }
};
  return (
    <>
      {/* HEADER */}
      <div style={styles.page}> 
      <div style={styles.header}>
        <h2 style={styles.title}>🏘 Room Automation</h2>
        <button style={styles.addBtn} onClick={() => setShowModal(true)}>
          + Add Room
        </button>
      </div>

       {/* iot light control */}
      <div style={styles.roomCard}>
  <h2>Living light </h2>

  <button
    onClick={handleIotLightToggle}
    style={{
      ...styles.deviceBtn,
      background: iotLight ? "#22c55e" : "#ef4444",
      padding: "12px 25px",
      marginTop: "10px",
    }}
  >
    {iotLight ? "LED ON" : "LED OFF"}
  </button>
</div>

      {/* ROOMS */}
      {rooms.map((room) => (
        <div key={room.id} style={styles.roomCard}>
          <div style={styles.roomHeader}>
            <h2>{room.name}</h2>
            <button
              onClick={() => toggleRoom(room.id)}
              style={{
                ...styles.roomBtn,
                background: room.devices.every((d) => d.on)
                  ? "#ef4444"
                  : "#22c55e",
              }}
            >
              {room.devices.every((d) => d.on)
                ? "TURN ALL OFF"
                : "TURN ALL ON"}
            </button>
          </div>

          <div style={styles.devices}>
            {room.devices.map((device) => (
              <div key={device.id} style={styles.device}>
                <span>{device.name}</span>
                <button
                  onClick={() => toggleDevice(room.id, device.id)}
                  style={{
                    ...styles.deviceBtn,
                    background: device.on ? "#22c55e" : "#ef4444",
                  }}
                >
                  {device.on ? "ON" : "OFF"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MODAL */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Add New Room</h2>
            <input
              placeholder="Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              style={styles.input}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={styles.saveBtn} onClick={handleAddRoom}>
                Add
              </button>
              <button
                style={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

 const styles = {
  page: {
    minHeight: "100vh",
    padding: "110px 24px 40px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    boxSizing: "border-box",
  },

  header: {
    maxWidth: "1200px",
    margin: "0 auto 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
  },

  title: {
    color: "white",
    fontSize: "clamp(24px, 4vw, 38px)",
    margin: 0,
  },

  addBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
    width: "auto",
  },

  roomCard: {
    maxWidth: "1200px",
    margin: "0 auto 24px",
    background: "rgba(62, 184, 250, 0.18)",
    padding: "24px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    boxSizing: "border-box",
  },

  roomHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "18px",
  },

  roomTitle: {
    margin: 0,
    fontSize: "26px",
    color: "#ffffff",
  },

  roomBtn: {
    border: "none",
    color: "white",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
    width: "auto",
    minWidth: "150px",
  },

  devices: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
  },

  device: {
    background: "white",
    padding: "18px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },

  deviceBtn: {
    border: "none",
    color: "white",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    width: "100%",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    zIndex: 999,
  },

  modal: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "350px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    boxSizing: "border-box",
  },

  saveBtn: {
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    flex: 1,
  },

  cancelBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    flex: 1,
  },
};
export default Rooms;
