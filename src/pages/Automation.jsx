import { useState } from "react";

function Automation() {
  const [device, setDevice] = useState("Light");
  const [onTime, setOnTime] = useState("");
  const [offTime, setOffTime] = useState("");
  const [rules, setRules] = useState([]);

  const addRule = () => {
    if (!onTime || !offTime) {
      alert("Please select ON and OFF time");
      return;
    }

    const newRule = {
      id: Date.now(),
      device,
      onTime,
      offTime,
      enabled: true,
    };

    setRules([...rules, newRule]);
    setOnTime("");
    setOffTime("");
  };

  const toggleRule = (id) => {
    setRules(
      rules.map((rule) =>
        rule.id === id
          ? { ...rule, enabled: !rule.enabled }
          : rule
      )
    );
  };

  return ( 
    <div style={styles.page}>
    <div style={styles.container}>
      <h1 style={styles.title}>Automation & Scheduling</h1>

      {/* ADD AUTOMATION */}
      <div style={styles.card}>
        <h3>Add Automation Rule</h3>

        <div style={styles.row}>
          <label>Device</label>
          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          >
            <option>Light</option>
            <option>Fan</option>
            <option>AC</option>
          </select>
        </div>

        <div style={styles.row}>
          <label>ON Time</label>
          <input
            type="time"
            value={onTime}
            onChange={(e) => setOnTime(e.target.value)}
          />
        </div>

        <div style={styles.row}>
          <label>OFF Time</label>
          <input
            type="time"
            value={offTime}
            onChange={(e) => setOffTime(e.target.value)}
          />
        </div>

        <button style={styles.button} onClick={addRule}>
          ➕ Add Rule
        </button>
      </div>

      {/* RULE LIST */}
      <div style={styles.card}>
        <h3>Active Automation Rules</h3>

        {rules.length === 0 && <p>No automation added</p>}

        {rules.map((rule) => (
          <div key={rule.id} style={styles.rule}>
            <div>
              <strong>{rule.device}</strong>
              <p>
                ON: {rule.onTime} | OFF: {rule.offTime}
              </p>
            </div>

            <label style={styles.switch}>
              <input
                type="checkbox"
                checked={rule.enabled}
                onChange={() => toggleRule(rule.id)}
              />
              <span style={styles.slider}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

const styles = {
  page:{
    height: "100vh",
    paddingTop: "80px",
  },
  
  container: {
    maxWidth: "700px",
    margin: "auto",
  },
  card: {
    background: " rgba(62, 184, 250, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
    boxShadow: "0 2px 6px rgba(255, 254, 254, 1)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  button: {
    background: "#2563eb",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  rule: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "10px",
  },

  /* Toggle Switch */
  switch: {
    position: "relative",
    display: "inline-block",
    width: "50px",
    height: "24px",
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    inset: 0,
    backgroundColor: "#ccc",
    borderRadius: "24px",
    transition: "0.4s",
  },
  title:{
   color:"#fffcfcff" 
  }
};

export default Automation;
