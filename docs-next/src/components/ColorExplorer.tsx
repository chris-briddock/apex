"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ColorInfo {
  name: string;
  hex: string;
  class: string;
}

const colors: ColorInfo[] = [
  // Primary colors
  { name: "Blue 50", hex: "#eff6ff", class: "bg-blue-50" },
  { name: "Blue 100", hex: "#dbeafe", class: "bg-blue-100" },
  { name: "Blue 200", hex: "#bfdbfe", class: "bg-blue-200" },
  { name: "Blue 300", hex: "#93c5fd", class: "bg-blue-300" },
  { name: "Blue 400", hex: "#60a5fa", class: "bg-blue-400" },
  { name: "Blue 500", hex: "#3b82f6", class: "bg-blue-500" },
  { name: "Blue 600", hex: "#2563eb", class: "bg-blue-600" },
  { name: "Blue 700", hex: "#1d4ed8", class: "bg-blue-700" },
  { name: "Blue 800", hex: "#1e40af", class: "bg-blue-800" },
  { name: "Blue 900", hex: "#1e3a8a", class: "bg-blue-900" },

  // Gray colors
  { name: "Gray 50", hex: "#f9fafb", class: "bg-gray-50" },
  { name: "Gray 100", hex: "#f3f4f6", class: "bg-gray-100" },
  { name: "Gray 200", hex: "#e5e7eb", class: "bg-gray-200" },
  { name: "Gray 300", hex: "#d1d5db", class: "bg-gray-300" },
  { name: "Gray 400", hex: "#9ca3af", class: "bg-gray-400" },
  { name: "Gray 500", hex: "#6b7280", class: "bg-gray-500" },
  { name: "Gray 600", hex: "#4b5563", class: "bg-gray-600" },
  { name: "Gray 700", hex: "#374151", class: "bg-gray-700" },
  { name: "Gray 800", hex: "#1f2937", class: "bg-gray-800" },
  { name: "Gray 900", hex: "#111827", class: "bg-gray-900" },

  // Red colors
  { name: "Red 50", hex: "#fef2f2", class: "bg-red-50" },
  { name: "Red 100", hex: "#fee2e2", class: "bg-red-100" },
  { name: "Red 200", hex: "#fecaca", class: "bg-red-200" },
  { name: "Red 300", hex: "#fca5a5", class: "bg-red-300" },
  { name: "Red 400", hex: "#f87171", class: "bg-red-400" },
  { name: "Red 500", hex: "#ef4444", class: "bg-red-500" },
  { name: "Red 600", hex: "#dc2626", class: "bg-red-600" },
  { name: "Red 700", hex: "#b91c1c", class: "bg-red-700" },
  { name: "Red 800", hex: "#991b1b", class: "bg-red-800" },
  { name: "Red 900", hex: "#7f1d1d", class: "bg-red-900" },

  // Green colors
  { name: "Green 50", hex: "#f0fdf4", class: "bg-green-50" },
  { name: "Green 100", hex: "#dcfce7", class: "bg-green-100" },
  { name: "Green 200", hex: "#bbf7d0", class: "bg-green-200" },
  { name: "Green 300", hex: "#86efac", class: "bg-green-300" },
  { name: "Green 400", hex: "#4ade80", class: "bg-green-400" },
  { name: "Green 500", hex: "#22c55e", class: "bg-green-500" },
  { name: "Green 600", hex: "#16a34a", class: "bg-green-600" },
  { name: "Green 700", hex: "#15803d", class: "bg-green-700" },
  { name: "Green 800", hex: "#166534", class: "bg-green-800" },
  { name: "Green 900", hex: "#14532d", class: "bg-green-900" },

  // Purple colors
  { name: "Purple 50", hex: "#faf5ff", class: "bg-purple-50" },
  { name: "Purple 100", hex: "#f3e8ff", class: "bg-purple-100" },
  { name: "Purple 200", hex: "#e9d5ff", class: "bg-purple-200" },
  { name: "Purple 300", hex: "#d8b4fe", class: "bg-purple-300" },
  { name: "Purple 400", hex: "#c084fc", class: "bg-purple-400" },
  { name: "Purple 500", hex: "#a855f7", class: "bg-purple-500" },
  { name: "Purple 600", hex: "#9333ea", class: "bg-purple-600" },
  { name: "Purple 700", hex: "#7c3aed", class: "bg-purple-700" },
  { name: "Purple 800", hex: "#6b21a8", class: "bg-purple-800" },
  { name: "Purple 900", hex: "#581c87", class: "bg-purple-900" },
];

export function ColorExplorer() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredColors = filter === "all"
    ? colors
    : colors.filter(c => c.class.includes(filter));

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getTextClass = (colorClass: string) => {
    // Extract the shade number from the class
    const match = colorClass.match(/-(\d+)$/);
    const shade = match ? parseInt(match[1]) : 500;
    return shade >= 500 ? "text-white" : "text-gray-900";
  };

  const colorGroups = [
    { id: "all", label: "All Colors" },
    { id: "blue", label: "Blue" },
    { id: "gray", label: "Gray" },
    { id: "red", label: "Red" },
    { id: "green", label: "Green" },
    { id: "purple", label: "Purple" },
  ];

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {colorGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => setFilter(group.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === group.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
        {filteredColors.map((color) => (
          <div
            key={color.hex}
            className="group relative"
          >
            <div
              className={`h-20 ${color.class} rounded-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-lg relative overflow-hidden`}
              onClick={() => handleCopy(color.class)}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className={`opacity-0 group-hover:opacity-100 transition-opacity ${getTextClass(color.class)}`}>
                  <Copy className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Color info */}
            <div className="mt-2 text-center">
              <p className="text-xs font-medium text-gray-900 dark:text-white">
                {color.class}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                {color.hex}
              </p>
            </div>

            {/* Copy notification */}
            {copiedColor === color.class && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1 animate-in fade-in zoom-in duration-200">
                <Check className="w-3 h-3" />
                Copied!
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Usage Examples */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          Usage Examples
        </h3>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">bg-blue-500</code> - Background color</p>
          <p><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">text-blue-500</code> - Text color</p>
          <p><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">border-blue-500</code> - Border color</p>
          <p><code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">ring-blue-500</code> - Ring/focus color</p>
        </div>
      </div>
    </div>
  );
}
