import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={() => toggleDarkMode()}>
        {isDarkMode ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
