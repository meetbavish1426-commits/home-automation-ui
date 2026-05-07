import { useState } from "react";

function Home() {
  const [hovered, setHovered] = useState(null);

  const isMobile = window.innerWidth <= 768;

  const cards = [
    {
      id: 1,
      title: "Welcome to the Future of Smart Living",
      desc: "Whether it's an apartment, villa, or bungalow.",
      img: "/src/assets/first.webp",
      gridSpan: "span 2",
    },
    {
      id: 2,
      title: "Smart. Secure. Sustainable",
      desc: "Manage lighting, security, environment, and entertainment with a single touch or voice command.",
      img: "/src/assets/second.webp",
      gridSpan: "span 1",
    },
    {
      id: 3,
      title: "Seamless Automation, Tailored for You",
      desc: "From basic smart setups to fully integrated home automation—customized to your lifestyle.",
      img: "/src/assets/three.webp",
      gridSpan: "span 1",
    },
    {
      id: 4,
      title: "Monitor and Manage Your Home Remotely, Effortlessly.",
      desc: "From live views of each room to smart control of lights, security, and more.",
      img: "/src/assets/four.webp",
      gridSpan: "span 2",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.grainOverlay}></div>
      <div style={styles.linePattern}></div>

      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          <h1 style={styles.heroTitle}>
            Your Dream Home, <br />
            <span style={styles.gradientText}>Powered By Automation</span>
          </h1>

          <p style={styles.heroSubtitle}>
            Where high-end design meets intelligent technology. Experience a
            home that thinks, feels, and adapts.
          </p>
        </header>

        <div style={styles.grid}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                ...styles.card,
                gridColumn: isMobile ? "span 1" : card.gridSpan,
                backgroundImage: `url(${card.img})`,
                transform:
                  hovered === card.id && !isMobile
                    ? "translateY(-12px) rotateX(2deg)"
                    : "translateY(0)",
              }}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  ...styles.overlay,
                  background:
                    hovered === card.id
                      ? "linear-gradient(to top, rgba(15,23,42,0.9), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
                }}
              />

              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>{card.title}</h2>

                <div
                  style={{
                    ...styles.animatedUnderline,
                    width: hovered === card.id || isMobile ? "60px" : "0px",
                  }}
                />

                <p
                  style={{
                    ...styles.cardDescription,
                    opacity: hovered === card.id || isMobile ? 1 : 0,
                    transform:
                      hovered === card.id || isMobile
                        ? "translateY(0)"
                        : "translateY(10px)",
                  }}
                >
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
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, #020617 0%, #000 100%)
    `,
    position: "relative",
    color: "#fff",
    overflowX: "hidden",
  },

  linePattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "clamp(45px, 8vw, 100px) clamp(45px, 8vw, 100px)",
    maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
    pointerEvents: "none",
  },

  grainOverlay: {
    position: "fixed",
    inset: 0,
    opacity: 0.05,
    pointerEvents: "none",
    zIndex: 10,
  },

  contentWrapper: {
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "clamp(60px, 8vw, 90px) clamp(16px, 4vw, 40px)",
    position: "relative",
    zIndex: 5,
    boxSizing: "border-box",
  },

  header: {
    textAlign: "center",
    marginBottom: "clamp(45px, 8vw, 100px)",
  },

  badge: {
    display: "inline-block",
    padding: "clamp(5px, 1vw, 7px) clamp(12px, 3vw, 18px)",
    borderRadius: "100px",
    background: "rgba(59, 130, 246, 0.1)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    color: "#60a5fa",
    fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "clamp(1px, 0.4vw, 2px)",
    marginBottom: "20px",
  },

  heroTitle: {
    fontSize: "clamp(2rem, 7vw, 5rem)",
    fontWeight: "900",
    letterSpacing: "-0.04em",
    lineHeight: 1.05,
    marginBottom: "clamp(18px, 4vw, 30px)",
  },

  gradientText: {
    background: "linear-gradient(135deg, #fff 30%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroSubtitle: {
    fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
    color: "#94a3b8",
    maxWidth: "650px",
    margin: "0 auto",
    lineHeight: "1.6",
    padding: "0 5px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "clamp(20px, 4vw, 40px)",
  },

  card: {
    width: "100%",
    height: "clamp(330px, 55vw, 600px)",
    borderRadius: "clamp(22px, 4vw, 40px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.6s ease",
    border: "1px solid rgba(255,255,255,0.1)",
    boxSizing: "border-box",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    transition: "0.5s ease",
  },

  cardContent: {
    position: "absolute",
    bottom: "clamp(25px, 5vw, 60px)",
    left: "clamp(22px, 4vw, 50px)",
    right: "clamp(22px, 4vw, 50px)",
    zIndex: 2,
  },

  cardTitle: {
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
    fontWeight: "800",
    marginBottom: "10px",
    lineHeight: 1.1,
  },

  animatedUnderline: {
    height: "4px",
    background: "#3b82f6",
    borderRadius: "2px",
    transition: "width 0.4s ease",
    marginBottom: "clamp(14px, 3vw, 20px)",
  },

  cardDescription: {
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    color: "#cbd5e1",
    lineHeight: "1.5",
    transition: "all 0.4s ease",
  },
};

 
export default Home;