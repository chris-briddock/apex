import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Grid Extended - Apex Documentation",
  description: "Advanced grid utilities including grid span, auto placement, and template areas",
};

export default function GridExtendedPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Grid Extended" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Grid Extended
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Advanced CSS Grid utilities for complex layouts including spanning, auto-placement, and template areas.
      </p>

      {/* Column Span */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Column Span
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Make grid items span across multiple columns.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2">Spans 2 columns</div>
  <div>Default 1 column</div>
  <div>Default 1 column</div>
  <div class="col-span-3">Spans 3 columns</div>
  <div class="col-span-full">Spans all columns</div>
</div>`}
          language="html"
        />
      </section>

      {/* Column Start/End */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Column Start & End
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Precisely position items by specifying start and end grid lines.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-6 gap-4">
  <div class="col-start-2 col-end-4">Start at 2, end at 4</div>
  <div class="col-start-1 col-span-3">Start at 1, span 3</div>
  <div class="col-start-4 col-end-7">Start at 4, end at 7</div>
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
          Make grid items span across multiple rows.
        </p>
        <CodeBlock
          code={`<div class="grid grid-cols-2 grid-rows-4 gap-4">
  <div class="row-span-2">Spans 2 rows</div>
  <div>Row 1</div>
  <div>Row 2</div>
  <div class="row-span-3">Spans 3 rows</div>
  <div class="row-span-full">Spans all rows</div>
</div>`}
          language="html"
        />
      </section>

      {/* Row Start/End */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Row Start & End
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Position items vertically by specifying row grid lines.
        </p>
        <CodeBlock
          code={`<div class="grid grid-rows-4 gap-4">
  <div class="row-start-1 row-end-3">Rows 1-3</div>
  <div class="row-start-2 row-span-2">Start at 2, span 2</div>
  <div class="row-start-4">Row 4 only</div>
</div>`}
          language="html"
        />
      </section>

      {/* Auto Columns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Auto Columns
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Specify the size of implicitly created columns.
        </p>
        <CodeBlock
          code={`<div class="grid grid-auto-cols-auto">
  <div>Auto-sized columns</div>
  <div>Auto-sized columns</div>
</div>

<div class="grid grid-auto-cols-min">
  <div>Min-content columns</div>
</div>

<div class="grid grid-auto-cols-fr">
  <div>Fractional columns</div>
</div>`}
          language="html"
        />
      </section>

      {/* Auto Rows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Auto Rows
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Specify the size of implicitly created rows.
        </p>
        <CodeBlock
          code={`<div class="grid grid-auto-rows-auto">
  <div>Auto-sized rows</div>
  <div>Auto-sized rows</div>
</div>

<div class="grid grid-auto-rows-min">
  <div>Min-content rows</div>
</div>

<div class="grid grid-auto-rows-fr">
  <div>Fractional rows</div>
</div>`}
          language="html"
        />
      </section>

      {/* Grid Area */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Grid Area
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Assign items to named grid areas or specify area coordinates.
        </p>
        <CodeBlock
          code={`<div class="grid grid-areas-none" style="grid-template-areas: 'header header' 'sidebar content' 'footer footer'">
  <div style="grid-area: header">Header</div>
  <div style="grid-area: sidebar">Sidebar</div>
  <div style="grid-area: content">Content</div>
  <div style="grid-area: footer">Footer</div>
</div>

<!-- Using coordinates -->
<div class="grid-area-1">Spans 1x1 area</div>
<div class="grid-area-2">Spans 2x2 area</div>`}
          language="html"
        />
      </section>

      {/* Grid Flow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Grid Auto Flow
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control how auto-placed items flow in the grid.
        </p>
        <CodeBlock
          code={`<div class="grid grid-flow-row">
  <!-- Items flow by row -->
</div>

<div class="grid grid-flow-col">
  <!-- Items flow by column -->
</div>

<div class="grid grid-flow-row-dense">
  <!-- Dense packing algorithm -->
</div>`}
          language="html"
        />
      </section>
    </section>
  );
}
