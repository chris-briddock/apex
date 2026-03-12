import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Advanced Utilities - Apex Documentation",
  description: "Advanced and experimental CSS utilities",
};

export default function AdvancedPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Advanced" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Advanced Utilities
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Experimental and advanced CSS utilities for specialized use cases.
      </p>

      {/* Box Reflect */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Box Reflect (WebKit)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create reflection effects for elements (WebKit browsers only).
        </p>
        <CodeBlock
          code={`<div class="box-reflect-below">
  <!-- Reflects below the element -->
</div>

<div class="box-reflect-left">
  <!-- Reflects to the left -->
</div>

<div class="box-reflect-right">
  <!-- Reflects to the right -->
</div>

<div class="box-reflect-none">
  <!-- No reflection -->
</div>`}
          language="html"
        />
      </section>

      {/* Zoom */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Zoom (Non-standard)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Non-standard zoom property for scaling content (Internet Explorer legacy).
        </p>
        <CodeBlock
          code={`<div class="zoom-50">50% zoom</div>
<div class="zoom-75">75% zoom</div>
<div class="zoom-100">100% zoom (default)</div>
<div class="zoom-125">125% zoom</div>
<div class="zoom-150">150% zoom</div>
<div class="zoom-200">200% zoom</div>
<div class="zoom-300">300% zoom</div>`}
          language="html"
        />
      </section>

      {/* Field Sizing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Field Sizing
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control form field sizing behavior.
        </p>
        <CodeBlock
          code={`<input class="field-sizing-fixed" placeholder="Fixed size">
<input class="field-sizing-content" placeholder="Size to content">`}
          language="html"
        />
      </section>

      {/* Shape Outside */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Shape Outside
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Define shapes for text to wrap around (requires float).
        </p>
        <CodeBlock
          code={`<img src="circle.png" class="float-left shape-outside-circle">
<p>Text wraps around the circular image...</p>`}
          language="html"
        />
      </section>

      {/* Offset */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Offset
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Offset positioned elements from their original position.
        </p>
        <CodeBlock
          code={`<div class="relative offset-x-4">
  <!-- Offset 4 units on X axis -->
</div>

<div class="relative offset-y-2">
  <!-- Offset 2 units on Y axis -->
</div>`}
          language="html"
        />
      </section>

      {/* Isolation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Isolation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create a new stacking context for an element.
        </p>
        <CodeBlock
          code={`<div class="isolate">
  <!-- Creates new stacking context -->
</div>

<div class="isolation-auto">
  <!-- Default isolation -->
</div>`}
          language="html"
        />
      </section>

      {/* Logical Properties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Logical Properties
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Use logical properties that adapt to text direction.
        </p>
        <CodeBlock
          code={`<!-- Logical margins -->
<div class="ms-4">Margin start (inline-start)</div>
<div class="me-4">Margin end (inline-end)</div>

<!-- Logical padding -->
<div class="ps-4">Padding start</div>
<div class="pe-4">Padding end</div>

<!-- Logical borders -->
<div class="border-s">Border start</div>
<div class="border-e">Border end</div>
<div class="border-bs">Border block-start</div>
<div class="border-be">Border block-end</div>

<!-- Logical sizing -->
<div class="w-inline">Inline size (width in LTR)</div>
<div class="h-block">Block size (height in LTR)</div>`}
          language="html"
        />
      </section>
    </section>
  );
}
