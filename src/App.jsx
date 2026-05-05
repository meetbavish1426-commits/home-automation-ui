// import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
 
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminContacts from "./pages/AdminContacts";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import LivingRoom from "./pages/Livingroom";
// import Bedroom from "./pages/Bedroom";
// import Bathroom from "./pages/Bathroom";
// import Office from "./pages/Office";
// import ContactUs from "./pages/ContactUs";
// import Services from "./pages/Services";
// import Login from "./pages/Login";
// import SignIn from "./pages/SignIn";
// import Dashboard from "./pages/Dashboard";
// import Rooms from "./pages/Rooms";
// import Automation from "./pages/Automation";
// import Sensors from "./pages/Sensors";
// import Energy from "./pages/Energy";
// import Alerts from "./pages/Alerts";
// import Settings from "./pages/Settings";

// function PrivateRoute({ children }) {
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   return isLoggedIn ? children : <Navigate to="/Login" replace />;
// }

// function RedirectToHome() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     navigate("/");
//   }, []);

//   return null;
// }

//  export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("isLoggedIn") === "true"
//   );

//   useEffect(() => {
//     setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//   }, []);

//   function AppContent({ isLoggedIn, setIsLoggedIn }) {
//   const location = useLocation();
//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <BrowserRouter>
//   {!isAdminPage && (
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       )}

//       <Routes>
//         {/* Public Pages */}
//         <Route path="*" element={<RedirectToHome />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/Services" element={<Services />} />
//         <Route path="/ContactUs" element={<ContactUs />} />
//         <Route path="/AboutUs" element={<AboutUs />} />
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/livingroom" element={<LivingRoom />} />
//         <Route path="/bedroom" element={<Bedroom />} />
//         <Route path="/bathroom" element={<Bathroom />} />
//         <Route path="/office" element={<Office />} />
//         {/* Protected Pages */}
//         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//         <Route path="/rooms" element={<PrivateRoute><Rooms /></PrivateRoute>} />
//         <Route path="/automation" element={<PrivateRoute><Automation /></PrivateRoute>} />
//         <Route path="/sensors" element={<PrivateRoute><Sensors /></PrivateRoute>} />
//         <Route path="/energy" element={<PrivateRoute><Energy /></PrivateRoute>} />
//         <Route path="/alerts" element={<PrivateRoute><Alerts /></PrivateRoute>} />
//         <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
//         {/* Admin Panel */}
//         <Route path="/admin" element={<AdminDashboard /> } />
//         <Route path="/admin/contacts" element={ <AdminContacts /> } />
//         {/* Redirect */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }
// }

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { useEffect, useState } from "react";

import AdminDashboard from "./pages/AdminDashboard";
import AdminContacts from "./pages/AdminContacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminSidebar from "./components/AdminSidebar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import LivingRoom from "./pages/Livingroom";
import Bedroom from "./pages/Bedroom";
import Bathroom from "./pages/Bathroom";
import Office from "./pages/Office";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Automation from "./pages/Automation";
import Sensors from "./pages/Sensors";
import Energy from "./pages/Energy";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import AdminUsers from "./pages/AdminUsers";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/office" element={<Office />} />

        {/* Protected Pages */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/rooms" element={<PrivateRoute><Rooms /></PrivateRoute>} />
        <Route path="/automation" element={<PrivateRoute><Automation /></PrivateRoute>} />
        <Route path="/sensors" element={<PrivateRoute><Sensors /></PrivateRoute>} />
        <Route path="/energy" element={<PrivateRoute><Energy /></PrivateRoute>} />
        <Route path="/alerts" element={<PrivateRoute><Alerts /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/users" element={<AdminUsers />} />

        {/* Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  return (
    <BrowserRouter>
      <AppContent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </BrowserRouter>
  );
}