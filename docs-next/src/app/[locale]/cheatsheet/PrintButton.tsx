"use client";

import { useState, useEffect } from "react";

function PrinterIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors print:hidden"
    >
      <PrinterIcon className="w-4 h-4" />
      Print
    </button>
  );
}

export function PrintFooter({ dateString }: { dateString: string }) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 print:fixed print:bottom-0 print:left-0 print:right-0 print:bg-white print:py-4">
      Apex Cheatsheet • apexcss.com • Generated on {dateString}
    </div>
  );
}

function ClientDate() {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDateString(new Date().toLocaleDateString());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return <>{dateString}</>;
}

export function ClientDateFooter() {
  // This component will only render on the client
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 print:fixed print:bottom-0 print:left-0 print:right-0 print:bg-white print:py-4">
      Apex Cheatsheet • apexcss.com • Generated on <ClientDate />
    </div>
  );
}
