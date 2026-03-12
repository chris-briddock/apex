import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Typography Extended - Apex Documentation",
  description: "Extended typography utilities including text shadow, text indent, word break, and more",
};

export default function TypographyExtendedPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Typography Extended" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Typography Extended
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Extended typography utilities for advanced text styling including shadows, indentation, and word breaking.
      </p>

      {/* Text Shadow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Text Shadow
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add shadows to text for depth and emphasis effects.
        </p>
        <CodeBlock
          code={`<p class="text-shadow-sm">Small text shadow</p>
<p class="text-shadow">Default text shadow</p>
<p class="text-shadow-md">Medium text shadow</p>
<p class="text-shadow-lg">Large text shadow</p>
<p class="text-shadow-xl">Extra large text shadow</p>
<p class="text-shadow-2xl">2XL text shadow</p>
<p class="text-shadow-none">No text shadow</p>

<!-- Colored shadows -->
<p class="text-shadow-primary">Primary glow effect</p>
<p class="text-shadow-success">Success glow effect</p>
<p class="text-shadow-danger">Danger glow effect</p>`}
          language="html"
        />
      </section>

      {/* Text Indent */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Text Indent
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Indent the first line of text content. Values follow the spacing scale.
        </p>
        <CodeBlock
          code={`<p class="indent-0">No indentation</p>
<p class="indent-4">1rem indentation</p>
<p class="indent-8">2rem indentation</p>
<p class="indent-16">4rem indentation</p>
<p class="indent-px">1px indentation</p>`}
          language="html"
        />
      </section>

      {/* Word Break */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Word Break
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control how words break when they overflow their container.
        </p>
        <CodeBlock
          code={`<p class="break-normal">Normal word breaking</p>
<p class="break-words">Break words at appropriate characters</p>
<p class="break-all">Break words at any character</p>
<p class="break-keep">Keep words together (no breaks)</p>`}
          language="html"
        />
      </section>

      {/* Text Emphasis */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Text Emphasis
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add emphasis marks to text for East Asian typography.
        </p>
        <CodeBlock
          code={`<p class="emphasis-dot">Dot emphasis</p>
<p class="emphasis-circle">Circle emphasis</p>
<p class="emphasis-double-circle">Double circle emphasis</p>
<p class="emphasis-triangle">Triangle emphasis</p>
<p class="emphasis-sesame">Sesame emphasis</p>`}
          language="html"
        />
      </section>

      {/* Text Orientation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Text Orientation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the orientation of text characters.
        </p>
        <CodeBlock
          code={`<p class="text-orientation-mixed">Mixed orientation (default)</p>
<p class="text-orientation-upright">Upright orientation</p>
<p class="text-orientation-sideways">Sideways orientation</p>`}
          language="html"
        />
      </section>

      {/* Writing Mode */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Writing Mode
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Define how lines of text are laid out horizontally or vertically.
        </p>
        <CodeBlock
          code={`<p class="writing-horizontal">Horizontal writing mode</p>
<p class="writing-vertical-rl">Vertical right-to-left</p>
<p class="writing-vertical-lr">Vertical left-to-right</p>`}
          language="html"
        />
      </section>

      {/* Unicode Bidi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Unicode Bidirectional
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control the bidirectional algorithm for mixed-language content.
        </p>
        <CodeBlock
          code={`<p class="unicode-bidi-normal">Normal bidirectional</p>
<p class="unicode-bidi-embed">Embed bidirectional</p>
<p class="unicode-bidi-bidi-override">Override bidirectional</p>`}
          language="html"
        />
      </section>

      {/* Tab Size */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Tab Size
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Customize the width of tab characters.
        </p>
        <CodeBlock
          code={`<pre class="tab-2">Tab size 2 spaces</pre>
<pre class="tab-4">Tab size 4 spaces (default)</pre>
<pre class="tab-8">Tab size 8 spaces</pre>`}
          language="html"
        />
      </section>

      {/* Hyphenation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Hyphenation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control how words are hyphenated when breaking across lines.
        </p>
        <CodeBlock
          code={`<p class="hyphens-none">No hyphenation</p>
<p class="hyphens-manual">Manual hyphenation only</p>
<p class="hyphens-auto">Automatic hyphenation</p>`}
          language="html"
        />
      </section>
    </section>
  );
}
