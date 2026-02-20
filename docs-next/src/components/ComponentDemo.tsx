"use client";

import { useState } from "react";
import { Check, Copy, Code2, Eye, Accessibility, BookOpen, Info } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface AccessibilityInfo {
  keyboard?: string[];
  aria?: string[];
  screenReader?: string;
  focus?: string;
}

interface Example {
  name: string;
  description?: string;
  code: string;
  preview: React.ReactNode;
}

interface ComponentDemoProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  props?: Prop[];
  accessibility?: AccessibilityInfo;
  examples?: Example[];
  importStatement?: string;
}

type TabType = "preview" | "code" | "props" | "accessibility";

export function ComponentDemo({
  title,
  description,
  component,
  code,
  props,
  accessibility,
  examples,
  importStatement = `import { ${title} } from "@/components/${title}";`,
}: ComponentDemoProps) {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "preview", label: "Preview", icon: <Eye className="w-4 h-4" /> },
    { id: "code", label: "Code", icon: <Code2 className="w-4 h-4" /> },
    ...(props ? [{ id: "props" as TabType, label: "Props", icon: <BookOpen className="w-4 h-4" /> }] : []),
    ...(accessibility ? [{ id: "accessibility" as TabType, label: "Accessibility", icon: <Accessibility className="w-4 h-4" /> }] : []),
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {/* Import Statement */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Import</span>
          <button
            onClick={() => navigator.clipboard.writeText(importStatement)}
            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            Copy
          </button>
        </div>
        <code className="text-blue-400 font-mono text-sm">{importStatement}</code>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {/* Preview Tab */}
        {activeTab === "preview" && (
          <div className="space-y-6">
            {/* Main Preview */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="p-8 flex items-center justify-center min-h-[200px] bg-white dark:bg-gray-900">
                {component}
              </div>
            </div>

            {/* Examples */}
            {examples && examples.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Examples</h3>
                <div className="grid gap-4">
                  {examples.map((example, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-gray-900 dark:text-white">{example.name}</h4>
                        {example.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{example.description}</p>
                        )}
                      </div>
                      <div className="p-6 bg-white dark:bg-gray-900 flex items-center justify-center">
                        {example.preview}
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-700">
                        <CodeBlock code={example.code} language="html" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Code Tab */}
        {activeTab === "code" && (
          <CodeBlock code={code} language="html" />
        )}

        {/* Props Tab */}
        {activeTab === "props" && props && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {props.map((prop) => (
                  <tr key={prop.name} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-blue-600 dark:text-blue-400 text-sm">{prop.name}</code>
                        {prop.required && (
                          <span className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded">
                            Required
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <code className="font-mono text-purple-600 dark:text-purple-400 text-xs">{prop.type}</code>
                    </td>
                    <td className="py-3 px-4">
                      {prop.default ? (
                        <code className="font-mono text-gray-600 dark:text-gray-400 text-xs">{prop.default}</code>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Accessibility Tab */}
        {activeTab === "accessibility" && accessibility && (
          <div className="space-y-6">
            {accessibility.keyboard && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  Keyboard Support
                </h4>
                <ul className="space-y-2">
                  {accessibility.keyboard.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {accessibility.aria && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  ARIA Attributes
                </h4>
                <ul className="space-y-2">
                  {accessibility.aria.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {accessibility.screenReader && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-2">Screen Reader Support</h4>
                <p className="text-sm text-blue-800 dark:text-blue-300">{accessibility.screenReader}</p>
              </div>
            )}

            {accessibility.focus && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-400 mb-2">Focus Management</h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">{accessibility.focus}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
