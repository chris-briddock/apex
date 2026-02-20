"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import { useVersion, versions } from "@/components/VersionProvider";
import { Sparkles, AlertTriangle, CheckCircle, Calendar, ArrowRight, ChevronDown, ChevronUp, Link } from "lucide-react";
import { useState } from "react";

interface ChangelogVersion {
  version: string;
  date: string;
  type: "major" | "minor" | "patch" | "beta";
  breaking: boolean;
  title: string;
  description: string;
  changes: {
    type: "feature" | "fix" | "breaking" | "deprecation";
    description: string;
  }[];
  migrationGuide?: string;
}

const changelogData: ChangelogVersion[] = [
  {
    version: "2.1.0",
    date: "2025-03-01",
    type: "beta",
    breaking: true,
    title: "Animation System Overhaul",
    description: "Complete rewrite of the animation system with better performance and more flexibility.",
    changes: [
      { type: "breaking", description: "Renamed all animation utility classes from animate-* to motion-*" },
      { type: "feature", description: "Added CSS custom property based animation timing" },
      { type: "feature", description: "New plugin architecture for custom animations" },
      { type: "deprecation", description: "Legacy transition-* classes are deprecated" },
    ],
    migrationGuide: "/migration/v2.0-to-v2.1",
  },
  {
    version: "2.0.0",
    date: "2025-02-15",
    type: "major",
    breaking: false,
    title: "RTL & Grid Improvements",
    description: "Right-to-left language support and enhanced grid system with auto-fit capabilities.",
    changes: [
      { type: "feature", description: "Full RTL support with logical properties" },
      { type: "feature", description: "New auto-fit grid utilities" },
      { type: "feature", description: "Improved dark mode color palette" },
      { type: "fix", description: "Fixed spacing inconsistencies in RTL layouts" },
      { type: "feature", description: "Performance optimizations for large CSS bundles" },
    ],
  },
  {
    version: "1.1.0",
    date: "2025-01-15",
    type: "minor",
    breaking: false,
    title: "Accessibility & Spacing",
    description: "Enhanced accessibility features and expanded spacing scale.",
    changes: [
      { type: "feature", description: "New spacing scale from 0.5 to 96" },
      { type: "feature", description: "Improved focus-visible utilities" },
      { type: "feature", description: "ARIA helper utilities" },
      { type: "fix", description: "Fixed contrast ratios in dark mode" },
    ],
  },
  {
    version: "1.0.0",
    date: "2024-12-01",
    type: "major",
    breaking: false,
    title: "Initial Stable Release",
    description: "First stable release of Apex with core utility classes and components.",
    changes: [
      { type: "feature", description: "Complete utility-first CSS framework" },
      { type: "feature", description: "500+ utility classes" },
      { type: "feature", description: "Component system with 20+ pre-built components" },
      { type: "feature", description: "Dark mode support" },
      { type: "feature", description: "Responsive design utilities" },
    ],
  },
];

const typeConfig = {
  major: { color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", label: "Major" },
  minor: { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", label: "Minor" },
  patch: { color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", label: "Patch" },
  beta: { color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400", label: "Beta" },
};

const changeTypeConfig = {
  feature: { color: "bg-green-500", label: "Feature" },
  fix: { color: "bg-blue-500", label: "Fix" },
  breaking: { color: "bg-red-500", label: "Breaking" },
  deprecation: { color: "bg-yellow-500", label: "Deprecated" },
};

function VersionCard({ version, isLatest }: { version: ChangelogVersion; isLatest: boolean }) {
  const [isExpanded, setIsExpanded] = useState(isLatest);
  const config = typeConfig[version.type];

  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${
      isLatest ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900" : ""
    }`}>
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`px-2 py-1 rounded text-xs font-semibold ${config.color}`}>
            {config.label}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              v{version.version}
              {isLatest && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">
                  <Sparkles className="w-3 h-3" />
                  Latest
                </span>
              )}
              {version.breaking && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs rounded">
                  <AlertTriangle className="w-3 h-3" />
                  Breaking
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{version.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            {version.date}
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50/50 dark:bg-gray-900/50">
          <p className="text-gray-600 dark:text-gray-400 mb-4">{version.description}</p>

          {/* Changes */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Changes</h4>
            {version.changes.map((change, index) => {
              const changeConfig = changeTypeConfig[change.type];
              return (
                <div key={index} className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full ${changeConfig.color} mt-1.5 flex-shrink-0`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{change.description}</span>
                </div>
              );
            })}
          </div>

          {/* Migration Guide Link */}
          {version.migrationGuide && (
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Breaking changes detected.
                <a
                  href={version.migrationGuide}
                  className="underline hover:text-yellow-900 dark:hover:text-yellow-200 font-medium inline-flex items-center gap-1"
                >
                  View migration guide
                  <ArrowRight className="w-3 h-3" />
                </a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ChangelogPage() {
  const { currentVersion, isLatest } = useVersion();

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Changelog" },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Changelog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Track changes, updates, and improvements to Apex
        </p>
      </div>

      {/* Current Version Alert */}
      {!isLatest && (
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-400">
              New version available
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              You're viewing documentation for v{currentVersion.version}.
              <Link href="/changelog" className="underline hover:text-blue-900 dark:hover:text-blue-200 ml-1">
                View latest changes
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{versions.length}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Total Versions</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {versions.filter((v) => v.isStable).length}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Stable Releases</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {versions.filter((v) => !v.isStable).length}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Beta Releases</div>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
          <div className="text-sm text-gray-500 dark:text-gray-400">Latest: {versions[0].label}</div>
        </div>
      </div>

      {/* Changelog */}
      <div className="space-y-4">
        {changelogData.map((version) => (
          <VersionCard key={version.version} version={version} isLatest={version.version === versions[0].version} />
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Subscribe to our GitHub releases to get notified about new versions.
        </p>
        <a
          href="https://github.com/apexcss/apexcss/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}
