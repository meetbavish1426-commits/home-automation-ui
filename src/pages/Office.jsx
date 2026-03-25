export default function Office() {
  return (
     <div style={styles.container}>
     <div style={styles.boxes}>
      <h1 style={styles.Firsttitle}>Build Smart Office Automation.</h1>
      </div>
     <div style={styles.box1}>
      <h2 style={styles.Sectitle}>Design Your Smart Office</h2>
      <p style={styles.Sectext}>
       Workspace Automation
        Solutions that transform daily work life
        </p>
     </div>
      <div style={styles.box2}>
        <h2 style={styles.Thirdtitle}> Smart Security and Access Control</h2>
        <p style={styles.Thirdtext}>
          Keep your smart office secure with automated security systems. Schedule access permissions and monitor activity to ensure a safe and productive work environment.
         </p>
      </div>
      <div style={styles.box3}>
        <h2 style={styles.Fourtitle}>Blinds Automation </h2>
        <p style={styles.Fourtext}>
        Give your office design a modern touch with smart blinds. They blend seamlessly with your interiors and offer multiple scene modes like morning, evening, and party mode for a perfect office decor upgrade
          </p>
      </div>
      <div style={styles.box4}>
        <h2 style={styles.Fivetitle}>Smart Office Lighting to Match Every Mood</h2>
        <p style={styles.Fivetext}>
          Customize your office decor with smart lighting. Adjust brightness and color for reading, relaxing, or setting the perfect ambience with smart office automation
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
    alignItems: "flex-end",
    height: "650px",
    width: "100%",
    color: "white",
    objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url('src/assets/office 01.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingLeft: "22%",
    },
    Firsttitle: {
      fontSize: "2.5rem",
      fontweight: "bold",
      paddingTop: "130px",
      width: "50%",
    },
 
  box1: {
     display: "flex",
      height: "650px",
    width: "100%",
    flexDirection: "column",
    alignItems: "left",
    objectfit: "cover",
    objectposition: "left", 
    backgroundImage: "url(' src/assets/office 01.webp')",
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
    // objectfit: "cover",
    // objectposition: "left" ,
    backgroundImage: "url('src/assets/office access control.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    color: "white",
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
    alignItems: "left",
    // objectfit: "cover",
    // objectposition: "right" ,
    backgroundImage: "url('src/assets/office04.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    right: "0",
    Gap: "30px",
    paddingLeft: "5%",
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
    color: "black",
    flexDirection: "column",
    alignItems: "flex-end ",
     objectfit: "cover",
    objectposition: "left",
    backgroundImage: "url(' src/assets/office 02.jpg')",
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
};