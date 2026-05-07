export default function Office() {
  return (
    <div style={styles.container}>

      <div
        style={{
          ...styles.section,
          ...styles.rightContent,
          backgroundImage: "url('src/assets/office 03.webp')",
        }}
      >
        <div style={styles.textBox}>
          <h1 style={styles.title}>Build Smart Office Automation.</h1>
        </div>
      </div>

      <div
        style={{
          ...styles.section,
          ...styles.leftContent,
          backgroundImage: "url('src/assets/office 01.webp')",
        }}
      >
        <div style={styles.textBox}>
          <h2 style={styles.title}>Design Your Smart Office</h2>
          <p style={styles.text}>
            Workspace Automation Solutions that transform daily work life
          </p>
        </div>
      </div>

      <div
        style={{
          ...styles.section,
          ...styles.leftContent,
          backgroundImage: "url('src/assets/office access control.webp')",
        }}
      >
        <div style={styles.textBox}>
          <h2 style={styles.title}>Smart Security and Access Control</h2>
          <p style={styles.text}>
            Keep your smart office secure with automated security systems.
            Schedule access permissions and monitor activity to ensure a safe
            and productive work environment.
          </p>
        </div>
      </div>

      <div
        style={{
          ...styles.section,
          ...styles.leftContent,
          backgroundImage: "url('src/assets/office04.webp')",
        }}
      >
        <div style={styles.textBox}>
          <h2 style={styles.title}>Blinds Automation</h2>
          <p style={styles.text}>
            Give your office design a modern touch with smart blinds. They blend
            seamlessly with your interiors and offer multiple scene modes.
          </p>
        </div>
      </div>

      <div
        style={{
          ...styles.section,
          ...styles.leftContent,
          backgroundImage: "url('src/assets/office 02.webp')",
        }}
      >
        <div style={styles.blackTextBox}>
          <h2 style={styles.title}>Smart Office Lighting to Match Every Mood</h2>
          <p style={styles.text}>
            Customize your office decor with smart lighting. Adjust brightness
            and color for reading, relaxing, or setting the perfect ambience.
          </p>
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    color: "white",
    overflowX: "hidden",
    background: "#020617",
  },

  section: {
    minHeight: "clamp(420px, 70vh, 650px)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxSizing: "border-box",
    padding: "clamp(80px, 10vw, 130px) clamp(20px, 6vw, 80px)",
    position: "relative",
    
  },

  rightContent: {
    alignItems: "flex-end",
    textAlign: "left",
  },

  leftContent: {
    alignItems: "flex-start",
    textAlign: "left",
  },

  textBox: {
    width: "min(100%, 620px)",
    background: "transparent",
    padding: "clamp(20px, 4vw, 36px)",
    borderRadius: "20px",
    // backdropFilter: "blur(4px)",
  },

  blackTextBox: {
    width: "min(100%, 620px)",
    background: "transparent",
    padding: "clamp(20px, 4vw, 36px)",
    borderRadius: "20px",
    // backdropFilter: "blur(4px)",
    color: "#111827",
  },

  title: {
    fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
    fontWeight: "800",
    lineHeight: 1.2,
    margin: "0 0 14px",
  },

  text: {
    fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
    lineHeight: 1.7,
    margin: 0,
  },
};