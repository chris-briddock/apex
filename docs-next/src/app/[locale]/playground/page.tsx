"use client";

import { useState, useCallback, useEffect } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Alert } from "@/components/Alert";
import { CodeBlock } from "@/components/CodeBlock";
import { PlaygroundShare } from "@/components/PlaygroundShare";
import { RotateCcw, Download } from "lucide-react";

const defaultTemplate = `<div class="min-h-[200px] p-8 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
  <h1 class="text-3xl font-bold text-white">Hello Apex!</h1>
  <p class="text-white/80 text-center max-w-md">
    Try editing the HTML above to experiment with Apex utilities.
  </p>
  <div class="flex gap-2 mt-4">
    <button class="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
      Get Started
    </button>
    <button class="px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors">
      Learn More
    </button>
  </div>
</div>`;

const exampleSnippets = [
  {
    name: "Button Variants",
    html: `<div class="flex flex-wrap gap-4 p-8 items-center justify-center">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
    Primary
  </button>
  <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
    Secondary
  </button>
  <button class="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
    Outline
  </button>
  <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
    Success
  </button>
  <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
    Danger
  </button>
</div>`,
  },
  {
    name: "Card Component",
    html: `<div class="p-8 bg-gray-50 flex items-center justify-center">
  <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm">
    <div class="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-2">Card Title</h2>
      <p class="text-gray-600 mb-4">This is a sample card component built with Apex utility classes.</p>
      <div class="flex gap-2">
        <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Design</span>
        <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">Development</span>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    name: "Grid Layout",
    html: `<div class="p-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="p-6 bg-blue-500 rounded-xl text-white">
      <h3 class="font-bold text-lg">Feature 1</h3>
      <p class="text-blue-100 mt-2">Description of the first feature.</p>
    </div>
    <div class="p-6 bg-purple-500 rounded-xl text-white">
      <h3 class="font-bold text-lg">Feature 2</h3>
      <p class="text-purple-100 mt-2">Description of the second feature.</p>
    </div>
    <div class="p-6 bg-green-500 rounded-xl text-white">
      <h3 class="font-bold text-lg">Feature 3</h3>
      <p class="text-green-100 mt-2">Description of the third feature.</p>
    </div>
  </div>
</div>`,
  },
  {
    name: "Form Elements",
    html: `<div class="p-8 max-w-md mx-auto">
  <form class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="you@example.com">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="••••••••">
    </div>
    <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
      Sign In
    </button>
  </form>
</div>`,
  },
];

export default function PlaygroundPage() {
  const [html, setHtml] = useState(defaultTemplate);
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleReset = useCallback(() => {
    setHtml(defaultTemplate);
  }, []);

  const loadExample = useCallback((exampleHtml: string) => {
    setHtml(exampleHtml);
  }, []);

  const downloadCode = useCallback(() => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "apexcss-playground.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [html]);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Playground" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Playground
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Try Apex utilities directly in your browser. Edit the HTML and see the result instantly.
      </p>

      <Alert type="info" title="Pro Tip">
        Press Tab to indent and Shift+Tab to outdent. Use the examples below to get started quickly.
      </Alert>

      {/* Example Snippets */}
      <div className="flex flex-wrap gap-2 mb-6 mt-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 py-2">Examples:</span>
        {exampleSnippets.map((snippet) => (
          <button
            key={snippet.name}
            onClick={() => loadExample(snippet.html)}
            className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {snippet.name}
          </button>
        ))}
      </div>

      {/* Mobile Tab Switcher */}
      {isMobile && (
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-4">
          <button
            onClick={() => setActiveTab("editor")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === "editor"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === "preview"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            Preview
          </button>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <PlaygroundShare code={html} />
          <button
            onClick={downloadCode}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {/* Editor and Preview */}
      <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
        {/* Editor */}
        <div
          className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${
            isMobile && activeTab === "preview" ? "hidden" : "block"
          }`}
        >
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              HTML
            </span>
            <span className="text-xs text-gray-500">{html.length} chars</span>
          </div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                const target = e.target as HTMLTextAreaElement;
                const start = target.selectionStart;
                const end = target.selectionEnd;
                const value = target.value;
                if (e.shiftKey) {
                  // Outdent
                  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
                  const line = value.substring(lineStart, start);
                  if (line.startsWith("  ")) {
                    const newValue = value.substring(0, lineStart) + line.substring(2) + value.substring(start);
                    setHtml(newValue);
                    setTimeout(() => {
                      target.selectionStart = target.selectionEnd = start - 2;
                    }, 0);
                  }
                } else {
                  // Indent
                  const newValue = value.substring(0, start) + "  " + value.substring(end);
                  setHtml(newValue);
                  setTimeout(() => {
                    target.selectionStart = target.selectionEnd = start + 2;
                  }, 0);
                }
              }
            }}
            className="w-full h-96 p-4 font-mono text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 resize-none focus:outline-none"
            placeholder="Enter HTML with Apex classes..."
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div
          className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${
            isMobile && activeTab === "editor" ? "hidden" : "block"
          }`}
        >
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Preview
            </span>
            <span className="text-xs text-gray-500">Live</span>
          </div>
          <div
            className="w-full h-96 p-4 bg-white dark:bg-gray-900 overflow-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      {/* Code Export */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Generated Code
        </h2>
        <CodeBlock code={html} language="html" />
      </div>
    </div>
  );
}
