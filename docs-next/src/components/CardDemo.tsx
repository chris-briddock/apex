"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

type CardVariant = "default" | "outlined" | "elevated";
type CardSize = "sm" | "md" | "lg";

export function CardDemo() {
  const [variant, setVariant] = useState<CardVariant>("default");
  const [size, setSize] = useState<CardSize>("md");
  const [showImage, setShowImage] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const sizeStyles: Record<CardSize, string> = {
    sm: "max-w-xs",
    md: "max-w-sm",
    lg: "max-w-md",
  };

  const variantStyles: Record<CardVariant, string> = {
    default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    outlined: "bg-transparent border-2 border-blue-500 dark:border-blue-400",
    elevated: "bg-white dark:bg-gray-800 shadow-xl",
  };

  const paddingStyles: Record<CardSize, { body: string; header: string; footer: string }> = {
    sm: { body: "p-3", header: "p-3 pb-0", footer: "p-3 pt-0" },
    md: { body: "p-4", header: "p-4 pb-0", footer: "p-4 pt-0" },
    lg: { body: "p-6", header: "p-6 pb-0", footer: "p-6 pt-0" },
  };

  const generateCode = () => {
    const classes = [
      "card",
      `card-${variant}`,
      size !== "md" && `card-${size}`,
    ].filter(Boolean);

    return `<!-- Card Component -->
<div class="${classes.join(" ")}">
  ${showImage ? `<img class="card-image" src="/api/placeholder/400/200" alt="Card image" />` : ""}
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle description</p>
  </div>
  <div class="card-body">
    <p>Card content goes here. This is where you describe the main content of the card.</p>
  </div>
  ${showFooter ? `<div class="card-footer">
    <button class="btn btn-primary">Action</button>
    <button class="btn btn-secondary">Cancel</button>
  </div>` : ""}
</div>`;
  };

  const padding = paddingStyles[size];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Variant
          </label>
          <div className="flex flex-wrap gap-2">
            {(["default", "outlined", "elevated"] as CardVariant[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`px-3 py-1.5 rounded text-sm font-medium capitalize transition-colors ${
                  variant === v
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Size
          </label>
          <div className="flex flex-wrap gap-2">
            {(["sm", "md", "lg"] as CardSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1.5 rounded text-sm font-medium uppercase transition-colors ${
                  size === s
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Options
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showImage}
                onChange={(e) => setShowImage(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Image</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFooter}
                onChange={(e) => setShowFooter(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Footer</span>
            </label>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <div className={`${sizeStyles[size]} w-full rounded-lg overflow-hidden ${variantStyles[variant]} transition-all duration-300`}>
          {showImage && (
            <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className={padding.header}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Card Title</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Card subtitle description</p>
          </div>
          <div className={padding.body}>
            <p className="text-gray-700 dark:text-gray-300">
              This is a card component with customizable variants, sizes, and content sections. Use it to display grouped content.
            </p>
          </div>
          {showFooter && (
            <div className={`${padding.footer} flex gap-2`}>
              <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
                Action
              </button>
              <button className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-white transition-colors">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Code Output */}
      <CodeBlock code={generateCode()} language="html" />
    </div>
  );
}
