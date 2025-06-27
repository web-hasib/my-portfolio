import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={handleToggle} className="btn btn-info">
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
