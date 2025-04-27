import { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("html").style.transition = "background 0.2s ease";
      document.querySelector("html").style.background = "#030712";
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("html").style.transition = "background 0.2s ease";
      document.querySelector("html").style.background = "none";
    }
  }, [theme]);

  const changeThemes = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}
