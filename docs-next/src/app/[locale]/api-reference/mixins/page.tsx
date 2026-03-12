import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";

export const metadata: Metadata = {
  title: "Mixins Reference - Apex Documentation",
  description: "Complete reference for Apex Sass mixins and utility generators",
};

export default function MixinsPage() {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "API Reference", href: "/api-reference" },
          { label: "Mixins" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Mixins Reference
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Sass mixins for responsive design, utility generation, and theming.
      </p>

      <Alert type="info" title="Sass Module System">
        All mixins use the modern <code>@use</code> / <code>@forward</code> module system.
        Import with <code>@use "path/to/mixins" as mix;</code> and reference as{" "}
        <code>@include mix.mixin-name();</code>
      </Alert>

      {/* Responsive Mixins */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Responsive Mixins
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create responsive styles using breakpoint-aware mixins.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">respond-above($breakpoint)</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Mobile-first breakpoint. Styles apply at and above the specified breakpoint.
            </p>
            <CodeBlock
              code={`@use "../mixins/responsive" as resp;

.my-component {
  // Base styles (mobile)
  padding: 1rem;

  // Tablet and up
  @include resp.respond-above(md) {
    padding: 2rem;
  }

  // Desktop and up
  @include resp.respond-above(lg) {
    padding: 3rem;
  }
}`}
              language="scss"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">respond-below($breakpoint)</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Desktop-first breakpoint. Styles apply below the specified breakpoint.
            </p>
            <CodeBlock
              code={`@use "../mixins/responsive" as resp;

.sidebar {
  // Desktop: show sidebar
  display: block;
  width: 280px;

  // Below tablet: hide sidebar
  @include resp.respond-below(md) {
    display: none;
  }
}`}
              language="scss"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">respond-between($lower, $upper)</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Target a specific range between two breakpoints.
            </p>
            <CodeBlock
              code={`@use "../mixins/responsive" as resp;

.hero {
  // Only tablet sizes
  @include resp.respond-between(md, lg) {
    font-size: 1.5rem;
  }
}`}
              language="scss"
            />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Available Breakpoints</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <th className="text-left py-2 px-4 font-semibold">Name</th>
                  <th className="text-left py-2 px-4 font-semibold">Value</th>
                  <th className="text-left py-2 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">sm</td>
                  <td className="py-2 px-4 font-mono">640px</td>
                  <td className="py-2 px-4 text-gray-600 dark:text-gray-400">Small devices</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">md</td>
                  <td className="py-2 px-4 font-mono">768px</td>
                  <td className="py-2 px-4 text-gray-600 dark:text-gray-400">Tablets</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">lg</td>
                  <td className="py-2 px-4 font-mono">1024px</td>
                  <td className="py-2 px-4 text-gray-600 dark:text-gray-400">Small desktops</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">xl</td>
                  <td className="py-2 px-4 font-mono">1280px</td>
                  <td className="py-2 px-4 text-gray-600 dark:text-gray-400">Desktops</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono">2xl</td>
                  <td className="py-2 px-4 font-mono">1536px</td>
                  <td className="py-2 px-4 text-gray-600 dark:text-gray-400">Large screens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Utility Generation Mixins */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Utility Generation Mixins
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Generate utility classes using CSS custom properties for runtime theming.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">generate-from-css-vars($class-name, $property, $var-map, $prefix)</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Generate utility classes that reference CSS custom properties.
            </p>
            <CodeBlock
              code={`@use "../mixins/utilities" as util;

// Define CSS variable map
$font-sizes: (
  sm: '--font-size-sm',
  base: '--font-size-base',
  lg: '--font-size-lg',
  xl: '--font-size-xl'
);

// Generate .text-sm, .text-base, etc.
@include util.generate-from-css-vars('text', 'font-size', $font-sizes);

// With prefix for responsive variants
@include util.generate-from-css-vars('text', 'font-size', $font-sizes, 'md:');`}
              language="scss"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">generate-color-utilities($color-name, $var-name)</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Generate text, background, and border color utilities.
            </p>
            <CodeBlock
              code={`@use "../mixins/utilities" as util;

// Generate .text-primary, .bg-primary, .border-primary
@include util.generate-color-utilities('primary', '--color-primary');

// Multiple colors
$brand-colors: (
  'primary': '--color-primary',
  'secondary': '--color-secondary',
  'accent': '--color-accent'
);

@each $name, $var in $brand-colors {
  @include util.generate-color-utilities($name, $var);
}`}
              language="scss"
            />
          </div>
        </div>
      </section>

      {/* Accessibility Mixins */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Accessibility Mixins
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">visually-hidden()</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Hide an element visually while keeping it accessible to screen readers.
            </p>
            <CodeBlock
              code={`@use "../mixins/states" as states;

.skip-link {
  @include states.visually-hidden;

  &:focus {
    // Show when focused
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
  }
}`}
              language="scss"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">focus-ring($color)</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Apply a consistent focus ring style to interactive elements.
            </p>
            <CodeBlock
              code={`@use "../mixins/states" as states;

.button {
  padding: 0.5rem 1rem;
  background: var(--color-primary);

  // Default focus ring
  @include states.focus-ring;

  // Custom color focus ring
  &--danger {
    @include states.focus-ring(var(--color-danger));
  }
}`}
              language="scss"
            />
          </div>
        </div>
      </section>

      {/* Dark Mode Mixins */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Dark Mode Mixins
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              <code className="text-blue-600 dark:text-blue-400">dark-mode()</code>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Apply styles that work with both system preference and manual dark mode toggle.
            </p>
            <CodeBlock
              code={`@use "../mixins/dark-mode" as dm;

.card {
  background: white;
  border: 1px solid #e5e7eb;

  @include dm.dark-mode {
    background: #1f2937;
    border-color: #374151;
  }
}`}
              language="scss"
            />
          </div>
        </div>

        <Alert type="info" title="Dark Mode Output" className="mt-4">
          The dark-mode mixin generates CSS that applies to both @media (prefers-color-scheme: dark)
          and .dark class contexts automatically.
        </Alert>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Best Practices
        </h2>

        <div className="space-y-4">
          <Alert type="success" title="Use @use with namespaces">
            Always use namespaces to avoid naming conflicts: @use "mixins/responsive" as resp;
          </Alert>
          <Alert type="success" title="Prefer utilities over mixins for common patterns">
            Use Apex utility classes when possible. Reserve mixins for complex component styles or
            when utilities are insufficient.
          </Alert>
          <Alert type="success" title="Combine mixins for complex components">
            Mixins work great together for building comprehensive component styles.
          </Alert>
        </div>
      </section>
    </section>
  );
}
