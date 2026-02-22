import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Visibility - Apex Documentation",
  description: "Visibility utilities for controlling element visibility without affecting layout",
};

export default function VisibilityPage() {
  const t = useTranslations("pages.utilityPages.visibility");
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

      {/* Visibility Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("visibilityValues.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("visibilityValues.description")}
        </p>
        <CodeBlock
          code={`.visible     /* visibility: visible - element is visible (default) */
.invisible   /* visibility: hidden - element is invisible but still takes up space */
.collapse    /* visibility: collapse - for table rows/columns, removes from layout */`}
          language="css"
        />
      </section>

      {/* Visibility vs Display */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("vsDisplay.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("vsDisplay.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">{t("vsDisplay.class")}</th>
                <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">{t("vsDisplay.space")}</th>
                <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">{t("vsDisplay.clickable")}</th>
                <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">{t("vsDisplay.useCase")}</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4"><code>.visible</code></td>
                <td className="py-3 px-4">{t("vsDisplay.yes")}</td>
                <td className="py-3 px-4">{t("vsDisplay.yes")}</td>
                <td className="py-3 px-4">{t("vsDisplay.default")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4"><code>.invisible</code></td>
                <td className="py-3 px-4">{t("vsDisplay.yes")}</td>
                <td className="py-3 px-4">{t("vsDisplay.no")}</td>
                <td className="py-3 px-4">{t("vsDisplay.hideKeepSpace")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-3 px-4"><code>.hidden</code></td>
                <td className="py-3 px-4">{t("vsDisplay.no")}</td>
                <td className="py-3 px-4">{t("vsDisplay.no")}</td>
                <td className="py-3 px-4">{t("vsDisplay.removeLayout")}</td>
              </tr>
              <tr>
                <td className="py-3 px-4"><code>.collapse</code></td>
                <td className="py-3 px-4">{t("vsDisplay.no")}</td>
                <td className="py-3 px-4">{t("vsDisplay.no")}</td>
                <td className="py-3 px-4">{t("vsDisplay.tableRows")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Responsive Visibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsive.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsive.description")}
        </p>
        <CodeBlock
          code={`/* Small screens and up */
.sm:visible .sm:invisible .sm:collapse

/* Medium screens and up */
.md:visible .md:invisible .md:collapse

/* Large screens and up */
.lg:visible .lg:invisible .lg:collapse

/* Extra large screens and up */
.xl:visible .xl:invisible .xl:collapse

/* 2x extra large screens and up */
.xxl:visible .xxl:invisible .xxl:collapse`}
          language="css"
        />
      </section>

      {/* Print Visibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("print.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("print.description")}
        </p>
        <CodeBlock
          code={`.no-print       /* Hidden when printing */
.print:hidden   /* Hidden when printing (alternative syntax) */`}
          language="css"
        />
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("commonPatterns.title")}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.toggleVisibility")}
            </h3>
            <CodeBlock
              code={`<div class="invisible hover:visible">
  This appears on hover without affecting layout
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.loadingState")}
            </h3>
            <CodeBlock
              code={`<button class="relative">
  <span class="invisible">Loading...</span>
  <span class="absolute inset-0 flex items-center justify-center">
    <svg class="animate-spin h-5 w-5" />
  </span>
</button>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.tableRows")}
            </h3>
            <CodeBlock
              code={`<table>
  <tr class="visible">Visible row</tr>
  <tr class="collapse">Collapsed row - removed from layout</tr>
  <tr class="visible">Visible row</tr>
</table>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.printOnly")}
            </h3>
            <CodeBlock
              code={`<div class="no-print">
  This content won't appear when printing
  (like navigation menus, sidebars, etc.)
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
