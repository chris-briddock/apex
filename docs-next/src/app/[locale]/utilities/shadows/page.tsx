import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Shadows - Apex Documentation",
  description: "Shadow utilities for controlling box shadows and elevation",
};

export default function ShadowsPage() {
  const t = useTranslations("pages.utilityPages.shadows");
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

      {/* Shadow Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("shadowScale.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("shadowScale.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">sm</span>
            </div>
            <code className="text-sm">.shadow-sm</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">base</span>
            </div>
            <code className="text-sm">.shadow</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">md</span>
            </div>
            <code className="text-sm">.shadow-md</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">lg</span>
            </div>
            <code className="text-sm">.shadow-lg</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">xl</span>
            </div>
            <code className="text-sm">.shadow-xl</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">2xl</span>
            </div>
            <code className="text-sm">.shadow-2xl</code>
          </div>
        </div>
        <CodeBlock
          code={`.shadow-sm    /* Small shadow for subtle elevation */
.shadow       /* Default shadow */
.shadow-md    /* Medium shadow */
.shadow-lg    /* Large shadow */
.shadow-xl    /* Extra large shadow */
.shadow-2xl   /* 2x extra large shadow */
.shadow-none  /* No shadow */
.shadow-inner /* Inner shadow for inset effect */`}
          language="css"
        />
      </section>

      {/* Shadow Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("shadowColors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("shadowColors.description")}
        </p>
        <CodeBlock
          code={`.shadow-color-current   /* Use currentColor as shadow color */
.shadow-color-primary   /* Use primary color */
.shadow-color-black     /* Black shadow color */
.shadow-color-white     /* White shadow color */

/* Color-specific shadows */
.shadow-primary         /* Primary color shadow */
.shadow-primary-sm      /* Small primary shadow */
.shadow-primary-md      /* Medium primary shadow */
.shadow-primary-lg      /* Large primary shadow */`}
          language="css"
        />
      </section>

      {/* Shadow Color Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("colorExamples.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-primary flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Primary</span>
            </div>
            <code className="text-sm">.shadow-primary</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-blue-500 rounded-lg shadow-lg shadow-color-white flex items-center justify-center">
              <span className="text-sm text-white">White</span>
            </div>
            <code className="text-sm">.shadow-color-white</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Inner</span>
            </div>
            <code className="text-sm">.shadow-inner</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">None</span>
            </div>
            <code className="text-sm">.shadow-none</code>
          </div>
        </div>
      </section>

      {/* Responsive Shadows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsive.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsive.description")}
        </p>
        <CodeBlock
          code={`/* Small screens and up */
.sm:shadow-sm .sm:shadow .sm:shadow-md .sm:shadow-lg .sm:shadow-xl .sm:shadow-2xl .sm:shadow-none .sm:shadow-inner

/* Medium screens and up */
.md:shadow-sm .md:shadow .md:shadow-md .md:shadow-lg .md:shadow-xl .md:shadow-2xl .md:shadow-none .md:shadow-inner

/* Large screens and up */
.lg:shadow-sm .lg:shadow .lg:shadow-md .lg:shadow-lg .lg:shadow-xl .lg:shadow-2xl .lg:shadow-none .lg:shadow-inner

/* Extra large screens and up */
.xl:shadow-sm .xl:shadow .xl:shadow-md .xl:shadow-lg .xl:shadow-xl .xl:shadow-2xl .xl:shadow-none .xl:shadow-inner

/* 2x extra large screens and up */
.xxl:shadow-sm .xxl:shadow .xxl:shadow-md .xxl:shadow-lg .xxl:shadow-xl .xxl:shadow-2xl .xxl:shadow-none .xxl:shadow-inner`}
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
              {t("commonPatterns.cardElevation")}
            </h3>
            <CodeBlock
              code={`<div class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
  <div class="p-4">
    <h3>Card Title</h3>
    <p>Card content with elevation on hover</p>
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.modalOverlay")}
            </h3>
            <CodeBlock
              code={`<div class="fixed inset-0 bg-black/50 flex items-center justify-center">
  <div class="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4">
    <h2>Modal Title</h2>
    <p>Modal content with prominent shadow</p>
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.dropdownMenu")}
            </h3>
            <CodeBlock
              code={`<div class="relative inline-block">
  <button>Toggle Menu</button>
  <div class="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 2</a>
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.insetInputs")}
            </h3>
            <CodeBlock
              code={`<input type="text"
       class="shadow-inner bg-gray-50 border border-gray-300 rounded px-3 py-2
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
       placeholder="Inset shadow input">`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
