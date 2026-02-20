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

      <Alert type="info" title={t("configurationFile.title")}>
        {t("configurationFile.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicConfiguration.title")}
        </h2>
        <CodeBlock
          code={`// config.js
export default {
  prefix: '',
  separator: ':',
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    },
    spacing: {
      'xs': '0.25rem',
      'sm': '0.5rem',
      'md': '1rem',
      'lg': '1.5rem',
      'xl': '2rem',
    },
  },
  utilities: {
    spacing: true,
    colors: true,
    typography: true,
    flexbox: true,
    grid: true,
  },
}`}
          language="javascript"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("prefix.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("prefix.description")}
        </p>
        <CodeBlock
          code={`// config.js
export default {
  prefix: 'apex-',
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          {t("prefix.note")}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("enableDisableUtilities.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("enableDisableUtilities.description")}
        </p>
        <CodeBlock
          code={`// config.js
export default {
  utilities: {
    spacing: true,
    colors: true,
    typography: true,
    flexbox: true,
    grid: true,
    animations: false, // Disable animations
    transforms: false, // Disable transforms
  },
}`}
          language="javascript"
        />
      </section>
    </div>
  );
}
