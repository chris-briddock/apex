import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Dark Mode - Apex Documentation",
  description: "Learn how to use and customize dark mode in Apex",
};

export default function DarkModePage() {
  const t = useTranslations("pages.darkMode");

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("automaticDarkMode.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("automaticDarkMode.description")}
        </p>
        <CodeBlock
          code={`<html class="dark">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Content -->
  </body>
</html>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("darkModeClasses.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("darkModeClasses.description")}
        </p>
        <CodeBlock
          code={`<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Dark mode aware content
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("customizingDarkMode.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("customizingDarkMode.description")}
        </p>
        <CodeBlock
          code={`[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-secondary: #a78bfa;
  --color-background: #111827;
  --color-text: #f9fafb;
}`}
          language="css"
        />
      </section>
    </div>
  );
}
