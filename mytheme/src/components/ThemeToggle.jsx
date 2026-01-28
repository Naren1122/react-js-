import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg ${
        theme === "light"
          ? "bg-slate-800 text-white hover:bg-slate-700"
          : "bg-yellow-400 text-black hover:bg-yellow-300"
      }`}
    >
      {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
    </button>
  );
};

export default ThemeToggle;
