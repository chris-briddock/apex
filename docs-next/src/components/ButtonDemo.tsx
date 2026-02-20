"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

type ButtonVariant = "solid" | "outline" | "ghost" | "soft";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonColor = "blue" | "red" | "green" | "purple" | "gray";

export function ButtonDemo() {
  const [variant, setVariant] = useState<ButtonVariant>("solid");
  const [size, setSize] = useState<ButtonSize>("md");
  const [color, setColor] = useState<ButtonColor>("blue");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const getSizeClasses = (s: ButtonSize) => {
    const sizes = {
      xs: "px-2.5 py-1.5 text-xs",
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    };
    return sizes[s];
  };

  const getVariantClasses = (v: ButtonVariant, c: ButtonColor) => {
    const variants: Record<ButtonVariant, Record<ButtonColor, string>> = {
      solid: {
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        red: "bg-red-500 text-white hover:bg-red-600",
        green: "bg-green-500 text-white hover:bg-green-600",
        purple: "bg-purple-500 text-white hover:bg-purple-600",
        gray: "bg-gray-500 text-white hover:bg-gray-600",
      },
      outline: {
        blue: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
        red: "border-2 border-red-500 text-red-500 hover:bg-red-50",
        green: "border-2 border-green-500 text-green-500 hover:bg-green-50",
        purple: "border-2 border-purple-500 text-purple-500 hover:bg-purple-50",
        gray: "border-2 border-gray-500 text-gray-500 hover:bg-gray-50",
      },
      ghost: {
        blue: "text-blue-500 hover:bg-blue-50",
        red: "text-red-500 hover:bg-red-50",
        green: "text-green-500 hover:bg-green-50",
        purple: "text-purple-500 hover:bg-purple-50",
        gray: "text-gray-500 hover:bg-gray-100",
      },
      soft: {
        blue: "bg-blue-100 text-blue-700 hover:bg-blue-200",
        red: "bg-red-100 text-red-700 hover:bg-red-200",
        green: "bg-green-100 text-green-700 hover:bg-green-200",
        purple: "bg-purple-100 text-purple-700 hover:bg-purple-200",
        gray: "bg-gray-100 text-gray-700 hover:bg-gray-200",
      },
    };
    return variants[v][c];
  };

  const getGeneratedCode = () => {
    const classes = [
      "px-4 py-2",
      "rounded-lg",
      "font-medium",
      "transition-colors",
      getSizeClasses(size),
      getVariantClasses(variant, color),
      isFullWidth ? "w-full" : "",
      isLoading ? "opacity-70 cursor-wait" : "",
      isDisabled ? "opacity-50 cursor-not-allowed" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `<button class="${classes}"${isDisabled ? " disabled" : ""}>
  ${isLoading ? '<span class="animate-spin inline-block mr-2">⟳</span>' : ""}Button
</button>`;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        {/* Variant */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Variant
          </label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as ButtonVariant)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          >
            <option value="solid">Solid</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
            <option value="soft">Soft</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Size
          </label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as ButtonSize)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          >
            <option value="xs">Extra Small</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Color
          </label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value as ButtonColor)}
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="gray">Gray</option>
          </select>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-3 sm:col-span-2 lg:col-span-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isLoading}
              onChange={(e) => setIsLoading(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Loading</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Disabled</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isFullWidth}
              onChange={(e) => setIsFullWidth(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Full Width</span>
          </label>
        </div>
      </div>

      {/* Preview */}
      <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
        <button
          disabled={isDisabled}
          className={`
            rounded-lg font-medium transition-colors
            ${getSizeClasses(size)}
            ${getVariantClasses(variant, color)}
            ${isFullWidth ? "w-full" : ""}
            ${isLoading ? "opacity-70 cursor-wait" : ""}
            ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {isLoading && <span className="animate-spin inline-block mr-2">⟳</span>}
          Button
        </button>
      </div>

      {/* Code */}
      <CodeBlock code={getGeneratedCode()} language="html" />
    </div>
  );
}
