"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center p-8" style={{ minHeight: '400px' }}>
      <div className="max-w-md w-full">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <SearchX className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Page Not Found
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-2">
            We couldn't find the page you're looking for.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            The page may have been moved, deleted, or never existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Go back
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Looking for something? Try using the search in the sidebar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
