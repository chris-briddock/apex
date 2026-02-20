import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Customization - Apex Documentation",
  description: "Customize Apex for your project",
};

export default function CustomizationPage() {
  const t = useTranslations("pages.customization");

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

      <Alert type="info" title={t("cssVariables.title")}>
        {t("cssVariables.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("customColors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("customColors.description")}
        </p>
        <CodeBlock
          code={`:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;
}`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("customSpacing.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("customSpacing.description")}
        </p>
        <CodeBlock
          code={`:root {
  --space-unit: 0.25rem;
  --space-1: calc(var(--space-unit) * 1);
  --space-2: calc(var(--space-unit) * 2);
  --space-4: calc(var(--space-unit) * 4);
  --space-8: calc(var(--space-unit) * 8);
}`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("customTypography.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("customTypography.description")}
        </p>
        <CodeBlock
          code={`:root {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
}`}
          language="css"
        />
      </section>
    </div>
  );
}
