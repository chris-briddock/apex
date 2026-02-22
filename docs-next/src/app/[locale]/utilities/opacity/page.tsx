import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Opacity - Apex Documentation",
  description: "Opacity utilities for controlling the transparency of elements",
};

export default function OpacityPage() {
  const t = useTranslations("pages.utilityPages.opacity");
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

      {/* Opacity Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("opacityScale.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("opacityScale.description")}
        </p>
        <CodeBlock
          code={`.opacity-0    /* opacity: 0 (completely invisible) */
.opacity-5    /* opacity: 0.05 */
.opacity-10   /* opacity: 0.1 */
.opacity-20   /* opacity: 0.2 */
.opacity-25   /* opacity: 0.25 */
.opacity-30   /* opacity: 0.3 */
.opacity-40   /* opacity: 0.4 */
.opacity-50   /* opacity: 0.5 */
.opacity-60   /* opacity: 0.6 */
.opacity-70   /* opacity: 0.7 */
.opacity-75   /* opacity: 0.75 */
.opacity-80   /* opacity: 0.8 */
.opacity-90   /* opacity: 0.9 */
.opacity-95   /* opacity: 0.95 */
.opacity-100  /* opacity: 1 (fully opaque) */`}
          language="css"
        />
      </section>

      {/* Responsive Opacity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsive.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsive.description")}
        </p>
        <CodeBlock
          code={`/* Responsive variants for xxl breakpoint */
.xxl:opacity-0 .xxl:opacity-5 .xxl:opacity-10 .xxl:opacity-20
.xxl:opacity-25 .xxl:opacity-30 .xxl:opacity-40 .xxl:opacity-50
.xxl:opacity-60 .xxl:opacity-70 .xxl:opacity-75 .xxl:opacity-80
.xxl:opacity-90 .xxl:opacity-95 .xxl:opacity-100`}
          language="css"
        />
      </section>

      {/* Visual Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("visualExamples.title")}
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded opacity-0" />
            <code className="text-sm">.opacity-0</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded opacity-25" />
            <code className="text-sm">.opacity-25</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded opacity-50" />
            <code className="text-sm">.opacity-50</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded opacity-75" />
            <code className="text-sm">.opacity-75</code>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded opacity-100" />
            <code className="text-sm">.opacity-100</code>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("commonPatterns.title")}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.hoverEffect")}
            </h3>
            <CodeBlock
              code={`<button class="opacity-75 hover:opacity-100 transition-opacity">
  Hover to reveal fully
</button>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.disabledState")}
            </h3>
            <CodeBlock
              code={`<button class="disabled:opacity-50" disabled>
  Disabled Button
</button>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.loadingOverlay")}
            </h3>
            <CodeBlock
              code={`<div class="relative">
  <div>Content</div>
  <div class="absolute inset-0 bg-white opacity-75 flex items-center justify-center">
    <span>Loading...</span>
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.imageOverlay")}
            </h3>
            <CodeBlock
              code={`<div class="relative group">
  <img src="photo.jpg" alt="Photo">
  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity">
    <span class="text-white opacity-0 group-hover:opacity-100">View Details</span>
  </div>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
