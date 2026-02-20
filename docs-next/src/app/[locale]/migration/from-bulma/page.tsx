import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Migration from Bulma - Apex Documentation",
  description: "Migrate from Bulma to Apex",
};

export default function FromBulmaPage() {
  const t = useTranslations("pages.migrationPages.fromBulma");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Migration", href: "/migration" },
          { label: "From Bulma" },
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
          {t("grid.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("grid.description")}
        </p>
        <CodeBlock
          code={`<!-- ${t("grid.bulmaLabel")} -->
<div class="columns">
  <div class="column">Content</div>
  <div class="column">Content</div>
</div>

<!-- ${t("grid.apexcssLabel")} -->
<div class="grid grid-cols-2 gap-4">
  <div>Content</div>
  <div>Content</div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("componentClasses.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("componentClasses.description")}
        </p>
        <CodeBlock
          code={`<!-- ${t("componentClasses.bulmaButton")} -->
<button class="button is-primary">Button</button>

<!-- ${t("componentClasses.apexcssButton")} -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Button
</button>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("modifierClasses.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("modifierClasses.description")}
        </p>
        <CodeBlock
          code={`<!-- ${t("modifierClasses.bulmaResponsive")} -->
<div class="is-hidden-mobile">Content</div>

<!-- ${t("modifierClasses.apexcssResponsive")} -->
<div class="hidden md:block">Content</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
