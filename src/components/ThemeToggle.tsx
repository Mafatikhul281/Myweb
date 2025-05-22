import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark/Light Mode"
      title="Toggle Dark/Light Mode"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: isDark ? "flex-end" : "flex-start",
        backgroundColor: isDark ? "#222" : "#f5f5f5",
        border: "none",
        borderRadius: "999px",
        padding: "4px",
        width: "60px",
        height: "30px",
        cursor: "pointer",
        position: "relative",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          backgroundColor: isDark ? "#f5f5f5" : "#222",
          color: isDark ? "#222" : "#f5f5f5",
          borderRadius: "50%",
          width: "22px",
          height: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease",
        }}
      >
        {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
      </div>
    </button>
  );
};

export default ThemeToggle;