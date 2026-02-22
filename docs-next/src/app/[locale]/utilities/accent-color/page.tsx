import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Accent Color - Apex Documentation",
  description: "Accent color utilities for form controls in Apex CSS Framework",
};

export default function AccentColorPage() {
  const t = useTranslations("pages.utilityPages.accentColor");

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicUsage.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicUsage.description")}
        </p>
        <CodeBlock
          code={`<input type="checkbox" class="accent-primary" checked>
<input type="radio" class="accent-success" checked>
<input type="range" class="accent-warning">
<progress class="accent-info" value="70" max="100"></progress>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("availableColors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("availableColors.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("availableColors.classHeader")}</th>
                <th className="px-4 py-3">{t("availableColors.descriptionHeader")}</th>
                <th className="px-4 py-3">{t("availableColors.previewHeader")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-auto</td>
                <td className="px-4 py-3">{t("availableColors.auto")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-auto" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-primary</td>
                <td className="px-4 py-3">{t("availableColors.primary")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-primary" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-secondary</td>
                <td className="px-4 py-3">{t("availableColors.secondary")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-secondary" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-success</td>
                <td className="px-4 py-3">{t("availableColors.success")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-success" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-danger</td>
                <td className="px-4 py-3">{t("availableColors.danger")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-danger" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-warning</td>
                <td className="px-4 py-3">{t("availableColors.warning")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-warning" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-info</td>
                <td className="px-4 py-3">{t("availableColors.info")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-info" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-white</td>
                <td className="px-4 py-3">{t("availableColors.white")}</td>
                <td className="px-4 py-3 bg-gray-800 p-2">
                  <input type="checkbox" className="accent-white" checked readOnly />
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-black</td>
                <td className="px-4 py-3">{t("availableColors.black")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-black" checked readOnly />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">.accent-transparent</td>
                <td className="px-4 py-3">{t("availableColors.transparent")}</td>
                <td className="px-4 py-3">
                  <input type="checkbox" className="accent-transparent" checked readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("supportedElements.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("supportedElements.description")}
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><code className="text-pink-600 dark:text-pink-400"><input type="checkbox" /></code> - {t("supportedElements.checkbox")}</li>
          <li><code className="text-pink-600 dark:text-pink-400"><input type="radio" /></code> - {t("supportedElements.radio")}</li>
          <li><code className="text-pink-600 dark:text-pink-400"><input type="range" /></code> - {t("supportedElements.range")}</li>
          <li><code className="text-pink-600 dark:text-pink-400"><progress /></code> - {t("supportedElements.progress")}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("examples.title")}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("examples.customCheckbox.title")}
            </h3>
            <CodeBlock
              code={`<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="accent-primary w-5 h-5" checked>
  <span class="text-gray-700 dark:text-gray-300">Custom colored checkbox</span>
</label>`}
              language="html"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("examples.coloredRadio.title")}
            </h3>
            <CodeBlock
              code={`<div class="flex gap-4">
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="color" class="accent-success" checked>
    <span>Success</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="color" class="accent-danger">
    <span>Danger</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="color" class="accent-warning">
    <span>Warning</span>
  </label>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
