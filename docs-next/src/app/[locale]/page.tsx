import Link from "next/link";
import { useTranslations } from "next-intl";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { Breadcrumb } from "@/components/Breadcrumb";
import { componentLinks } from "@/lib/navigation";

export const metadata = {
  title: "Apex Documentation - Utility-First CSS Framework",
  description: "A utility-first CSS framework with 500+ utility classes for rapid UI development",
};

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <Breadcrumb items={[{ label: t("sidebar.gettingStarted"), href: "/" }, { label: t("common.default") }]} />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("home.title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("home.description")}
      </p>

      <div className="mb-8">
        <Alert type="info" title={t("home.welcomeAlert.title")}>
          {t("home.welcomeAlert.content")}
        </Alert>
      </div>

      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.gettingStarted.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.gettingStarted.description")}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("home.gettingStarted.quickStart.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.gettingStarted.quickStart.description")}
        </p>

        <CodeBlock
          code={`<link rel="stylesheet" href="dist/framework.css">`}
          language="html"
        />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("home.gettingStarted.npmInstallation.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.gettingStarted.npmInstallation.description")}
        </p>

        <CodeBlock code="npm install apexcss" language="bash" />
      </section>

      <section id="utilities" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.utilities.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.utilities.description")}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t("home.utilities.spacing")}
        </h3>
        <CodeBlock
          code={`<div class="p-4">Content</div>`}
          language="html"
        />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("home.utilities.typography")}
        </h3>
        <CodeBlock
          code={`<p class="text-2xl font-bold">Large Heading</p>`}
          language="html"
        />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("home.utilities.colors")}
        </h3>
        <CodeBlock
          code={`<div class="bg-blue-500 text-white p-2">Blue Box</div>`}
          language="html"
        />

        <div className="mt-6">
          <Alert type="success">
            {t("home.utilities.exploreAlert")}
          </Alert>
        </div>
      </section>

      <section id="components" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.components.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.components.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {componentLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {link.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {link.description}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/components"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {t("home.components.viewAll")}
        </Link>
      </section>

      <section id="themes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.themes.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.themes.description")}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t("home.themes.darkMode.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.themes.darkMode.description")}
        </p>

        <CodeBlock
          code={`:root {
  --color-primary: #3b82f6;
}

.dark {
  --color-primary: #60a5fa;
}`}
          language="css"
        />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("home.themes.customThemes.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.themes.customThemes.description")}
        </p>

        <CodeBlock
          code={`.theme-custom {
  --color-primary: #8b5cf6;
  --color-secondary: #ec4899;
}`}
          language="css"
        />
      </section>

      <section id="accessibility" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.accessibility.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.accessibility.description")}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t("home.accessibility.screenReaderClasses.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.accessibility.screenReaderClasses.description")}
        </p>

        <CodeBlock
          code={`<span class="sr-only">Screen reader only text</span>`}
          language="html"
        />

        <Link
          href="/accessibility"
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-4"
        >
          {t("home.accessibility.learnMore")}
        </Link>
      </section>

      <section id="rtl" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.rtl.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.rtl.description")}
        </p>

        <CodeBlock
          code={`<html dir="rtl" lang="ar">`}
          language="html"
        />

        <Link
          href="/rtl"
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-4"
        >
          {t("home.rtl.documentation")}
        </Link>
      </section>

      <section id="configuration" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("home.configuration.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("home.configuration.description")}
        </p>

        <CodeBlock
          code={`// config.js
export default {
  prefix: 'apex-',
  utilities: {
    spacing: true,
    colors: true,
    typography: true,
    flexbox: true,
    grid: true
  }
}`}
          language="javascript"
        />

        <Link
          href="/configuration"
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-4"
        >
          {t("home.configuration.guide")}
        </Link>
      </section>
    </div>
  );
}
