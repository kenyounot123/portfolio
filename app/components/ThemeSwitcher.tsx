// app/components/ThemeSwitcher.tsx
"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
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
          <Image src="moon.svg" width={50} height={50} alt="moon" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          {" "}
          <Image src="sun.svg" width={50} height={50} alt="sun" />
        </button>
      )}
    </div>
  );
}
