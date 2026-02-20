import { Breadcrumb } from "@/components/Breadcrumb";
import { Alert } from "@/components/Alert";
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
