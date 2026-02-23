"use client";

import { useState } from "react";

interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  borderRadius: string;
  shadowIntensity: string;
}

const presetThemes: ThemeConfig[] = [
  {
    name: "Default",
    primary: "#3b82f6",
    secondary: "#64748b",
    success: "#22c55e",
    danger: "#ef4444",
    warning: "#f59e0b",
    info: "#0ea5e9",
    borderRadius: "0.5",
    shadowIntensity: "1",
  },
  {
    name: "Ocean",
    primary: "#0ea5e9",
    secondary: "#6366f1",
    success: "#10b981",
    danger: "#f43f5e",
    warning: "#f59e0b",
    info: "#3b82f6",
    borderRadius: "0.75",
    shadowIntensity: "0.8",
  },
  {
    name: "Sunset",
    primary: "#f97316",
    secondary: "#ec4899",
    success: "#84cc16",
    danger: "#ef4444",
    warning: "#fbbf24",
    info: "#06b6d4",
    borderRadius: "1",
    shadowIntensity: "1.2",
  },
  {
    name: "Forest",
    primary: "#16a34a",
    secondary: "#78716c",
    success: "#22c55e",
    danger: "#dc2626",
    warning: "#d97706",
    info: "#0891b2",
    borderRadius: "0.25",
    shadowIntensity: "0.6",
  },
  {
    name: "Midnight",
    primary: "#8b5cf6",
    secondary: "#64748b",
    success: "#22c55e",
    danger: "#ef4444",
    warning: "#f59e0b",
    info: "#38bdf8",
    borderRadius: "0.5",
    shadowIntensity: "1.5",
  },
];

export function ThemePlayground() {
  const [theme, setTheme] = useState<ThemeConfig>(presetThemes[0]);
  const [customColors, setCustomColors] = useState({
    primary: presetThemes[0].primary,
    secondary: presetThemes[0].secondary,
    success: presetThemes[0].success,
    danger: presetThemes[0].danger,
    warning: presetThemes[0].warning,
    info: presetThemes[0].info,
  });
  const [borderRadius, setBorderRadius] = useState(presetThemes[0].borderRadius);
  const [shadowIntensity, setShadowIntensity] = useState(presetThemes[0].shadowIntensity);
  const [copied, setCopied] = useState(false);

  const cssOutput = `:root {
  /* Colors */
  --color-primary: ${customColors.primary};
  --color-secondary: ${customColors.secondary};
  --color-success: ${customColors.success};
  --color-danger: ${customColors.danger};
  --color-warning: ${customColors.warning};
  --color-info: ${customColors.info};

  /* Border Radius */
  --border-radius-sm: ${Number(borderRadius) * 0.25}rem;
  --border-radius-base: ${Number(borderRadius) * 0.5}rem;
  --border-radius-md: ${Number(borderRadius) * 0.75}rem;
  --border-radius-lg: ${Number(borderRadius)}rem;
  --border-radius-xl: ${Number(borderRadius) * 1.5}rem;

  /* Shadows */
  --shadow-color: 0 0 0;
  --shadow-sm: 0 1px 2px 0 rgba(var(--shadow-color), ${0.05 * Number(shadowIntensity)});
  --shadow-base: 0 1px 3px 0 rgba(var(--shadow-color), ${0.1 * Number(shadowIntensity)}), 0 1px 2px 0 rgba(var(--shadow-color), ${0.06 * Number(shadowIntensity)});
  --shadow-md: 0 4px 6px -1px rgba(var(--shadow-color), ${0.1 * Number(shadowIntensity)}), 0 2px 4px -1px rgba(var(--shadow-color), ${0.06 * Number(shadowIntensity)});
}`;

  const applyPreset = (preset: ThemeConfig) => {
    setTheme(preset);
    setCustomColors({
      primary: preset.primary,
      secondary: preset.secondary,
      success: preset.success,
      danger: preset.danger,
      warning: preset.warning,
      info: preset.info,
    });
    setBorderRadius(preset.borderRadius);
    setShadowIntensity(preset.shadowIntensity);
  };

  const copyCSS = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const updateColor = (key: keyof typeof customColors, value: string) => {
    setCustomColors((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Theme Presets */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Quick Presets
        </h3>
        <div className="flex flex-wrap gap-2">
          {presetThemes.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                theme.name === preset.name
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-6">
          {/* Color Controls */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Colors
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(customColors).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {key}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => updateColor(key as keyof typeof customColors, e.target.value)}
                      className="h-10 w-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => updateColor(key as keyof typeof customColors, e.target.value)}
                      className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Border Radius
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Base Radius
                  </label>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {borderRadius}rem
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.25"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(e.target.value)}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                </div>
              </div>
              <div className="flex gap-2">
                {["0", "0.25", "0.5", "0.75", "1", "1.5"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setBorderRadius(r)}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${
                      borderRadius === r
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {r}rem
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Shadow Intensity */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Shadow Intensity
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Intensity
                  </label>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {shadowIntensity}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={shadowIntensity}
                  onChange={(e) => setShadowIntensity(e.target.value)}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          {/* Live Preview */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Live Preview
            </h4>
            <div
              className="space-y-4 p-4 rounded-xl"
              style={{
                backgroundColor: "#f9fafb",
              }}
            >
              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  className="px-4 py-2 text-white font-medium transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: customColors.primary,
                    borderRadius: `${Number(borderRadius) * 0.375}rem`,
                  }}
                >
                  Primary
                </button>
                <button
                  className="px-4 py-2 text-white font-medium transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: customColors.secondary,
                    borderRadius: `${Number(borderRadius) * 0.375}rem`,
                  }}
                >
                  Secondary
                </button>
                <button
                  className="px-4 py-2 text-white font-medium transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: customColors.success,
                    borderRadius: `${Number(borderRadius) * 0.375}rem`,
                  }}
                >
                  Success
                </button>
                <button
                  className="px-4 py-2 text-white font-medium transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: customColors.danger,
                    borderRadius: `${Number(borderRadius) * 0.375}rem`,
                  }}
                >
                  Danger
                </button>
              </div>

              {/* Card */}
              <div
                className="p-4 bg-white"
                style={{
                  borderRadius: `${Number(borderRadius)}rem`,
                  boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${0.1 * Number(shadowIntensity)}), 0 2px 4px -1px rgba(0, 0, 0, ${0.06 * Number(shadowIntensity)})`,
                }}
              >
                <h5
                  className="font-semibold mb-2"
                  style={{ color: customColors.primary }}
                >
                  Card Title
                </h5>
                <p className="text-gray-600 text-sm">
                  This card demonstrates the shadow and border radius settings.
                </p>
              </div>

              {/* Alerts */}
              <div className="space-y-2">
                <div
                  className="px-4 py-3 text-sm font-medium"
                  style={{
                    backgroundColor: `${customColors.info}20`,
                    color: customColors.info,
                    borderRadius: `${Number(borderRadius) * 0.375}rem`,
                    borderLeft: `4px solid ${customColors.info}`,
                  }}
                >
                  Info alert with custom color
                </div>
                <div
                  className="px-4 py-3 text-sm font-medium"
                  style={{
                    backgroundColor: `${customColors.warning}20`,
                    color: customColors.warning,
                    borderRadius: `${Number(borderRadius) * 0.375}rem`,
                    borderLeft: `4px solid ${customColors.warning}`,
                  }}
                >
                  Warning alert with custom color
                </div>
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none"
                style={{
                  borderRadius: `${Number(borderRadius) * 0.375}rem`,
                  borderColor: customColors.primary,
                }}
              />
            </div>
          </div>

          {/* CSS Output */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                Generated CSS
              </span>
              <button
                onClick={copyCSS}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                {copied ? "Copied!" : "Copy CSS"}
              </button>
            </div>
            <pre className="p-4 text-xs bg-gray-50 dark:bg-gray-900 overflow-x-auto">
              <code className="text-gray-700 dark:text-gray-300 font-mono">
                {cssOutput}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
