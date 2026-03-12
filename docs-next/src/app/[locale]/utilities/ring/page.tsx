import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Ring Utilities - Apex Documentation",
  description: "Ring utilities for focus rings and borders with CSS custom properties",
};

export default function RingPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Ring" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Ring Utilities
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        CSS ring utilities for focus rings, borders, and visual emphasis. Uses CSS custom properties for runtime theming.
      </p>

      {/* Ring Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ring Width
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add rings around elements with configurable widths.
        </p>
        <CodeBlock
          code={`<button class="ring-0">No ring</button>
<button class="ring-1">1px ring</button>
<button class="ring-2">2px ring</button>
<button class="ring-4">4px ring</button>
<button class="ring-8">8px ring</button>`}
          language="html"
        />
      </section>

      {/* Ring Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ring Colors
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Apply different colors to your rings using the ring color utilities.
        </p>
        <CodeBlock
          code={`<button class="ring-2 ring-primary">Primary ring</button>
<button class="ring-2 ring-success">Success ring</button>
<button class="ring-2 ring-danger">Danger ring</button>
<button class="ring-2 ring-warning">Warning ring</button>
<button class="ring-2 ring-info">Info ring</button>
<button class="ring-2 ring-gray-500">Gray ring</button>`}
          language="html"
        />
      </section>

      {/* Ring Offset */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ring Offset
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create a gap between the element and the ring using ring offset.
        </p>
        <CodeBlock
          code={`<button class="ring-2 ring-offset-2 ring-primary">2px offset</button>
<button class="ring-2 ring-offset-4 ring-success">4px offset</button>
<button class="ring-2 ring-offset-8 ring-danger">8px offset</button>`}
          language="html"
        />
      </section>

      {/* Ring Offset Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ring Offset Colors
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Change the color of the ring offset to match your design.
        </p>
        <CodeBlock
          code={`<button class="ring-2 ring-offset-2 ring-offset-white ring-primary">White offset</button>
<button class="ring-2 ring-offset-2 ring-offset-gray-900 ring-white">Dark offset</button>
<button class="ring-2 ring-offset-2 ring-offset-primary ring-gray-900">Primary offset</button>`}
          language="html"
        />
      </section>

      {/* Ring Inset */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ring Inset
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Draw the ring inside the element boundaries instead of outside.
        </p>
        <CodeBlock
          code={`<button class="ring-2 ring-inset ring-primary">Inset ring</button>
<button class="ring-4 ring-inset ring-success">Inset 4px ring</button>`}
          language="html"
        />
      </section>

      {/* Ring Opacity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Ring Opacity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the opacity of the ring color independently.
        </p>
        <CodeBlock
          code={`<button class="ring-4 ring-primary ring-opacity-25">25% opacity</button>
<button class="ring-4 ring-primary ring-opacity-50">50% opacity</button>
<button class="ring-4 ring-primary ring-opacity-75">75% opacity</button>
<button class="ring-4 ring-primary ring-opacity-100">100% opacity</button>`}
          language="html"
        />
      </section>

      {/* Focus Rings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Focus Rings
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Common patterns for focus ring styling on interactive elements.
        </p>
        <CodeBlock
          code={`<!-- Default focus ring -->
<button class="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none">
  Primary focus
</button>

<!-- Success focus ring -->
<button class="focus:ring-2 focus:ring-success focus:ring-offset-2 focus:outline-none">
  Success focus
</button>

<!-- Inset focus ring -->
<button class="focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none">
  Inset focus
</button>

<!-- Custom offset color -->
<button class="focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none">
  Dark mode focus
</button>`}
          language="html"
        />
      </section>
    </section>
  );
}
