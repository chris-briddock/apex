import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Badges - Apex Documentation",
  description: "Badge component documentation with examples",
};

export default function BadgesPage() {
  const t = useTranslations("pages.componentPages.badges");
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

      {/* Basic Badge */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicBadge.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicBadge.description")}
        </p>
        <CodeBlock
          code={`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
  Badge
</span>`}
          language="html"
        />
      </section>

      {/* Color Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("colorVariants.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("colorVariants.description")}
        </p>
        <CodeBlock
          code={`<!-- Gray -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
  Gray
</span>

<!-- Red -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
  Red
</span>

<!-- Yellow -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
  Yellow
</span>

<!-- Green -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
  Green
</span>

<!-- Blue -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  Blue
</span>

<!-- Indigo -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
  Indigo
</span>

<!-- Purple -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
  Purple
</span>

<!-- Pink -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
  Pink
</span>`}
          language="html"
        />
      </section>

      {/* Solid Badges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("solidBadges.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("solidBadges.description")}
        </p>
        <CodeBlock
          code={`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-white">
  Gray
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">
  Red
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-white">
  Yellow
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-600 text-white">
  Green
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
  Blue
</span>`}
          language="html"
        />
      </section>

      {/* Outline Badges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("outlineBadges.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("outlineBadges.description")}
        </p>
        <CodeBlock
          code={`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-300 text-gray-700">
  Gray
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-red-300 text-red-700">
  Red
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-yellow-300 text-yellow-700">
  Yellow
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-green-300 text-green-700">
  Green
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-blue-300 text-blue-700">
  Blue
</span>`}
          language="html"
        />
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("sizes.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("sizes.description")}
        </p>
        <CodeBlock
          code={`<!-- Extra Small -->
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
  XS
</span>

<!-- Small -->
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
  Small
</span>

<!-- Medium (Default) -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  Medium
</span>

<!-- Large -->
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  Large
</span>`}
          language="html"
        />
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          With Icons
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Badges can include icons for additional context.
        </p>
        <CodeBlock
          code={`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>
  Success
</span>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
  </svg>
  Error
</span>`}
          language="html"
        />
      </section>

      {/* Notification Badge */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Notification Badge
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Use badges as notification indicators on buttons or icons.
        </p>
        <CodeBlock
          code={`<button class="relative inline-flex items-center p-2 text-gray-500 hover:text-gray-700">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
  <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
    3
  </span>
</button>`}
          language="html"
        />
      </section>

      {/* Pill vs Rounded */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Pill vs Rounded
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Choose between pill (fully rounded) or slightly rounded badges.
        </p>
        <CodeBlock
          code={`<!-- Pill Badge -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  Pill Badge
</span>

<!-- Rounded Badge -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
  Rounded Badge
</span>`}
          language="html"
        />
      </section>
    </div>
  );
}
