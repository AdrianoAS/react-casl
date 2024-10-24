import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { AuthContext } from "./context/AuthContext";
import { AbilitiesProvider } from "./context/AbilitiesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContext>
      <AbilitiesProvider>
        <App />
      </AbilitiesProvider>
    </AuthContext>
  </React.StrictMode>
);
