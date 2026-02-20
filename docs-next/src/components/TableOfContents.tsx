"use client";

import { useState, useEffect, useRef } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use setTimeout to defer the DOM query to avoid cascading renders
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll("h2[id], h3[id]");
      const items: TOCItem[] = Array.from(elements).map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: parseInt(el.tagName.charAt(1)),
      }));
      setHeadings(items);
    }, 0);

    // Set up mutation observer to watch for content changes
    const mutationObserver = new MutationObserver(() => {
      const elements = document.querySelectorAll("h2[id], h3[id]");
      const items: TOCItem[] = Array.from(elements).map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: parseInt(el.tagName.charAt(1)),
      }));
      setHeadings(items);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeoutId);
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -80% 0%" }
    );

    const elements = document.querySelectorAll("h2[id], h3[id]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="fixed right-8 top-8 w-64 hidden xl:block">
      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          On this page
        </h3>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block py-1 px-2 text-sm rounded transition-colors ${
                  activeId === heading.id
                    ? "text-blue-500 bg-blue-50 dark:bg-blue-500/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                } ${heading.level === 3 ? "ml-3" : ""}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
