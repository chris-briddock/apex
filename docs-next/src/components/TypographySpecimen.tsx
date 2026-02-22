 "use client";

import { useState } from "react";

interface FontToken {
  name: string;
  value: string;
  variable: string;
  pixels?: string;
  description?: string;
}

const fontSizes: FontToken[] = [
  { name: "xs", value: "0.75rem", pixels: "12px", variable: "--font-size-xs", description: "Extra small text, captions" },
  { name: "sm", value: "0.875rem", pixels: "14px", variable: "--font-size-sm", description: "Small text, secondary content" },
  { name: "base", value: "1rem", pixels: "16px", variable: "--font-size-base", description: "Body text default" },
  { name: "lg", value: "1.125rem", pixels: "18px", variable: "--font-size-lg", description: "Large body text" },
  { name: "xl", value: "1.25rem", pixels: "20px", variable: "--font-size-xl", description: "Small headings" },
  { name: "2xl", value: "1.5rem", pixels: "24px", variable: "--font-size-2xl", description: "H6 equivalent" },
  { name: "3xl", value: "1.875rem", pixels: "30px", variable: "--font-size-3xl", description: "H5 equivalent" },
  { name: "4xl", value: "2.25rem", pixels: "36px", variable: "--font-size-4xl", description: "H4 equivalent" },
  { name: "5xl", value: "3rem", pixels: "48px", variable: "--font-size-5xl", description: "H3 equivalent" },
  { name: "6xl", value: "3.75rem", pixels: "60px", variable: "--font-size-6xl", description: "H2 equivalent" },
  { name: "7xl", value: "4.5rem", pixels: "72px", variable: "--font-size-7xl", description: "H1 equivalent" },
  { name: "8xl", value: "6rem", pixels: "96px", variable: "--font-size-8xl", description: "Display text" },
  { name: "9xl", value: "8rem", pixels: "128px", variable: "--font-size-9xl", description: "Hero text" },
];

const fontWeights: FontToken[] = [
  { name: "thin", value: "100", variable: "--font-weight-thin", description: "Hairline" },
  { name: "extralight", value: "200", variable: "--font-weight-extralight", description: "Extra light" },
  { name: "light", value: "300", variable: "--font-weight-light", description: "Light" },
  { name: "normal", value: "400", variable: "--font-weight-normal", description: "Regular" },
  { name: "medium", value: "500", variable: "--font-weight-medium", description: "Medium" },
  { name: "semibold", value: "600", variable: "--font-weight-semibold", description: "Semi-bold" },
  { name: "bold", value: "700", variable: "--font-weight-bold", description: "Bold" },
  { name: "extrabold", value: "800", variable: "--font-weight-extrabold", description: "Extra bold" },
  { name: "black", value: "900", variable: "--font-weight-black", description: "Black" },
];

const lineHeights: FontToken[] = [
  { name: "none", value: "1", variable: "--line-height-none", description: "No line height (tightest)" },
  { name: "tight", value: "1.25", variable: "--line-height-tight", description: "Tight headings" },
  { name: "snug", value: "1.375", variable: "--line-height-snug", description: "Snug body text" },
  { name: "normal", value: "1.5", variable: "--line-height-normal", description: "Normal body text" },
  { name: "relaxed", value: "1.625", variable: "--line-height-relaxed", description: "Relaxed reading" },
  { name: "loose", value: "2", variable: "--line-height-loose", description: "Loose spacing" },
];

const letterSpacings: FontToken[] = [
  { name: "tighter", value: "-0.05em", variable: "--letter-spacing-tighter", description: "Extra tight" },
  { name: "tight", value: "-0.025em", variable: "--letter-spacing-tight", description: "Tight" },
  { name: "normal", value: "0", variable: "--letter-spacing-normal", description: "Normal" },
  { name: "wide", value: "0.025em", variable: "--letter-spacing-wide", description: "Wide" },
  { name: "wider", value: "0.05em", variable: "--letter-spacing-wider", description: "Wider" },
  { name: "widest", value: "0.1em", variable: "--letter-spacing-widest", description: "Extra wide, uppercase" },
];

const sampleText = "The quick brown fox jumps over the lazy dog.";
const headingSample = "Design System";

export function TypographySpecimen() {
  const [activeTab, setActiveTab] = useState<"sizes" | "weights" | "line-heights" | "letter-spacing">("sizes");
  const [previewText, setPreviewText] = useState(sampleText);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToken = async (token: string) => {
    try {
      await navigator.clipboard.writeText(token);
      setCopied(token);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const tabs = [
    { id: "sizes", label: "Font Sizes" },
    { id: "weights", label: "Font Weights" },
    { id: "line-heights", label: "Line Heights" },
    { id: "letter-spacing", label: "Letter Spacing" },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Typography Preview Card */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Live Preview
          </h3>
          <input
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value || sampleText)}
            placeholder="Type to preview..."
            className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-6">
          {/* Heading Hierarchy */}
          <div className="space-y-4 border-b border-gray-200 dark:border-gray-700 pb-6">
            {[
              { level: "H1", size: "text-5xl", weight: "font-bold", lineHeight: "leading-tight" },
              { level: "H2", size: "text-4xl", weight: "font-bold", lineHeight: "leading-tight" },
              { level: "H3", size: "text-3xl", weight: "font-semibold", lineHeight: "leading-snug" },
              { level: "H4", size: "text-2xl", weight: "font-semibold", lineHeight: "leading-snug" },
              { level: "H5", size: "text-xl", weight: "font-medium", lineHeight: "leading-normal" },
              { level: "H6", size: "text-lg", weight: "font-medium", lineHeight: "leading-normal" },
            ].map((heading) => (
              <div key={heading.level} className="flex items-baseline gap-4">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono w-8">
                  {heading.level}
                </span>
                <span className={`${heading.size} ${heading.weight} ${heading.lineHeight} text-gray-900 dark:text-white`}>
                  {headingSample}
                </span>
              </div>
            ))}
          </div>

          {/* Body Text Styles */}
          <div className="space-y-3">
            {[
              { label: "Large", className: "text-lg" },
              { label: "Base", className: "text-base" },
              { label: "Small", className: "text-sm" },
              { label: "Extra Small", className: "text-xs" },
            ].map((style) => (
              <div key={style.label} className="flex items-baseline gap-4">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono w-20">
                  {style.label}
                </span>
                <span className={`${style.className} text-gray-700 dark:text-gray-300`}>
                  {previewText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        {/* Font Sizes */}
        {activeTab === "sizes" && (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {fontSizes.map((token) => (
              <div
                key={token.name}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <div className="flex-1">
                  <div
                    className="text-gray-900 dark:text-white mb-1"
                    style={{ fontSize: token.value }}
                  >
                    {previewText}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <code className="font-mono text-blue-600 dark:text-blue-400">
                      text-{token.name}
                    </code>
                    <span>{token.value}</span>
                    <span>({token.pixels})</span>
                    <span className="text-gray-400">{token.description}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToken(token.variable)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                >
                  {copied === token.variable ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Font Weights */}
        {activeTab === "weights" && (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {fontWeights.map((token) => (
              <div
                key={token.name}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <div className="flex-1">
                  <div
                    className="text-gray-900 dark:text-white text-xl mb-1"
                    style={{ fontWeight: token.value }}
                  >
                    {headingSample}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <code className="font-mono text-blue-600 dark:text-blue-400">
                      font-{token.name}
                    </code>
                    <span>{token.value}</span>
                    <span className="text-gray-400">{token.description}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToken(token.variable)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                >
                  {copied === token.variable ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Line Heights */}
        {activeTab === "line-heights" && (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {lineHeights.map((token) => (
              <div
                key={token.name}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <div className="flex-1">
                  <div
                    className="text-gray-900 dark:text-white text-base mb-1"
                    style={{ lineHeight: token.value }}
                  >
                    {previewText} {previewText} {previewText}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <code className="font-mono text-blue-600 dark:text-blue-400">
                      leading-{token.name}
                    </code>
                    <span>{token.value}</span>
                    <span className="text-gray-400">{token.description}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToken(token.variable)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                >
                  {copied === token.variable ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Letter Spacing */}
        {activeTab === "letter-spacing" && (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {letterSpacings.map((token) => (
              <div
                key={token.name}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <div className="flex-1">
                  <div
                    className="text-gray-900 dark:text-white text-2xl font-semibold mb-1 uppercase"
                    style={{ letterSpacing: token.value }}
                  >
                    {headingSample}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <code className="font-mono text-blue-600 dark:text-blue-400">
                      tracking-{token.name}
                    </code>
                    <span>{token.value}</span>
                    <span className="text-gray-400">{token.description}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToken(token.variable)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                >
                  {copied === token.variable ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Font Families */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          {
            name: "Sans Serif",
            family: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            variable: "--font-family-sans",
            sample: "The quick brown fox",
          },
          {
            name: "Serif",
            family: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            variable: "--font-family-serif",
            sample: "The quick brown fox",
          },
          {
            name: "Monospace",
            family: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace',
            variable: "--font-family-mono",
            sample: "const hello = world",
          },
        ].map((font) => (
          <div
            key={font.name}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900 dark:text-white">
                {font.name}
              </span>
              <button
                onClick={() => copyToken(font.variable)}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                {copied === font.variable ? "Copied!" : "Copy"}
              </button>
            </div>
            <p
              className="text-lg text-gray-700 dark:text-gray-300"
              style={{ fontFamily: font.family }}
            >
              {font.sample}
            </p>
            <code className="text-xs text-gray-400 dark:text-gray-500 font-mono mt-2 block truncate">
              {font.variable}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
