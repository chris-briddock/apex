import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Overflow Extended - Apex Documentation",
  description: "Extended overflow utilities including overflow anchor and overflow wrap",
};

export default function OverflowExtendedPage(): React.ReactElement {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Overflow Extended" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Overflow Extended
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Extended overflow utilities for controlling scroll anchoring and text wrapping behavior.
      </p>

      {/* Overflow Anchor */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Overflow Anchor
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control scroll anchoring behavior to prevent unwanted scroll adjustments when content changes above the viewport.
        </p>
        <CodeBlock
          code={`<div class="overflow-anchor-auto">
  <!-- Scroll position adjusts automatically (default) -->
</div>

<div class="overflow-anchor-none">
  <!-- Scroll position remains fixed -->
</div>`}
          language="html"
        />
      </section>

      {/* Overflow Wrap */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Overflow Wrap
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control how text wraps when it overflows its container.
        </p>
        <CodeBlock
          code={`<p class="break-normal">
  Text wraps normally at word boundaries only.
</p>

<p class="break-words">
  Text can break at appropriate characters within words to prevent overflow.
</p>

<p class="break-anywhere">
  Text can break at any point to prevent overflow.
</p>`}
          language="html"
        />
      </section>

      {/* Word Break vs Overflow Wrap */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Word Break vs Overflow Wrap
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Understanding the difference between word-break and overflow-wrap properties.
        </p>
        <CodeBlock
          code={`<!-- overflow-wrap: break-word (break-words) -->
<!-- Only breaks if word exceeds container -->
<p class="break-words">LongWordsBreakAtAppropriatePoints</p>

<!-- word-break: break-all (break-all) -->
<!-- Forces breaks at any character -->
<p class="break-all">AnyWordWillBreakAnywhere</p>`}
          language="html"
        />
      </section>

      {/* Scroll Behavior */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Scroll Behavior
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control scrolling behavior for smooth or instant scrolling.
        </p>
        <CodeBlock
          code={`<html class="scroll-smooth">
  <!-- Smooth scrolling for anchor links -->
</html>

<html class="scroll-auto">
  <!-- Instant scrolling (default) -->
</html>`}
          language="html"
        />
      </section>

      {/* Scroll Snap */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Scroll Snap
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create scroll snap containers for carousel-like scrolling behavior.
        </p>
        <CodeBlock
          code={`<!-- Scroll snap container -->
<div class="snap-x snap-mandatory overflow-x-auto flex">
  <div class="snap-center flex-shrink-0 w-full">Slide 1</div>
  <div class="snap-center flex-shrink-0 w-full">Slide 2</div>
  <div class="snap-center flex-shrink-0 w-full">Slide 3</div>
</div>

<!-- Snap align options -->
<div class="snap-start">Snap to start</div>
<div class="snap-end">Snap to end</div>
<div class="snap-center">Snap to center</div>
<div class="snap-align-none">No snap</div>`}
          language="html"
        />
      </section>

      {/* Overscroll Behavior */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Overscroll Behavior
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Control what happens when reaching the boundary of a scrolling area.
        </p>
        <CodeBlock
          code={`<div class="overscroll-auto">
  <!-- Default: may trigger parent scroll (bounce) -->
</div>

<div class="overscroll-contain">
  <!-- Contain scroll within element -->
</div>

<div class="overscroll-none">
  <!-- Prevent overscroll effects -->
</div>`}
          language="html"
        />
      </section>
    </section>
  );
}
