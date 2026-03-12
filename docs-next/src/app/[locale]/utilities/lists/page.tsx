import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "List Utilities - Apex Documentation",
  description: "List style utilities for styling ordered and unordered lists",
};

export default function ListsPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Lists" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        List Utilities
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Comprehensive list styling utilities for ordered, unordered, and description lists.
      </p>

      {/* List Style Type */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          List Style Type
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Set the marker type for list items.
        </p>
        <CodeBlock
          code={`<ul class="list-none">
  <li>No bullet</li>
</ul>

<ul class="list-disc">
  <li>Disc bullet</li>
</ul>

<ul class="list-circle">
  <li>Circle bullet</li>
</ul>

<ul class="list-square">
  <li>Square bullet</li>
</ul>

<ol class="list-decimal">
  <li>Decimal numbers</li>
</ol>

<ol class="list-lower-roman">
  <li>Lowercase roman numerals</li>
</ol>

<ol class="list-upper-roman">
  <li>Uppercase roman numerals</li>
</ol>

<ol class="list-lower-alpha">
  <li>Lowercase letters</li>
</ol>

<ol class="list-upper-alpha">
  <li>Uppercase letters</li>
</ol>`}
          language="html"
        />
      </section>

      {/* List Style Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          List Style Position
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control where list markers are positioned relative to the list item content.
        </p>
        <CodeBlock
          code={`<ul class="list-inside">
  <li>Markers inside the content box</li>
</ul>

<ul class="list-outside">
  <li>Markers outside the content box (default)</li>
</ul>`}
          language="html"
        />
      </section>

      {/* List Style Image */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          List Style Image
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Use custom images as list markers.
        </p>
        <CodeBlock
          code={`<ul class="list-image-none">
  <li>Reset to no image</li>
</ul>`}
          language="html"
        />
      </section>

      {/* Marker Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Marker Colors
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Customize the color of list markers using CSS custom properties.
        </p>
        <CodeBlock
          code={`<ul class="list-disc marker-color-primary">
  <li>Primary colored marker</li>
</ul>

<ul class="list-disc marker-color-success">
  <li>Success colored marker</li>
</ul>

<ul class="list-disc marker-color-danger">
  <li>Danger colored marker</li>
</ul>

<ul class="list-disc marker-color-warning">
  <li>Warning colored marker</li>
</ul>`}
          language="html"
        />
      </section>
    </section>
  );
}
