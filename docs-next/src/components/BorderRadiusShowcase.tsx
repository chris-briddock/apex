"use client";

import { useState } from "react";

interface RadiusToken {
  name: string;
  value: string;
  pixels: string;
  variable: string;
  description: string;
}

const radiusTokens: RadiusToken[] = [
  { name: "none", value: "0", pixels: "0px", variable: "--border-radius-none", description: "No radius" },
  { name: "sm", value: "0.125rem", pixels: "2px", variable: "--border-radius-sm", description: "Small radius" },
  { name: "base", value: "0.25rem", pixels: "4px", variable: "--border-radius-base", description: "Base radius" },
  { name: "md", value: "0.375rem", pixels: "6px", variable: "--border-radius-md", description: "Medium radius" },
  { name: "lg", value: "0.5rem", pixels: "8px", variable: "--border-radius-lg", description: "Large radius" },
  { name: "xl", value: "0.75rem", pixels: "12px", variable: "--border-radius-xl", description: "Extra large" },
  { name: "2xl", value: "1rem", pixels: "16px", variable: "--border-radius-2xl", description: "2X large" },
  { name: "3xl", value: "1.5rem", pixels: "24px", variable: "--border-radius-3xl", description: "3X large" },
  { name: "full", value: "9999px", pixels: "Full", variable: "--border-radius-full", description: "Pill/Full" },
];

const shadowTokens = [
  { name: "none", value: "none", variable: "--shadow-none", description: "No shadow" },
  { name: "sm", value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", variable: "--shadow-sm", description: "Small shadow" },
  { name: "base", value: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", variable: "--shadow-base", description: "Base shadow" },
  { name: "md", value: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", variable: "--shadow-md", description: "Medium shadow" },
  { name: "lg", value: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", variable: "--shadow-lg", description: "Large shadow" },
  { name: "xl", value: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", variable: "--shadow-xl", description: "Extra large" },
  { name: "2xl", value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", variable: "--shadow-2xl", description: "2X large" },
  { name: "inner", value: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)", variable: "--shadow-inner", description: "Inner shadow" },
];

export function BorderRadiusShowcase() {
  const [activeTab, setActiveTab] = useState<"radius" | "shadow">("radius");
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

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
        {[
          { id: "radius", label: "Border Radius" },
          { id: "shadow", label: "Shadows" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Border Radius Showcase */}
      {activeTab === "radius" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {radiusTokens.map((token) => (
            <div
              key={token.name}
              className="group border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <code className="text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  rounded-{token.name}
                </code>
                <button
                  onClick={() => copyToken(token.variable)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {copied === token.variable ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="h-24 bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <div
                  className="w-full h-full bg-blue-500"
                  style={{ borderRadius: token.value }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{token.value}</span>
                <span>{token.pixels}</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {token.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Shadow Showcase */}
      {activeTab === "shadow" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shadowTokens.map((token) => (
            <div
              key={token.name}
              className="group border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <code className="text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  shadow{token.name === "base" ? "" : `-${token.name}`}
                </code>
                <button
                  onClick={() => copyToken(token.variable)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {copied === token.variable ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="h-24 bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <div
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-lg"
                  style={{ boxShadow: token.value }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                {token.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Corner Examples */}
      {activeTab === "radius" && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-900/30">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Individual Corner Examples
          </h4>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "rounded-t-lg", desc: "Top corners" },
              { name: "rounded-b-lg", desc: "Bottom corners" },
              { name: "rounded-l-lg", desc: "Left corners" },
              { name: "rounded-r-lg", desc: "Right corners" },
              { name: "rounded-tl-lg", desc: "Top left" },
              { name: "rounded-tr-lg", desc: "Top right" },
              { name: "rounded-bl-lg", desc: "Bottom left" },
              { name: "rounded-br-lg", desc: "Bottom right" },
            ].map((example) => (
              <div key={example.name} className="text-center">
                <div
                  className={`w-16 h-16 bg-blue-500 ${example.name} mb-2`}
                />
                <code className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  {example.name}
                </code>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {example.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
