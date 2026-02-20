"use client";

import { use, Suspense } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { useState } from "react";

// Simulated async function to encode playground code
async function encodePlaygroundCode(code: string): Promise<string> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return btoa(code);
}

// Component that uses React 19's use() API
function ShareLinkDisplay({ codePromise }: { codePromise: Promise<string> }) {
  // React 19: use() API - reads the promise value, suspends if not ready
  const encoded = use(codePromise);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/playground?code=${encoded}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={`${window.location.origin}/playground?code=${encoded.slice(0, 20)}...`}
        readOnly
        className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400"
      />
      <button
        onClick={handleCopy}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          copied
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export function PlaygroundShare({ code }: { code: string }) {
  const [isSharing, setIsSharing] = useState(false);
  const [codePromise, setCodePromise] = useState<Promise<string> | null>(null);

  const handleShare = () => {
    setIsSharing(true);
    // Create the promise that will be consumed by use()
    setCodePromise(encodePlaygroundCode(code));
  };

  return (
    <div className="space-y-4">
      {!isSharing ? (
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      ) : (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Share URL:
          </p>
          <Suspense
            fallback={
              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-gray-500">Generating share link...</span>
              </div>
            }
          >
            {codePromise && <ShareLinkDisplay codePromise={codePromise} />}
          </Suspense>
        </div>
      )}
    </div>
  );
}
