// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Navbar({ theme: themeProp, setTheme: setThemeProp }) {
  const { t, i18n } = useTranslation("common");
  const [open, setOpen] = useState(false);         // منيو الموبايل
  const [langOpen, setLangOpen] = useState(false); // قائمة اللغة
  const [theme, setTheme] = useState(themeProp || "light");
  const dropdownRef = useRef(null);

  // تحميل الثيم من التخزين وتطبيق .dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || themeProp || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, [themeProp]);

  // اقفل قائمة اللغة بالضغط خارجها
  useEffect(() => {
    const onClickAway = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("click", onClickAway);
    return () => document.removeEventListener("click", onClickAway);
  }, []);

  // اقفل سكرول الخلفية لما المنيو تفتح
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = [
    { to: "/",         label: t("nav.home"),    end: true },
    { to: "/services", label: t("nav.services") },
    { to: "/doctors",  label: t("nav.doctors") },
    { to: "/contact",  label: t("nav.contact") },
    { to: "/about",    label: t("nav.about") },
  ];

  function onChangeLang(v) {
    i18n.changeLanguage(v);            // يخزّن تلقائيًا في localStorage (i18nextLng)
    // i18n.js بيضبط dir تلقائيًا، لكن نأكّد سريعًا:
    document.documentElement.setAttribute("dir", v.startsWith("ar") ? "rtl" : "ltr");
  }

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeProp?.(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  const baseLink = "px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition";
  const activeLink = "text-[--color-primary] font-semibold";
  const inactiveLink = "text-gray-700 dark:text-gray-200";

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-28 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                end={i.end}
                className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
              >
                {i.label}
              </NavLink>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={t("nav.appearance")}
              className="ml-1 px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
              title={theme === "dark" ? "Light" : "Dark"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Switcher */}
            <div className="relative ml-2" ref={dropdownRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
              >
                {i18n.language.startsWith("ar") ? t("nav.arabic") : t("nav.english")} <ChevronDown size={16} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 shadow-lg p-1">
                  <button
                    onClick={() => { onChangeLang("en"); setLangOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {t("nav.english")}
                  </button>
                  <button
                    onClick={() => { onChangeLang("ar"); setLangOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {t("nav.arabic")}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={t("nav.appearance")}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"  
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl" role="dialog" aria-modal="true">
            <div className="h-16 flex items-center justify-between px-4 border-b border-black/5 dark:border-white/10">
              <img src={logo} alt="Logo" className="h-9 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
              >
                <X />
              </button>
            </div>

            <nav className="p-2 flex flex-col">
              {navItems.map((i) => (
                <NavLink
                  key={i.to}
                  to={i.to}
                  end={i.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg ${
                      isActive ? "bg-black/5 dark:bg-white/10 text-[--color-primary] font-semibold" : "text-gray-800 dark:text-gray-100"
                    }`
                  }
                >
                  {i.label}
                </NavLink>
              ))}

              {/* Theme toggle inside drawer */}
              <div className="mt-3 border-t border-black/5 dark:border-white/10 pt-3 px-2">
                <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  {t("nav.appearance")}
                </div>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <span>{theme === "dark" ? "Dark" : "Light"}</span>
                  {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
                </button>
              </div>

              {/* Language on mobile */}
              <div className="mt-2 border-t border-black/5 dark:border-white/10 pt-2">
                <div className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-1">
                  {t("nav.arabic")} / {t("nav.english")}
                </div>
                <div className="flex gap-2 px-2">
                  <button onClick={() => onChangeLang("en")} className={`px-3 py-2 rounded-lg border ${i18n.language.startsWith("en") ? "border-black/20 dark:border-white/30" : "border-transparent"} hover:bg-black/5 dark:hover:bg-white/10`}>
                    {t("nav.english")}
                  </button>
                  <button onClick={() => onChangeLang("ar")} className={`px-3 py-2 rounded-lg border ${i18n.language.startsWith("ar") ? "border-black/20 dark:border-white/30" : "border-transparent"} hover:bg-black/5 dark:hover:bg-white/10`}>
                    {t("nav.arabic")}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
