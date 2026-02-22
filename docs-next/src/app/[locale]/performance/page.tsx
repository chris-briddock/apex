import { Breadcrumb } from "@/components/Breadcrumb";
import { Alert } from "@/components/Alert";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Performance - Apex Documentation",
  description: "Performance optimization with Apex",
};

export default function PerformancePage() {
  const t = useTranslations("pages.performance");

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

      <Alert type="info" title={t("buildOptimization.title")}>
        {t("buildOptimization.content")}
      </Alert>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("fileSize.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("fileSize.content")}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("purgecss.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.content")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("purgecss.whatIs.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.whatIs.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("purgecss.configuration.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.configuration.description")}
        </p>
        <CodeBlock
          code={`// purgecss.config.js
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.vue',
  ],
  safelist: [
    // State variants
    /-(hover|focus|active|disabled|visited|before|after)$/,
    // Screen reader utilities
    /^sr-only/,
    /^not-sr-only/,
    // RTL variants
    /^rtl-/,
    // Dark mode variants
    /^dark:/,
    // Animation classes
    /^animate-/,
    // Focus utilities
    /^focus-visible/,
    /^focus-within/
  ],
  extractors: [
    {
      extractor: (content) => {
        const matches = content.match(/[^<>"'\`\\s]*[^<>"'\`\\s:]/g) || [];
        return [...new Set(matches)];
      },
      extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'vue']
    }
  ]
};`}
          language="javascript"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("purgecss.installation.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.installation.description")}
        </p>
        <CodeBlock
          code={`# Install PurgeCSS
npm install -D @fullhuman/postcss-purgecss

# Or with yarn
yarn add -D @fullhuman/postcss-purgecss`}
          language="bash"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("purgecss.postcss.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.postcss.description")}
        </p>
        <CodeBlock
          code={`// postcss.config.js
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    // Other PostCSS plugins...
    purgecss({
      content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
      safelist: {
        standard: ['sr-only', 'not-sr-only'],
        deep: [/focus-visible/, /focus-within/, /dark:/, /animate-/],
        greedy: [/^rtl-/]
      }
    })
  ]
};`}
          language="javascript"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("purgecss.safelist.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.safelist.description")}
        </p>
        <CodeBlock
          code={`// Example: Safelist patterns for dynamic classes
const purgeCssPlugin = purgecss({
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  safelist: {
    // Standard classes to keep
    standard: [
      'sr-only',
      'not-sr-only',
      'skip-link'
    ],
    // Keep classes matching these patterns
    deep: [
      /focus-visible/,      // Keep all focus-visible utilities
      /focus-within/,       // Keep all focus-within utilities
      /dark:/,              // Keep dark mode variants
      /motion-reduce:/,     // Keep motion reduce utilities
      /contrast-/,          // Keep contrast utilities
      /rtl-/,               // Keep RTL utilities
      /animate-/            // Keep animation classes
    ],
    // Greedy patterns (more permissive)
    greedy: [
      /^theme-/,             // Keep theme classes
      /^data-theme/         // Keep data-theme attributes
    ]
  }
});`}
          language="javascript"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("purgecss.buildIntegration.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.buildIntegration.description")}
        </p>
        <CodeBlock
          code={`// vite.config.js
import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      safelist: ['sr-only', 'not-sr-only']
    })
  ]
});

// webpack.config.js
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = {
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(\`\${PATHS.src}/**/*\`, { nodir: true }),
      safelist: ['sr-only', 'not-sr-only']
    })
  ]
};`}
          language="javascript"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("purgecss.cli.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("purgecss.cli.description")}
        </p>
        <CodeBlock
          code={`# Using PurgeCSS CLI
npx purgecss --css css/style.css --content src/index.html src/**/*.js --output css/

# With a config file
npx purgecss --config purgecss.config.js`}
          language="bash"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("purgecss.bestPractices.title")}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("purgecss.bestPractices.practice1")}</li>
          <li>{t("purgecss.bestPractices.practice2")}</li>
          <li>{t("purgecss.bestPractices.practice3")}</li>
          <li>{t("purgecss.bestPractices.practice4")}</li>
          <li>{t("purgecss.bestPractices.practice5")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("bestPractices.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("bestPractices.steps.cdn")}</li>
          <li>{t("bestPractices.steps.purge")}</li>
          <li>{t("bestPractices.steps.disable")}</li>
          <li>{t("bestPractices.steps.components")}</li>
        </ul>
      </section>
    </div>
  );
}
