"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      title="switch theme white"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      variant="ghost"
      size="icon"
    >
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90  scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
