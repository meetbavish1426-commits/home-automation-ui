 export default function LivingRoom() {
  return (
    <div style={styles.container}>
      <div style={styles.boxes}>
        <h1 style={styles.Firsttitle}>Automate Your Smart Living Room in Style</h1>
        <p style={styles.Firsttext}>The future of smart spaces is here</p>
      </div>

      <div style={styles.box1}>
        <h2 style={styles.Sectitle}>Transform Your Living Room with Smart Automation</h2>
        <p style={styles.Sectext}>
          Upgrade your living room design with smart lighting that adapts to your mood.
          Enhance your living room decor with adjustable brightness and custom light colours.
        </p>
      </div>

      <div style={styles.box2}>
        <h2 style={styles.Thirdtitle}>Effortless Living Room Automation with Smart Switches</h2>
        <p style={styles.Thirdtext}>
          Goodbye outdated switches! Sleek smart switches let you control lights, fans, ACs, and curtains effortlessly.
        </p>
      </div>

      <div style={styles.box3}>
        <h2 style={styles.Fourtitle}>Climate Control for the Perfect Smart Living Room</h2>
        <p style={styles.Fourtext}>
          Keep your living room design cool and comfortable with automated climate control.
        </p>
      </div>

      <div style={styles.box4}>
        <h2 style={styles.Fivetitle}>Enjoy a Cinema the right way with Smart Home Theatre</h2>
        <p style={styles.Fivetext}>
          Create a movie theater experience in your living room with smart home theatre systems.
        </p>
      </div>

      <div style={styles.box5}>
        <h2 style={styles.Sixtitle}>Marry Style and Convenience with Smart Curtains</h2>
        <p style={styles.Sixtext}>
          Smart curtains are the perfect blend of style and convenience for your living room.
        </p>
      </div>

      <div style={styles.box6}>
        <h2 style={styles.title}>Upgrade Security with Smart Locks</h2>
        <p style={styles.text}>
          Smart locks provide an extra layer of security for your living room.
        </p>
      </div>
    </div>
  );
}
const styles = {
  
  container: {
    width: "100%",
    overflowX: "hidden",
    background: "#020617",
    color: "white",
  },

  boxes: {
    width: "100%",
    minHeight: "clamp(450px, 80vh, 750px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/living-room-01.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
  },

  Firsttitle: {
    fontSize: "clamp(2rem, 6vw, 4rem)",
    fontWeight: "800",
    width: "min(100%, 720px)",
    lineHeight: 1.1,
  },

  Firsttext: {
    fontSize: "clamp(1rem, 2vw, 1.4rem)",
    width: "min(100%, 650px)",
    marginTop: "20px",
    lineHeight: 1.7,
  },

  box1: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/smart-living-room.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
  },

  Sectitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.7rem)",
    fontWeight: "700",
    width: "min(100%, 650px)",
    lineHeight: 1.2,
  },

  Sectext: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    width: "min(100%, 650px)",
    marginTop: "12px",
    lineHeight: 1.7,
  },

  box2: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/smart-switch-03.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
  },

  Thirdtitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.7rem)",
    fontWeight: "700",
    width: "min(100%, 650px)",
    lineHeight: 1.2,
  },

  Thirdtext: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    width: "min(100%, 650px)",
    marginTop: "12px",
    lineHeight: 1.7,
  },

  box3: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundImage: "url('/assets/smart-climate-04.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
    color: "black",
  },

  Fourtitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.7rem)",
    fontWeight: "700",
    width: "min(100%, 650px)",
    lineHeight: 1.2,
  },

  Fourtext: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    width: "min(100%, 650px)",
    marginTop: "12px",
    lineHeight: 1.7,
  },

  box4: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/smart-home-05.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
  },

  Fivetitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.7rem)",
    fontWeight: "700",
    width: "min(100%, 650px)",
    lineHeight: 1.2,
  },

  Fivetext: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    width: "min(100%, 650px)",
    marginTop: "12px",
    lineHeight: 1.7,
  },

  box5: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundImage: "url('/assets/smart-curtain-06.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
    color: "black",
  },

  Sixtitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.7rem)",
    fontWeight: "700",
    width: "min(100%, 650px)",
    lineHeight: 1.2,
  },

  Sixtext: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    width: "min(100%, 650px)",
    marginTop: "12px",
    lineHeight: 1.7,
  },

  box6: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/smart-locks-07.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "clamp(1.6rem, 4vw, 2.7rem)",
    fontWeight: "700",
    width: "min(100%, 650px)",
    lineHeight: 1.2,
  },

  text: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    width: "min(100%, 650px)",
    marginTop: "12px",
    lineHeight: 1.7,
  },
};