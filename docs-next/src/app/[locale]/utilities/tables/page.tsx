import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Table Utilities - Apex Documentation",
  description: "Table layout utilities for styling HTML tables",
};

export default function TablesPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Tables" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Table Utilities
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Table layout and styling utilities for controlling table behavior and appearance.
      </p>

      {/* Table Layout */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Table Layout
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the algorithm used to lay out table cells.
        </p>
        <CodeBlock
          code={`<table class="table-auto">
  <!-- Columns sized by content (default) -->
</table>

<table class="table-fixed">
  <!-- Columns sized by width, not content -->
</table>`}
          language="html"
        />
      </section>

      {/* Border Collapse */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Border Collapse
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control whether table borders are collapsed or separated.
        </p>
        <CodeBlock
          code={`<table class="border-collapse">
  <!-- Borders collapsed into single border -->
</table>

<table class="border-separate">
  <!-- Borders separated with spacing -->
</table>`}
          language="html"
        />
      </section>

      {/* Caption Side */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Caption Side
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Position the table caption at the top or bottom of the table.
        </p>
        <CodeBlock
          code={`<table>
  <caption class="caption-top">Table Title Above</caption>
  <!-- table content -->
</table>

<table>
  <caption class="caption-bottom">Table Title Below</caption>
  <!-- table content -->
</table>`}
          language="html"
        />
      </section>

      {/* Empty Cells */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Empty Cells
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the rendering of empty cells in separated borders mode.
        </p>
        <CodeBlock
          code={`<table class="border-separate empty-cells-show">
  <!-- Empty cells show borders -->
</table>

<table class="border-separate empty-cells-hide">
  <!-- Empty cells hide borders -->
</table>`}
          language="html"
        />
      </section>

      {/* Complete Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Complete Example
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A fully styled table using table utilities.
        </p>
        <CodeBlock
          code={`<table class="w-full border-collapse">
  <caption class="caption-top mb-4 font-semibold">
    Employee Directory
  </caption>
  <thead>
    <tr class="border-b border-gray-200">
      <th class="py-2 text-left">Name</th>
      <th class="py-2 text-left">Department</th>
      <th class="py-2 text-right">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-gray-200">
      <td class="py-2">John Doe</td>
      <td class="py-2">Engineering</td>
      <td class="py-2 text-right">$85,000</td>
    </tr>
    <tr class="border-b border-gray-200">
      <td class="py-2">Jane Smith</td>
      <td class="py-2">Marketing</td>
      <td class="py-2 text-right">$75,000</td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>
    </section>
  );
}
