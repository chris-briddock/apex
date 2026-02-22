"use client";

import { useState, useMemo } from "react";

interface ColorSwatch {
  name: string;
  value: string;
  variable: string;
  shades?: { name: string; value: string; variable: string }[];
}

const colorPalettes: ColorSwatch[] = [
  {
    name: "Gray",
    value: "#6b7280",
    variable: "--color-gray-500",
    shades: [
      { name: "50", value: "#f9fafb", variable: "--color-gray-50" },
      { name: "100", value: "#f3f4f6", variable: "--color-gray-100" },
      { name: "200", value: "#e5e7eb", variable: "--color-gray-200" },
      { name: "300", value: "#d1d5db", variable: "--color-gray-300" },
      { name: "400", value: "#9ca3af", variable: "--color-gray-400" },
      { name: "500", value: "#6b7280", variable: "--color-gray-500" },
      { name: "600", value: "#4b5563", variable: "--color-gray-600" },
      { name: "700", value: "#374151", variable: "--color-gray-700" },
      { name: "800", value: "#1f2937", variable: "--color-gray-800" },
      { name: "900", value: "#111827", variable: "--color-gray-900" },
    ],
  },
  {
    name: "Blue",
    value: "#3b82f6",
    variable: "--color-blue-500",
    shades: [
      { name: "50", value: "#eff6ff", variable: "--color-blue-50" },
      { name: "100", value: "#dbeafe", variable: "--color-blue-100" },
      { name: "200", value: "#bfdbfe", variable: "--color-blue-200" },
      { name: "300", value: "#93c5fd", variable: "--color-blue-300" },
      { name: "400", value: "#60a5fa", variable: "--color-blue-400" },
      { name: "500", value: "#3b82f6", variable: "--color-blue-500" },
      { name: "600", value: "#2563eb", variable: "--color-blue-600" },
      { name: "700", value: "#1d4ed8", variable: "--color-blue-700" },
      { name: "800", value: "#1e40af", variable: "--color-blue-800" },
      { name: "900", value: "#1e3a8a", variable: "--color-blue-900" },
    ],
  },
  {
    name: "Green",
    value: "#22c55e",
    variable: "--color-green-500",
    shades: [
      { name: "50", value: "#f0fdf4", variable: "--color-green-50" },
      { name: "100", value: "#dcfce7", variable: "--color-green-100" },
      { name: "200", value: "#bbf7d0", variable: "--color-green-200" },
      { name: "300", value: "#86efac", variable: "--color-green-300" },
      { name: "400", value: "#4ade80", variable: "--color-green-400" },
      { name: "500", value: "#22c55e", variable: "--color-green-500" },
      { name: "600", value: "#16a34a", variable: "--color-green-600" },
      { name: "700", value: "#15803d", variable: "--color-green-700" },
      { name: "800", value: "#166534", variable: "--color-green-800" },
      { name: "900", value: "#14532d", variable: "--color-green-900" },
    ],
  },
  {
    name: "Red",
    value: "#ef4444",
    variable: "--color-red-500",
    shades: [
      { name: "50", value: "#fef2f2", variable: "--color-red-50" },
      { name: "100", value: "#fee2e2", variable: "--color-red-100" },
      { name: "200", value: "#fecaca", variable: "--color-red-200" },
      { name: "300", value: "#fca5a5", variable: "--color-red-300" },
      { name: "400", value: "#f87171", variable: "--color-red-400" },
      { name: "500", value: "#ef4444", variable: "--color-red-500" },
      { name: "600", value: "#dc2626", variable: "--color-red-600" },
      { name: "700", value: "#b91c1c", variable: "--color-red-700" },
      { name: "800", value: "#991b1b", variable: "--color-red-800" },
      { name: "900", value: "#7f1d1d", variable: "--color-red-900" },
    ],
  },
  {
    name: "Yellow",
    value: "#eab308",
    variable: "--color-yellow-500",
    shades: [
      { name: "50", value: "#fefce8", variable: "--color-yellow-50" },
      { name: "100", value: "#fef9c3", variable: "--color-yellow-100" },
      { name: "200", value: "#fef08a", variable: "--color-yellow-200" },
      { name: "300", value: "#fde047", variable: "--color-yellow-300" },
      { name: "400", value: "#facc15", variable: "--color-yellow-400" },
      { name: "500", value: "#eab308", variable: "--color-yellow-500" },
      { name: "600", value: "#ca8a04", variable: "--color-yellow-600" },
      { name: "700", value: "#a16207", variable: "--color-yellow-700" },
      { name: "800", value: "#854d0e", variable: "--color-yellow-800" },
      { name: "900", value: "#713f12", variable: "--color-yellow-900" },
    ],
  },
  {
    name: "Purple",
    value: "#a855f7",
    variable: "--color-purple-500",
    shades: [
      { name: "50", value: "#faf5ff", variable: "--color-purple-50" },
      { name: "100", value: "#f3e8ff", variable: "--color-purple-100" },
      { name: "200", value: "#e9d5ff", variable: "--color-purple-200" },
      { name: "300", value: "#d8b4fe", variable: "--color-purple-300" },
      { name: "400", value: "#c084fc", variable: "--color-purple-400" },
      { name: "500", value: "#a855f7", variable: "--color-purple-500" },
      { name: "600", value: "#9333ea", variable: "--color-purple-600" },
      { name: "700", value: "#7c3aed", variable: "--color-purple-700" },
      { name: "800", value: "#6b21a8", variable: "--color-purple-800" },
      { name: "900", value: "#581c87", variable: "--color-purple-900" },
    ],
  },
];

const semanticColors = [
  { name: "Primary", value: "#3b82f6", variable: "--color-primary", description: "Main brand color" },
  { name: "Secondary", value: "#64748b", variable: "--color-secondary", description: "Secondary accent" },
  { name: "Success", value: "#22c55e", variable: "--color-success", description: "Success states" },
  { name: "Danger", value: "#ef4444", variable: "--color-danger", description: "Error states" },
  { name: "Warning", value: "#f59e0b", variable: "--color-warning", description: "Warning states" },
  { name: "Info", value: "#0ea5e9", variable: "--color-info", description: "Info states" },
  { name: "Light", value: "#f3f4f6", variable: "--color-light", description: "Light backgrounds" },
  { name: "Dark", value: "#1f2937", variable: "--color-dark", description: "Dark backgrounds" },
];

// Calculate relative luminance
function getLuminance(hex: string): number {
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const [rs, gs, bs] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function getContrastGrade(ratio: number): { grade: string; color: string } {
  if (ratio >= 7) return { grade: "AAA", color: "text-green-600 dark:text-green-400" };
  if (ratio >= 4.5) return { grade: "AA", color: "text-blue-600 dark:text-blue-400" };
  if (ratio >= 3) return { grade: "AA Large", color: "text-amber-600 dark:text-amber-400" };
  return { grade: "Fail", color: "text-red-600 dark:text-red-400" };
}

// Get text color based on background brightness
function getTextColor(bgColor: string): string {
  const luminance = getLuminance(bgColor);
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

export function ColorExplorer() {
  const [selectedPalette, setSelectedPalette] = useState<string>("all");
  const [contrastBg, setContrastBg] = useState<string>("#ffffff");
  const [contrastFg, setContrastFg] = useState<string>("#111827");
  const [copiedVariable, setCopiedVariable] = useState<string | null>(null);
  const [hoveredShade, setHoveredShade] = useState<{ palette: string; shade: string } | null>(null);

  const contrastRatio = useMemo(() => {
    return getContrastRatio(contrastBg, contrastFg);
  }, [contrastBg, contrastFg]);

  const contrastInfo = getContrastGrade(contrastRatio);

  const copyVariable = async (variable: string) => {
    try {
      await navigator.clipboard.writeText(`var(${variable})`);
      setCopiedVariable(variable);
      setTimeout(() => setCopiedVariable(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const filteredPalettes = selectedPalette === "all"
    ? colorPalettes
    : colorPalettes.filter((p) => p.name.toLowerCase() === selectedPalette);

  return (
    <div className="space-y-8">
      {/* Semantic Colors */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Semantic Colors
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {semanticColors.map((color) => (
            <div
              key={color.name}
              className="group relative border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => copyVariable(color.variable)}
            >
              <div
                className="h-24 w-full"
                style={{ backgroundColor: color.value }}
              />
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 dark:text-white text-sm">
                    {color.name}
                  </span>
                  {copiedVariable === color.variable && (
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Copied!
                    </span>
                  )}
                </div>
                <code className="text-xs text-gray-500 dark:text-gray-400 font-mono block truncate">
                  {color.variable}
                </code>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {color.value}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {color.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Palettes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Color Palettes
          </h3>
          <select
            value={selectedPalette}
            onChange={(e) => setSelectedPalette(e.target.value)}
            className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Palettes</option>
            {colorPalettes.map((p) => (
              <option key={p.name} value={p.name.toLowerCase()}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredPalettes.map((palette) => (
            <div key={palette.name} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
              <div className="bg-gray-50 dark:bg-gray-900/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {palette.name}
                </span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                  {palette.shades?.map((shade) => {
                    const textColor = getTextColor(shade.value);
                    const isHovered = hoveredShade?.palette === palette.name && hoveredShade?.shade === shade.name;
                    return (
                      <button
                        key={shade.name}
                        onClick={() => copyVariable(shade.variable)}
                        onMouseEnter={() => setHoveredShade({ palette: palette.name, shade: shade.name })}
                        onMouseLeave={() => setHoveredShade(null)}
                        className="group relative pt-4 pb-4 h-14 sm:h-16 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: shade.value }}
                        title={`${palette.name} ${shade.name}: ${shade.value}`}
                      >
                        {/* Shade number - always visible */}
                        <span
                          className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-mono font-semibold tracking-tight"
                          style={{ color: textColor }}
                        >
                          {shade.name}
                        </span>

                        {/* Hex code on hover */}
                        <span
                          className={`absolute inset-x-0 bottom-0 py-1 text-[10px] font-mono text-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                          style={{ color: textColor, backgroundColor: textColor === '#000000' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' }}
                        >
                          {shade.value}
                        </span>

                        {/* Copied indicator */}
                        {copiedVariable === shade.variable && (
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                            Copied!
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* CSS Variable reference */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Click any shade to copy its CSS variable
                  </span>
                  {hoveredShade?.palette === palette.name && (
                    <code className="font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      {palette.shades?.find(s => s.name === hoveredShade.shade)?.variable}
                    </code>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contrast Checker */}
      <section className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-900/30">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Accessibility Contrast Checker
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Background Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={contrastBg}
                  onChange={(e) => setContrastBg(e.target.value)}
                  className="h-10 w-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
                />
                <input
                  type="text"
                  value={contrastBg}
                  onChange={(e) => setContrastBg(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Text Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={contrastFg}
                  onChange={(e) => setContrastFg(e.target.value)}
                  className="h-10 w-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
                />
                <input
                  type="text"
                  value={contrastFg}
                  onChange={(e) => setContrastFg(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div
              className="rounded-xl p-6 mb-4 border border-gray-200 dark:border-gray-700"
              style={{ backgroundColor: contrastBg, color: contrastFg }}
            >
              <p className="text-lg font-medium">Sample Text</p>
              <p className="text-sm opacity-80">The quick brown fox jumps over the lazy dog.</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {contrastRatio.toFixed(2)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Contrast Ratio
                </div>
              </div>
              <div className={`text-right ${contrastInfo.color}`}>
                <div className="text-2xl font-bold">{contrastInfo.grade}</div>
                <div className="text-sm">WCAG Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
