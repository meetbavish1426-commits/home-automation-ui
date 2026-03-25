// function Home() {
//   return (
  
//   <> 
//        <div style={styles.container}> 
//         <div className="shop-section">
//             <div className="box1 box">
            
//             <div  style={styles.box }>
//                 <h2>Shop Fashion</h2>
                 
   
//             </div>
//         </div>
//         <div className="box2 box">
//              <div  style={styles.box }>
//                 <h2>New home arrivals</h2>
//             </div>
//             </div>
//         <div className="box3 box">
//              <div  style={styles.box }>
//                 <h2>Shop Gaming</h2>
          
 
//             </div>
//         </div>
//         <div className="box4 box">
//              <div style={styles.box }>
//                 <h2>Shop watches</h2>
 
       
//             </div>
//         </div>

//        </div>
//     </div>
//   </>
//   );
// }
// const styles ={
//     container:{
//         display: "center",
//         maxWidth: "700px",
//         margin: "auto",
//         background: "black",
//         marginTop: "30rem",
//         alignItems: "center",
//     },

//   box:{
//     justifyContent: "space-between",
//     alignItems: "center",
    
//     color: "red",
//     display: "center",
//     background: "blue",
//     border: "2px solid black",
//     margin: "20px",

// }
// }
// export default Home; 

// import "./Home.css";

// import { useState } from "react";

// function Home() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <>
//       <div style={styles.container}>
//         <div style={styles.shopSection}>
//          <div style={styles.header}>
//             <h1 style={styles.heroTitle}>Your Dream Home,Powered By<br></br> Smart Automation</h1>
//             <span style={styles.font}>Convenience, safety, security, and energy savings—seamlessly integrated in one <br></br>smart solution that makes your home work for you.</span>
//          </div>
//           <div
//             style={{
//               ...styles.box,
//               backgroundImage: "url('src/assets/first.jpg')",
//               transform: hovered === 1 ? "scale(1.05)" : "scale(1)",
 

//             }}
//             onMouseEnter={() => setHovered(1)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <div
//               style={{
//                 ...styles.overlay,
//                 background: hovered === 1 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.5)",
//               }}
//             />
//             <h1 style={styles.text}>Welcome to the Future of<br></br> Smart Living</h1>
//             <span style={styles.description}>Whether it's  an apartment, villa, or bungalow—Hogar makes<br></br> any home smarter.</span>
//           </div>

//           <div
//             style={{
//               ...styles.box,
//               backgroundImage: "url('src/assets/second.jpg')",
//               transform: hovered === 2 ?  "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHovered(2)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <div
//               style={{
//                 ...styles.overlay,
//                 background: hovered === 2 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.5)",
//               }}
//             />
//             <h1 style={styles.text}>Smart. Secure.<br></br> Sustainable.</h1>
//             <span style={styles.description}>Manage lighting, security, environment, and entertainment with a <br></br>single touch or voice command.</span>
//           </div>

//           <div
//             style={{
//               ...styles.box,
//               backgroundImage: "url('src/assets/three.jpg ')",
//               transform: hovered === 3 ? "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHovered(3)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <div
//               style={{
//                 ...styles.overlay,
//                 background: hovered === 3 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.5)",
//               }}
//             />
//             <h1 style={styles.text}>Seamless Automation,<br></br> Tailored for You</h1>
//             <span style={styles.description}>From basic smart setups to fully integrated home automation—<br></br>customized to your lifestyle.</span>
//           </div>

//           <div
//             style={{
//               ...styles.box,
//               backgroundImage: "url('src/assets/four.jpg')",
//               transform: hovered === 4 ? "scale(1.05)" : "scale(1)",
//             }}
//             onMouseEnter={() => setHovered(4)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <div
//               style={{
//                 ...styles.overlay,
//                 background: hovered === 4 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.5)",
//               }}
//             />
//             <h1 style={styles.text}>Monitor and Manage Your Home <br></br>Remotely, Effortlessly.</h1>
//             <span style={styles.description}>From live views of each room to smart control of lights, security, and <br></br>more, Hogar brings your home to your fingertips.</span>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   heroTitle: {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     color:"white",
//     marginTop: "2.5rem",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign:"center",
//     display: "flex",
//     position: "absolute",
//     top: "35%",
//     left: "50%",
//    transform: "translate(-50%, -50%)",
//     },
//   container: {
//     maxWidth: "100rem",
//     margin: "30rem auto",
//     marginBottom: "2rem",
//     background: "transparent",
//     padding: "20px",
//     display: "flex",
//     justifyContent: "center",
    
//   },

//   shopSection: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     gap: "16px",
    
//   },

//   header: {
//     textAlign: "center",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#fff",
//     zIndex: 2,
//     padding: "8px 16px",
//   },

//   box: {
    
//   height: "700px",
//   width: "100%",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   position: "relative",
//   overflow: "hidden",
//   cursor: "pointer",
//   transition: "transform 0.4s ease, box-shadow 0.4s ease",
//   borderRadius: "15px",
//   },

//   overlay: {
//     position: "absolute",
//     inset: 0,
//     transition: "all 0.3s ease",
//   },

//   text: {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     position: "absolute",
//     left: "16px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     color: "white",
//     zIndex: 2,
//   },
//   description:{
//     fontSize: "1.2rem",
//     // fontWeight: "bold",
//     color: "white",
//     position: "absolute",
//     left: "16px",
//     top: "65%",
//     transform: "translateY(-50%)",
//     zIndex: 2,
//   },
//   font: {
//     fontSize: "1.2rem",
    
//     color: "white",
//     position: "absolute",
//     left: "25%",
//     top: "55%",
//     transform: "translateY(-50%)",
//     zIndex: 2,
//   }
// };


// const styles = {
//   heroTitle: {
//     fontSize: "3.4rem",
//     fontWeight: "900",
//     color: "#ffffff",
//     textAlign: "center",
//     lineHeight: "1.15",
//     letterSpacing: "0.6px",
//     textShadow: "0 10px 40px rgba(0,0,0,0.5)",
//   },

//   font: {
//     fontSize: "1.15rem",
//     color: "rgba(255,255,255,0.85)",
//     marginTop: "14px",
//     textAlign: "center",
//     maxWidth: "760px",
//     lineHeight: "1.6",
//   },

//   container: {
//     maxWidth: "1300px",
//     margin: "120px auto 40px",
//     padding: "0 16px",
//   },

//   shopSection: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     gap: "26px",
//   },

//   header: {
//     minHeight: "75vh",
//     borderRadius: "26px",
//     padding: "70px 20px",
//     marginBottom: "30px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background:
//       "radial-gradient(80% 120% at 50% 0%, #1e3a8a 0%, #020617 70%)",
//     boxShadow:
//       "0 30px 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(255,255,255,0.03)",
//     position: "relative",
//     overflow: "hidden",
//   },

//   box: {
//     height: "900px",
//     width: "100%",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     position: "relative",
//     overflow: "hidden",
//     cursor: "pointer",
//     borderRadius: "24px",
//     transition: "all 0.5s cubic-bezier(.2,.8,.2,1)",
//     boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
//   },

//   overlay: {
//     position: "absolute",
//     inset: 0,
//     background:
//       "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
//     transition: "0.4s ease",
//   },

//   text: {
//     fontSize: "2.7rem",
//     fontWeight: "800",
//     position: "absolute",
//     left: "40px",
//     top: "52%",
//     transform: "translateY(-50%)",
//     color: "#ffffff",
//     zIndex: 2,
//     maxWidth: "75%",
//     textShadow: "0 6px 20px rgba(0,0,0,0.6)",
//   },

//   description: {
//     fontSize: "1.05rem",
//     color: "rgba(255,255,255,0.85)",
//     position: "absolute",
//     left: "40px",
//     top: "67%",
//     zIndex: 2,
//     maxWidth: "70%",
//     lineHeight: "1.7",
//   },
// };
 

// export default Home;



// import { useState } from "react";

// function Home() {
//   const [hovered, setHovered] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       title: "Welcome to the Future of Smart Living",
//       desc: "Whether it's an apartment, villa, or bungalow—Hogar makes any home smarter.",
//       img: "src/assets/first.jpg",
//       gridSpan: "span 2" // Full width
//     },
//     {
//       id: 2,
//       title: "Smart. Secure. Sustainable.",
//       desc: "Manage lighting, security, environment, and entertainment with a single touch.",
//       img: "src/assets/second.jpg",
//       gridSpan: "span 1" // Half width
//     },
//     {
//       id: 3,
//       title: "Seamless Automation",
//       desc: "Customized setups tailored perfectly to your lifestyle.",
//       img: "src/assets/three.jpg",
//       gridSpan: "span 1" // Half width
//     },
//     {
//       id: 4,
//       title: "Monitor Remotely",
//       desc: "From live views to smart control, Hogar brings your home to your fingertips.",
//       img: "src/assets/four.jpg",
//       gridSpan: "span 2" // Full width
//     }
//   ];

//   return (
//     // <div style={styles.container}>
//     //   {/* Hero Header */}
//     //   <header style={styles.header}>
//     //     <h1 style={styles.heroTitle}>Your Dream Home, Powered By <br/> <span style={styles.accentText}>Smart Automation</span></h1>
//     //     <p style={styles.heroSubtitle}>
//     //       Convenience, safety, security, and energy savings—seamlessly integrated in one smart solution.
//     //     </p>
//     //   </header>
//     <div style={styles.container}>
//       {/* Texture Overlay for Premium Grainy Look */}
//       <div style={styles.grainOverlay}></div>
//       <div style={styles.linePattern}></div>


//       <div style={styles.contentWrapper}>
//         {/* Header Section */}
//         <header style={styles.header}>
//           <h1 style={styles.heroTitle}>
//             Your Dream Home, <br />
//             <span style={styles.gradientText}>Powered By Smart Automation</span>
//           </h1>
//           <p style={styles.heroSubtitle}>
//             Convenience, safety, security, and energy savings—seamlessly integrated 
//             in one smart solution that makes your home work for you.
//           </p>
//         </header>
//       {/* Bento Grid Section */}
//       <div style={styles.grid}>
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             style={{
//               ...styles.card,
//               gridColumn: card.gridSpan,
//               backgroundImage: `url(${card.img})`,
//               transform: hovered === card.id ? "translateY(-10px) scale(1.01)" : "translateY(0) scale(1)",
//             }}
//             onMouseEnter={() => setHovered(card.id)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <div style={{
//               ...styles.overlay,
//               background: hovered === card.id ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.6)"
//             }} />
            
//             <div style={styles.cardContent}>
//               <h2 style={styles.cardTitle}>{card.title}</h2>
//               <p style={{
//                 ...styles.cardDescription,
//                 opacity: hovered === card.id ? 1 : 0,
//                 transform: hovered === card.id ? "translateY(0)" : "translateY(20px)"
//               }}>
//                 {card.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// const styles = {
//   // container: {
//   //   maxWidth: "1400px",
//   //   margin: "0 auto",
//   //   padding: "80px 24px",
//   //   backgroundColor: " treansparent",
//   //   color: "#fff",
//   //   fontFamily: "'Inter', sans-serif",
//   // },

//   container: {
//     minHeight: "100vh",
//     width: "100%",
//     margin: "0",
//     padding: "0 0 100px 0",
//     // This creates a "Mesh" effect with deep blues and purples
//     backgroundColor: "#020617",
//     backgroundImage: `
//       radial-gradient(at 0% 0%, rgba(30, 58, 138, 0.3) 0px, transparent 50%),
//       radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
//       radial-gradient(at 50% 100%, rgba(15, 23, 42, 1) 0px, transparent 50%)
//     `,
//     backgroundAttachment: "fixed",  
//     fontFamily: "'Inter', system-ui, sans-serif",
//     position: "relative",
//     overflowX: "hidden",
//   },
//   linePattern: {
//     position: "absolute",
//     inset: 0,
//     // This creates the "Lining" effect using a CSS-pattern
//     backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
//                       linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
//     backgroundSize: "100px 100px",
//     maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
//     pointerEvents: "none",
//   },

//   // header: {
//   //   textAlign: "center",
//   //   paddingBottom: "100px",
//   //   display: "flex",
//   //   flexDirection: "column",
//   //   alignItems: "center",
//   // },

//   grainOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     pointerEvents: "none",
//     zIndex: 99,
//     opacity: 0.03,
//     // backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
//   },
//   contentWrapper: {
//     maxWidth: "1300px",
//     margin: "0 auto",
//     padding: "100px 20px",
//     position: "relative",
//     zIndex: 1,
//   },

//   header: {
//     minHeight: "85vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     overflow: "hidden",
//     // Glassmorphism Header Card
//     background: "rgba(255, 255, 255, 0.02)",
//     backdropFilter: "blur(10px)",
//     borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
//     marginBottom: "80px",
//     textAlign: "center",
//     padding: "0 20px",
//   },
//   // heroTitle: {
//   //   fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
//   //   fontWeight: "800",
//   //   lineHeight: "1.1",
//   //   letterSpacing: "-0.02em",
//   //   marginBottom: "24px",
//   // },

//   heroTitle: {
//     fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//     fontWeight: "900",
//     color: "#ffffff",
//     lineHeight: "1.1",
//     letterSpacing: "-0.03em",
//     textAlign: "center",
 
//     textShadow: "0 0 30px rgba(255,255,255,0.1)",
//     marginBottom: "20px",
//   },
//   gradientText: {
//     background: "linear-gradient(90deg, #60a5fa, #c084fc, #60a5fa)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundSize: "200% auto",
//   },

//   // accentText: {
//   //   background: "linear-gradient(90deg, #60a5fa, #c084fc)",
//   //   WebkitBackgroundClip: "text",
//   //   WebkitTextFillColor: "transparent",
//   // },

//   heroSubtitle: {
//     fontSize: "1.25rem",
//     color: "#94a3b8",
//     maxWidth: "700px",
//     lineHeight: "1.6",
//     margin: "0 auto",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",  
//     gap: "32px",
//     width: "100%",
//   },

//   card: {
//     height: "600px",
//     borderRadius: "32px",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     position: "relative",
//     overflow: "hidden",
//     cursor: "pointer",
//     transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",  
//     boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//   },

//   overlay: {
//     position: "absolute",
//     inset: 0,
//     transition: "background 0.4s ease",
//     zIndex: 1,
//   },

//   cardContent: {
//     position: "absolute",
//     bottom: "0",
//     left: "0",
//     padding: "50px",
//     zIndex: 2,
//     width: "100%",
//     boxSizing: "border-box",
//   },

//   cardTitle: {
//     fontSize: "2.2rem",
//     fontWeight: "700",
//     color: "#ffffff",
//     margin: "0 0 15px 0",
//     textShadow: "0 4px 10px rgba(0,0,0,0.5)",
//   },

//   cardDescription: {
//     fontSize: "1.1rem",
//     color: "#cbd5e1",
//     maxWidth: "500px",
//     transition: "all 0.5s ease",
//     lineHeight: "1.5",
//   },
// };



import { useState } from "react";

function Home() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    { id: 1, title: "Welcome to the Future of Smart Living", desc: "Whether it’s an apartment, villa, or bungalow.", img: "src/assets/first.jpg", gridSpan: "span 2" },
    { id: 2, title: "Smart. Secure. Sustainable", desc: "Manage lighting, security, environment, and entertainment with a single touch or voice command", img: "src/assets/second.jpg", gridSpan: "span 1" },
    { id: 3, title: "Seamless Automation, Tailored for You", desc: "From basic smart setups to fully integrated home automation—customized to your lifestyle", img: "src/assets/three.jpg", gridSpan: "span 1" },
    { id: 4, title: "Monitor and Manage Your Home Remotely, Effortlessly.", desc: "From live views of each room to smart control of lights, security, and more, Hogar brings your home to your fingertips.", img: "src/assets/four.jpg", gridSpan: "span 2" },
  ];

  return (
    <div style={styles.container}>
      {/* 1. The Grain Texture */}
      <div style={styles.grainOverlay}></div>

      {/* 2. The Abstract Lining Design (SVG Pattern) */}
      <div style={styles.linePattern}></div>

      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          {/* <div style={styles.badge}>Next-Gen Living</div> */}
          <h1 style={styles.heroTitle}>
            Your Dream Home, <br />
            <span style={styles.gradientText}>Powered By Automation</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Where high-end design meets intelligent technology. 
            Experience a home that thinks, feels, and adapts.
          </p>
        </header>

        <div style={styles.grid}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                ...styles.card,
                gridColumn: card.gridSpan,
                backgroundImage: `url(${card.img})`,
                transform: hovered === card.id ? "translateY(-15px) rotateX(2deg)" : "translateY(0) rotateX(0)",
              }}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                ...styles.overlay,
                background: hovered === card.id 
                  ? "linear-gradient(to top, rgba(15,23,42,0.9), transparent)" 
                  : "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
              }} />

              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>{card.title}</h2>
                <div style={{
                  ...styles.animatedUnderline,
                  width: hovered === card.id ? "60px" : "0px"
                }} />
                <p style={{
                  ...styles.cardDescription,
                  opacity: hovered === card.id ? 1 : 0,
                  transform: hovered === card.id ? "translateY(0)" : "translateY(10px)"
                }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#020617",
    // Premium Mesh Gradient
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, #020617 0%, #000 100%)
    `,
    position: "relative",
    color: "#fff",
    perspective: "1000px", // Enables 3D rotation on cards
    overflowX: "hidden",
  },

  linePattern: {
    position: "absolute",
    inset: 0,
    // This creates the "Lining" effect using a CSS-pattern
    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: "100px 100px",
    maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
    pointerEvents: "none",
  },

  grainOverlay: {
    position: "fixed",
    inset: 0,
    opacity: 0.05,
    // backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
    pointerEvents: "none",
    zIndex: 10,
  },

  contentWrapper: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "80px 20px",
    position: "relative",
    zIndex: 5,
  },

  header: {
    textAlign: "center",
    marginBottom: "100px",
  },

  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "100px",
    background: "rgba(59, 130, 246, 0.1)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    color: "#60a5fa",
    fontSize: "0.85rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px",
  },

  heroTitle: {
    fontSize: "clamp(2.5rem, 7vw, 5rem)",
    fontWeight: "900",
    letterSpacing: "-0.04em",
    lineHeight: 1,
    marginBottom: "30px",
  },

  gradientText: {
    background: "linear-gradient(135deg, #fff 30%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#94a3b8",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  grid: {
    display: "grid",
    // gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },

  card: {
    height: "600px",
    // height: "clamp(350px, 65vh, 700px)",
    borderRadius: "40px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    transition: "0.5s ease",
  },

  cardContent: {
    position: "absolute",
    bottom: "60px",
    left: "50px",
    right: "50px",
    zIndex: 2,
  },

  cardTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "10px",
  },

  animatedUnderline: {
    height: "4px",
    background: "#3b82f6",
    borderRadius: "2px",
    transition: "width 0.4s ease",
    marginBottom: "20px",
  },

  cardDescription: {
    fontSize: "1.1rem",
    color: "#cbd5e1",
    lineHeight: "1.5",
    transition: "all 0.4s ease",
  },
};

 
export default Home;