import { createContext, useState, useContext } from "react"; // <--- CHECK THIS

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// This is the part that might have the red mark
export const useTheme = () => {
  const context = useContext(ThemeContext); // Ensure ThemeContext name matches exactly
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
