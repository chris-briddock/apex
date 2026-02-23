"use client";

import { useState } from "react";

interface DesignTokenCardProps {
  name: string;
  value: string;
  category: "color" | "spacing" | "typography" | "border" | "shadow" | "transition" | "z-index" | "responsive";
  description?: string;
  preview?: React.ReactNode;
  cssVariable?: string;
}

export function DesignTokenCard({
  name,
  value,
  category,
  description,
  preview,
  cssVariable,
}: DesignTokenCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "color":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300";
      case "spacing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "typography":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "border":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "shadow":
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300";
      case "transition":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "z-index":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300";
      case "responsive":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="group relative border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-md">
      {/* Preview Area */}
      {preview && (
        <div className="h-24 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 flex items-center justify-center p-4">
          {preview}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span
          className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 ${getCategoryColor()}`}
        >
          {category}
        </span>

        {/* Token Name */}
        <h3 className="font-mono text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            {description}
          </p>
        )}

        {/* CSS Variable */}
        {cssVariable && (
          <div className="flex items-center gap-2 mb-2">
            <code className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded flex-1 truncate">
              {cssVariable}
            </code>
            <button
              onClick={() => copyToClipboard(cssVariable)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              title="Copy CSS variable"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Value Display */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <code className="text-xs text-gray-600 dark:text-gray-400 font-mono truncate max-w-[70%]">
            {value}
          </code>
          <button
            onClick={() => copyToClipboard(value)}
            className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
