"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log error to analytics or error tracking service
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-md w-full">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
            <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Something went wrong!
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We apologize for the inconvenience. An error occurred while loading this page.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Go home
            </Link>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-left overflow-auto">
              <p className="text-sm font-mono text-red-600 dark:text-red-400 mb-2">
                {error.name}: {error.message}
              </p>
              {error.stack && (
                <pre className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                  {error.stack}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
