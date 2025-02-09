import { create } from "zustand";

const useThemeStore = create((set) => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme") || "system";
  const initialTheme = savedTheme === "system" ? (prefersDarkMode ? "dark" : "light") : savedTheme;

  localStorage.setItem("theme", savedTheme);

  return {
    theme: initialTheme,
    setTheme: (selectedTheme) => {
      localStorage.setItem("theme", selectedTheme);
      set({ theme: selectedTheme === "system" ? (prefersDarkMode ? "dark" : "light") : selectedTheme });
    },
  };
});

export default useThemeStore;
