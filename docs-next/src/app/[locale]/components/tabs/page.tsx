import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Tabs - Apex Documentation",
  description: "Tab component documentation with examples",
};

export default function TabsPage() {
  const t = useTranslations("pages.componentPages.tabs");
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

      {/* Basic Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicTabs.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicTabs.description")}
        </p>
        <CodeBlock
          code={`<div>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <nav class="-mb-px flex space-x-8">
      <a href="#" class="border-blue-500 text-blue-600 dark:text-blue-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
        Tab 1
      </a>
      <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
        Tab 2
      </a>
      <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
        Tab 3
      </a>
    </nav>
  </div>
  <div class="mt-4">
    <p>Tab content goes here...</p>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Pill Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("pillTabs.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("pillTabs.description")}
        </p>
        <CodeBlock
          code={`<div>
  <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 inline-flex">
    <button class="bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm rounded-md px-4 py-2 text-sm font-medium">
      Tab 1
    </button>
    <button class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-md px-4 py-2 text-sm font-medium">
      Tab 2
    </button>
    <button class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-md px-4 py-2 text-sm font-medium">
      Tab 3
    </button>
  </div>
  <div class="mt-4">
    <p>Tab content goes here...</p>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Underline Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("underlineTabs.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("underlineTabs.description")}
        </p>
        <CodeBlock
          code={`<div>
  <div class="flex space-x-8">
    <a href="#" class="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2 text-sm font-medium">
      Tab 1
    </a>
    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pb-2 text-sm font-medium">
      Tab 2
    </a>
    <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pb-2 text-sm font-medium">
      Tab 3
    </a>
  </div>
  <div class="mt-4">
    <p>Tab content goes here...</p>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Vertical Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("verticalTabs.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("verticalTabs.description")}
        </p>
        <CodeBlock
          code={`<div class="flex">
  <div class="w-64 border-r border-gray-200 dark:border-gray-700">
    <nav class="space-y-1">
      <a href="#" class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300 block pl-3 pr-4 py-2 text-base font-medium">
        Tab 1
      </a>
      <a href="#" class="border-l-4 border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 block pl-3 pr-4 py-2 text-base font-medium">
        Tab 2
      </a>
      <a href="#" class="border-l-4 border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 block pl-3 pr-4 py-2 text-base font-medium">
        Tab 3
      </a>
    </nav>
  </div>
  <div class="flex-1 p-4">
    <p>Tab content goes here...</p>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Tabs with Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("tabsWithIcons.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("tabsWithIcons.description")}
        </p>
        <CodeBlock
          code={`<div>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <nav class="-mb-px flex space-x-8">
      <a href="#" class="border-blue-500 text-blue-600 dark:text-blue-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </a>
      <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Analytics
      </a>
      <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </a>
    </nav>
  </div>
  <div class="mt-4">
    <p>Tab content goes here...</p>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Colored Tabs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Colored Tabs
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Tabs with different color themes.
        </p>
        <CodeBlock
          code={`<!-- Blue Tabs -->
<div class="border-b border-blue-200 dark:border-blue-800">
  <nav class="-mb-px flex space-x-8">
    <a href="#" class="border-blue-500 text-blue-600 dark:text-blue-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
      Tab 1
    </a>
    <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
      Tab 2
    </a>
  </nav>
</div>

<!-- Green Tabs -->
<div class="border-b border-green-200 dark:border-green-800">
  <nav class="-mb-px flex space-x-8">
    <a href="#" class="border-green-500 text-green-600 dark:text-green-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
      Tab 1
    </a>
    <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
      Tab 2
    </a>
  </nav>
</div>`}
          language="html"
        />
      </section>

      {/* Disabled Tab */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Disabled Tab
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Disable tabs that are not available for interaction.
        </p>
        <CodeBlock
          code={`<div>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <nav class="-mb-px flex space-x-8">
      <a href="#" class="border-blue-500 text-blue-600 dark:text-blue-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
        Tab 1
      </a>
      <a href="#" class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
        Tab 2
      </a>
      <span class="border-transparent text-gray-300 dark:text-gray-600 cursor-not-allowed whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
        Disabled
      </span>
    </nav>
  </div>
  <div class="mt-4">
    <p>Tab content goes here...</p>
  </div>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
