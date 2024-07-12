// app/components/ThemeSwitcher.tsx
"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSwitcherProps {
  width: number;
  height: number;
}

export function ThemeSwitcher({ width, height }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Image
            className="transition ease-in-out hover:rotate-45 duration-300"
            src="moon.svg"
            width={width}
            height={height}
            alt="moon"
          />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          {" "}
          <Image
            className="transition ease-in-out hover:-rotate-45 duration-300"
            src="sun.svg"
            width={width}
            height={height}
            alt="sun"
          />
        </button>
      )}
    </div>
  );
}
