"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

const flexDirectionOptions = ["row", "row-reverse", "column", "column-reverse"] as const;
const justifyContentOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
] as const;
const alignItemsOptions = ["flex-start", "center", "flex-end", "stretch", "baseline"] as const;
const flexWrapOptions = ["nowrap", "wrap", "wrap-reverse"] as const;
const alignContentOptions = [
  "flex-start",
  "center",
  "flex-end",
  "stretch",
  "space-between",
  "space-around",
  "space-evenly",
] as const;

type FlexDirection = typeof flexDirectionOptions[number];
type JustifyContent = typeof justifyContentOptions[number];
type AlignItems = typeof alignItemsOptions[number];
type FlexWrap = typeof flexWrapOptions[number];
type AlignContent = typeof alignContentOptions[number];

interface SelectProps {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function FlexboxPlayground() {
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [justifyContent, setJustifyContent] = useState<JustifyContent>("flex-start");
  const [alignItems, setAlignItems] = useState<AlignItems>("stretch");
  const [flexWrap, setFlexWrap] = useState<FlexWrap>("nowrap");
  const [alignContent, setAlignContent] = useState<AlignContent>("stretch");
  const [gap] = useState(4);
  const [itemCount, setItemCount] = useState(3);

  const generateCode = () => {
    const classes = [
      "flex",
      `flex-${flexDirection}`,
      `justify-${justifyContent}`,
      `items-${alignItems}`,
      flexWrap !== "nowrap" && `flex-${flexWrap}`,
      alignContent !== "stretch" && `content-${alignContent}`,
      `gap-${gap}`,
    ].filter(Boolean);

    return `<div class="${classes.join(" ")}">
  <div class="p-4 bg-blue-500 text-white rounded">Item 1</div>
  <div class="p-4 bg-green-500 text-white rounded">Item 2</div>
  <div class="p-4 bg-purple-500 text-white rounded">Item 3</div>
</div>`;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <Select
          label="flex-direction"
          value={flexDirection}
          options={flexDirectionOptions}
          onChange={(v) => setFlexDirection(v as FlexDirection)}
        />
        <Select
          label="justify-content"
          value={justifyContent}
          options={justifyContentOptions}
          onChange={(v) => setJustifyContent(v as JustifyContent)}
        />
        <Select
          label="align-items"
          value={alignItems}
          options={alignItemsOptions}
          onChange={(v) => setAlignItems(v as AlignItems)}
        />
        <Select
          label="flex-wrap"
          value={flexWrap}
          options={flexWrapOptions}
          onChange={(v) => setFlexWrap(v as FlexWrap)}
        />
        <Select
          label="align-content"
          value={alignContent}
          options={alignContentOptions}
          onChange={(v) => setAlignContent(v as AlignContent)}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Items ({itemCount})
          </label>
          <input
            type="range"
            min={1}
            max={8}
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[300px]">
        <div
          className={`flex flex-${flexDirection} justify-${justifyContent} items-${alignItems} ${flexWrap !== "nowrap" ? `flex-${flexWrap}` : ""} ${alignContent !== "stretch" ? `content-${alignContent}` : ""} gap-${gap} w-full h-full min-h-[250px] bg-gray-100 dark:bg-gray-900 rounded transition-all duration-300`}
        >
          {Array.from({ length: itemCount }).map((_, i) => (
            <div
              key={i}
              className="px-8 py-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg flex items-center justify-center min-w-[100px]"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Code Output */}
      <CodeBlock code={generateCode()} language="html" />
    </div>
  );
}
