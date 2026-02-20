import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FlexboxPlayground } from "@/components/FlexboxPlayground";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Flexbox - Apex Documentation",
  description: "Learn how to use flexbox utilities in Apex",
};

export default function FlexboxPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Flexbox" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Flexbox</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Flexbox utilities for creating flexible and responsive layouts.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Interactive Flexbox Playground
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Experiment with different flexbox properties and see the results in real-time.
        </p>
        <FlexboxPlayground />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Display
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`<!-- Enable flex container -->
<div class="flex">...</div>

<!-- Enable inline-flex container -->
<div class="inline-flex">...</div>`}
            language="html"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Flex Direction
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.flex-row           /* row (default) */
.flex-row-reverse   /* row-reverse */
.flex-col           /* column */
.flex-col-reverse   /* column-reverse */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Justify Content
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.justify-start         /* flex-start (default) */
.justify-center        /* center */
.justify-end           /* flex-end */
.justify-between       /* space-between */
.justify-around        /* space-around */
.justify-evenly        /* space-evenly */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Align Items
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.items-start      /* flex-start */
.items-center     /* center */
.items-end        /* flex-end */
.items-stretch    /* stretch (default) */
.items-baseline   /* baseline */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Flex Wrap
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.flex-nowrap        /* nowrap (default) */
.flex-wrap          /* wrap */
.flex-wrap-reverse  /* wrap-reverse */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Flex Grow & Shrink
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.flex-1           /* flex: 1 1 0% */
.flex-auto        /* flex: 1 1 auto */
.flex-initial     /* flex: 0 1 auto */
.flex-none        /* flex: none */
.flex-grow        /* flex-grow: 1 */
.flex-grow-0      /* flex-grow: 0 */
.flex-shrink      /* flex-shrink: 1 */
.flex-shrink-0    /* flex-shrink: 0 */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Common Patterns
        </h2>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Center Everything</h3>
          <CodeBlock
            code={`<div class="flex items-center justify-center h-screen">
  <div>Centered content</div>
</div>`}
            language="html"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Horizontal Navigation</h3>
          <CodeBlock
            code={`<nav class="flex items-center justify-between px-4 py-3">
  <div class="logo">Logo</div>
  <ul class="flex items-center gap-4">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}
            language="html"
          />

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Card Layout</h3>
          <CodeBlock
            code={`<div class="flex flex-col h-full">
  <div class="flex-1">Content</div>
  <div>Footer</div>
</div>`}
            language="html"
          />
        </div>
      </section>
    </div>
  );
}
