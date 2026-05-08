export default function Bedroom() {
    return (
    <div style={styles.container}>
     <div style={styles.boxes}>
      <h1 style={styles.Firsttitle}>Smart Bedroom Automation for Modern Living</h1>
      </div>
     <div style={styles.box1}>
      <h2 style={styles.Sectitle}>Motion Sensor Underbed Lights for a Cozy Smart Bedroom</h2>
      <p style={styles.Sectext}>
       Enhance your bedroom decor with motion sensor underbed lights. This smart bedroom automation feature lights up dark areas when it detects movement, adding both convenience and safety to your bedroom design.
        </p>
     </div>
      <div style={styles.box2}>
        <h2 style={styles.Thirdtitle}>Smart Climate Control for the Perfect Bedroom Temperature</h2>
        <p style={styles.Thirdtext}>
          Keep your smart bedroom comfortable with automated climate control. Schedule your ideal temperature in advance for a restful night without searching for remote
         </p>
      </div>
      <div style={styles.box3}>
        <h2 style={styles.Fourtitle}>Smart Switches to Upgrade Your Bedroom Design</h2>
        <p style={styles.Fourtext}>
        Give your bedroom design a modern touch with smart switches. They blend seamlessly with your interiors and offer multiple scene modes like morning, evening, and party mode for a perfect bedroom decor upgrade
          </p>
      </div>
      <div style={styles.box4}>
        <h2 style={styles.Fivetitle}>Smart Bedroom Lighting to Match Every Mood</h2>
        <p style={styles.Fivetext}>
          Customize your bedroom decor with smart lighting. Adjust brightness and color for reading, relaxing, or setting the perfect ambience with smart bedroom automation
        </p>
      </div>
      <div style={styles.box5}>
        <h2 style={styles.Sixtitle}>Turn your Smart Bedroom into a Private Theatre</h2>
        <p style={styles.Sixtext}>
         Add a personal Home Theatre to your bedroom design . With one tap or voice command, turn on the TV, dim the lights, and close the curtains for the ultimate Smart Entertainment experience
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

  /* COMMON SECTION */
  commonSection: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
  },

  /* HERO */
  boxes: {
    width: "100%",
    minHeight: "clamp(450px, 80vh, 750px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/bed-room-01.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
    color: "black",
  },

  Firsttitle: {
    fontSize: "clamp(2rem, 6vw, 4rem)",
    fontWeight: "800",
    width: "min(100%, 700px)",
    lineHeight: 1.1,
  },

  Firsttext: {
    fontSize: "clamp(1rem, 2vw, 1.4rem)",
    width: "min(100%, 650px)",
    marginTop: "20px",
    lineHeight: 1.7,
  },

  /* BOX 1 */
  box1: {
    ...{
      width: "100%",
      minHeight: "clamp(420px, 75vh, 700px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
      boxSizing: "border-box",
    },
    backgroundImage: "url('/assets/bed-room-02.webp')",
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

  /* BOX 2 */
  box2: {
    ...{
      width: "100%",
      minHeight: "clamp(420px, 75vh, 700px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
      boxSizing: "border-box",
    },
    backgroundImage: "url('/assets/bed-room-03.webp')",
    color: "black",
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

  /* BOX 3 */
  box3: {
    ...{
      width: "100%",
      minHeight: "clamp(420px, 75vh, 700px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
      boxSizing: "border-box",
    },
    backgroundImage: "url('/assets/bed-room-04.webp')",
    color: "white",
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

  /* BOX 4 */
  box4: {
    ...{
      width: "100%",
      minHeight: "clamp(420px, 75vh, 700px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
      boxSizing: "border-box",
    },
    backgroundImage: "url('/assets/bed-room-05.webp')",
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

  /* BOX 5 */
  box5: {
    ...{
      width: "100%",
      minHeight: "clamp(420px, 75vh, 700px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
      boxSizing: "border-box",
    },
    backgroundImage: "url('/assets/bed-room-06.webp')",
    color: "white",
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
};