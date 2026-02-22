import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { ColorExplorer } from "@/components/ColorExplorer";
import { SpacingVisualizer } from "@/components/SpacingVisualizer";
import { TypographySpecimen } from "@/components/TypographySpecimen";
import { BorderRadiusShowcase } from "@/components/BorderRadiusShowcase";
import { ThemePlayground } from "@/components/ThemePlayground";
import { DesignTokenCard } from "@/components/DesignTokenCard";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System - Apex Documentation",
  description: "Explore the Apex design system with interactive color palettes, spacing scales, typography specimens, and live theme customization.",
};

export default function DesignSystemPage() {
  const t = useTranslations("pages.designSystem");

  return (
    <div className="max-w-6xl">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          {t("description")}
        </p>
      </div>

      {/* Overview Cards */}
      <section className="mb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DesignTokenCard
            name="Colors"
            value="50+ color tokens"
            category="color"
            description="Semantic and palette colors"
            cssVariable="--color-primary"
            preview={
              <div className="flex gap-1">
                {["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"].map((c) => (
                  <div key={c} className="w-6 h-6 rounded" style={{ backgroundColor: c }} />
                ))}
              </div>
            }
          />
          <DesignTokenCard
            name="Spacing"
            value="34 spacing values"
            category="spacing"
            description="From 0 to 24rem"
            cssVariable="--spacing-4"
            preview={
              <div className="flex items-end gap-1 h-16">
                {[1, 2, 4, 6, 8, 12].map((s) => (
                  <div
                    key={s}
                    className="w-4 bg-blue-500 rounded-t"
                    style={{ height: `${s * 6}px` }}
                  />
                ))}
              </div>
            }
          />
          <DesignTokenCard
            name="Typography"
            value="13 font sizes"
            category="typography"
            description="From xs (12px) to 9xl (128px)"
            cssVariable="--font-size-base"
            preview={
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-gray-500">Aa</span>
                <span className="text-sm text-gray-600">Aa</span>
                <span className="text-base text-gray-700">Aa</span>
                <span className="text-lg text-gray-800">Aa</span>
                <span className="text-xl text-gray-900">Aa</span>
              </div>
            }
          />
          <DesignTokenCard
            name="Shadows"
            value="8 shadow levels"
            category="shadow"
            description="From none to 2xl"
            cssVariable="--shadow-md"
            preview={
              <div className="flex items-center justify-center h-16">
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded shadow-md" />
              </div>
            }
          />
        </div>
      </section>

      {/* Colors Section */}
      <section className="mb-14 scroll-mt-20" id="colors">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("colors.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("colors.description")}
          </p>
        </div>
        <ColorExplorer />
      </section>

      {/* Typography Section */}
      <section className="mb-14 scroll-mt-20" id="typography">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("typography.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("typography.description")}
          </p>
        </div>
        <TypographySpecimen />
      </section>

      {/* Spacing Section */}
      <section className="mb-14 scroll-mt-20" id="spacing">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("spacing.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("spacing.description")}
          </p>
        </div>
        <SpacingVisualizer />
      </section>

      {/* Borders & Shadows Section */}
      <section className="mb-14 scroll-mt-20" id="borders">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("borderRadius.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("borderRadius.description")}
          </p>
        </div>
        <BorderRadiusShowcase />
      </section>

      {/* Shadows Section */}
      <section className="mb-14 scroll-mt-20" id="shadows">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("shadows.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("shadows.description")}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { name: "shadow-none", class: "shadow-none", desc: "No shadow" },
            { name: "shadow-sm", class: "shadow-sm", desc: "Small shadow" },
            { name: "shadow", class: "shadow", desc: "Default shadow" },
            { name: "shadow-md", class: "shadow-md", desc: "Medium shadow" },
            { name: "shadow-lg", class: "shadow-lg", desc: "Large shadow" },
            { name: "shadow-xl", class: "shadow-xl", desc: "Extra large" },
          ].map((shadow) => (
            <div key={shadow.name} className="text-center">
              <div className={`w-24 h-24 bg-white dark:bg-gray-800 rounded-lg ${shadow.class} flex items-center justify-center mx-auto mb-2`}>
                <span className="text-xs text-gray-500 dark:text-gray-400">Box</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">{shadow.name}</span>
              <p className="text-xs text-gray-400 dark:text-gray-500">{shadow.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Theme Playground */}
      <section className="mb-14 scroll-mt-20" id="theme-playground">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("themePlayground.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("themePlayground.description")}
          </p>
        </div>
        <ThemePlayground />
      </section>

      {/* CSS Variables Reference */}
      <section className="mb-14 scroll-mt-20" id="css-variables">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t("cssVariables.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t("cssVariables.description")}
          </p>
        </div>
        <CodeBlock
          code={`/* Colors */
--color-primary: #3b82f6;
--color-secondary: #64748b;
--color-success: #22c55e;
--color-danger: #ef4444;
--color-warning: #f59e0b;
--color-info: #0ea5e9;

/* Spacing */
--spacing-1: 0.25rem;
--spacing-2: 0.5rem;
--spacing-4: 1rem;
--spacing-8: 2rem;

/* Typography */
--font-size-base: 1rem;
--font-weight-normal: 400;
--line-height-normal: 1.5;

/* Border Radius */
--border-radius-sm: 0.125rem;
--border-radius-md: 0.375rem;
--border-radius-lg: 0.5rem;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);`}
          language="css"
        />
      </section>

      {/* Quick Reference Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("quickReference.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Category</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Prefix</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Example</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">CSS Property</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { category: "Colors", prefix: "text- / bg- / border-", example: "text-primary", css: "color: var(--color-primary)" },
                { category: "Spacing", prefix: "m- / p- / gap-", example: "p-4", css: "padding: 1rem" },
                { category: "Typography", prefix: "text- / font- / leading-", example: "text-lg", css: "font-size: 1.125rem" },
                { category: "Borders", prefix: "border / rounded-", example: "rounded-lg", css: "border-radius: 0.5rem" },
                { category: "Shadows", prefix: "shadow-", example: "shadow-md", css: "box-shadow: ..." },
                { category: "Sizing", prefix: "w- / h- / max-w-", example: "w-full", css: "width: 100%" },
                { category: "Display", prefix: "block / flex / grid", example: "flex", css: "display: flex" },
              ].map((row) => (
                <tr key={row.category} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.category}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-mono text-xs">{row.prefix}</td>
                  <td className="px-4 py-3 text-blue-600 dark:text-blue-400 font-mono text-xs">{row.example}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-mono text-xs">{row.css}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
