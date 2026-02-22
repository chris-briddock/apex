import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Break - Apex Documentation",
  description: "Break utilities for controlling page breaks and column breaks in Apex CSS Framework",
};

export default function BreakPage() {
  const t = useTranslations("pages.utilityPages.break");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <Alert type="info" title={t("printNote.title")}>
        {t("printNote.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("breakInside.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("breakInside.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("table.classHeader")}</th>
                <th className="px-4 py-3">{t("table.descriptionHeader")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-inside-auto</td>
                <td className="px-4 py-3">{t("breakInside.auto")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-inside-avoid</td>
                <td className="px-4 py-3">{t("breakInside.avoid")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-inside-avoid-page</td>
                <td className="px-4 py-3">{t("breakInside.avoidPage")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-inside-avoid-column</td>
                <td className="px-4 py-3">{t("breakInside.avoidColumn")}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-inside-avoid-region</td>
                <td className="px-4 py-3">{t("breakInside.avoidRegion")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("breakBefore.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("breakBefore.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("table.classHeader")}</th>
                <th className="px-4 py-3">{t("table.descriptionHeader")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-auto</td>
                <td className="px-4 py-3">{t("breakBefore.auto")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-avoid</td>
                <td className="px-4 py-3">{t("breakBefore.avoid")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-all</td>
                <td className="px-4 py-3">{t("breakBefore.all")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-page</td>
                <td className="px-4 py-3">{t("breakBefore.page")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-left</td>
                <td className="px-4 py-3">{t("breakBefore.left")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-right</td>
                <td className="px-4 py-3">{t("breakBefore.right")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-column</td>
                <td className="px-4 py-3">{t("breakBefore.column")}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-before-region</td>
                <td className="px-4 py-3">{t("breakBefore.region")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("breakAfter.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("breakAfter.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("table.classHeader")}</th>
                <th className="px-4 py-3">{t("table.descriptionHeader")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-auto</td>
                <td className="px-4 py-3">{t("breakAfter.auto")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-avoid</td>
                <td className="px-4 py-3">{t("breakAfter.avoid")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-all</td>
                <td className="px-4 py-3">{t("breakAfter.all")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-page</td>
                <td className="px-4 py-3">{t("breakAfter.page")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-left</td>
                <td className="px-4 py-3">{t("breakAfter.left")}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-right</td>
                <td className="px-4 py-3">{t("breakAfter.right")}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.break-after-column</td>
                <td className="px-4 py-3">{t("breakAfter.column")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("boxDecoration.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("boxDecoration.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.box-decoration-clone</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("boxDecoration.clone")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.box-decoration-slice</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("boxDecoration.slice")}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("examples.title")}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("examples.preventBreak.title")}
            </h3>
            <CodeBlock
              code={`<div class="break-inside-avoid">
  <h2>Important Section</h2>
  <p>This content will not split across pages...</p>
</div>`}
              language="html"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("examples.pageBreak.title")}
            </h3>
            <CodeBlock
              code={`<h1 class="break-before-page">Chapter 1</h1>
<!-- Content -->

<h1 class="break-before-page">Chapter 2</h1>
<!-- Starts on new page -->`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
