import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Base Styles - Apex Documentation",
  description: "Base styles, CSS reset, normalize, and design tokens",
};

export default function BasePage() {
  const t = useTranslations("pages.base");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("overview.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("overview.description")}
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-6">
          <li>{t("overview.cssReset")}</li>
          <li>{t("overview.normalize")}</li>
          <li>{t("overview.baseElements")}</li>
          <li>{t("overview.designTokens")}</li>
        </ul>
      </section>

      {/* CSS Reset */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("cssReset.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("cssReset.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {t("cssReset.boxSizing")}
        </h3>
        <CodeBlock
          code={`*,
*::before,
*::after {
  box-sizing: border-box;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("cssReset.resetElements")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("cssReset.resetElementsDescription")}
        </p>
        <CodeBlock
          code={`body,
h1, h2, h3, h4, h5, h6,
p, ul, ol, dl, dd,
figure, blockquote, pre, code {
  margin: 0;
}

ul, ol {
  padding: 0;
  list-style: none;
}

fieldset {
  border: 0;
  margin: 0;
}

hr {
  border: 0;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("cssReset.formElements")}
        </h3>
        <CodeBlock
          code={`button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

input,
textarea,
select,
button {
  appearance: none;
}

input,
textarea,
select {
  border-radius: 0;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("cssReset.scrollbar")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("cssReset.scrollbarDescription")}
        </p>
        <CodeBlock
          code={`::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}`}
          language="css"
        />
      </section>

      {/* Normalize Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("normalize.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("normalize.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {t("normalize.documentDefaults")}
        </h3>
        <CodeBlock
          code={`html {
  line-height: 1.15;
  font-size: 16px;
  scroll-behavior: smooth;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  margin: 0;
}

main {
  display: block;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("normalize.textElements")}
        </h3>
        <CodeBlock
          code={`h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

b, strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub { bottom: -0.25em; }
sup { top: -0.5em; }`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("normalize.formElements")}
        </h3>
        <CodeBlock
          code={`button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: auto;
}`}
          language="css"
        />
      </section>

      {/* Base Element Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("baseElements.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("baseElements.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {t("baseElements.body")}
        </h3>
        <CodeBlock
          code={`body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
               Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5;
  color: #1f2937;
  background-color: #fff;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.headings")}
        </h3>
        <CodeBlock
          code={`h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.25;
  color: #111827;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.links")}
        </h3>
        <CodeBlock
          code={`a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 150ms ease;
}

a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.images")}
        </h3>
        <CodeBlock
          code={`img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.lists")}
        </h3>
        <CodeBlock
          code={`ul, ol {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.25rem;
}

dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

dt {
  font-weight: 600;
}

dd {
  margin-left: 0;
  margin-bottom: 0.5rem;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.blockquotes")}
        </h3>
        <CodeBlock
          code={`blockquote {
  margin: 0 0 1rem;
  padding: 0.5rem 1rem;
  border-left: 4px solid #e5e7eb;
  background-color: #f9fafb;
  color: #4b5563;
}

blockquote p:last-child {
  margin-bottom: 0;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.code")}
        </h3>
        <CodeBlock
          code={`pre {
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #1f2937;
  color: #f3f4f6;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.5;
}

code {
  font-size: 0.875em;
  padding: 0.125rem 0.25rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  color: #ef4444;
}

pre code {
  padding: 0;
  background-color: transparent;
  color: inherit;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.tables")}
        </h3>
        <CodeBlock
          code={`table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
  border-spacing: 0;
}

th, td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #e5e7eb;
}

thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
  text-align: left;
}

tbody + tbody {
  border-top: 2px solid #e5e7eb;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.forms")}
        </h3>
        <CodeBlock
          code={`input[type="text"],
input[type="email"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="tel"],
input[type="number"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #1f2937;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

input:disabled,
input[readonly],
textarea:disabled,
textarea[readonly],
select:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}`}
          language="css"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("baseElements.focusVisible")}
        </h3>
        <CodeBlock
          code={`:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`}
          language="css"
        />
      </section>

      {/* Design Tokens */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("designTokens.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("designTokens.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {t("designTokens.colors")}
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.token")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.value")}</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary</code></td><td>#3b82f6</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-secondary</code></td><td>#64748b</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success</code></td><td>#22c55e</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger</code></td><td>#ef4444</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning</code></td><td>#f59e0b</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info</code></td><td>#0ea5e9</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-light</code></td><td>#f3f4f6</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-dark</code></td><td>#1f2937</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-white</code></td><td>#ffffff</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--color-black</code></td><td>#000000</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-50</code></td><td>#f9fafb</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-100</code></td><td>#f3f4f6</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-200</code></td><td>#e5e7eb</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-300</code></td><td>#d1d5db</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-400</code></td><td>#9ca3af</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-500</code></td><td>#6b7280</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-600</code></td><td>#4b5563</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-700</code></td><td>#374151</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-800</code></td><td>#1f2937</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--color-gray-900</code></td><td>#111827</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-gray-950</code></td><td>#030712</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-50</code></td><td>#eff6ff</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-100</code></td><td>#dbeafe</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-200</code></td><td>#bfdbfe</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-300</code></td><td>#93c5fd</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-400</code></td><td>#60a5fa</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-500</code></td><td>#3b82f6</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-600</code></td><td>#2563eb</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-700</code></td><td>#1d4ed8</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-800</code></td><td>#1e40af</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-primary-900</code></td><td>#1e3a8a</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--color-primary-950</code></td><td>#172554</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-50</code></td><td>#f0fdf4</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-100</code></td><td>#dcfce7</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-200</code></td><td>#bbf7d0</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-300</code></td><td>#86efac</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-400</code></td><td>#4ade80</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-500</code></td><td>#22c55e</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-600</code></td><td>#16a34a</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-700</code></td><td>#15803d</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-800</code></td><td>#166534</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-success-900</code></td><td>#14532d</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--color-success-950</code></td><td>#052e16</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-50</code></td><td>#fef2f2</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-100</code></td><td>#fee2e2</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-200</code></td><td>#fecaca</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-300</code></td><td>#fca5a5</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-400</code></td><td>#f87171</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-500</code></td><td>#ef4444</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-600</code></td><td>#dc2626</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-700</code></td><td>#b91c1c</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-800</code></td><td>#991b1b</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-danger-900</code></td><td>#7f1d1d</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--color-danger-950</code></td><td>#450a0a</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-50</code></td><td>#fffbeb</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-100</code></td><td>#fef3c7</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-200</code></td><td>#fde68a</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-300</code></td><td>#fcd34d</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-400</code></td><td>#fbbf24</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-500</code></td><td>#f59e0b</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-600</code></td><td>#d97706</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-700</code></td><td>#b45309</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-800</code></td><td>#92400e</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-warning-900</code></td><td>#78350f</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--color-warning-950</code></td><td>#451a03</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-50</code></td><td>#f0f9ff</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-100</code></td><td>#e0f2fe</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-200</code></td><td>#bae6fd</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-300</code></td><td>#7dd3fc</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-400</code></td><td>#38bdf8</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-500</code></td><td>#0ea5e9</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-600</code></td><td>#0284c7</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-700</code></td><td>#0369a1</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-800</code></td><td>#075985</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--color-info-900</code></td><td>#0c4a6e</td></tr>
              <tr><td><code>--color-info-950</code></td><td>#082f49</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("designTokens.spacing")}
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.token")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.rem")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.pixels")}</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-0</code></td><td>0</td><td>0px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-1</code></td><td>0.25rem</td><td>4px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-2</code></td><td>0.5rem</td><td>8px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-3</code></td><td>0.75rem</td><td>12px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-4</code></td><td>1rem</td><td>16px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-5</code></td><td>1.25rem</td><td>20px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-6</code></td><td>1.5rem</td><td>24px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-8</code></td><td>2rem</td><td>32px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-10</code></td><td>2.5rem</td><td>40px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-12</code></td><td>3rem</td><td>48px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-16</code></td><td>4rem</td><td>64px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-20</code></td><td>5rem</td><td>80px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-24</code></td><td>6rem</td><td>96px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-28</code></td><td>7rem</td><td>112px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-32</code></td><td>8rem</td><td>128px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-36</code></td><td>9rem</td><td>144px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-40</code></td><td>10rem</td><td>160px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-44</code></td><td>11rem</td><td>176px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-48</code></td><td>12rem</td><td>192px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-52</code></td><td>13rem</td><td>208px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-56</code></td><td>14rem</td><td>224px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-60</code></td><td>15rem</td><td>240px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-64</code></td><td>16rem</td><td>256px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-72</code></td><td>18rem</td><td>288px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--spacing-80</code></td><td>20rem</td><td>320px</td></tr>
              <tr><td><code>--spacing-96</code></td><td>24rem</td><td>384px</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("designTokens.typography")}
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.category")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.token")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.value")}</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={9}>{t("designTokens.table.fontSizes")}</td><td><code>--font-size-xs</code></td><td>0.75rem (12px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-sm</code></td><td>0.875rem (14px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-base</code></td><td>1rem (16px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-lg</code></td><td>1.125rem (18px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-xl</code></td><td>1.25rem (20px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-2xl</code></td><td>1.5rem (24px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-3xl</code></td><td>1.875rem (30px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-size-4xl</code></td><td>2.25rem (36px)</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--font-size-5xl</code></td><td>3rem (48px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={4}>{t("designTokens.table.fontWeights")}</td><td><code>--font-weight-normal</code></td><td>400</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-weight-medium</code></td><td>500</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--font-weight-semibold</code></td><td>600</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--font-weight-bold</code></td><td>700</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={5}>{t("designTokens.table.lineHeights")}</td><td><code>--line-height-tight</code></td><td>1.25</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--line-height-snug</code></td><td>1.375</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--line-height-normal</code></td><td>1.5</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--line-height-relaxed</code></td><td>1.625</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--line-height-loose</code></td><td>2</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td rowSpan={6}>{t("designTokens.table.letterSpacing")}</td><td><code>--letter-spacing-tighter</code></td><td>-0.05em</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--letter-spacing-tight</code></td><td>-0.025em</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--letter-spacing-normal</code></td><td>0</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--letter-spacing-wide</code></td><td>0.025em</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--letter-spacing-wider</code></td><td>0.05em</td></tr>
              <tr><td><code>--letter-spacing-widest</code></td><td>0.1em</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
          {t("designTokens.effects")}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.category")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.token")}</th>
                <th className="py-2 font-semibold text-gray-900 dark:text-white">{t("designTokens.table.value")}</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={7}>{t("designTokens.table.shadows")}</td><td><code>--shadow-sm</code></td><td>0 1px 2px 0 rgba(0, 0, 0, 0.05)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--shadow-base</code></td><td>0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--shadow-md</code></td><td>0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--shadow-lg</code></td><td>0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--shadow-xl</code></td><td>0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--shadow-2xl</code></td><td>0 25px 50px -12px rgba(0, 0, 0, 0.25)</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--shadow-none</code></td><td>none</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={8}>{t("designTokens.table.borderRadius")}</td><td><code>--border-radius-none</code></td><td>0</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--border-radius-sm</code></td><td>0.125rem (2px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--border-radius-base</code></td><td>0.25rem (4px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--border-radius-md</code></td><td>0.375rem (6px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--border-radius-lg</code></td><td>0.5rem (8px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--border-radius-xl</code></td><td>0.75rem (12px)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--border-radius-2xl</code></td><td>1rem (16px)</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--border-radius-full</code></td><td>9999px</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={5}>{t("designTokens.table.opacity")}</td><td><code>--opacity-0</code></td><td>0</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--opacity-25</code></td><td>0.25</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--opacity-50</code></td><td>0.5</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--opacity-75</code></td><td>0.75</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--opacity-100</code></td><td>1</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={5}>{t("designTokens.table.transitionDuration")}</td><td><code>--transition-duration-75</code></td><td>75ms</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-duration-100</code></td><td>100ms</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-duration-150</code></td><td>150ms</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-duration-200</code></td><td>200ms</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--transition-duration-300</code></td><td>300ms</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={6}>{t("designTokens.table.transitionTiming")}</td><td><code>--transition-timing-linear</code></td><td>linear</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-timing-ease</code></td><td>ease</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-timing-ease-in</code></td><td>ease-in</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-timing-ease-out</code></td><td>ease-out</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--transition-timing-ease-in-out</code></td><td>ease-in-out</td></tr>
              <tr className="border-b border-gray-200 dark:border-gray-700"><td><code>--transition-timing-default</code></td><td>cubic-bezier(0.4, 0, 0.2, 1)</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td rowSpan={8}>{t("designTokens.table.zIndex")}</td><td><code>--z-index-0</code></td><td>0</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--z-index-10</code></td><td>10</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--z-index-20</code></td><td>20</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--z-index-30</code></td><td>30</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--z-index-40</code></td><td>40</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--z-index-50</code></td><td>50</td></tr>
              <tr className="border-b border-gray-100 dark:border-gray-800"><td><code>--z-index-auto</code></td><td>auto</td></tr>
              <tr><td><code>--z-index-dropdown</code></td><td>1000</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("usage.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("usage.description")}
        </p>
        <CodeBlock
          code={`/* In your CSS */
.my-component {
  color: var(--color-primary);
  padding: var(--spacing-4);
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
}`}
          language="css"
        />
        <CodeBlock
          code={`<!-- Inline styles -->
<div style="color: var(--color-primary); padding: var(--spacing-4);">
  Styled with design tokens
</div>`}
          language="html"
        />
      </section>

      {/* Dark Mode */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("darkMode.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("darkMode.description")}
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>{t("darkMode.system")}</li>
          <li>{t("darkMode.manual")}</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("darkMode.elements")}
        </p>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("import.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("import.description")}
        </p>
        <CodeBlock
          code={`// Import all base styles
@use 'apex/base' as base;`}
          language="scss"
        />
        <p className="text-gray-600 dark:text-gray-400 mb-4 mt-4">
          {t("import.individual")}
        </p>
        <CodeBlock
          code={`// Import specific modules
@use 'apex/base/colors' as colors;
@use 'apex/base/spacing' as spacing;
@use 'apex/base/typography' as typography;`}
          language="scss"
        />
      </section>
    </div>
  );
}
