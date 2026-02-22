import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Accessibility - Apex Documentation",
  description: "Accessibility features in Apex CSS Framework",
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

      {/* Screen Reader Utilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("screenReaderClasses.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("screenReaderClasses.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("screenReaderClasses.srOnly.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("screenReaderClasses.srOnly.description")}
        </p>
        <CodeBlock
          code={`<span class="sr-only">Screen reader only text</span>
<button>
  <span class="sr-only">Close dialog</span>
  <svg><!-- icon --></svg>
</button>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("screenReaderClasses.notSrOnly.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("screenReaderClasses.notSrOnly.description")}
        </p>
        <CodeBlock
          code={`<div class="sr-only focus-within:not-sr-only">
  <a href="#main">Skip to main content</a>
</div>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("screenReaderClasses.focusable.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("screenReaderClasses.focusable.description")}
        </p>
        <CodeBlock
          code={`<a href="#content" class="sr-only-focusable">
  Skip to main content
</a>`}
          language="html"
        />
      </section>

      {/* Focus Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("focusManagement.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("focusManagement.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("focusManagement.focusVisible.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("focusManagement.focusVisible.description")}
        </p>
        <CodeBlock
          code={`<button class="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none">
  Accessible Button
</button>

<input class="focus-visible:ring focus-visible:border-blue-500" />`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("focusManagement.focusWithin.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("focusManagement.focusWithin.description")}
        </p>
        <CodeBlock
          code={`<div class="focus-within:ring-2 focus-within:ring-blue-500 p-4 rounded-lg">
  <label>Search</label>
  <input type="text" class="w-full" />
</div>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("focusManagement.skipLink.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("focusManagement.skipLink.description")}
        </p>
        <CodeBlock
          code={`<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<main id="main-content">
  <!-- Page content -->
</main>`}
          language="html"
        />
      </section>

      {/* Reduced Motion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("reducedMotion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("reducedMotion.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("reducedMotion.motionReduce.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("reducedMotion.motionReduce.description")}
        </p>
        <CodeBlock
          code={`<div class="motion-reduce:animate-none">
  <!-- Content with animation -->
</div>

<button class="motion-reduce:transition-none">
  Hover effect
</button>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("reducedMotion.motionSafe.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("reducedMotion.motionSafe.description")}
        </p>
        <CodeBlock
          code={`<div class="motion-safe:transform-none">
  <!-- Only applies when motion is safe -->
</div>`}
          language="html"
        />
      </section>

      {/* High Contrast Mode */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("highContrast.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("highContrast.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("highContrast.contrastHigh.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("highContrast.contrastHigh.description")}
        </p>
        <CodeBlock
          code={`<button class="contrast-high:border contrast-high:outline">
  High Contrast Button
</button>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("highContrast.contrastLow.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("highContrast.contrastLow.description")}
        </p>
        <CodeBlock
          code={`<div class="contrast-low:border">
  <!-- Styled for low contrast preference -->
</div>`}
          language="html"
        />
      </section>

      {/* Focus Ring Utilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("focusRings.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("focusRings.description")}
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-4 text-gray-900 dark:text-white font-semibold">
                  {t("focusRings.classHeader")}
                </th>
                <th className="text-left py-2 px-4 text-gray-900 dark:text-white font-semibold">
                  {t("focusRings.descriptionHeader")}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:ring</td>
                <td className="py-2 px-4">{t("focusRings.ring")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:ring-2</td>
                <td className="py-2 px-4">{t("focusRings.ring2")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:ring-4</td>
                <td className="py-2 px-4">{t("focusRings.ring4")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:ring-8</td>
                <td className="py-2 px-4">{t("focusRings.ring8")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:ring-inset</td>
                <td className="py-2 px-4">{t("focusRings.ringInset")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:outline</td>
                <td className="py-2 px-4">{t("focusRings.outline")}</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-sm">focus-visible:outline-none</td>
                <td className="py-2 px-4">{t("focusRings.outlineNone")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("bestPractices.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("bestPractices.practice1")}</li>
          <li>{t("bestPractices.practice2")}</li>
          <li>{t("bestPractices.practice3")}</li>
          <li>{t("bestPractices.practice4")}</li>
          <li>{t("bestPractices.practice5")}</li>
        </ul>
      </section>

      {/* Color Blind Theme */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("colorBlindTheme.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("colorBlindTheme.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("colorBlindTheme.whyItMatters.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("colorBlindTheme.whyItMatters.description")}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("colorBlindTheme.howToUse.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("colorBlindTheme.howToUse.description")}
        </p>
        <CodeBlock
          code={`<html class="theme-colorblind">
  <!-- Your content -->
</html>

<!-- Or apply to a specific section -->
<div class="theme-colorblind">
  <!-- Color blind friendly content -->
</div>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("colorBlindTheme.colorAdjustments.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("colorBlindTheme.colorAdjustments.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-4 text-gray-900 dark:text-white font-semibold">
                  {t("colorBlindTheme.colorAdjustments.colorHeader")}
                </th>
                <th className="text-left py-2 px-4 text-gray-900 dark:text-white font-semibold">
                  {t("colorBlindTheme.colorAdjustments.defaultHeader")}
                </th>
                <th className="text-left py-2 px-4 text-gray-900 dark:text-white font-semibold">
                  {t("colorBlindTheme.colorAdjustments.colorblindHeader")}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">{t("colorBlindTheme.colorAdjustments.primary")}</td>
                <td className="py-2 px-4 font-mono text-sm">#3b82f6</td>
                <td className="py-2 px-4 font-mono text-sm">#0055ff</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">{t("colorBlindTheme.colorAdjustments.success")}</td>
                <td className="py-2 px-4 font-mono text-sm">#22c55e</td>
                <td className="py-2 px-4 font-mono text-sm">#008800</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">{t("colorBlindTheme.colorAdjustments.danger")}</td>
                <td className="py-2 px-4 font-mono text-sm">#ef4444</td>
                <td className="py-2 px-4 font-mono text-sm">#cc0000</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">{t("colorBlindTheme.colorAdjustments.warning")}</td>
                <td className="py-2 px-4 font-mono text-sm">#f59e0b</td>
                <td className="py-2 px-4 font-mono text-sm">#ffcc00</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">{t("colorBlindTheme.colorAdjustments.info")}</td>
                <td className="py-2 px-4 font-mono text-sm">#0ea5e9</td>
                <td className="py-2 px-4 font-mono text-sm">#0066cc</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("colorBlindTheme.bestPractices.title")}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("colorBlindTheme.bestPractices.practice1")}</li>
          <li>{t("colorBlindTheme.bestPractices.practice2")}</li>
          <li>{t("colorBlindTheme.bestPractices.practice3")}</li>
          <li>{t("colorBlindTheme.bestPractices.practice4")}</li>
        </ul>
      </section>

      {/* Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("configuration.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("configuration.description")}
        </p>
        <CodeBlock
          code={`// In your SCSS configuration
$enable-accessibility: true;  // Enable/disable all accessibility utilities`}
          language="scss"
        />
      </section>
    </div>
  );
}
