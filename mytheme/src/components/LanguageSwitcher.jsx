import { useLanguage } from "../contexts/Language";

const LanguageSwitcher = () => {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded ${lang === "en" ? "bg-blue-600 text-white" : "bg-slate-200 text-black"}`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("es")}
        className={`px-2 py-1 rounded ${lang === "es" ? "bg-blue-600 text-white" : "bg-slate-200 text-black"}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
