import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";

export const metadata: Metadata = {
  title: "State Variants - Apex Documentation",
  description: "Learn how to use hover, focus, active, and disabled state variants in Apex",
};

export default function StatesPage() {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "State Variants" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        State Variants
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Apply styles based on element states like hover, focus, active, and disabled.
      </p>

      <Alert type="info" title="State Prefixes">
        Use state prefixes to apply utilities conditionally. All core utilities support state variants.
      </Alert>

      {/* Available States */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Available State Variants
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Prefix</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
                <th className="text-left py-3 px-4 font-semibold">CSS Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hover:</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Applied on mouse hover</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">:hover</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">focus:</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Applied on keyboard focus</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">:focus</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">active:</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Applied on mouse down/tap</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">:active</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">disabled:</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Applied when element is disabled</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">:disabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Prefix any utility class with a state variant to apply it conditionally.
        </p>
        <CodeBlock
          code={`<!-- Change background on hover -->
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Hover me
</button>

<!-- Add focus ring -->
<input class="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded px-3 py-2" />

<!-- Scale down on active -->
<button class="bg-green-500 active:scale-95 text-white px-4 py-2 rounded transition-transform">
  Click me
</button>

<!-- Dim disabled state -->
<button disabled class="bg-gray-400 disabled:opacity-50 text-white px-4 py-2 rounded cursor-not-allowed">
  Disabled
</button>`}
          language="html"
        />
      </section>

      {/* Combining States */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Combining State Variants
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Stack multiple state variants for complex interactions.
        </p>
        <CodeBlock
          code={`<!-- Different states for a button -->
<button class="
  bg-blue-500
  hover:bg-blue-600
  active:bg-blue-700
  focus:ring-2 focus:ring-blue-300
  disabled:bg-gray-400 disabled:cursor-not-allowed
  text-white px-4 py-2 rounded transition-colors
">
  Interactive Button
</button>

<!-- Focus-visible for keyboard-only focus -->
<button class="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 outline-none">
  Keyboard Focus Only
</button>`}
          language="html"
        />
      </section>

      {/* With Responsive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          With Responsive Prefixes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          State variants work with responsive prefixes too. Order matters: responsive first, then state.
        </p>
        <CodeBlock
          code={`<!-- Responsive hover states -->
<div class="md:hover:scale-105 lg:hover:scale-110 transition-transform">
  Scales differently on hover at different breakpoints
</div>

<!-- Combine responsive, dark mode, and states -->
<button class="
  bg-white dark:bg-gray-800
  hover:bg-gray-100 dark:hover:bg-gray-700
  md:px-6 md:py-3
  px-4 py-2
  rounded
">
  Responsive & Themed
</button>`}
          language="html"
        />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Best Practices
        </h2>
        <div className="space-y-4">
          <Alert type="success" title="Use focus-visible for keyboard accessibility">
            Use focus-visible instead of focus to show focus styles only for keyboard navigation,
            not when clicking with a mouse.
          </Alert>
          <Alert type="success" title="Always style disabled states">
            Include disabled: styles to provide visual feedback when elements are not interactive.
          </Alert>
          <Alert type="success" title="Combine with transitions">
            Add transition utilities for smooth state changes:
            <code className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">transition-colors</code>
            <code className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">transition-transform</code>
          </Alert>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Common Patterns
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Button States</h3>
            <CodeBlock
              code={`<button class="
  px-4 py-2 rounded-lg font-medium
  bg-blue-500 text-white
  hover:bg-blue-600
  active:bg-blue-700 active:scale-95
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:bg-gray-300 disabled:cursor-not-allowed
  transition-all duration-200
">
  Complete Button
</button>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Link Hover Effect</h3>
            <CodeBlock
              code={`<a href="#" class="
  text-blue-600
  hover:text-blue-800
  hover:underline
  underline-offset-2
  transition-colors
">
  Hover over this link
</a>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Form Input Focus</h3>
            <CodeBlock
              code={`<input
  type="text"
  class="
    w-full px-4 py-2 rounded-lg
    border border-gray-300
    focus:border-blue-500 focus:ring-2 focus:ring-blue-200
    focus:outline-none
    placeholder-gray-400
    transition-shadow
  "
  placeholder="Focus me..."
/>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
