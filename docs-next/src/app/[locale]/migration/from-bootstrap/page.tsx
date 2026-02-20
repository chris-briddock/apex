import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Migration from Bootstrap - Apex Documentation",
  description: "Migrate from Bootstrap to Apex",
};

export default function FromBootstrapPage() {
  const t = useTranslations("pages.migrationPages.fromBootstrap");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Migration", href: "/migration" },
          { label: "From Bootstrap" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <Alert type={t("alert.type") as "warning" | "info" | "success" | "error"} title={t("alert.title")}>
        {t("alert.message")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("gridSystem.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("gridSystem.description")}
        </p>
        <CodeBlock
          code={`<!-- ${t("gridSystem.bootstrapLabel")} -->
<div class="row">
  <div class="col-md-6">Content</div>
  <div class="col-md-6">Content</div>
</div>

<!-- ${t("gridSystem.apexcssLabel")} -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>Content</div>
  <div>Content</div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("component.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("component.description")}
        </p>
        <CodeBlock
          code={`<!-- ${t("component.bootstrapButton")} -->
<button class="btn btn-primary">Button</button>

<!-- ${t("component.apexcssButton")} -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Button
</button>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("spacing.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("spacing.description")}
        </p>
        <CodeBlock
          code={`<!-- ${t("spacing.bootstrapLabel")} -->
<div class="mt-3 mb-3">Content</div>

<!-- ${t("spacing.apexcssLabel")} -->
<div class="mt-4 mb-4">Content</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
