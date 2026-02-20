"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useState, useEffect } from "react";

// Metadata needs to be in a separate file for client components
// or we can define it inline in a layout.tsx

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


export default function CheatsheetPage() {
  const [dateString, setDateString] = useState('');

  // Set the date string only on the client side to avoid hydration mismatch
  useEffect(() => {
    // Use setTimeout to defer setState and avoid ESLint warning
    const timer = setTimeout(() => {
      setDateString(new Date().toLocaleDateString());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Spacing",
      items: [
        { class: "m-{n}", desc: "Margin all sides" },
        { class: "mx-{n}", desc: "Margin horizontal" },
        { class: "my-{n}", desc: "Margin vertical" },
        { class: "mt-{n}", desc: "Margin top" },
        { class: "mr-{n}", desc: "Margin right" },
        { class: "mb-{n}", desc: "Margin bottom" },
        { class: "ml-{n}", desc: "Margin left" },
        { class: "p-{n}", desc: "Padding all sides" },
        { class: "px-{n}", desc: "Padding horizontal" },
        { class: "py-{n}", desc: "Padding vertical" },
        { class: "pt-{n}", desc: "Padding top" },
        { class: "pr-{n}", desc: "Padding right" },
        { class: "pb-{n}", desc: "Padding bottom" },
        { class: "pl-{n}", desc: "Padding left" },
      ],
    },
    {
      title: "Layout",
      items: [
        { class: "block", desc: "Display block" },
        { class: "inline", desc: "Display inline" },
        { class: "inline-block", desc: "Display inline-block" },
        { class: "flex", desc: "Display flex" },
        { class: "grid", desc: "Display grid" },
        { class: "hidden", desc: "Display none" },
        { class: "container", desc: "Container (centered, max-width)" },
        { class: "mx-auto", desc: "Center horizontally" },
      ],
    },
    {
      title: "Flexbox",
      items: [
        { class: "flex-row", desc: "Row direction" },
        { class: "flex-col", desc: "Column direction" },
        { class: "items-start", desc: "Align items start" },
        { class: "items-center", desc: "Align items center" },
        { class: "items-end", desc: "Align items end" },
        { class: "justify-start", desc: "Justify start" },
        { class: "justify-center", desc: "Justify center" },
        { class: "justify-end", desc: "Justify end" },
        { class: "justify-between", desc: "Justify space between" },
        { class: "justify-around", desc: "Justify space around" },
        { class: "flex-1", desc: "Flex grow 1" },
        { class: "flex-shrink-0", desc: "Prevent shrink" },
        { class: "flex-wrap", desc: "Allow wrap" },
        { class: "flex-nowrap", desc: "Prevent wrap" },
      ],
    },
    {
      title: "Grid",
      items: [
        { class: "grid-cols-{n}", desc: "Number of columns" },
        { class: "col-span-{n}", desc: "Span n columns" },
        { class: "row-span-{n}", desc: "Span n rows" },
        { class: "gap-{n}", desc: "Gap between items" },
        { class: "gap-x-{n}", desc: "Horizontal gap" },
        { class: "gap-y-{n}", desc: "Vertical gap" },
      ],
    },
    {
      title: "Typography",
      items: [
        { class: "text-xs", desc: "Extra small text (0.75rem)" },
        { class: "text-sm", desc: "Small text (0.875rem)" },
        { class: "text-base", desc: "Base text (1rem)" },
        { class: "text-lg", desc: "Large text (1.125rem)" },
        { class: "text-xl", desc: "Extra large (1.25rem)" },
        { class: "text-2xl", desc: "2xl text (1.5rem)" },
        { class: "text-3xl", desc: "3xl text (1.875rem)" },
        { class: "text-4xl", desc: "4xl text (2.25rem)" },
        { class: "font-normal", desc: "Normal weight" },
        { class: "font-medium", desc: "Medium weight" },
        { class: "font-semibold", desc: "Semibold weight" },
        { class: "font-bold", desc: "Bold weight" },
        { class: "text-center", desc: "Center align" },
        { class: "text-left", desc: "Left align" },
        { class: "text-right", desc: "Right align" },
      ],
    },
    {
      title: "Colors",
      items: [
        { class: "bg-{color}-{n}", desc: "Background color" },
        { class: "text-{color}-{n}", desc: "Text color" },
        { class: "border-{color}-{n}", desc: "Border color" },
        { class: "bg-opacity-{n}", desc: "Background opacity" },
        { class: "text-opacity-{n}", desc: "Text opacity" },
      ],
    },
    {
      title: "Borders",
      items: [
        { class: "border", desc: "Default border" },
        { class: "border-{n}", desc: "Border width" },
        { class: "border-t", desc: "Border top" },
        { class: "border-r", desc: "Border right" },
        { class: "border-b", desc: "Border bottom" },
        { class: "border-l", desc: "Border left" },
        { class: "rounded", desc: "Default radius" },
        { class: "rounded-sm", desc: "Small radius" },
        { class: "rounded-md", desc: "Medium radius" },
        { class: "rounded-lg", desc: "Large radius" },
        { class: "rounded-full", desc: "Full radius (circle)" },
        { class: "rounded-none", desc: "No radius" },
      ],
    },
    {
      title: "Sizing",
      items: [
        { class: "w-{n}", desc: "Width (rem)" },
        { class: "w-full", desc: "Width 100%" },
        { class: "w-auto", desc: "Auto width" },
        { class: "w-screen", desc: "Viewport width" },
        { class: "min-w-full", desc: "Min width 100%" },
        { class: "max-w-full", desc: "Max width 100%" },
        { class: "h-{n}", desc: "Height (rem)" },
        { class: "h-full", desc: "Height 100%" },
        { class: "h-screen", desc: "Viewport height" },
        { class: "min-h-screen", desc: "Min height viewport" },
      ],
    },
    {
      title: "Position",
      items: [
        { class: "static", desc: "Static position" },
        { class: "relative", desc: "Relative position" },
        { class: "absolute", desc: "Absolute position" },
        { class: "fixed", desc: "Fixed position" },
        { class: "sticky", desc: "Sticky position" },
        { class: "inset-0", desc: "All sides 0" },
        { class: "top-{n}", desc: "Top position" },
        { class: "right-{n}", desc: "Right position" },
        { class: "bottom-{n}", desc: "Bottom position" },
        { class: "left-{n}", desc: "Left position" },
      ],
    },
    {
      title: "Effects",
      items: [
        { class: "shadow", desc: "Default shadow" },
        { class: "shadow-sm", desc: "Small shadow" },
        { class: "shadow-md", desc: "Medium shadow" },
        { class: "shadow-lg", desc: "Large shadow" },
        { class: "shadow-xl", desc: "Extra large shadow" },
        { class: "shadow-none", desc: "No shadow" },
        { class: "opacity-{n}", desc: "Opacity (0-100)" },
      ],
    },
    {
      title: "Transitions",
      items: [
        { class: "transition", desc: "Default transition" },
        { class: "transition-all", desc: "All properties" },
        { class: "transition-colors", desc: "Color properties" },
        { class: "transition-opacity", desc: "Opacity only" },
        { class: "transition-transform", desc: "Transform only" },
        { class: "duration-{n}", desc: "Duration (ms)" },
        { class: "ease-linear", desc: "Linear easing" },
        { class: "ease-in", desc: "Ease in" },
        { class: "ease-out", desc: "Ease out" },
        { class: "ease-in-out", desc: "Ease in-out" },
      ],
    },
    {
      title: "Responsive",
      items: [
        { class: "sm:", desc: "640px and up" },
        { class: "md:", desc: "768px and up" },
        { class: "lg:", desc: "1024px and up" },
        { class: "xl:", desc: "1280px and up" },
        { class: "2xl:", desc: "1536px and up" },
        { class: "dark:", desc: "Dark mode" },
        { class: "hover:", desc: "Hover state" },
        { class: "focus:", desc: "Focus state" },
        { class: "active:", desc: "Active state" },
        { class: "disabled:", desc: "Disabled state" },
      ],
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Cheatsheet" },
        ]}
      />

      {/* Header with print button */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cheatsheet
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Quick reference for Apex utility classes. Print or save this page for offline use.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="no-print flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors print:hidden"
        >
          <PrinterIcon className="w-4 h-4" />
          Print
        </button>
      </div>

      {/* Scale Reference */}
      <section className="mb-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg print:break-inside-avoid">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Spacing Scale
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 text-sm">
          {[
            { n: "0", val: "0" },
            { n: "1", val: "0.25rem" },
            { n: "2", val: "0.5rem" },
            { n: "3", val: "0.75rem" },
            { n: "4", val: "1rem" },
            { n: "5", val: "1.25rem" },
            { n: "6", val: "1.5rem" },
            { n: "8", val: "2rem" },
            { n: "10", val: "2.5rem" },
            { n: "12", val: "3rem" },
            { n: "16", val: "4rem" },
            { n: "20", val: "5rem" },
          ].map((item) => (
            <div
              key={item.n}
              className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded"
            >
              <span className="font-mono text-blue-600">{item.n}</span>
              <span className="text-gray-500">=</span>
              <span className="text-gray-600 dark:text-gray-400">{item.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cheatsheet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden print:break-inside-avoid"
          >
            <h2 className="px-4 py-3 bg-gray-50 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
              {section.title}
            </h2>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {section.items.map((item) => (
                <div
                  key={item.class}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                    {item.class}
                  </code>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Example Usage */}
      <section className="mt-8 print:break-inside-avoid">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Example Usage
        </h2>
        <CodeBlock
          code={`<div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-gray-900 mb-4">
    Welcome
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-2">Card 1</h2>
      <p class="text-gray-600">Content here</p>
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-2">Card 2</h2>
      <p class="text-gray-600">Content here</p>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Print footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 print:fixed print:bottom-0 print:left-0 print:right-0 print:bg-white print:py-4">
        Apex Cheatsheet • apexcss.com • Generated on {dateString}
      </div>
    </div>
  );
}
