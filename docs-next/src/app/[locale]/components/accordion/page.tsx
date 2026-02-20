import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Accordion - Apex Documentation",
  description: "Accordion component documentation with examples",
};

export default function AccordionPage() {
  const t = useTranslations("pages.componentPages.accordion");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Components", href: "/components" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      {/* Basic Accordion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicAccordion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicAccordion.description")}
        </p>
        <CodeBlock
          code={`<div class="border border-gray-200 dark:border-gray-700 rounded-lg">
  <!-- Item 1 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 1</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 2</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 2 goes here...
    </div>
  </div>

  <!-- Item 3 -->
  <div>
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 3</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 3 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Bordered Accordion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderedAccordion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderedAccordion.description")}
        </p>
        <CodeBlock
          code={`<div class="space-y-2">
  <!-- Item 1 -->
  <div class="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 1</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 -->
  <div class="border border-gray-200 dark:border-gray-700 rounded-lg">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 2</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 2 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Accordion with Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("accordionWithIcons.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("accordionWithIcons.description")}
        </p>
        <CodeBlock
          code={`<div class="border border-gray-200 dark:border-gray-700 rounded-lg">
  <!-- Item 1 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="font-medium text-gray-900 dark:text-white">Information</span>
      </div>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for information section...
    </div>
  </div>

  <!-- Item 2 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="font-medium text-gray-900 dark:text-white">Success</span>
      </div>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for success section...
    </div>
  </div>

  <!-- Item 3 -->
  <div>
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span class="font-medium text-gray-900 dark:text-white">Warning</span>
      </div>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for warning section...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Flush Accordion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("flushAccordion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("flushAccordion.description")}
        </p>
        <CodeBlock
          code={`<div class="divide-y divide-gray-200 dark:divide-gray-700">
  <!-- Item 1 -->
  <div>
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 1</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 -->
  <div>
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 2</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 2 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Always Open Accordion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("alwaysOpenAccordion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("alwaysOpenAccordion.description")}
        </p>
        <CodeBlock
          code={`<div class="border border-gray-200 dark:border-gray-700 rounded-lg">
  <!-- Item 1 (Open) -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 1</span>
      <svg class="w-5 h-5 text-gray-500 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 (Open) -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 2</span>
      <svg class="w-5 h-5 text-gray-500 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 2 goes here...
    </div>
  </div>

  <!-- Item 3 (Closed) -->
  <div>
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 3</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 3 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Accordion with Description */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Accordion with Description
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add a description below the accordion title.
        </p>
        <CodeBlock
          code={`<div class="border border-gray-200 dark:border-gray-700 rounded-lg">
  <!-- Item 1 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left">
      <div class="flex items-center justify-between">
        <div>
          <span class="font-medium text-gray-900 dark:text-white">Section 1</span>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Additional description text here
          </p>
        </div>
        <svg class="w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 -->
  <div>
    <button class="w-full px-4 py-3 text-left">
      <div class="flex items-center justify-between">
        <div>
          <span class="font-medium text-gray-900 dark:text-white">Section 2</span>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Additional description text here
          </p>
        </div>
        <svg class="w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 2 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Compact Accordion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Compact Accordion
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A more compact accordion with reduced padding.
        </p>
        <CodeBlock
          code={`<div class="border border-gray-200 dark:border-gray-700 rounded-lg">
  <!-- Item 1 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-3 py-2 text-left flex items-center justify-between">
      <span class="text-sm font-medium text-gray-900 dark:text-white">Section 1</span>
      <svg class="w-4 h-4 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-3 pb-2 text-sm text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 -->
  <div>
    <button class="w-full px-3 py-2 text-left flex items-center justify-between">
      <span class="text-sm font-medium text-gray-900 dark:text-white">Section 2</span>
      <svg class="w-4 h-4 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-3 pb-2 text-sm text-gray-600 dark:text-gray-400">
      Content for section 2 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Disabled Accordion Item */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Disabled Accordion Item
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Disable individual accordion items.
        </p>
        <CodeBlock
          code={`<div class="border border-gray-200 dark:border-gray-700 rounded-lg">
  <!-- Item 1 -->
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 1</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 1 goes here...
    </div>
  </div>

  <!-- Item 2 (Disabled) -->
  <div class="border-b border-gray-200 dark:border-gray-700 opacity-50">
    <button class="w-full px-4 py-3 text-left flex items-center justify-between cursor-not-allowed" disabled>
      <span class="font-medium text-gray-900 dark:text-white">Section 2 (Disabled)</span>
      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>

  <!-- Item 3 -->
  <div>
    <button class="w-full px-4 py-3 text-left flex items-center justify-between">
      <span class="font-medium text-gray-900 dark:text-white">Section 3</span>
      <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="hidden px-4 pb-4 text-gray-600 dark:text-gray-400">
      Content for section 3 goes here...
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
