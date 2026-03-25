// import { useContext } from "react";
// import { HomeContext } from "../context/HomeContext";

// function Rooms() {
//   const { rooms, toggleRoom } = useContext(HomeContext);

//   return (
//     <>
//       <h1>🏘 Room Control</h1>

//       {rooms.map((room) => (
//         <div key={room.id} style={styles.room}>
//           <h3>{room.name}</h3>
//           <button
//             onClick={() => toggleRoom(room.id)}
//             style={{
//               ...styles.btn,
//               background: room.on ? "#22c55e" : "#ef4444",
//             }}
//           >
//             {room.on ? "ALL ON" : "ALL OFF"}
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// const styles = {
//   room: {
//     background: "#f1f5f9",
//     padding: "15px",
//     marginBottom: "15px",
//     borderRadius: "10px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },import { useContext } from "react";
// import { HomeContext } from "../context/HomeContext";

// function Rooms() {
//   const { rooms, toggleRoom, toggleDevice } = useContext(HomeContext);

//   return (
//     <>
//       <h1>🏘 Room Automation</h1>

//       {rooms.map((room) => (
//         <div key={room.id} style={styles.roomCard}>
//           <div style={styles.roomHeader}>
//             <h2>{room.name}</h2>
//             <button
//               onClick={() => toggleRoom(room.id)}
//               style={{
//                 ...styles.roomBtn,
//                 background: room.devices.every((d) => d.on)
//                   ? "#ef4444"
//                   : "#22c55e",
//               }}
//             >
//               {room.devices.every((d) => d.on)
//                 ? "TURN ALL OFF"
//                 : "TURN ALL ON"}
//             </button>
//           </div>

//           <div style={styles.devices}>
//             {room.devices.map((device) => (
//               <div key={device.id} style={styles.device}>
//                 <span>{device.name}</span>
//                 <button
//                   onClick={() => toggleDevice(room.id, device.id)}
//                   style={{
//                     ...styles.deviceBtn,
//                     background: device.on ? "#22c55e" : "#ef4444",
//                   }}
//                 >
//                   {device.on ? "ON" : "OFF"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// const styles = {
//   roomCard: {
//     background: "#f8fafc",
//     padding: "20px",
//     marginBottom: "20px",
//     borderRadius: "14px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//   },
//   roomHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "15px",
//   },
//   roomBtn: {
//     border: "none",
//     color: "white",
//     padding: "8px 14px",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
//   devices: {
//     display: "flex",
//     gap: "15px",
//     flexWrap: "wrap",
//   },
//   device: {
//     background: "white",
//     padding: "10px 15px",
//     borderRadius: "10px",
//     minWidth: "120px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   deviceBtn: {
//     border: "none",
//     color: "white",
//     padding: "5px 10px",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
// };

// export default Rooms;

import { useContext, useState } from "react";
import { HomeContext } from "../context/HomeContext";

function Rooms() {
  const { rooms, toggleRoom, toggleDevice, addRoom } =
    useContext(HomeContext);

  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState("");

  const handleAddRoom = () => {
    if (!roomName.trim()) return;
    addRoom(roomName);
    setRoomName("");
    setShowModal(false);
  };

  return (
    <>
      {/* HEADER */}
      <div style={styles.page}> 
      <div style={styles.header}>
        <h1 style={styles.title}>🏘 Room Automation</h1>
        <button style={styles.addBtn} onClick={() => setShowModal(true)}>
          + Add Room
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
    height: "100vh",
    paddingTop: "80px",
  },
  
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
     
    padding:"15px 15px ",
    
  },
  addBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "5px 5px",
    borderRadius: "5px",
    cursor: "pointer",
    height:"50px",
    display: "center",
    width: "auto",
  },
  roomCard: {
    background: " rgba(62, 184, 250, 0.5)",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "14px",
    boxShadow: "0 2px 6px rgba(255, 254, 254, 1)",
        width: "auto",
  },
  roomHeader: {
    display: "flex",
    justifyContent: "space-between",
     
  },
  roomBtn: {
    border: "none",
    color: "white",
    padding: "08px 14px",
    borderRadius: "8px",
        width: "auto",
  },
  devices: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
        width: "auto",
  },
  device: {
    background: "white",
    padding: "10px 15px",
    borderRadius: "10px",
    minWidth: "120px",
    display: "flex",
    justifyContent: "space-between",
    
  },
  deviceBtn: {
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "6px",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    width: "300px",
  },
  input: {
    width: "90%",
    padding:"15px", 
    marginBottom: "15px",
  },
  saveBtn: {
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
  },
  cancelBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
  },
  title:{
    color:"white",
    marginbottom:"50px",
    display:"flex",
    
  }
};

export default Rooms;
