import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

// 1. Create a "Dictionary" for your translations
const translations = {
  en: {
    welcome: "Welcome to our App",
    login: "Login",
    logout: "Logout",
    toggle: "Toggle Theme",
    desc: "This project helps you master the Context API.",
  },
  es: {
    welcome: "Bienvenido a nuestra aplicación",
    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    toggle: "Cambiar tema",
    desc: "Este proyecto te ayuda a dominar la API de Contexto.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // Default is English

  const switchLanguage = (newLang) => {
    setLang(newLang);
  };

  // Helper: Get the actual text based on the current language
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
