"use client";

import { useState, useMemo, useCallback } from "react";
import Fuse from "fuse.js";
import { searchData, SearchItem } from "@/lib/search-data";

const fuseOptions = {
  keys: [
    { name: "title", weight: 0.4 },
    { name: "description", weight: 0.3 },
    { name: "keywords", weight: 0.2 },
    { name: "category", weight: 0.1 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
};

export function useSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const fuse = useMemo(() => {
    return new Fuse(searchData, fuseOptions);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((result) => ({
      ...result.item,
      score: result.score,
    }));
  }, [query, fuse]);

  const openSearch = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const toggleSearch = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (isOpen) setQuery("");
  }, [isOpen]);

  return {
    query,
    setQuery,
    results,
    isOpen,
    openSearch,
    closeSearch,
    toggleSearch,
  };
}

export type { SearchItem };
