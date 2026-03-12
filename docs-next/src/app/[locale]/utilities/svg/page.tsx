import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "SVG Utilities - Apex Documentation",
  description: "SVG styling utilities for fill, stroke, and other SVG properties",
};

export default function SvgPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "SVG" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        SVG Utilities
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Comprehensive SVG styling utilities for fill, stroke, opacity, and other SVG properties.
      </p>

      {/* Fill */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Fill
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the fill color of SVG elements.
        </p>
        <CodeBlock
          code={`<svg class="fill-none">...</svg>
<svg class="fill-current">...</svg>
<svg class="fill-white">...</svg>
<svg class="fill-black">...</svg>
<svg class="fill-primary">...</svg>
<svg class="fill-success">...</svg>
<svg class="fill-danger">...</svg>
<svg class="fill-warning">...</svg>
<svg class="fill-info">...</svg>
<svg class="fill-transparent">...</svg>`}
          language="html"
        />
      </section>

      {/* Fill Opacity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Fill Opacity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the opacity of the fill color.
        </p>
        <CodeBlock
          code={`<svg class="fill-primary fill-opacity-0">...</svg>
<svg class="fill-primary fill-opacity-25">...</svg>
<svg class="fill-primary fill-opacity-50">...</svg>
<svg class="fill-primary fill-opacity-75">...</svg>
<svg class="fill-primary fill-opacity-100">...</svg>`}
          language="html"
        />
      </section>

      {/* Stroke */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Stroke
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the stroke (outline) color of SVG elements.
        </p>
        <CodeBlock
          code={`<svg class="stroke-none">...</svg>
<svg class="stroke-current">...</svg>
<svg class="stroke-white">...</svg>
<svg class="stroke-black">...</svg>
<svg class="stroke-primary">...</svg>
<svg class="stroke-success">...</svg>
<svg class="stroke-danger">...</svg>
<svg class="stroke-warning">...</svg>
<svg class="stroke-info">...</svg>
<svg class="stroke-transparent">...</svg>`}
          language="html"
        />
      </section>

      {/* Stroke Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Stroke Width
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Set the thickness of SVG strokes.
        </p>
        <CodeBlock
          code={`<svg class="stroke-0">...</svg>
<svg class="stroke-1">...</svg>
<svg class="stroke-2">...</svg>
<svg class="stroke-4">...</svg>
<svg class="stroke-8">...</svg>`}
          language="html"
        />
      </section>

      {/* Stroke Opacity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Stroke Opacity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the opacity of the stroke color.
        </p>
        <CodeBlock
          code={`<svg class="stroke-primary stroke-opacity-0">...</svg>
<svg class="stroke-primary stroke-opacity-25">...</svg>
<svg class="stroke-primary stroke-opacity-50">...</svg>
<svg class="stroke-primary stroke-opacity-75">...</svg>
<svg class="stroke-primary stroke-opacity-100">...</svg>`}
          language="html"
        />
      </section>

      {/* Stroke Linecap */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Stroke Linecap
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Define how the ends of lines are rendered.
        </p>
        <CodeBlock
          code={`<line class="stroke-cap-but" />
<line class="stroke-cap-round" />
<line class="stroke-cap-square" />`}
          language="html"
        />
      </section>

      {/* Stroke Linejoin */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Stroke Linejoin
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Define how corners of strokes are rendered.
        </p>
        <CodeBlock
          code={`<path class="stroke-join-miter" />
<path class="stroke-join-round" />
<path class="stroke-join-bevel" />`}
          language="html"
        />
      </section>

      {/* Stroke Dash Array */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Stroke Dash Array
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create dashed stroke patterns.
        </p>
        <CodeBlock
          code={`<line class="stroke-dash-0" />
<line class="stroke-dash-2" />
<line class="stroke-dash-4" />
<line class="stroke-dash-8" />
<line class="stroke-dash-10" />`}
          language="html"
        />
      </section>

      {/* Fill Rule */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Fill Rule
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control how complex shapes are filled.
        </p>
        <CodeBlock
          code={`<path class="fill-rule-nonzero" />
<path class="fill-rule-evenodd" />`}
          language="html"
        />
      </section>

      {/* Complete Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Complete Example
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A fully styled SVG using multiple utilities.
        </p>
        <CodeBlock
          code={`<svg viewBox="0 0 100 100" class="w-16 h-16">
  <circle
    cx="50"
    cy="50"
    r="40"
    class="fill-primary fill-opacity-50 stroke-primary stroke-2"
  />
  <path
    d="M 30 50 L 70 50"
    class="stroke-white stroke-2 stroke-cap-round"
  />
</svg>`}
          language="html"
        />
      </section>
    </section>
  );
}
