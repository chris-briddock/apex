import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Display - Apex Documentation",
  description: "Display utilities for controlling the display property of elements",
};

export default function DisplayPage() {
  const t = useTranslations("pages.utilityPages.display");
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

      {/* Basic Display Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicDisplay.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicDisplay.description")}
        </p>
        <CodeBlock
          code={`.block          /* display: block */
.inline-block   /* display: inline-block */
.inline         /* display: inline */
.hidden         /* display: none */`}
          language="css"
        />
      </section>

      {/* Flex and Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("flexGrid.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("flexGrid.description")}
        </p>
        <CodeBlock
          code={`.flex           /* display: flex */
.inline-flex    /* display: inline-flex */
.grid           /* display: grid */
.inline-grid    /* display: inline-grid */`}
          language="css"
        />
      </section>

      {/* Table Display */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("tableDisplay.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("tableDisplay.description")}
        </p>
        <CodeBlock
          code={`.table              /* display: table */
.inline-table       /* display: inline-table */
.table-caption      /* display: table-caption */
.table-cell         /* display: table-cell */
.table-column       /* display: table-column */
.table-column-group /* display: table-column-group */
.table-footer-group /* display: table-footer-group */
.table-header-group /* display: table-header-group */
.table-row-group    /* display: table-row-group */
.table-row          /* display: table-row */`}
          language="css"
        />
      </section>

      {/* Other Display Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("otherDisplay.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("otherDisplay.description")}
        </p>
        <CodeBlock
          code={`.flow-root     /* display: flow-root - creates block formatting context */
.contents       /* display: contents - element doesn't generate box */
.list-item      /* display: list-item */`}
          language="css"
        />
      </section>

      {/* Responsive Display */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsive.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsive.description")}
        </p>
        <CodeBlock
          code={`/* Small screens and up */
.sm:block .sm:inline-block .sm:inline .sm:flex .sm:inline-flex .sm:grid .sm:inline-grid .sm:hidden

/* Medium screens and up */
.md:block .md:inline-block .md:inline .md:flex .md:inline-flex .md:grid .md:inline-grid .md:hidden

/* Large screens and up */
.lg:block .lg:inline-block .lg:inline .lg:flex .lg:inline-flex .lg:grid .lg:inline-grid .lg:hidden

/* Extra large screens and up */
.xl:block .xl:inline-block .xl:inline .xl:flex .xl:inline-flex .xl:grid .xl:inline-grid .xl:hidden`}
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
              {t("commonPatterns.hideOnMobile")}
            </h3>
            <CodeBlock
              code={`<div class="hidden md:block">
  This content is hidden on mobile, visible on medium screens and up
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.hideOnDesktop")}
            </h3>
            <CodeBlock
              code={`<div class="md:hidden">
  This content is only visible on mobile
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.inlineForm")}
            </h3>
            <CodeBlock
              code={`<form class="inline-flex items-center gap-2">
  <input type="email" placeholder="Enter email" class="px-3 py-2 border rounded">
  <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Subscribe</button>
</form>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.responsiveGrid")}
            </h3>
            <CodeBlock
              code={`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
