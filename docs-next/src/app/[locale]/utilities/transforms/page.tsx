import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";

export const metadata: Metadata = {
  title: "Transforms - Apex Documentation",
  description: "CSS transform utilities for rotate, scale, translate, and skew",
};

export default function TransformsPage() {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Transforms" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Transforms
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Transform utilities for 2D and 3D transformations including rotate, scale, translate, and skew.
      </p>

      <Alert type="info" title="GPU Acceleration">
        Transform properties are GPU-accelerated, making them ideal for animations and
        performance-critical UI effects.
      </Alert>

      {/* Rotate */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Rotate
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Rotate elements by degrees using <code className="text-blue-600 dark:text-blue-400">rotate-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Rotation</th>
                <th className="text-left py-3 px-4 font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">rotate-0</td>
                <td className="py-3 px-4 font-mono">0deg</td>
                <td className="py-3 px-4"><div className="w-8 h-8 bg-blue-500 rounded"></div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">rotate-45</td>
                <td className="py-3 px-4 font-mono">45deg</td>
                <td className="py-3 px-4"><div className="w-8 h-8 bg-blue-500 rounded rotate-45"></div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">rotate-90</td>
                <td className="py-3 px-4 font-mono">90deg</td>
                <td className="py-3 px-4"><div className="w-8 h-8 bg-blue-500 rounded rotate-90"></div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">rotate-180</td>
                <td className="py-3 px-4 font-mono">180deg</td>
                <td className="py-3 px-4"><div className="w-8 h-8 bg-blue-500 rounded rotate-180"></div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">-rotate-45</td>
                <td className="py-3 px-4 font-mono">-45deg</td>
                <td className="py-3 px-4"><div className="w-8 h-8 bg-blue-500 rounded -rotate-45"></div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">-rotate-90</td>
                <td className="py-3 px-4 font-mono">-90deg</td>
                <td className="py-3 px-4"><div className="w-8 h-8 bg-blue-500 rounded -rotate-90"></div></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`<!-- Arrow icon rotation -->
<button class="group flex items-center gap-2">
  Menu
  <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
  </svg>
</button>

<!-- Loading spinner -->
<div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

<!-- Card flip -->
<div class="group perspective-1000">
  <div class="relative w-64 h-40 transition-transform duration-500 group-hover:rotate-y-180">
    <div class="absolute inset-0 bg-blue-500 rounded-lg backface-hidden">Front</div>
    <div class="absolute inset-0 bg-green-500 rounded-lg backface-hidden rotate-y-180">Back</div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Scale
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Scale elements up or down using <code className="text-blue-600 dark:text-blue-400">scale-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-0</td>
                <td className="py-3 px-4 font-mono">0</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-50</td>
                <td className="py-3 px-4 font-mono">0.5</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-75</td>
                <td className="py-3 px-4 font-mono">0.75</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-90</td>
                <td className="py-3 px-4 font-mono">0.9</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-95</td>
                <td className="py-3 px-4 font-mono">0.95</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-100</td>
                <td className="py-3 px-4 font-mono">1</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-105</td>
                <td className="py-3 px-4 font-mono">1.05</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-110</td>
                <td className="py-3 px-4 font-mono">1.1</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-125</td>
                <td className="py-3 px-4 font-mono">1.25</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">scale-150</td>
                <td className="py-3 px-4 font-mono">1.5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`<!-- Scale on hover -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:scale-105 active:scale-95 transition-transform">
  Scale Button
</button>

<!-- Scale animation -->
<div class="animate-pulse scale-110">
  Pulsing element
</div>

<!-- Image zoom -->
<div class="overflow-hidden rounded-lg">
  <img src="photo.jpg" class="hover:scale-110 transition-transform duration-500" />
</div>`}
          language="html"
        />
      </section>

      {/* Translate */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Translate
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Move elements using <code className="text-blue-600 dark:text-blue-400">translate-x-*</code> and{" "}
          <code className="text-blue-600 dark:text-blue-400">translate-y-*</code> utilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Translate X</h3>
            <CodeBlock
              code={`.translate-x-0     /* 0px */
.translate-x-1     /* 0.25rem (4px) */
.translate-x-2     /* 0.5rem (8px) */
.translate-x-4     /* 1rem (16px) */
.translate-x-8     /* 2rem (32px) */
.translate-x-16    /* 4rem (64px) */
.translate-x-px    /* 1px */
.-translate-x-4    /* -1rem (-16px) */
.translate-x-1/2  /* 50% */
.translate-x-full /* 100% */`}
              language="css"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Translate Y</h3>
            <CodeBlock
              code={`.translate-y-0     /* 0px */
.translate-y-1     /* 0.25rem (4px) */
.translate-y-2     /* 0.5rem (8px) */
.translate-y-4     /* 1rem (16px) */
.translate-y-8     /* 2rem (32px) */
.translate-y-16    /* 4rem (64px) */
.translate-y-px    /* 1px */
.-translate-y-4    /* -1rem (-16px) */
.translate-y-1/2  /* 50% */
.translate-y-full /* 100% */`}
              language="css"
            />
          </div>
        </div>

        <CodeBlock
          code={`<!-- Slide animation -->
<div class="transform translate-x-0 hover:translate-x-4 transition-transform">
  Slides right on hover
</div>

<!-- Center positioning -->
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  Perfectly centered
</div>

<!-- Modal slide in -->
<div class="fixed inset-0 flex items-center justify-center">
  <div class="bg-white rounded-lg shadow-xl transform translate-y-4 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
    Modal content
  </div>
</div>

<!-- Tooltip positioning -->
<div class="relative group">
  <button>Hover me</button>
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
    Tooltip
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Skew */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Skew
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Skew elements using <code className="text-blue-600 dark:text-blue-400">skew-x-*</code> and{" "}
          <code className="text-blue-600 dark:text-blue-400">skew-y-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Skew</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">skew-x-0</td>
                <td className="py-3 px-4 font-mono">0deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">skew-x-1</td>
                <td className="py-3 px-4 font-mono">1deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">skew-x-2</td>
                <td className="py-3 px-4 font-mono">2deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">skew-x-3</td>
                <td className="py-3 px-4 font-mono">3deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">skew-x-6</td>
                <td className="py-3 px-4 font-mono">6deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">skew-x-12</td>
                <td className="py-3 px-4 font-mono">12deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">-skew-x-12</td>
                <td className="py-3 px-4 font-mono">-12deg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`<!-- Skewed button -->
<button class="skew-x-[-12deg] bg-blue-500 text-white px-6 py-2">
  <span class="skew-x-12 inline-block">Skewed Button</span>
</button>

<!-- Diagonal section -->
<div class="relative overflow-hidden">
  <div class="absolute inset-0 bg-blue-500 transform -skew-y-3 origin-top-left"></div>
  <div class="relative py-20 text-center">
    <h2 class="text-3xl font-bold text-white">Diagonal Section</h2>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Transform Origin */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Transform Origin
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Set the origin point for transformations using <code className="text-blue-600 dark:text-blue-400">origin-*</code> utilities.
        </p>

        <CodeBlock
          code={`.origin-center      /* transform-origin: center */
.origin-top         /* transform-origin: top */
.origin-right       /* transform-origin: right */
.origin-bottom      /* transform-origin: bottom */
.origin-left        /* transform-origin: left */
.origin-top-right   /* transform-origin: top right */
.origin-bottom-left /* transform-origin: bottom left */`}
          language="css"
        />
      </section>

      {/* 3D Transforms */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          3D Transforms
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create 3D effects with perspective and 3D rotation utilities.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Perspective</h3>
            <CodeBlock
              code={`.perspective-none  /* perspective: none */
.perspective-250   /* perspective: 250px */
.perspective-500   /* perspective: 500px */
.perspective-750   /* perspective: 750px */
.perspective-1000  /* perspective: 1000px */`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3D Rotation</h3>
            <CodeBlock
              code={`.rotate-x-0   /* rotateX(0deg) */
.rotate-x-45  /* rotateX(45deg) */
.rotate-x-90  /* rotateX(90deg) */
.rotate-x-180 /* rotateX(180deg) */

.rotate-y-0   /* rotateY(0deg) */
.rotate-y-45  /* rotateY(45deg) */
.rotate-y-90  /* rotateY(90deg) */
.rotate-y-180 /* rotateY(180deg) */`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Flip Example</h3>
            <CodeBlock
              code={`<!-- 3D Card Flip -->
<div class="group h-64 w-64 perspective-1000">
  <div class="relative h-full w-full transition-all duration-500 preserve-3d group-hover:rotate-y-180">
    <!-- Front -->
    <div class="absolute inset-0 backface-hidden bg-blue-500 rounded-xl flex items-center justify-center">
      <span class="text-2xl font-bold text-white">Front</span>
    </div>
    <!-- Back -->
    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-green-500 rounded-xl flex items-center justify-center">
      <span class="text-2xl font-bold text-white">Back</span>
    </div>
  </div>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Common Patterns
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Button Press Effect</h3>
            <CodeBlock
              code={`<button class="
  px-6 py-3 bg-blue-500 text-white rounded-lg
  transform transition-transform duration-150
  active:scale-95 active:translate-y-0.5
  hover:scale-105
">
  Click Me
</button>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Floating Animation</h3>
            <CodeBlock
              code={`<div class="animate-[float_3s_ease-in-out_infinite]">
  <style>{\`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  \`}</style>
  Floating Element
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Image Gallery Hover</h3>
            <CodeBlock
              code={`<div class="grid grid-cols-3 gap-4">
  <div class="overflow-hidden rounded-lg group">
    <img
      src="image.jpg"
      class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
  </div>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Best Practices
        </h2>

        <div className="space-y-4">
          <Alert type="success" title="Combine with transitions">
            Always add transition utilities for smooth transform animations:
            <code className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">transition-transform</code>
          </Alert>
          <Alert type="success" title="Use will-change sparingly">
            Add will-change for elements that will animate, but remove it after animation completes
            to free up GPU memory.
          </Alert>
          <Alert type="success" title="Consider reduced motion">
            Respect user preferences with reduced motion media queries for accessibility.
          </Alert>
        </div>
      </section>
    </section>
  );
}
