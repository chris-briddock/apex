"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useSyncExternalStore } from "react";

interface Version {
  version: string;
  label: string;
  isStable: boolean;
  releaseDate: string;
  changes: string[];
  breaking?: boolean;
}

interface VersionContextType {
  currentVersion: Version;
  setVersion: (version: string) => void;
  versions: Version[];
  isLatest: boolean;
  hasUpdate: boolean;
}

const versions: Version[] = [
  {
    version: "2.0.0",
    label: "v2.0.0",
    isStable: true,
    releaseDate: "2025-02-15",
    changes: [
      "New grid system with auto-fit support",
      "Improved dark mode colors",
      "Added RTL utilities",
      "Performance optimizations",
    ],
  },
  {
    version: "1.1.0",
    label: "v1.1.0",
    isStable: true,
    releaseDate: "2025-01-15",
    changes: [
      "Added new spacing scale",
      "Flexbox improvements",
      "Accessibility enhancements",
    ],
  },
  {
    version: "1.0.0",
    label: "v1.0.0",
    isStable: true,
    releaseDate: "2024-12-01",
    changes: [
      "Initial stable release",
      "Core utility classes",
      "Component system",
    ],
  },
  {
    version: "2.1.0",
    label: "v2.1.0 (Beta)",
    isStable: false,
    releaseDate: "2025-03-01",
    breaking: true,
    changes: [
      "New animation system",
      "Breaking: Renamed utility classes",
      "Plugin architecture",
    ],
  },
];

const STORAGE_KEY = "apexcss-version";
const LATEST_VERSION = versions[0];

const VersionContext = createContext<VersionContextType | null>(null);

// Subscribe function for useSyncExternalStore
function subscribe(callback: () => void) {
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}

// Get snapshot - reads current localStorage value
function getSnapshot(): Version {
  if (typeof window === "undefined") return LATEST_VERSION;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const found = versions.find((v) => v.version === stored);
      if (found) return found;
    }
  } catch {
    // Ignore localStorage errors
  }
  return LATEST_VERSION;
}

// Server snapshot - always returns default for SSR
function getServerSnapshot(): Version {
  return LATEST_VERSION;
}

export function VersionProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore to safely sync with localStorage
  const storedVersion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Use local state that we can update immediately
  const [currentVersion, setCurrentVersionState] = useState<Version>(storedVersion);

  // Update local state when external store changes
  if (currentVersion.version !== storedVersion.version) {
    // This is safe because it happens during render and uses the external store value
    setCurrentVersionState(storedVersion);
  }

  const setVersion = useCallback((version: string) => {
    const found = versions.find((v) => v.version === version);
    if (found) {
      setCurrentVersionState(found);
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, version);
        } catch {
          // Ignore localStorage errors
        }
      }
    }
  }, []);

  const isLatest = currentVersion.version === LATEST_VERSION.version;
  const hasUpdate = !isLatest;

  return (
    <VersionContext.Provider
      value={{
        currentVersion,
        setVersion,
        versions,
        isLatest,
        hasUpdate,
      }}
    >
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
}

export { versions, LATEST_VERSION };
export type { Version };
