import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Configuration - Apex Documentation",
  description: "Configure Apex for your project",
};

export default function ConfigurationPage() {
  const t = useTranslations("pages.configuration");

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

      <Alert type="info" title={t("scssConfiguration.title")}>
        {t("scssConfiguration.content")}
      </Alert>

      {/* Core Settings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("coreSettings.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("coreSettings.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss

// Prefix for all utility classes
$prefix: '' !default;

// Add !important to all utilities
$important: false !default;

// Separator for variants (e.g., hover:, focus:)
$separator: ':' !default;

// Dark mode strategy: 'class' or 'media'
$dark-mode: 'class' !default;

// Enable RTL support
$rtl: false !default;`}
          language="scss"
        />
      </section>

      {/* Prefix Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("prefix.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("prefix.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss
$prefix: 'apex-' !default;`}
          language="scss"
        />
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          {t("prefix.note")}
        </p>
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("prefix.example")}: <code className="text-pink-600 dark:text-pink-400">p-4</code> {t("prefix.becomes")} <code className="text-pink-600 dark:text-pink-400">apex-p-4</code>
          </p>
        </div>
      </section>

      {/* Breakpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("breakpoints.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("breakpoints.description")}
        </p>
        <CodeBlock
          code={`// src/config/_breakpoints.scss

// Breakpoint values
$breakpoint-sm: 640px !default;
$breakpoint-md: 768px !default;
$breakpoint-lg: 1024px !default;
$breakpoint-xl: 1280px !default;
$breakpoint-xxl: 1536px !default;

// Breakpoint map
$breakpoints: (
  sm: $breakpoint-sm,
  md: $breakpoint-md,
  lg: $breakpoint-lg,
  xl: $breakpoint-xl,
  xxl: $breakpoint-xxl
) !default;`}
          language="scss"
        />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("breakpoints.breakpoint")}</th>
                <th className="px-4 py-3">{t("breakpoints.minWidth")}</th>
                <th className="px-4 py-3">{t("breakpoints.css")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">sm</td>
                <td className="px-4 py-3">640px</td>
                <td className="px-4 py-3 font-mono text-xs">@media (min-width: 640px)</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">md</td>
                <td className="px-4 py-3">768px</td>
                <td className="px-4 py-3 font-mono text-xs">@media (min-width: 768px)</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">lg</td>
                <td className="px-4 py-3">1024px</td>
                <td className="px-4 py-3 font-mono text-xs">@media (min-width: 1024px)</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">xl</td>
                <td className="px-4 py-3">1280px</td>
                <td className="px-4 py-3 font-mono text-xs">@media (min-width: 1280px)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">xxl</td>
                <td className="px-4 py-3">1536px</td>
                <td className="px-4 py-3 font-mono text-xs">@media (min-width: 1536px)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Feature Flags */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("featureFlags.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("featureFlags.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss

// Core utilities
$enable-spacing: true !default;
$enable-sizing: true !default;
$enable-typography: true !default;
$enable-colors: true !default;
$enable-flexbox: true !default;
$enable-grid: true !default;
$enable-positioning: true !default;
$enable-display: true !default;
$enable-borders: true !default;
$enable-shadows: true !default;
$enable-opacity: true !default;
$enable-overflow: true !default;
$enable-visibility: true !default;
$enable-transitions: true !default;
$enable-cursor: true !default;
$enable-interaction: true !default;

// Extended utilities
$enable-transforms: true !default;
$enable-filters: true !default;
$enable-aspect-ratio: true !default;
$enable-backgrounds: true !default;

// State variants
$enable-states: true !default;
$enable-hover: true !default;
$enable-focus: true !default;
$enable-active: true !default;
$enable-disabled: true !default;

// Special features
$enable-dark-mode: true !default;
$enable-rtl: false !default;
$enable-animations: true !default;
$enable-accessibility: true !default;`}
          language="scss"
        />
      </section>

      {/* Spacing Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("spacingScale.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("spacingScale.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss
$spacing-scale: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  5: 1.25rem,
  6: 1.5rem,
  8: 2rem,
  10: 2.5rem,
  12: 3rem,
  16: 4rem,
  20: 5rem,
  24: 6rem,
) !default;`}
          language="scss"
        />
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          {t("spacingScale.usage")}
        </p>
      </section>

      {/* Sizing Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("sizingScale.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("sizingScale.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss
$sizing-scale: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  4: 1rem,
  8: 2rem,
  16: 4rem,
  24: 6rem,
  auto: auto,
  full: 100%,
  screen: 100vw,
  min: min-content,
  max: max-content
) !default;`}
          language="scss"
        />
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderRadius.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderRadius.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss
$border-radius-scale: (
  none: 0,
  sm: 0.125rem,
  default: 0.25rem,
  md: 0.375rem,
  lg: 0.5rem,
  xl: 0.75rem,
  2xl: 1rem,
  3xl: 1.5rem,
  full: 9999px
) !default;`}
          language="scss"
        />
      </section>

      {/* Shadows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("shadows.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("shadows.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss
$shadows: (
  sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05),
  DEFAULT: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
  md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
  none: none
) !default;`}
          language="scss"
        />
      </section>

      {/* Transitions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("transitions.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("transitions.description")}
        </p>
        <CodeBlock
          code={`// src/config/_settings.scss
$transition-duration-scale: (
  75: 75ms,
  100: 100ms,
  150: 150ms,
  200: 200ms,
  300: 300ms,
  500: 500ms,
  700: 700ms,
  1000: 1000ms
) !default;

$transition-timing-function-scale: (
  default: cubic-bezier(0.4, 0, 0.2, 1),
  linear: linear,
  ease-in: cubic-bezier(0.4, 0, 1, 1),
  ease-out: cubic-bezier(0, 0, 0.2, 1),
  ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
) !default;`}
          language="scss"
        />
      </section>

      {/* Customizing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("customizing.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("customizing.description")}
        </p>
        <CodeBlock
          code={`// Your custom config file (e.g., _my-config.scss)
// Import this BEFORE the framework

// Change breakpoint values
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

// Disable unused utilities
$enable-grid: false;
$enable-transforms: false;

// Custom spacing scale
$spacing-scale: (
  0: 0,
  xs: 0.5rem,
  sm: 1rem,
  md: 2rem,
  lg: 4rem,
  xl: 8rem
);

// Then import the framework
@import 'apexcss/framework';`}
          language="scss"
        />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("bestPractices.title")}
        </h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t("bestPractices.practice1")}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t("bestPractices.practice2")}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t("bestPractices.practice3")}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t("bestPractices.practice4")}</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
