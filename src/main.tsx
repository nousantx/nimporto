import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/index.css";
import "./style/root.css";
import "./style/google-icons.css";
import "./style/tenox-icons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
