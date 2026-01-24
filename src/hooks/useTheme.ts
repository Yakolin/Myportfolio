import {useEffect, useState} from "react"
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    (localStorage.getItem("theme"))
  );
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const changeTheme = () => {
    setTheme((theme === "dark" ? "light" : "dark"))
  }
  return { theme, changeTheme };
}