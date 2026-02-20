"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

type AlertVariant = "info" | "success" | "warning" | "error";
type AlertSize = "sm" | "md" | "lg";

const alertStyles: Record<AlertVariant, { bg: string; border: string; text: string; icon: string }> = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-800 dark:text-blue-300",
    icon: "text-blue-500",
  },
  success: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-800 dark:text-green-300",
    icon: "text-green-500",
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-yellow-800 dark:text-yellow-300",
    icon: "text-yellow-500",
  },
  error: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-800 dark:text-red-300",
    icon: "text-red-500",
  },
};

const sizeStyles: Record<AlertSize, string> = {
  sm: "p-3 text-sm",
  md: "p-4 text-base",
  lg: "p-6 text-lg",
};

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const icons: Record<AlertVariant, React.FC<{ className?: string }>> = {
  info: InfoIcon,
  success: CheckIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

export function AlertDemo() {
  const [variant, setVariant] = useState<AlertVariant>("info");
  const [size, setSize] = useState<AlertSize>("md");
  const [dismissible, setDismissible] = useState(false);
  const [visible, setVisible] = useState(true);

  const styles = alertStyles[variant];
  const Icon = icons[variant];

  const generateCode = () => {
    const classes = [
      "alert",
      `alert-${variant}`,
      size !== "md" && `alert-${size}`,
      dismissible && "alert-dismissible",
    ].filter(Boolean);

    return `<!-- Alert Component -->
<div class="${classes.join(" ")}" role="alert">
  <span class="alert-icon">${variant === "info" ? "ℹ️" : variant === "success" ? "✓" : variant === "warning" ? "⚠" : "✕"}</span>
  <div class="alert-content">
    <strong class="alert-title">${variant.charAt(0).toUpperCase() + variant.slice(1)}</strong>
    <p class="alert-message">This is a ${variant} alert message.</p>
  </div>
  ${dismissible ? '<button class="alert-close" aria-label="Close">×</button>' : ""}
</div>`;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Variant
          </label>
          <div className="flex flex-wrap gap-2">
            {(["info", "success", "warning", "error"] as AlertVariant[]).map((v) => (
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
            {(["sm", "md", "lg"] as AlertSize[]).map((s) => (
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
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={dismissible}
              onChange={(e) => setDismissible(e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Dismissible</span>
          </label>
        </div>
      </div>

      {/* Preview */}
      <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        {visible && (
          <div
            className={`flex items-start gap-3 rounded-lg border ${styles.bg} ${styles.border} ${sizeStyles[size]} ${styles.text}`}
            role="alert"
          >
            <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.icon}`} />
            <div className="flex-1">
              <strong className="font-semibold block mb-1">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </strong>
              <p className="opacity-90">
                This is a {variant} alert message. It provides important information to the user.
              </p>
            </div>
            {dismissible && (
              <button
                onClick={() => setVisible(false)}
                className="flex-shrink-0 -mr-1 -mt-1 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        {!visible && (
          <button
            onClick={() => setVisible(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Show Alert
          </button>
        )}
      </div>

      {/* Code Output */}
      <CodeBlock code={generateCode()} language="html" />
    </div>
  );
}
