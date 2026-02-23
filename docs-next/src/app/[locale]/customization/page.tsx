import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { DesignTokenCard } from "@/components/DesignTokenCard";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customization - Apex Documentation",
  description: "Learn how to customize Apex CSS framework to match your brand and project requirements.",
};

export default function CustomizationPage() {
  const t = useTranslations("pages.customization");

  return (
    <div className="max-w-6xl">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          {t("description")}
        </p>
      </div>

      <Alert type="info" title={t("cssVariables.title")} className="mb-10">
        {t("cssVariables.content")}
      </Alert>

      {/* Overview Cards */}
      <section className="mb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DesignTokenCard
            name="Colors"
            value="Custom palettes"
            category="color"
            description="Override semantic & palette colors"
            cssVariable="--color-primary"
            preview={
              <div className="flex gap-1">
                {["#3b82f6", "#8b5cf6", "#22c55e", "#f59e0b", "#ef4444"].map((c) => (
                  <div key={c} className="w-6 h-6 rounded" style={{ backgroundColor: c }} />
                ))}
              </div>
            }
          />
          <DesignTokenCard
            name="Spacing"
            value="Custom scale"
            category="spacing"
            description="Define your spacing unit"
            cssVariable="--space-unit"
            preview={
              <div className="flex items-end gap-1 h-16">
                {[1, 2, 3, 4, 6, 8].map((s) => (
                  <div
                    key={s}
                    className="w-4 bg-blue-500 rounded-t"
                    style={{ height: `${s * 6}px` }}
                  />
                ))}
              </div>
            }
          />
          <DesignTokenCard
            name="Typography"
            value="Custom fonts"
            category="typography"
            description="Font families & sizes"
            cssVariable="--font-sans"
            preview={
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-gray-500">Aa</span>
                <span className="text-sm text-gray-600">Aa</span>
                <span className="text-base text-gray-700">Aa</span>
                <span className="text-lg text-gray-800">Aa</span>
                <span className="text-xl text-gray-900">Aa</span>
              </div>
            }
          />
          <DesignTokenCard
            name="Features"
            value="Tree-shaking"
            category="responsive"
            description="Enable/disable features"
            cssVariable="$enable-grid"
            preview={
              <div className="flex items-center justify-center h-16 gap-1">
                <div className="px-2 py-1 bg-green-500 text-white text-xs rounded">Grid</div>
                <div className="px-2 py-1 bg-green-500 text-white text-xs rounded">Flex</div>
                <div className="px-2 py-1 bg-gray-300 text-gray-600 text-xs rounded">Float</div>
              </div>
            }
          />
        </div>
      </section>

      {/* Quick Start */}
      <section className="mb-14 scroll-mt-20" id="quick-start">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("quickStart.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("quickStart.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("quickStart.intro")}
          </p>

          <CodeBlock
            code={`/* Override CSS variables after importing Apex */
@import 'apexcss/framework';

:root {
  /* Your custom theme */
  --color-primary: #6366f1;
  --color-success: #10b981;
  --font-sans: 'Inter', system-ui, sans-serif;
}`}
            language="scss"
          />
        </div>
      </section>

      {/* Custom Colors Section */}
      <section className="mb-14 scroll-mt-20" id="colors">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("customColors.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("customColors.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("customColors.intro")}
          </p>

          <CodeBlock
            code={`:root {
  /* Semantic Colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;
  --color-info: #0ea5e9;

  /* Neutral Colors */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;
  --color-gray-950: #030712;
}`}
            language="css"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {t("customColors.paletteTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("customColors.paletteDescription")}
          </p>
          <CodeBlock
            code={`/* Full color palette with shades */
:root {
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;
}`}
            language="css"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {t("customColors.darkModeTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("customColors.darkModeDescription")}
          </p>
          <CodeBlock
            code={`/* Dark mode overrides */
.dark,
[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-secondary: #a78bfa;
  --color-background: #111827;
  --color-text: #f9fafb;
}`}
            language="css"
          />
        </div>
      </section>

      {/* Custom Spacing Section */}
      <section className="mb-14 scroll-mt-20" id="spacing">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("customSpacing.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("customSpacing.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("customSpacing.intro")}
          </p>

          <CodeBlock
            code={`:root {
  /* Spacing variables used by the framework */
  --spacing-0: 0;
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */
}`}
            language="css"
          />

          <Alert type="info" title={t("customSpacing.noteTitle")}>
            {t("customSpacing.noteContent")}
          </Alert>
        </div>
      </section>

      {/* Custom Typography Section */}
      <section className="mb-14 scroll-mt-20" id="typography">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("customTypography.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("customTypography.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("customTypography.intro")}
          </p>

          <CodeBlock
            code={`:root {
  /* Font Families */
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
}`}
            language="css"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {t("customTypography.googleFontsTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("customTypography.googleFontsDescription")}
          </p>
          <CodeBlock
            code={`<!-- Load custom fonts in your HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Then override the CSS variable -->
<style>
  :root {
    --font-sans: 'Inter', system-ui, sans-serif;
  }
</style>`}
            language="html"
          />
        </div>
      </section>

      {/* SCSS Configuration */}
      <section className="mb-14 scroll-mt-20" id="scss-config">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("scss.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("scss.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("scss.intro")}
          </p>

          <CodeBlock
            code={`// Override SCSS variables before importing Apex
$color-primary-500: #6366f1;
$color-success-500: #10b981;
$enable-grid: true;
$enable-float: false;

// Then import the framework
@import 'apexcss/framework';`}
            language="scss"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {t("scss.availableVariablesTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("scss.availableVariablesDescription")}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Variable</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { var: "$prefix", type: "String", desc: "Class name prefix (e.g., 'apex-')" },
                  { var: "$enable-grid", type: "Boolean", desc: "Enable grid utilities" },
                  { var: "$enable-flexbox", type: "Boolean", desc: "Enable flexbox utilities" },
                  { var: "$enable-spacing", type: "Boolean", desc: "Enable spacing utilities" },
                  { var: "$enable-colors", type: "Boolean", desc: "Enable color utilities" },
                  { var: "$enable-typography", type: "Boolean", desc: "Enable typography utilities" },
                  { var: "$enable-shadows", type: "Boolean", desc: "Enable shadow utilities" },
                  { var: "$enable-transitions", type: "Boolean", desc: "Enable transition utilities" },
                  { var: "$enable-dark-mode", type: "Boolean", desc: "Enable dark mode support" },
                  { var: "$enable-rtl", type: "Boolean", desc: "Enable RTL support" },
                ].map((row) => (
                  <tr key={row.var} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-4 py-3 font-mono text-xs text-blue-600 dark:text-blue-400">{row.var}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {t("scss.colorVariablesTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("scss.colorVariablesDescription")}
          </p>
          <CodeBlock
            code={`// Override specific color shades
$color-primary-500: #6366f1;
$color-primary-600: #4f46e5;
$color-success-500: #10b981;
$color-warning-500: #f59e0b;
$color-error-500: #ef4444;

// Override entire color maps (advanced)
$spacing-scale: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  // Add or remove values
);

@import 'apexcss/framework';`}
            language="scss"
          />

          <Alert type="info" title={t("scss.importantNoteTitle")}>
            {t("scss.importantNoteContent")}
          </Alert>
        </div>
      </section>

      {/* Feature Flags */}
      <section className="mb-14 scroll-mt-20" id="feature-flags">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("featureFlags.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("featureFlags.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("featureFlags.intro")}
          </p>

          <CodeBlock
            code={`// Disable features you don't need to reduce bundle size
$enable-grid: false;
$enable-float: false;
$enable-table: false;
$enable-vertical-align: false;

// Keep only what you use
$enable-flexbox: true;
$enable-spacing: true;
$enable-colors: true;
$enable-typography: true;

@import 'apexcss/framework';`}
            language="scss"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {t("featureFlags.allFlagsTitle")}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "spacing", "sizing", "typography", "colors", "flexbox", "grid",
              "positioning", "display", "borders", "shadows", "opacity", "overflow",
              "visibility", "transitions", "cursor", "animations", "transforms", "filters"
            ].map((flag) => (
              <div key={flag} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <code className="text-xs font-mono text-blue-600 dark:text-blue-400">$enable-{flag}</code>
                <span className="text-xs text-gray-500 dark:text-gray-400">- default: true</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JavaScript Configuration */}
      <section className="mb-14 scroll-mt-20" id="js-config">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("jsConfig.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("jsConfig.description")}
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            {t("jsConfig.intro")}
          </p>

          <CodeBlock
            code={`// Runtime configuration with JavaScript
import { configure, createTheme, setCSSVariable } from 'apexcss/config';

// Apply custom configuration
configure({
  colors: {
    primary: '#6366f1',
    success: '#10b981'
  }
});

// Set individual variables
setCSSVariable('color-primary', '#6366f1');

// Create and apply themes
const darkTheme = createTheme('dark', {
  colors: {
    primary: '#818cf8',
    background: '#111827'
  }
});

darkTheme.apply();`}
            language="javascript"
          />
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12 scroll-mt-20" id="best-practices">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("bestPractices.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("bestPractices.description")}
          </p>
        </div>

        <div className="space-y-4">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>{t("bestPractices.tip1")}</li>
            <li>{t("bestPractices.tip2")}</li>
            <li>{t("bestPractices.tip3")}</li>
            <li>{t("bestPractices.tip4")}</li>
            <li>{t("bestPractices.tip5")}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
