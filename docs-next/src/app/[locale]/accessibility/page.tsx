import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Accessibility - Apex Documentation",
  description: "Accessibility features in Apex",
};

export default function AccessibilityPage() {
  const t = useTranslations("pages.accessibility");

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

      <Alert type="info" title={t("wcagCompliance.title")}>
        {t("wcagCompliance.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("screenReaderClasses.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("screenReaderClasses.description")}
        </p>
        <CodeBlock
          code={`<span class="sr-only">Screen reader only text</span>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("focusManagement.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("focusManagement.description")}
        </p>
        <CodeBlock
          code={`<button class="focus:outline-none focus:ring-2 focus:ring-blue-500">
  Click me
</button>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("reducedMotion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("reducedMotion.description")}
        </p>
        <CodeBlock
          code={`.animate-pulse {
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}`}
          language="css"
        />
      </section>
    </div>
  );
}
