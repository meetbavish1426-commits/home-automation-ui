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
    color: "black",
    objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url('src/assets/bed-room 01.webp')",
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
      width: "50%",
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
    backgroundImage: "url(' src/assets/bed-room 02.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "4%",
  },
  Sectitle:{
      fontSize: "2.5rem",
      fontweight: "bold",
      width: "50%",
  },
  Sectext: {
      fontSize: "1.2rem",
      width: "50%",
      marginTop: "10px",
  },
  box2:{
     display: "flex",
      height: "650px",
    width: "100%",
    flexDirection: "column",
    alignItems: "left",
    objectfit: "cover",
    objectposition: "left" ,
    backgroundImage: "url('src/assets/bed-room 03.webp ')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    color: "black",
  },
  Thirdtitle: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "50%",
  },
  Thirdtext: {
      fontSize: "1.2rem",
      width: "50%",
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
    backgroundImage: "url(' src/assets/bed-room04.webp')",
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
    alignItems: "flex-end ",
     objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url(' src/assets/bed-room05.webp')",
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
      width: "50%",
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
    backgroundImage: "url('src/assets/bed-room 06.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
  },
   Sixtitle: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "50%",
  },
  Sixtext: {
      fontSize: "1.2rem",
      width: "50%",
      marginTop: "10px",
  },
 
 
};