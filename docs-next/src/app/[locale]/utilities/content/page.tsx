import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Content Utilities - Apex Documentation",
  description: "Content utilities including quotes, counters, orphans, and widows",
};

export default function ContentPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Content" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Content Utilities
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Advanced content control utilities for quotes, counters, orphans, widows, and page breaks.
      </p>

      {/* Quotes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Quotes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Set the quotation marks for the quoting property using language-appropriate quote characters.
        </p>
        <CodeBlock
          code={`<q class="quotes-auto">Auto quotes</q>
<q class="quotes-none">No quotes</q>
<q class="quotes-english">English quotes</q>
<q class="quotes-french">French guillemets</q>
<q class="quotes-german">German quotes</q>`}
          language="html"
        />
      </section>

      {/* Counters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Counters
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control CSS counters for custom list numbering and counting.
        </p>
        <CodeBlock
          code={`<!-- Increment counter -->
<div class="counter-increment">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Reset counter -->
<div class="counter-reset">
  <!-- Counter starts from initial value -->
</div>

<!-- Set counter value -->
<div class="counter-set">
  <!-- Counter set to specific value -->
</div>`}
          language="html"
        />
      </section>

      {/* Orphans & Widows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Orphans & Widows
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the minimum number of lines that must be left at the bottom (orphans) or top (widows) of a page.
        </p>
        <CodeBlock
          code={`<!-- Minimum orphans control -->
<p class="orphans-2">
  This paragraph requires at least 2 lines at the bottom of the page,
  or the entire paragraph will move to the next page.
</p>

<!-- Minimum widows control -->
<p class="widows-2">
  This paragraph requires at least 2 lines at the top of the next page,
  preventing single lines from being isolated.
</p>`}
          language="html"
        />
      </section>

      {/* Page Breaks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Page Breaks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control page, column, and region breaks for print and paged media.
        </p>
        <CodeBlock
          code={`<!-- Break inside - prevent element from breaking across pages -->
<div class="break-inside-avoid">
  This element will not split across pages
</div>

<!-- Break before - force break before element -->
<h2 class="break-before-page">
  This heading starts on a new page
</h2>

<!-- Break after - force break after element -->
<section class="break-after-page">
  This section ends with a page break
</section>

<!-- Avoid breaks -->
<table class="break-inside-avoid">
  <!-- Tables often look better unbroken -->
</table>`}
          language="html"
        />
      </section>

      {/* Box Decoration Break */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Box Decoration Break
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control how element decorations are rendered across fragment breaks.
        </p>
        <CodeBlock
          code={`<!-- Clone decorations on each fragment -->
<span class="box-decoration-clone rounded bg-blue-500 text-white p-2">
  Box decorations<br />clone on each line
</span>

<!-- Slice decorations across fragments (default) -->
<span class="box-decoration-slice rounded bg-blue-500 text-white p-2">
  Box decorations<br />slice across lines
</span>`}
          language="html"
        />
      </section>

      {/* Vertical Align */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Vertical Align
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Set vertical alignment for inline or table-cell elements.
        </p>
        <CodeBlock
          code={`<span class="align-baseline">Baseline</span>
<span class="align-top">Top</span>
<span class="align-middle">Middle</span>
<span class="align-bottom">Bottom</span>
<span class="align-text-top">Text Top</span>
<span class="align-text-bottom">Text Bottom</span>
<span class="align-sub">Subscript</span>
<span class="align-super">Superscript</span>`}
          language="html"
        />
      </section>
    </section>
  );
}
