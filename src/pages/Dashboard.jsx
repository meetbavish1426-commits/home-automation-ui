import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
 

function Dashboard() {
  const { rooms = [] } = useContext(HomeContext);

  const totalDevices = rooms.reduce(
    (sum, room) => sum + room.devices.length,
    0
  );

  const devicesOn = rooms.reduce(
    (sum, room) => sum + room.devices.filter((d) => d.on).length,
    0
  );

  return (
    <>
    <div style={styles.page}> 
    <div className="h1"> 
      <h1 style={styles.title} >🏠 Smart Home Dashboard</h1>
      </div>
      

      <div style={styles.stats}>
        <Stat title="Rooms" value={rooms.length} />
        <Stat title="Total Devices" value={totalDevices} />
        <Stat title="Devices ON" value={devicesOn} />
        <Stat title="Devices OFF" value={totalDevices - devicesOn} />
      </div>
      
     </div> 
    </>
  );
}

function Stat({ title, value }) {
  return (
    
    <div style={styles.card}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
    
    
  );
}

const styles = {
  page: {
    height: "100vh",
    paddingTop: "80px",
  },
  stats: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    
  },
  card: {
    background: "rgba(62, 184, 250, 0.5)",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(255, 254, 254, 1)",
    // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    display: "center",
    flex: 1,
  },
  title:{
    color:"white"
  },
  
};

 export default Dashboard;
 

