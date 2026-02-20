"use client";

import { useEffect, useState } from "react";
import { SearchModal } from "./SearchModal";
import { useSearch } from "@/hooks/useSearch";

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const { isOpen, openSearch, closeSearch, query, setQuery, results } = useSearch();
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMac(navigator.platform.includes("Mac"));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Global keyboard shortcut for Command/Ctrl+K and /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Command+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }

      // / key to open search (when not in an input)
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        openSearch();
      }

      // ESC to close
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openSearch, closeSearch, isOpen]);

  return (
    <>
      {children}
      <SearchModal
        isOpen={isOpen}
        onClose={closeSearch}
        query={query}
        setQuery={setQuery}
        results={results}
      />
      {/* Keyboard shortcut hints */}
      <div className="fixed bottom-4 right-4 hidden lg:flex flex-col items-end gap-2 text-xs text-gray-400 dark:text-gray-500 z-40">
        <div className="flex items-center gap-2">
          <span>Press</span>
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded font-mono">
            {isMac ? "⌘" : "Ctrl"} K
          </kbd>
          <span>or</span>
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded font-mono">
            /
          </kbd>
          <span>to search</span>
        </div>
      </div>
    </>
  );
}
