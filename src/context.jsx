import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("dark-mode");

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
};

const AppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("dark-mode", newDarkMode);
  };

  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
