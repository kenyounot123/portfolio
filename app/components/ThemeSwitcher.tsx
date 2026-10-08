"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const BUTTON_SIZE = "size-10 shrink-0 rounded-full";

export function ThemeSwitcher() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return <div className={BUTTON_SIZE} aria-hidden />;

  const isDark = resolvedTheme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`${BUTTON_SIZE} flex items-center justify-center border border-rule text-body dark:text-ink`}
    >
      <Icon size={18} strokeWidth={2} />
    </button>
  );
}
