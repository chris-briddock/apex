import { Breadcrumb } from "@/components/Breadcrumb";
import { GridBuilder } from "@/components/GridBuilder";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata = {
  title: "Grid - Apex Documentation",
  description: "Interactive grid builder and documentation",
};

export default function GridPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Grid" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Grid
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Interactive grid builder. Customize columns, gaps, and generate CSS Grid code instantly.
      </p>

      {/* Interactive Grid Builder */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Grid Builder
        </h2>
        <GridBuilder />
      </section>

      {/* Basic Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Basic Grid
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create a basic grid with equal-width columns.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-3 gap-4">
  <div class="p-4 bg-blue-500 text-white rounded">1</div>
  <div class="p-4 bg-blue-500 text-white rounded">2</div>
  <div class="p-4 bg-blue-500 text-white rounded">3</div>
</div>`}
          language="html"
        />
      </section>

      {/* Responsive Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Responsive Grid
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Use responsive prefixes to change the number of columns at different breakpoints.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="p-4 bg-blue-500 text-white rounded">1</div>
  <div class="p-4 bg-blue-500 text-white rounded">2</div>
  <div class="p-4 bg-blue-500 text-white rounded">3</div>
  <div class="p-4 bg-blue-500 text-white rounded">4</div>
</div>`}
          language="html"
        />
      </section>

      {/* Grid with Auto-fit */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Auto-fit Grid
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create a responsive grid that automatically adjusts columns based on minimum item width.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div class="p-4 bg-blue-500 text-white rounded">1</div>
  <div class="p-4 bg-blue-500 text-white rounded">2</div>
  <div class="p-4 bg-blue-500 text-white rounded">3</div>
</div>`}
          language="html"
        />
      </section>

      {/* Column Span */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Column Span
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Make items span multiple columns.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 p-4 bg-blue-500 text-white rounded">Spans 2 columns</div>
  <div class="p-4 bg-blue-500 text-white rounded">1</div>
  <div class="col-span-3 p-4 bg-blue-500 text-white rounded">Spans 3 columns</div>
</div>`}
          language="html"
        />
      </section>

      {/* Row Span */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Row Span
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Make items span multiple rows.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-2 grid-rows-3 gap-4">
  <div class="row-span-2 p-4 bg-blue-500 text-white rounded">Spans 2 rows</div>
  <div class="p-4 bg-blue-500 text-white rounded">1</div>
  <div class="p-4 bg-blue-500 text-white rounded">2</div>
  <div class="p-4 bg-blue-500 text-white rounded">3</div>
</div>`}
          language="html"
        />
      </section>

      {/* Gap Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Gap Sizes
        </h2>
        <CodeBlock
          code={`<!-- Small gap -->
<div class="grid grid-cols-3 gap-2">...</div>

<!-- Medium gap (default) -->
<div class="grid grid-cols-3 gap-4">...</div>

<!-- Large gap -->
<div class="grid grid-cols-3 gap-8">...</div>

<!-- Gap X and Y separately -->
<div class="grid grid-cols-3 gap-x-4 gap-y-8">...</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
