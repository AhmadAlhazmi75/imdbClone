"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function DarkModeSwitch() {
  //theme returns dark, light, or system
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true); // set mounted to true when the component mounts so we avoid conflicts between server and client in the theme mode
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="cursor-pointer text-xl hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="cursor-pointer text-xl hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}

export default DarkModeSwitch;
