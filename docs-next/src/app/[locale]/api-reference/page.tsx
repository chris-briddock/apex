import { Breadcrumb } from "@/components/Breadcrumb";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "API Reference - Apex Documentation",
  description: "Complete API reference for Apex",
};

export default function ApiReferencePage() {
  const t = useTranslations("pages.apiReference");

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

      <Alert type="info" title={t("searchAvailable.title")}>
        {t("searchAvailable.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("layout.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">{t("layout.class")}</th>
                <th className="text-left py-3 px-4 font-semibold">{t("layout.description")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">block</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Display: block</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">inline-block</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Display: inline-block</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">inline</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Display: inline</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hidden</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Display: none</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">flex</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Display: flex</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">grid</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Display: grid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("spacing.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">{t("spacing.class")}</th>
                <th className="text-left py-3 px-4 font-semibold">{t("spacing.description")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">p-{`{size}`}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Padding on all sides</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">px-{`{size}`}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Padding left and right</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">py-{`{size}`}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Padding top and bottom</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">m-{`{size}`}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Margin on all sides</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">mx-{`{size}`}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Margin left and right</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">my-{`{size}`}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Margin top and bottom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
