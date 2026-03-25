
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Energy() {
  return (
    <>
    <div style={styles.page}>
      <h1 style={styles.title}>⚡ Energy Consumption</h1>

      <div style={styles.grid}>
        <div style={styles.card}>💡 Lights<br />2.4 kWh</div>
        <div style={styles.card}>❄ AC<br />5.8 kWh</div>
        <div style={styles.card}>🌬 Fan<br />1.2 kWh</div>
        <div style={styles.card}>📺 TV<br />0.9 kWh</div>
{/*  
          <DotLottieReact
      src="https://lottie.host/b91aa848-3104-4bc6-8206-5b159c9aea9f/ApfLlUAosb.lottie"
      loop
      autoplay
      className="b"
    /> */}
      </div>
      </div>
    </>
  );
}

const styles = {
  page: {
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
    width: "180px",
    textAlign: "center",
    fontWeight: "bold",
     boxShadow: "0 2px 6px rgba(255, 254, 254, 1)",
  },
  title:{
    color:"white"
  }
};

export default Energy;

