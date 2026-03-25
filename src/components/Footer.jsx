 function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <h3>🏠 Smart Home Automation</h3>
        <p>Making homes smarter & safer</p>
      </div>

      <div style={styles.center}>
        <h3>Information</h3>
        
        <p className="footer-link">About Us</p>
        <p className="footer-link">Contact Us</p>
        <p className="footer-link">Services</p>
        <p className="footer-link">Privacy Policy</p>
        <p className="footer-link">Term & Conditions</p> 
     
       
      </div>
      <div style={styles.div}>
         <h3>Categories</h3>
         <p className="footer-link" >Sign In</p>
         <p className="footer-link">dashboard</p>
         <p className="footer-link">Automation</p>
         <p className="footer-link">Energy</p>
         <p className="footer-link">Room</p>
         <p className="footer-link">Sensors</p>  
         <p className="footer-link">Setting</p>
      </div>
      
      <div style={styles.solution}>
        <h3>Solutions</h3>
        <p className="footer-link">Living Room Automation</p>  
        <p className="footer-link">Bedroom Automation</p>
        <p className="footer-link">Bathroom Automation</p>
        <p className="footer-link">Office Automation</p>
      </div>

      <div style={styles.right}>
        <p className="footer-link">📍 College Project</p>
        <p className="footer-link">👨‍💻 Student: Meet Bavishi</p>
        <p className="footer-link">Built with React ⚛️</p> 
      </div>
    </footer>
  );
}

const styles = {
  footer : {
    // marginTop: "40px",
    padding: "20px",
    // background: "#163746",
    background: "rgba(0,0,0,0.8)",
    color: "#e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    boxShadow: "0 -4px 10px rgba(0,0,0,0.3)",
    gap: "20px",
  },
 
  left: {
      flex: "1 1 200px",
  },
  lefthover:{
    border: "2px solid black",
  },
 
   
  center : {
      flex: "1 1 200px",
    textAlign: "center",
    fontSize: "14px",
    
  },
  right: {
     flex: "1 1 200px",
    textAlign: "right",
    fontSize: "14px",
  },
};

export default Footer;
