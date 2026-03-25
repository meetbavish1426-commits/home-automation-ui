export default function LivingRoom() {
  return (
    <div style={styles.container}>
     <div style={styles.boxes}>
      <h1 style={styles.Firsttitle}>Automate Your Smart Living Room in Style</h1>
      <p style={styles.Firsttext}>
         The future of smart spaces is here
      </p>  
     </div>
     <div style={styles.box1}>
      <h2 style={styles.Sectitle}>Transform Your Living Room with Smart Automation</h2>
      <p style={styles.Sectext}>
        Upgrade your living room design with smart lighting that adapts to your mood. Enhance your living room decor with adjustable brightness and custom light colours with a click or voice command.
        </p>
     </div>
      <div style={styles.box2}>
        <h2 style={styles.Thirdtitle}>Effortless Living Room Automation with Smart Switches</h2>
        <p style={styles.Thirdtext}>
         Goodbye outdated switches! Sleek smart switches let you control lights, fans, ACs, and curtains effortlessly. Elevate your smart living room decor ideas with smart technology.
         </p>
      </div>
      <div style={styles.box3}>
        <h2 style={styles.Fourtitle}>Climate Control for the Perfect Smart Living Room</h2>
        <p style={styles.Fourtext}>
          Keep your living room design cool and comfortable with automated climate control. Remotely adjust fans and ACs and easily schedule temperature settings.
          </p>
      </div>
      <div style={styles.box4}>
        <h2 style={styles.Fivetitle}>Enjoy a Cinema the right way with Smart Home Theatre</h2>
        <p style={styles.Fivetext}>
          Create a movie theater experience in your living room with smart home theatre systems. Control your projector, sound system, and lighting with ease, and immerse yourself in the action.
        </p>
      </div>
      <div style={styles.box5}>
        <h2 style={styles.Sixtitle}>Marry Style and Convenience with Smart Curtains</h2>
        <p style={styles.Sixtext}>
          Smart curtains are the perfect blend of style and convenience for your living room. With just a tap or voice command, you can open or close your curtains, allowing you to control natural light and privacy while adding a touch of elegance to your living room decor.
        </p>
      </div>
      <div style={styles.box6}>
        <h2 style={styles.title}>Upgrade Security with Smart Locks</h2>
        <p style={styles.text}>
          Smart locks provide an extra layer of security for your living room. With features like remote access, activity logs, and integration with other smart devices, you can keep your home secure while enjoying the convenience of keyless entry.
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
    objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url('src/assets/living-room-01.webp')",
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
    alignItems: "left",
    objectfit: "cover",
    objectposition: "left", 
    backgroundImage: "url(' src/assets/smart-living-room.webp')",
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
    backgroundImage: "url('src/assets/smart-switch-03.webp ')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
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
    backgroundImage: "url(' src/assets/smart-climate-04.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    right: "0",
    Gap: "30px",
    // padding: "40px",
    color: "black",
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
    alignItems: "left ",
     objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url(' src/assets/smart-home-05.webp')",
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
    alignItems: "flex-end",
    color: "black",
    objectfit: "cover",
    objectposition: "left" ,
    backgroundImage: "url(' src/assets/smart-curtain-06.webp')",
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
  box6: {
     height: "650px",
    width: "100%",
     display: "flex",
    flexDirection: "column",
    alignItems: "left",
    objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url('src/assets/smart-locks-07.webp ')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%", 
  },
     title: {
    fontSize: "2.5rem",
      fontweight: "bold",
      width: "50%",
  },
  text: {
      fontSize: "1.2rem",
      width: "50%",
      marginTop: "10px",
  },
 
};