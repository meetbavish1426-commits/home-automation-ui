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
    // paddingTop: "60px", 
    width: "100%",
    color: "white",
    // textAlign: "center"
  },
  boxes: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    height: "650px",
    width: "100%",
    color: "white",
    objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url(' src/assets/bathroom01.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    },
    Firsttitle: {
      fontSize: "3.5rem",
      fontweight: "bold",
      width: "50%",
    },
    Firsttext: {
      fontSize: "1.5rem",
      width: "40%",
      marginTop: "20px",
    },
  box1: {
     display: "flex",
      height: "650px",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    objectfit: "cover",
    objectposition: "left", 
    backgroundImage: "url('src/assets/bathroom 03.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "4%",
  },
  Sectitle:{
      fontSize: "2.5rem",
      fontweight: "bold",
      width: "40%",
  },
  Sectext: {
      fontSize: "1.2rem",
      width: "40%",
      marginTop: "10px",
  },
  box2:{
     display: "flex",
      height: "650px",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    objectfit: "cover",
    objectposition: "left" ,
    backgroundImage: "url('src/assets/bathroom05.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    color: "black",
  },
  Thirdtitle: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "40%",
  },
  Thirdtext: {
      fontSize: "1.2rem",
      width: "40%",
      marginTop: "10px",
  },
  box3: {
     display: "flex",
      height: "650px",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    // objectfit: "cover",
    // objectposition: "right" ,
    backgroundImage: "url(' src/assets/bathroom04.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    right: "0",
    Gap: "30px",
    // padding: "40px",
    color: "white",
  },
  Fourtitle: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "50%",
      // alignItems: "right",
  },
  Fourtext: {
      fontSize: "1.2rem",
      width: "50%",
      marginTop: "10px",
  },
  box4: {
     display: "flex",
      height: "650px",
    width: "100%",
    flexDirection: "column",
    alignItems: "left",
     objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url(' src/assets/bathroom02.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%", 
  },
    Fivetitle: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "50%",
  },
  Fivetext: {
      fontSize: "1.2rem",
      width: "40%",
      marginTop: "10px",
  },
  box5: {
     height: "650px",
    width: "100%",
     display: "flex",
    flexDirection: "column",
    alignItems: "left",
    color: "white",
    objectfit: "cover",
    objectposition: "left" ,
    backgroundImage: "url('src/assets/bathroom06.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
  },
   Sixtitle: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "40%",
  },
  Sixtext: {
      fontSize: "1.2rem",
      width: "40%",
      marginTop: "10px",
  },
 
 
};