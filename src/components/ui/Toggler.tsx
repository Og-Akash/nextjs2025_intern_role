import React from "react";
import Button from "./Button";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} className="p-2 text-xl rounded border cursor-pointer">
      {theme === "light" ? "☀️" : "🌙"}
    </Button>
  );
};

export default ThemeToggleButton;
