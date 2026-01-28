import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // This must be here for Tailwind to work!

// 1. Import all your Providers
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/Language";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. Nest your Providers. 
      The order doesn't strictly matter here, but wrapping everything in 
      AuthProvider first is a common standard.
    */}
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>,
);
