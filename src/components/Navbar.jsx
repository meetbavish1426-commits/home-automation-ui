import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function logout() {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="public/assets/logo-02.png" alt="logo" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className={`navbar-mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NOT LOGGED IN - Desktop Navigation */}
      {!isLoggedIn && (
        <>
          <div className="navbar-center-group">
            <Link to="/">Home</Link>

           <div className="navbar-dropdown">
  <button
    type="button"
    className="navbar-dropdown-label"
    onClick={() => setSolutionsOpen(!solutionsOpen)}
  >
    Solutions ▾
  </button>

  {solutionsOpen && (
    <div className="navbar-dropdown-menu">
      <Link to="/livingroom" onClick={() => setSolutionsOpen(false)}>
        Living Room Automation
      </Link>
      <Link to="/bedroom" onClick={() => setSolutionsOpen(false)}>
        Bedroom Automation
      </Link>
      <Link to="/bathroom" onClick={() => setSolutionsOpen(false)}>
        Bathroom Automation
      </Link>
      <Link to="/office" onClick={() => setSolutionsOpen(false)}>
        Office Automation
      </Link>
    </div>
  )}
</div>

            <Link to="/Services">Services</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </div>

          <div className="navbar-right-group">
            <Link to="/SignIn">Sign In</Link>
            <Link to="/Login">Login</Link>
          </div>

          {/* Mobile Menu */}
          {/* {mobileMenuOpen && ( */}
            <div className={`navbar-mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/livingroom" onClick={() => setMobileMenuOpen(false)}>
                Living Room
              </Link>
              <Link to="/bedroom" onClick={() => setMobileMenuOpen(false)}>
                Bedroom
              </Link>
              <Link to="/bathroom" onClick={() => setMobileMenuOpen(false)}>
                Bathroom
              </Link>
              <Link to="/office" onClick={() => setMobileMenuOpen(false)}>
                Office
              </Link>
              <Link to="/Services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/AboutUs" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/ContactUs" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
              <Link to="/SignIn" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Link>
              <Link to="/Login" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            </div>
          {/* )} */}
        </>
      )}

      {/* LOGGED IN - Desktop Navigation */}
      {isLoggedIn && (
        <>
          <div className="navbar-login">
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Rooms">Rooms</Link>
            <Link to="/Automation">Automation</Link>
            <Link to="/Sensors">Sensors</Link>
            <Link to="/energy">Energy</Link>
            <Link to="/alerts">Alerts</Link>
            <Link to="/settings">Settings</Link>
          </div>

          <button className="navbar-logout" onClick={logout}>
            Logout
          </button>

          {/* Mobile Menu */}
          {/* {mobileMenuOpen && ( */}
            <div className={`navbar-mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
              <Link to="/Dashboard" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link to="/Rooms" onClick={() => setMobileMenuOpen(false)}>
                Rooms
              </Link>
              <Link to="/Automation" onClick={() => setMobileMenuOpen(false)}>
                Automation
              </Link>
              <Link to="/Sensors" onClick={() => setMobileMenuOpen(false)}>
                Sensors
              </Link>
              <Link to="/energy" onClick={() => setMobileMenuOpen(false)}>
                Energy
              </Link>
              <Link to="/alerts" onClick={() => setMobileMenuOpen(false)}>
                Alerts
              </Link>
              <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
                Settings
              </Link>
              <button
                className="navbar-logout"
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          {/* )} */}
        </>
      )}
    </nav>
  );
}
