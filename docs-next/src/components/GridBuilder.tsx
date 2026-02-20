"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

export function GridBuilder() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(4);
  const [minItemWidth, setMinItemWidth] = useState("");
  const [items, setItems] = useState(6);

  const getGridCode = () => {
    const baseClasses = "grid";
    const colClass = `grid-cols-${columns}`;
    const gapClass = `gap-${gap}`;
    const responsiveClass = minItemWidth ? `sm:grid-cols-[repeat(auto-fit,minmax(${minItemWidth},1fr))]` : "";

    return `<div class="${[baseClasses, colClass, gapClass, responsiveClass].filter(Boolean).join(" ")}">
  ${Array.from({ length: items }, (_, i) => `<div class="p-4 bg-blue-500 text-white rounded">Item ${i + 1}</div>`).join("\n  ")}
</div>`;
  };

  const addItem = () => setItems((i) => Math.min(i + 1, 12));
  const removeItem = () => setItems((i) => Math.max(i - 1, 1));

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        {/* Columns */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Columns: {columns}
          </label>
          <input
            type="range"
            min="1"
            max="12"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>12</span>
          </div>
        </div>

        {/* Gap */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Gap: {gap} ({gap * 4}px)
          </label>
          <input
            type="range"
            min="0"
            max="16"
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>16</span>
          </div>
        </div>

        {/* Min Item Width */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Min Item Width (optional)
          </label>
          <input
            type="text"
            value={minItemWidth}
            onChange={(e) => setMinItemWidth(e.target.value)}
            placeholder="e.g., 200px or 12rem"
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enables responsive auto-fit grid (sm breakpoint and up)
          </p>
        </div>

        {/* Items count */}
        <div className="sm:col-span-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Items: {items}
          </span>
          <div className="flex gap-2">
            <button
              onClick={removeItem}
              disabled={items <= 1}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              -
            </button>
            <button
              onClick={addItem}
              disabled={items >= 12}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-x-auto">
        <div
          className={`grid grid-cols-${columns} gap-${gap}`}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: `${gap * 0.25}rem`,
          }}
        >
          {Array.from({ length: items }, (_, i) => (
            <div
              key={i}
              className="p-4 bg-blue-500 text-white rounded text-center font-medium"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Code */}
      <CodeBlock code={getGridCode()} language="html" />
    </div>
  );
}
