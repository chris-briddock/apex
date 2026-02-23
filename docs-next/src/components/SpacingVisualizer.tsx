"use client";

import { useState } from "react";

interface SpacingToken {
  name: string;
  value: string;
  pixels: string;
  variable: string;
  rem: number;
}

const spacingTokens: SpacingToken[] = [
  { name: "0", value: "0", pixels: "0px", variable: "--spacing-0", rem: 0 },
  { name: "px", value: "1px", pixels: "1px", variable: "--spacing-px", rem: 0.0625 },
  { name: "0.5", value: "0.125rem", pixels: "2px", variable: "--spacing-0-5", rem: 0.125 },
  { name: "1", value: "0.25rem", pixels: "4px", variable: "--spacing-1", rem: 0.25 },
  { name: "1.5", value: "0.375rem", pixels: "6px", variable: "--spacing-1-5", rem: 0.375 },
  { name: "2", value: "0.5rem", pixels: "8px", variable: "--spacing-2", rem: 0.5 },
  { name: "2.5", value: "0.625rem", pixels: "10px", variable: "--spacing-2-5", rem: 0.625 },
  { name: "3", value: "0.75rem", pixels: "12px", variable: "--spacing-3", rem: 0.75 },
  { name: "3.5", value: "0.875rem", pixels: "14px", variable: "--spacing-3-5", rem: 0.875 },
  { name: "4", value: "1rem", pixels: "16px", variable: "--spacing-4", rem: 1 },
  { name: "5", value: "1.25rem", pixels: "20px", variable: "--spacing-5", rem: 1.25 },
  { name: "6", value: "1.5rem", pixels: "24px", variable: "--spacing-6", rem: 1.5 },
  { name: "7", value: "1.75rem", pixels: "28px", variable: "--spacing-7", rem: 1.75 },
  { name: "8", value: "2rem", pixels: "32px", variable: "--spacing-8", rem: 2 },
  { name: "9", value: "2.25rem", pixels: "36px", variable: "--spacing-9", rem: 2.25 },
  { name: "10", value: "2.5rem", pixels: "40px", variable: "--spacing-10", rem: 2.5 },
  { name: "11", value: "2.75rem", pixels: "44px", variable: "--spacing-11", rem: 2.75 },
  { name: "12", value: "3rem", pixels: "48px", variable: "--spacing-12", rem: 3 },
  { name: "14", value: "3.5rem", pixels: "56px", variable: "--spacing-14", rem: 3.5 },
  { name: "16", value: "4rem", pixels: "64px", variable: "--spacing-16", rem: 4 },
  { name: "20", value: "5rem", pixels: "80px", variable: "--spacing-20", rem: 5 },
  { name: "24", value: "6rem", pixels: "96px", variable: "--spacing-24", rem: 6 },
  { name: "28", value: "7rem", pixels: "112px", variable: "--spacing-28", rem: 7 },
  { name: "32", value: "8rem", pixels: "128px", variable: "--spacing-32", rem: 8 },
  { name: "36", value: "9rem", pixels: "144px", variable: "--spacing-36", rem: 9 },
  { name: "40", value: "10rem", pixels: "160px", variable: "--spacing-40", rem: 10 },
  { name: "44", value: "11rem", pixels: "176px", variable: "--spacing-44", rem: 11 },
  { name: "48", value: "12rem", pixels: "192px", variable: "--spacing-48", rem: 12 },
  { name: "52", value: "13rem", pixels: "208px", variable: "--spacing-52", rem: 13 },
  { name: "56", value: "14rem", pixels: "224px", variable: "--spacing-56", rem: 14 },
  { name: "60", value: "15rem", pixels: "240px", variable: "--spacing-60", rem: 15 },
  { name: "64", value: "16rem", pixels: "256px", variable: "--spacing-64", rem: 16 },
  { name: "72", value: "18rem", pixels: "288px", variable: "--spacing-72", rem: 18 },
  { name: "80", value: "20rem", pixels: "320px", variable: "--spacing-80", rem: 20 },
  { name: "96", value: "24rem", pixels: "384px", variable: "--spacing-96", rem: 24 },
];

export function SpacingVisualizer() {
  const [viewMode, setViewMode] = useState<"list" | "stack" | "compare">("list");
  const [selectedSize, setSelectedSize] = useState<string>("8");
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

  const selectedToken = spacingTokens.find((t) => t.name === selectedSize);

  return (
    <div className="space-y-6">
      {/* View Mode Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          {[
            { id: "list", label: "List View" },
            { id: "stack", label: "Stack View" },
            { id: "compare", label: "Compare" },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as typeof viewMode)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                viewMode === mode.id
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {viewMode === "compare" && (
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          >
            {spacingTokens.map((token) => (
              <option key={token.name} value={token.name}>
                {token.name} ({token.value})
              </option>
            ))}
          </select>
        )}
      </div>

      {/* List View */}
      {viewMode === "list" && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Token
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Pixels
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Preview
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {spacingTokens.map((token) => (
                  <tr
                    key={token.name}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <code className="text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
                        {token.name}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-sm font-mono text-gray-600 dark:text-gray-400">
                        {token.value}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {token.pixels}
                    </td>
                    <td className="px-4 py-3">
                      <div
                        className="h-4 bg-blue-500 rounded"
                        style={{ width: `${Math.min(token.rem * 20, 200)}px` }}
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => copyToken(token.variable)}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        {copied === token.variable ? "Copied!" : "Copy"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Stack View */}
      {viewMode === "stack" && (
        <div className="space-y-2">
          {spacingTokens.slice(0, 20).map((token) => (
            <div
              key={token.name}
              className="flex items-center gap-4 group"
            >
              <div className="w-16 text-right">
                <code className="text-sm font-mono text-gray-600 dark:text-gray-400">
                  {token.name}
                </code>
              </div>
              <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                <div className="flex items-center">
                  <div
                    className="h-8 bg-blue-500 rounded"
                    style={{ width: `${Math.min(token.rem * 30, 100)}%` }}
                  />
                  <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">
                    {token.value}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToken(token.variable)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                title="Copy CSS variable"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Compare View */}
      {viewMode === "compare" && selectedToken && (
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-900/30">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Size: {selectedToken.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedToken.value} ({selectedToken.pixels})
                </p>
              </div>
              <button
                onClick={() => copyToken(selectedToken.variable)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {copied === selectedToken.variable ? "Copied!" : "Copy Token"}
              </button>
            </div>

            {/* Padding Demo */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Padding Example (p-{selectedToken.name})
                </p>
                <div className="border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg inline-block">
                  <div
                    className="bg-blue-500 text-white text-sm rounded"
                    style={{ padding: selectedToken.value }}
                  >
                    Content
                  </div>
                </div>
              </div>

              {/* Margin Demo */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Margin Example (m-{selectedToken.name})
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div
                    className="w-16 h-16 bg-green-500 rounded"
                    style={{ margin: selectedToken.value }}
                  />
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              </div>

              {/* Gap Demo */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gap Example (gap-{selectedToken.name})
                </p>
                <div
                  className="flex"
                  style={{ gap: selectedToken.value }}
                >
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-16 h-16 bg-purple-500 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Size Reference */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["1", "2", "4", "8"].map((size) => {
              const token = spacingTokens.find((t) => t.name === size);
              if (!token) return null;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-4 border rounded-xl text-left transition-all ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {size}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {token.value}
                  </div>
                  <div
                    className="mt-2 h-2 bg-blue-500 rounded"
                    style={{ width: "100%", maxWidth: `${token.rem * 10}px` }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Usage Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          Spacing Usage
        </h4>
        <div className="grid sm:grid-cols-3 gap-4 text-sm text-blue-800 dark:text-blue-200">
          <div>
            <code className="font-mono font-semibold">m-4</code>
            <p className="text-blue-600 dark:text-blue-400">margin: 1rem</p>
          </div>
          <div>
            <code className="font-mono font-semibold">p-2</code>
            <p className="text-blue-600 dark:text-blue-400">padding: 0.5rem</p>
          </div>
          <div>
            <code className="font-mono font-semibold">gap-6</code>
            <p className="text-blue-600 dark:text-blue-400">gap: 1.5rem</p>
          </div>
        </div>
      </div>
    </div>
  );
}
