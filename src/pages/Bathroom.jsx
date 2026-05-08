export default function Bathroom() {
  return (
    <div style={styles.container}>
     <div style={styles.boxes}>
      <h1 style={styles.Firsttitle}>Upgrade to Smart Bathroom Automation</h1>
      <p style={styles.Firsttext}>
        Transform your bathroom into a high-tech sanctuary with our smart bathroom automation solutions. Enjoy convenience, safety, and luxury with features like motion-sensor lighting, smart climate control, and seamless integration with your existing fixtures.
      </p>
      </div>
     <div style={styles.box1}>
      <h2 style={styles.Sectitle}>Circadian Lighting that Adapts to your Day</h2>
      <p style={styles.Sectext}>
       Bright during the day and dim after sunset; Circadian Lighting mimics daylight patterns. It provides soft lighting for nighttime bathroom visits, ensuring visibility without disrupting your sleep or waking others. A perfect smart bathroom automation upgrade for better comfort.
      </p>
     </div>
      <div style={styles.box2}>
        <h2 style={styles.Thirdtitle}>Motion Sensor Underbed Lights and Exhaust Fans</h2>
        <p style={styles.Thirdtext}>
     Enhance your bathroom experience with motion sensor underbed lights and exhaust fans. These smart bathroom automation features provide convenience and safety by illuminating dark areas and improving air circulation when needed.
         </p>
      </div>
      <div style={styles.box3}>
        <h2 style={styles.Fourtitle}>Smart Switches & Sockets for a Convenient Grooming Session</h2>
        <p style={styles.Fourtext}>
          Upgrade your bathroom design with smart switches and sockets. Control your lights, fans, and grooming devices with ease, and enjoy a more convenient and efficient bathroom experience.
          </p>
      </div>
      <div style={styles.box4}>
        <h2 style={styles.Fivetitle}>Smart Lights for Every Mood</h2>
        <p style={styles.Fivetext}>
          Customize your bedroom decor with smart lighting. Adjust brightness and color for reading, relaxing, or setting the perfect ambience with smart bedroom automationCustomize your bathroom decor with smart lighting that adjusts brightness and color using the AHA! smart app. Whether you need bright light for grooming or a soft glow for a relaxing bath, smart lighting transforms your space effortlessly.        </p>
      </div>
      <div style={styles.box5}>
        <h2 style={styles.Sixtitle}>Aroma Diffuser for a Spa-Like Feeling</h2>
        <p style={styles.Sixtext}>
          Create a spa-like atmosphere in your bathroom with a smart aroma diffuser. Control your diffuser remotely and set schedules to enjoy your favorite scents whenever you want, enhancing your bathroom experience with a touch of luxury.
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
    backgroundImage: "url('/assets/bathroom01.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
    color: "white",
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

  box1: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundImage: "url('/assets/bathroom-03.webp')",
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
    alignItems: "flex-end",
    backgroundImage: "url('/assets/bathroom05.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
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

  box3: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundImage: "url('/assets/bathroom04.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
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

  box4: {
    width: "100%",
    minHeight: "clamp(420px, 75vh, 700px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: "url('/assets/bathroom02.webp')",
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
    alignItems: "flex-start",
    backgroundImage: "url('/assets/bathroom06.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "clamp(70px, 10vw, 120px) clamp(20px, 6vw, 80px)",
    boxSizing: "border-box",
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