"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

type InputVariant = "default" | "filled" | "outlined";
type InputSize = "sm" | "md" | "lg";

export function FormDemo() {
  const [variant, setVariant] = useState<InputVariant>("default");
  const [size, setSize] = useState<InputSize>("md");
  const [showIcon, setShowIcon] = useState(true);
  const [showLabel, setShowLabel] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showHelper, setShowHelper] = useState(true);

  const sizeStyles: Record<InputSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variantStyles: Record<InputVariant, string> = {
    default: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
    filled: "border-0 bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500",
    outlined: "border-2 border-gray-300 dark:border-gray-600 bg-transparent focus:border-blue-500",
  };

  const generateCode = () => {
    const inputClasses = [
      "form-input",
      `input-${variant}`,
      size !== "md" && `input-${size}`,
      showError && "input-error",
    ].filter(Boolean);

    return `<!-- Form Component -->
<div class="form-group">
  ${showLabel ? `<label class="form-label" for="email">Email Address</label>` : ""}
  <div class="input-wrapper">
    ${showIcon ? `<span class="input-icon">✉️</span>` : ""}
    <input
      type="email"
      id="email"
      class="${inputClasses.join(" ")}"
      placeholder="Enter your email"
      ${showError ? 'aria-invalid="true" aria-describedby="email-error"' : ""}
    />
  </div>
  ${showHelper && !showError ? `<p class="form-helper">We will never share your email with anyone else.</p>` : ""}
  ${showError ? `<p class="form-error" id="email-error">Please enter a valid email address.</p>` : ""}
</div>

<div class="form-group">
  <label class="form-label" for="password">Password</label>
  <input
    type="password"
    id="password"
    class="${inputClasses.join(" ")}"
    placeholder="Enter your password"
  />
</div>

<div class="form-group flex items-center gap-2">
  <input type="checkbox" id="remember" class="form-checkbox" />
  <label for="remember" class="text-sm text-gray-700 dark:text-gray-300">Remember me</label>
</div>

<button type="submit" class="btn btn-primary w-full">Sign In</button>`;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Variant
          </label>
          <div className="flex flex-wrap gap-2">
            {(["default", "filled", "outlined"] as InputVariant[]).map((v) => (
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
            {(["sm", "md", "lg"] as InputSize[]).map((s) => (
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
                checked={showLabel}
                onChange={(e) => setShowLabel(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Label</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Icon</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showHelper}
                onChange={(e) => setShowHelper(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Helper</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showError}
                onChange={(e) => setShowError(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Error</span>
            </label>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg max-w-md mx-auto">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            {showLabel && (
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
            )}
            <div className="relative">
              {showIcon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              <input
                type="email"
                className={`w-full rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all ${sizeStyles[size]} ${variantStyles[variant]} ${showIcon ? "pl-10" : ""} ${showError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                placeholder="Enter your email"
              />
            </div>
            {showHelper && !showError && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                We will never share your email with anyone else.
              </p>
            )}
            {showError && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all ${sizeStyles[size]} ${variantStyles[variant]}`}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className={`w-full font-medium rounded-lg transition-colors ${
              size === "sm" ? "px-4 py-2 text-sm" : size === "md" ? "px-4 py-2 text-base" : "px-6 py-3 text-lg"
            } bg-blue-500 text-white hover:bg-blue-600`}
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Code Output */}
      <CodeBlock code={generateCode()} language="html" />
    </div>
  );
}
