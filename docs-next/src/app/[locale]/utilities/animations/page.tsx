import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { Breadcrumb } from "@/components/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("docs");
  return {
    title: `${t("nav.animations")} - ${t("meta.title")}`,
    description: t("nav.animationsDescription"),
  };
}

export default function AnimationsPage() {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "docs", href: "/docs" },
          { label: "Utilities", href: "/utilities" },
          { label: "Animations" },
        ]}
      />

      <h1 className="text-3xl font-bold mb-4">Animations</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Ready-to-use animation utilities for common UI patterns. Add subtle motion to your interface without custom CSS.
      </p>

      <Alert type="info" className="mb-8">
        <p>
          All animations use the <code>animation-fill-mode: forwards</code> to maintain their final state.
          Combine with <code>hover:</code> or <code>focus:</code> prefixes for interactive effects.
        </p>
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Animations</h2>
        <p className="mb-4">
          Four essential animations for loading states, attention, and feedback:
        </p>
        <div className="space-y-4">
          <CodeBlock
            code={`<div className="animate-spin">
  <!-- Spinner icon or element -->
  <svg><!-- loading spinner --></svg>
</div>

<button className="animate-pulse">
  Saving...
</button>

<div className="animate-bounce">
  <!-- Scroll indicator -->
  <span>↓</span>
</div>

<span className="animate-ping">
  <!-- Notification dot -->
</span>`}
            language="tsx"
            preview
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Animation Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-medium">Utility</th>
                <th className="text-left py-3 px-4 font-medium">Effect</th>
                <th className="text-left py-3 px-4 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-spin</code></td>
                <td className="py-3 px-4">Continuous 360° rotation</td>
                <td className="py-3 px-4">1s linear infinite</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-ping</code></td>
                <td className="py-3 px-4">Scale and fade pulse effect</td>
                <td className="py-3 px-4">1s cubic-bezier infinite</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-pulse</code></td>
                <td className="py-3 px-4">Subtle opacity oscillation</td>
                <td className="py-3 px-4">2s cubic-bezier infinite</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-bounce</code></td>
                <td className="py-3 px-4">Vertical bouncing motion</td>
                <td className="py-3 px-4">1s infinite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Loading Spinner</h3>
            <CodeBlock
              code={`<div className="animate-spin">
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
  </svg>
</div>`}
              language="tsx"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Skeleton Loading</h3>
            <CodeBlock
              code={`{/* Shimmer effect for content loading */}
<div className="space-y-3">
  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
</div>`}
              language="tsx"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Animation Timing Utilities</h2>
        <p className="mb-4">
          Control animation timing and behavior with these additional utilities:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-medium">Utility</th>
                <th className="text-left py-3 px-4 font-medium">Property</th>
                <th className="text-left py-3 px-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>duration-75</code> to <code>duration-1000</code></td>
                <td className="py-3 px-4"><code>animation-duration</code></td>
                <td className="py-3 px-4">75ms, 100ms, 150ms, 200ms, 300ms, 500ms, 700ms, 1000ms</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>ease-linear</code></td>
                <td className="py-3 px-4"><code>animation-timing-function</code></td>
                <td className="py-3 px-4">Constant speed throughout</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>ease-in</code></td>
                <td className="py-3 px-4"><code>animation-timing-function</code></td>
                <td className="py-3 px-4">Starts slow, accelerates</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>ease-out</code></td>
                <td className="py-3 px-4"><code>animation-timing-function</code></td>
                <td className="py-3 px-4">Starts fast, decelerates</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>ease-in-out</code></td>
                <td className="py-3 px-4"><code>animation-timing-function</code></td>
                <td className="py-3 px-4">Slow at start and end</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>delay-75</code> to <code>delay-1000</code></td>
                <td className="py-3 px-4"><code>animation-delay</code></td>
                <td className="py-3 px-4">Delay before animation starts</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>repeat-1</code> to <code>repeat-infinite</code></td>
                <td className="py-3 px-4"><code>animation-iteration-count</code></td>
                <td className="py-3 px-4">How many times to repeat</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>fill-forwards</code></td>
                <td className="py-3 px-4"><code>animation-fill-mode</code></td>
                <td className="py-3 px-4">Retains final animation state</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>fill-backwards</code></td>
                <td className="py-3 px-4"><code>animation-fill-mode</code></td>
                <td className="py-3 px-4">Retains initial animation state</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>fill-both</code></td>
                <td className="py-3 px-4"><code>animation-fill-mode</code></td>
                <td className="py-3 px-4">Both forwards and backwards</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>direction-normal</code></td>
                <td className="py-3 px-4"><code>animation-direction</code></td>
                <td className="py-3 px-4">Plays forward (default)</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>direction-reverse</code></td>
                <td className="py-3 px-4"><code>animation-direction</code></td>
                <td className="py-3 px-4">Plays backwards</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>direction-alternate</code></td>
                <td className="py-3 px-4"><code>animation-direction</code></td>
                <td className="py-3 px-4">Alternates forward and backward</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>play-running</code></td>
                <td className="py-3 px-4"><code>animation-play-state</code></td>
                <td className="py-3 px-4">Animation is playing</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>play-paused</code></td>
                <td className="py-3 px-4"><code>animation-play-state</code></td>
                <td className="py-3 px-4">Animation is paused</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Animation Example</h2>
        <p className="mb-4">
          Combine animations with timing utilities for custom effects:
        </p>
        <CodeBlock
          code={`{/* Staggered entrance animation */}
<div className="space-y-2">
  <div className="animate-fade-in duration-300 delay-0">
    First item
  </div>
  <div className="animate-fade-in duration-300 delay-100">
    Second item
  </div>
  <div className="animate-fade-in duration-300 delay-200">
    Third item
  </div>
</div>

{/* Hover-triggered animation */}
<button className="hover:animate-bounce duration-300 ease-out">
  Hover to bounce
</button>

{/* Reduced motion support */}
<div className="animate-pulse motion-reduce:animate-none">
  Respects user's motion preferences
</div>`}
          language="tsx"
          preview
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Animation Presets</h2>
        <p className="mb-4">
          ApexCSS includes additional predefined animations for common patterns:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-medium">Utility</th>
                <th className="text-left py-3 px-4 font-medium">Effect</th>
                <th className="text-left py-3 px-4 font-medium">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-fade-in</code></td>
                <td className="py-3 px-4">Opacity 0 → 1</td>
                <td className="py-3 px-4">Page/element entrance</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-fade-out</code></td>
                <td className="py-3 px-4">Opacity 1 → 0</td>
                <td className="py-3 px-4">Exit animations</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-slide-up</code></td>
                <td className="py-3 px-4">Translate Y 100% → 0</td>
                <td className="py-3 px-4">Bottom sheet/modal entrance</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-slide-down</code></td>
                <td className="py-3 px-4">Translate Y -100% → 0</td>
                <td className="py-3 px-4">Dropdown menus</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-slide-left</code></td>
                <td className="py-3 px-4">Translate X 100% → 0</td>
                <td className="py-3 px-4">Side panel entrance</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-slide-right</code></td>
                <td className="py-3 px-4">Translate X -100% → 0</td>
                <td className="py-3 px-4">Off-canvas navigation</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-scale-in</code></td>
                <td className="py-3 px-4">Scale 0.95 → 1</td>
                <td className="py-3 px-4">Modal/dialog entrance</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-scale-out</code></td>
                <td className="py-3 px-4">Scale 1 → 0.95</td>
                <td className="py-3 px-4">Exit to shrunken state</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-shake</code></td>
                <td className="py-3 px-4">Horizontal shake</td>
                <td className="py-3 px-4">Form validation errors</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4"><code>animate-tada</code></td>
                <td className="py-3 px-4">Scale + rotate wobble</td>
                <td className="py-3 px-4">Celebratory emphasis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reduced Motion Support</h2>
        <p className="mb-4">
          Always respect user preferences with the <code>motion-reduce</code> variant:
        </p>
        <CodeBlock
          code={`{/* Disable animations for users who prefer reduced motion */}
<div className="animate-fade-in motion-reduce:animate-none">
  Content with accessibility support
</div>

{/* Or provide a subtle alternative */}
<button className="animate-bounce motion-reduce:transition-colors motion-reduce:hover:bg-blue-600">
  Button with motion fallback
</button>`}
          language="tsx"
        />
      </section>

      <Alert type="success" title="Performance tip" className="mb-8">
        <p>
          Animations are GPU-accelerated when animating transform and opacity properties.
          Avoid animating layout properties like width, height, or top/left as they trigger expensive reflows.
        </p>
      </Alert>
    </section>
  );
}
