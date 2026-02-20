"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showPreview?: boolean;
  preview?: React.ReactNode;
  className?: string;
}

export function CodeBlock({ code, language = "html", showPreview = false, preview, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageLabel = (lang: string) => {
    const labels: Record<string, string> = {
      html: "HTML",
      css: "CSS",
      javascript: "JS",
      typescript: "TS",
      jsx: "JSX",
      tsx: "TSX",
      json: "JSON",
      bash: "Bash",
    };
    return labels[lang] || lang.toUpperCase();
  };

  return (
    <div className={`my-6 ${className}`}>
      {showPreview && preview && (
        <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-t-lg">
          {preview}
        </div>
      )}
      <div className={`relative bg-gray-900 overflow-hidden ${showPreview ? 'rounded-b-lg' : 'rounded-lg'}`}>
        {showPreview && <div className="absolute top-0 left-0 right-0 h-px bg-gray-700" />}

        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-mono">
              {getLanguageLabel(language)}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <pre className="p-4 text-sm">
            <code className={`language-${language} text-gray-300`}>{code}</code>
          </pre>
        </div>

        {/* Copy button with animation */}
        <button
          onClick={handleCopy}
          className={`absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            copied
              ? "bg-green-500 text-white scale-105"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Live Preview component for the playground
interface LivePreviewProps {
  html: string;
}

export function LivePreview({ html }: LivePreviewProps) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto min-h-[200px]">
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
