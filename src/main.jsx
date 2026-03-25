import React from "react";
import ReactDOM from "react-dom/client";
 
import App from "./App";
 
import "./index.css";
import "./SignIn.css";
import "./Login.css";
// services styles are now imported by the Services page component itself
// instead of globally here.
import { HomeProvider } from "./context/HomeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <HomeProvider>
    <App />
    </HomeProvider>
    </React.StrictMode>
);

 