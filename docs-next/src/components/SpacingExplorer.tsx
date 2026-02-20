"use client";

import { useState } from "react";

const spacingScale = [
  { size: "0", value: "0rem", px: "0px" },
  { size: "px", value: "1px", px: "1px" },
  { size: "0.5", value: "0.125rem", px: "2px" },
  { size: "1", value: "0.25rem", px: "4px" },
  { size: "1.5", value: "0.375rem", px: "6px" },
  { size: "2", value: "0.5rem", px: "8px" },
  { size: "2.5", value: "0.625rem", px: "10px" },
  { size: "3", value: "0.75rem", px: "12px" },
  { size: "3.5", value: "0.875rem", px: "14px" },
  { size: "4", value: "1rem", px: "16px" },
  { size: "5", value: "1.25rem", px: "20px" },
  { size: "6", value: "1.5rem", px: "24px" },
  { size: "7", value: "1.75rem", px: "28px" },
  { size: "8", value: "2rem", px: "32px" },
  { size: "9", value: "2.25rem", px: "36px" },
  { size: "10", value: "2.5rem", px: "40px" },
  { size: "12", value: "3rem", px: "48px" },
  { size: "14", value: "3.5rem", px: "56px" },
  { size: "16", value: "4rem", px: "64px" },
  { size: "20", value: "5rem", px: "80px" },
  { size: "24", value: "6rem", px: "96px" },
  { size: "32", value: "8rem", px: "128px" },
  { size: "40", value: "10rem", px: "160px" },
  { size: "48", value: "12rem", px: "192px" },
  { size: "56", value: "14rem", px: "224px" },
  { size: "64", value: "16rem", px: "256px" },
];

type SpacingType = "margin" | "padding";
type DirectionType = "all" | "horizontal" | "vertical" | "top" | "right" | "bottom" | "left";

export function SpacingExplorer() {
  const [selectedSize, setSelectedSize] = useState("4");
  const [spacingType, setSpacingType] = useState<SpacingType>("padding");
  const [direction, setDirection] = useState<DirectionType>("all");

  const getClassName = () => {
    const prefix = spacingType === "margin" ? "m" : "p";
    const dirMap: Record<DirectionType, string> = {
      all: "",
      horizontal: "x",
      vertical: "y",
      top: "t",
      right: "r",
      bottom: "b",
      left: "l",
    };

    return `${prefix}${dirMap[direction]}-${selectedSize}`;
  };

  const currentSpacing = spacingScale.find(s => s.size === selectedSize);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Type selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Type
          </label>
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setSpacingType("padding")}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                spacingType === "padding"
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              Padding
            </button>
            <button
              onClick={() => setSpacingType("margin")}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                spacingType === "margin"
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              Margin
            </button>
          </div>
        </div>

        {/* Direction selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Direction
          </label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as DirectionType)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All sides</option>
            <option value="horizontal">Horizontal (x)</option>
            <option value="vertical">Vertical (y)</option>
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </div>

        {/* Size selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Size: {selectedSize} ({currentSpacing?.value})
          </label>
          <input
            type="range"
            min="0"
            max={spacingScale.length - 1}
            value={spacingScale.findIndex(s => s.size === selectedSize)}
            onChange={(e) => setSelectedSize(spacingScale[parseInt(e.target.value)].size)}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center">
          <div
            className={`bg-blue-500 text-white transition-all duration-300 ${getClassName()}`}
          >
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded shadow-sm">
              Content
            </div>
          </div>
        </div>

        {/* Visual guide */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded" />
            <span>{spacingType === "padding" ? "Padding" : "Margin"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white dark:bg-gray-800 border border-gray-300 rounded" />
            <span>Content</span>
          </div>
        </div>
      </div>

      {/* Code output */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Generated Class</span>
          <button
            onClick={() => navigator.clipboard.writeText(getClassName())}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Copy
          </button>
        </div>
        <code className="text-green-400 font-mono text-lg">{getClassName()}</code>
      </div>

      {/* Size Reference Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-2 px-3 font-medium text-gray-900 dark:text-white">Class</th>
              <th className="text-left py-2 px-3 font-medium text-gray-900 dark:text-white">REM</th>
              <th className="text-left py-2 px-3 font-medium text-gray-900 dark:text-white">Pixels</th>
              <th className="text-left py-2 px-3 font-medium text-gray-900 dark:text-white">Visual</th>
            </tr>
          </thead>
          <tbody>
            {spacingScale.slice(0, 16).map((size) => (
              <tr
                key={size.size}
                onClick={() => setSelectedSize(size.size)}
                className={`border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
                  selectedSize === size.size ? "bg-blue-50 dark:bg-blue-900/20" : ""
                }`}
              >
                <td className="py-2 px-3 font-mono text-gray-700 dark:text-gray-300">{size.size}</td>
                <td className="py-2 px-3 text-gray-600 dark:text-gray-400">{size.value}</td>
                <td className="py-2 px-3 text-gray-600 dark:text-gray-400">{size.px}</td>
                <td className="py-2 px-3">
                  <div
                    className="bg-blue-500 rounded"
                    style={{ width: `${Math.min(parseInt(size.px), 64)}px`, height: "8px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
