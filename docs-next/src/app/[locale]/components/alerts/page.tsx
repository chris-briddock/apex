import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AlertDemo } from "@/components/AlertDemo";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Alerts - Apex Documentation",
  description: "Alert components for notifications and feedback in Apex",
};

export default function AlertsPage() {
  const t = useTranslations("pages.componentPages.alerts");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Components", href: "/components" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("title")}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("interactiveDemo.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("interactiveDemo.description")}
        </p>
        <AlertDemo />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicUsage.title")}
        </h2>
        <CodeBlock
          code={`<div class="alert alert-info" role="alert">
  <span class="alert-icon">ℹ️</span>
  <div class="alert-content">
    <strong class="alert-title">Information</strong>
    <p class="alert-message">This is an informational message.</p>
  </div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("variants.title")}
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.alert-info     /* ${t("variants.info")} */
.alert-success  /* ${t("variants.success")} */
.alert-warning  /* ${t("variants.warning")} */
.alert-error    /* ${t("variants.error")} */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("sizes.title")}
        </h2>
        <CodeBlock
          code={`.alert-sm   /* ${t("sizes.sm")} */
.alert-md   /* ${t("sizes.md")} */
.alert-lg   /* ${t("sizes.lg")} */`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("dismissible.title")}
        </h2>
        <CodeBlock
          code={`<div class="alert alert-info alert-dismissible" role="alert">
  <span class="alert-icon">ℹ️</span>
  <div class="alert-content">
    <strong class="alert-title">Information</strong>
    <p class="alert-message">This alert can be dismissed.</p>
  </div>
  <button class="alert-close" aria-label="Close">&times;</button>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("accessibility.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("accessibility.roleAlert")}</li>
          <li>{t("accessibility.ariaLabel")}</li>
          <li>{t("accessibility.colorContrast")}</li>
          <li>{t("accessibility.ariaLive")}</li>
        </ul>
      </section>
    </div>
  );
}
