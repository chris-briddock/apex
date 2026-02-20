import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Borders - Apex Documentation",
  description: "Border utilities for Apex CSS framework",
};

export default function BordersPage() {
  const t = useTranslations("pages.utilityPages.borders");
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

      {/* Border Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderWidth.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderWidth.description")}
        </p>
        <CodeBlock
          code={`<div class="border">...</div>
<div class="border-2">...</div>
<div class="border-4">...</div>
<div class="border-8">...</div>`}
          language="html"
        />
      </section>

      {/* Border Sides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderSides.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderSides.description")}
        </p>
        <CodeBlock
          code={`<div class="border-t">...</div>
<div class="border-r">...</div>
<div class="border-b">...</div>
<div class="border-l">...</div>

<!-- Multiple sides -->
<div class="border-x">...</div>
<div class="border-y">...</div>`}
          language="html"
        />
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderRadius.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderRadius.description")}
        </p>
        <CodeBlock
          code={`<div class="rounded-sm">...</div>
<div class="rounded">...</div>
<div class="rounded-md">...</div>
<div class="rounded-lg">...</div>
<div class="rounded-xl">...</div>
<div class="rounded-full">...</div>`}
          language="html"
        />
      </section>

      {/* Border Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderColors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderColors.description")}
        </p>
        <CodeBlock
          code={`<div class="border border-gray-300">...</div>
<div class="border border-blue-500">...</div>
<div class="border border-green-500">...</div>
<div class="border border-red-500">...</div>`}
          language="html"
        />
      </section>

      {/* Divide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("divide.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("divide.description")}
        </p>
        <CodeBlock
          code={`<div class="divide-y divide-gray-300">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
