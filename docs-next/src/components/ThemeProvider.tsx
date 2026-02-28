"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import { useTheme } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

function ThemeSync({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;

    // Determine the actual theme (resolving 'system' to actual value)
    const actualTheme = theme === "system" ? systemTheme : theme;

    // Set data-theme attribute for ApexCSS dark mode utilities
    if (actualTheme === "dark") {
      html.setAttribute("data-theme", "dark");
    } else if (actualTheme === "light") {
      html.removeAttribute("data-theme");
    }
  }, [theme, systemTheme]);

  // Also set data-theme on mount for SSR hydration
  // This handles the case where theme is undefined during initial render
  useEffect(() => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    if (isDark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }, []);

  return <>{children}</>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeSync>{children}</ThemeSync>
    </NextThemesProvider>
  );
}
