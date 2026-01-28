import React from "react";
// 1. Import all your custom hooks
import { useTheme } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext";
import { useLanguage } from "./contexts/Language";

// 2. Import your components
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  // 3. Consume the data from all three "Radio Stations"
  const { theme } = useTheme();
  const { user } = useAuth();
  const { t, lang } = useLanguage();

  return (
    /* Dynamic background and text color based on ThemeContext */
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${
        theme === "light"
          ? "bg-slate-50 text-slate-900"
          : "bg-slate-950 text-white"
      }`}
    >
      {/* The Navbar will handle Login/Logout logic */}
      <Navbar />

      <main className="max-w-4xl mx-auto flex flex-col items-center justify-center pt-24 px-6">
        {/* Section 1: Auth + Language display */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            {t.welcome},
            <span className="text-blue-500">
              {user ? ` ${user.name}` : " Guest"}
            </span>
          </h1>

          <p className="text-xl opacity-80 max-w-lg mx-auto">{t.desc}</p>

          {/* Section 2: Global Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
            {/* Theme Control Card */}
            <div
              className={`p-6 rounded-2xl border w-64 shadow-sm transition-colors ${
                theme === "light"
                  ? "bg-white border-slate-200"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">
                {lang === "en" ? "Appearance" : "Apariencia"}
              </p>
              <ThemeToggle />
            </div>

            {/* Language Control Card */}
            <div
              className={`p-6 rounded-2xl border w-64 shadow-sm transition-colors ${
                theme === "light"
                  ? "bg-white border-slate-200"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-50">
                {lang === "en" ? "Language" : "Idioma"}
              </p>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Section 3: Status Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-500/20 w-full text-center text-sm opacity-50">
          <p>
            {lang === "en" ? "System Status" : "Estado del sistema"}:
            {user ? ` ${t.logout} Available` : ` ${t.login} Required`}
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
