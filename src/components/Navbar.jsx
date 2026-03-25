import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo 02.png";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  // LOGOUT FUNCTION
  function logout(){
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/signin");
  }

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav style={{...styles.nav, ...(scrolled ? styles.navScrolled : {})}}>

      {/* LOGO */}
      <div style={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" style={styles.logoImg} />
        </Link>
      </div>


      {/* NOT LOGGED IN NAVBAR */}
      {!isLoggedIn && (
        <>

        <div style={styles.centerGroup}>

        <Link
        to="/"
        style={{...styles.navLink,...(hovered==="home"?styles.navLinkHover:{})}}
        onMouseEnter={()=>setHovered("home")}
        onMouseLeave={()=>setHovered(null)}
        >
        Home
        </Link>


{/* SOLUTIONS DROPDOWN */}

<div
style={styles.dropdown}
onMouseEnter={()=>setSolutionsOpen(true)}
onMouseLeave={()=>setSolutionsOpen(false)}
>

<span style={styles.link}>Solutions ▾</span>

{solutionsOpen && (

<div style={styles.dropdownMenu}>

<Link
to="/livingroom"
style={{...styles.dropdownItem,...(hovered==="livingroom"?styles.dropdownItemHover:{})}}
onMouseEnter={()=>setHovered("livingroom")}
onMouseLeave={()=>setHovered(null)}
>
Living Room Automation
</Link>

<Link
to="/bedroom"
style={{...styles.dropdownItem,...(hovered==="bedroom"?styles.dropdownItemHover:{})}}
onMouseEnter={()=>setHovered("bedroom")}
onMouseLeave={()=>setHovered(null)}
>
Bedroom Automation
</Link>

<Link
to="/bathroom"
style={{...styles.dropdownItem,...(hovered==="bathroom"?styles.dropdownItemHover:{})}}
onMouseEnter={()=>setHovered("bathroom")}
onMouseLeave={()=>setHovered(null)}
>
Bathroom Automation
</Link>

<Link
to="/office"
style={{...styles.dropdownItem,...(hovered==="office"?styles.dropdownItemHover:{})}}
onMouseEnter={()=>setHovered("office")}
onMouseLeave={()=>setHovered(null)}
>
Office Automation
</Link>

</div>
)}

</div>


<Link
to="/Services"
style={{...styles.navLink,...(hovered==="services"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("services")}
onMouseLeave={()=>setHovered(null)}
>
Services
</Link>


<Link
to="/AboutUs"
style={{...styles.navLink,...(hovered==="about"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("about")}
onMouseLeave={()=>setHovered(null)}
>
AboutUs
</Link>


<Link
to="/ContactUs"
style={{...styles.navLink,...(hovered==="contact"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("contact")}
onMouseLeave={()=>setHovered(null)}
>
ContactUs
</Link>

</div>


{/* RIGHT SIDE */}

<div style={styles.RightGroup}>

<Link
to="/SignIn"
style={{...styles.navLink,...(hovered==="signin"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("signin")}
onMouseLeave={()=>setHovered(null)}
>
SignIn
</Link>


<Link
to="/Login"
style={{...styles.navLink,...(hovered==="login"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("login")}
onMouseLeave={()=>setHovered(null)}
>
Login
</Link>

</div>

</>
)}


{/* LOGGED IN NAVBAR */}

{isLoggedIn && (

<>

<div style={styles.login}>

<Link
to="/Dashboard"
style={{...styles.navLink,...(hovered==="dashboard"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("dashboard")}
onMouseLeave={()=>setHovered(null)}
>
Dashboard
</Link>

<Link
to="/Rooms"
style={{...styles.navLink,...(hovered==="rooms"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("rooms")}
onMouseLeave={()=>setHovered(null)}
>
Room
</Link>

<Link
to="/Automation"
style={{...styles.navLink,...(hovered==="automation"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("automation")}
onMouseLeave={()=>setHovered(null)}
>
Automation
</Link>

<Link
to="/Sensors"
style={{...styles.navLink,...(hovered==="sensors"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("sensors")}
onMouseLeave={()=>setHovered(null)}
>
Sensors
</Link>

<Link
to="/energy"
style={{...styles.navLink,...(hovered==="energy"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("energy")}
onMouseLeave={()=>setHovered(null)}
>
Energy
</Link>

<Link
to="/alerts"
style={{...styles.navLink,...(hovered==="alerts"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("alerts")}
onMouseLeave={()=>setHovered(null)}
>
Alerts
</Link>

<Link
to="/settings"
style={{...styles.navLink,...(hovered==="settings"?styles.navLinkHover:{})}}
onMouseEnter={()=>setHovered("settings")}
onMouseLeave={()=>setHovered(null)}
>
Settings
</Link>

</div>

<button style={styles.logout} onClick={logout}>
Logout
</button>

</>

)}

</nav>

);

}
 

const styles = {
  nav: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px 40px",
    // background: "linear-gradient(to right, #928dab, #1f1c2c)",
    background: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    transition: "all 0.4s ease"
  },
  logo: {
  display: "flex",
  alignItems: "center",
  
},

logoImg: {
  height: "50px",
  cursor: "pointer",
  width: "100px",
   backgroundSize: "cover",
    backgroundPosition: "center",
},

 navScrolled: {
  background: "rgba(0,0,0,0.8)",
  backdropFilter: "blur(10px)",
  padding: "12px 40px",
  // boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  width: "100%",
},

dropdown: {
  position: "relative",
  cursor: "pointer",
  paddingBottom: "10px",
  marginTop: "10px",
},

link: {
  color: "white",
  textDecoration: "none"
},

dropdownMenu: {
  position: "absolute",
  top: "100%",
  left: "0",
  background: "white",
  color: "black",
  borderRadius: "8px",
  minWidth: "220px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
},

dropdownItem: {
  padding: "10px 15px",
  textDecoration: "none",
  color: "black",
  transition: "0.3s"
},
dropdownItemHover: {
  background: "#39558e"
},
  login: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "space-between",
     
  },
 logout: {
  width: "auto",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    background: "linear-gradient(90deg, #00f2fe, #4facfe)",
    color: "white",
    padding: "8px 16px",
    transition: "all 0.3s ease",
    justifyContent: "space-between",
 
    },
    centerGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      // paddingLeft: "35%",
      gap: "25px",
      fontWeight: "500",
      fontSize: "17px",
      flexWrap: "wrap",
    },
 
    RightGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // margin: "16px",
      gap: "30px",
    },

    navLink: {
  color: "white",
  textDecoration: "none",
  transition: "all 0.3s ease",
  position: "relative",
  padding: "5px 0",
},

navLinkHover: {
  color: "#4facfe",
  transform: "scale(1.05)",
},
 
  };
