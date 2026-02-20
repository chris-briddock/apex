import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Design System - Apex Documentation",
  description: "Learn about the Apex design system",
};

export default function DesignSystemPage() {
  const t = useTranslations("pages.designSystem");

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("colors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("colors.description")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { name: "Primary", class: "bg-blue-500", hex: "#3b82f6" },
            { name: "Secondary", class: "bg-purple-500", hex: "#8b5cf6" },
            { name: "Success", class: "bg-green-500", hex: "#22c55e" },
            { name: "Warning", class: "bg-yellow-500", hex: "#eab308" },
            { name: "Error", class: "bg-red-500", hex: "#ef4444" },
            { name: "Info", class: "bg-cyan-500", hex: "#06b6d4" },
          ].map((color) => (
            <div key={color.name} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className={`h-16 ${color.class}`} />
              <div className="p-3 bg-white dark:bg-gray-800">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{color.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("typography.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("typography.description")}
        </p>

        <div className="space-y-4 border border-gray-200 dark:border-gray-700 rounded-lg p-6 dark:text-white">
          <h1 className="text-4xl font-bold">Heading 1 (text-4xl)</h1>
          <h2 className="text-3xl font-bold">Heading 2 (text-3xl)</h2>
          <h3 className="text-2xl font-bold">Heading 3 (text-2xl)</h3>
          <h4 className="text-xl font-semibold">Heading 4 (text-xl)</h4>
          <h5 className="text-lg font-semibold">Heading 5 (text-lg)</h5>
          <h6 className="text-base font-medium">Heading 6 (text-base)</h6>
          <p className="text-base">Body text (text-base)</p>
          <p className="text-sm">Small text (text-sm)</p>
          <p className="text-xs">Extra small text (text-xs)</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("spacing.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("spacing.description")}
        </p>

        <CodeBlock
          code={`.space-0 { 0rem }
.space-1 { 0.25rem }
.space-2 { 0.5rem }
.space-3 { 0.75rem }
.space-4 { 1rem }
.space-5 { 1.25rem }
.space-6 { 1.5rem }
.space-8 { 2rem }
.space-10 { 2.5rem }
.space-12 { 3rem }
.space-16 { 4rem }
.space-20 { 5rem }
.space-24 { 6rem }
.space-32 { 8rem }
.space-40 { 10rem }
.space-48 { 12rem }
.space-56 { 14rem }
.space-64 { 16rem }`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderRadius.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderRadius.description")}
        </p>

        <div className="flex flex-wrap gap-4">
          {[
            { name: "rounded-none", class: "rounded-none" },
            { name: "rounded-sm", class: "rounded-sm" },
            { name: "rounded", class: "rounded" },
            { name: "rounded-md", class: "rounded-md" },
            { name: "rounded-lg", class: "rounded-lg" },
            { name: "rounded-xl", class: "rounded-xl" },
            { name: "rounded-full", class: "rounded-full" },
          ].map((radius) => (
            <div key={radius.name} className="text-center">
              <div className={`w-16 h-16 bg-blue-500 ${radius.class} mb-2`} />
              <span className="text-xs text-gray-600 dark:text-gray-400">{radius.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("shadows.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("shadows.description")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { name: "shadow-none", class: "shadow-none" },
            { name: "shadow-sm", class: "shadow-sm" },
            { name: "shadow", class: "shadow" },
            { name: "shadow-md", class: "shadow-md" },
            { name: "shadow-lg", class: "shadow-lg" },
            { name: "shadow-xl", class: "shadow-xl" },
          ].map((shadow) => (
            <div key={shadow.name} className="text-center">
              <div className={`w-24 h-24 bg-white dark:bg-gray-800 rounded-lg ${shadow.class} flex items-center justify-center mx-auto mb-2`}>
                <span className="text-xs text-gray-500">Box</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">{shadow.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
