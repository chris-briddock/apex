import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";

export const metadata: Metadata = {
  title: "Filters - Apex Documentation",
  description: "CSS filter utilities for blur, brightness, contrast, and more",
};

export default function FiltersPage() {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Filters" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Filters
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        CSS filter utilities for applying visual effects like blur, brightness, contrast, and more.
      </p>

      <Alert type="info" title="Filter Effects">
        Filters apply graphical effects like blurring or color shifting to elements.
        Multiple filters can be combined for complex effects.
      </Alert>

      {/* Blur */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Blur
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Apply Gaussian blur using <code className="text-blue-600 dark:text-blue-400">blur-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Blur Amount</th>
                <th className="text-left py-3 px-4 font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-none</td>
                <td className="py-3 px-4 font-mono">0</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">Clear</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-sm</td>
                <td className="py-3 px-4 font-mono">4px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur-sm">Slight</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur</td>
                <td className="py-3 px-4 font-mono">8px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur">Medium</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-md</td>
                <td className="py-3 px-4 font-mono">12px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur-md">More</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-lg</td>
                <td className="py-3 px-4 font-mono">16px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur-lg">Heavy</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-xl</td>
                <td className="py-3 px-4 font-mono">24px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur-xl">Extra</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-2xl</td>
                <td className="py-3 px-4 font-mono">40px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur-2xl">2XL</div></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">blur-3xl</td>
                <td className="py-3 px-4 font-mono">64px</td>
                <td className="py-3 px-4"><div className="w-16 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs blur-3xl">3XL</div></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`<!-- Backdrop blur for glass morphism -->
<div class="relative">
  <img src="background.jpg" class="w-full h-64 object-cover" />
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="bg-white/30 backdrop-blur-md p-8 rounded-xl">
      <h2 class="text-2xl font-bold text-white">Glass Effect</h2>
    </div>
  </div>
</div>

<!-- Blur on hover -->
<img
  src="image.jpg"
  class="blur hover:blur-none transition-all duration-500"
  alt="Reveals on hover"
/>

<!-- Modal backdrop -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
  <div class="bg-white p-8 rounded-xl shadow-2xl">
    Modal content
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Brightness */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Brightness
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Adjust brightness using <code className="text-blue-600 dark:text-blue-400">brightness-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Brightness</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-0</td>
                <td className="py-3 px-4 font-mono">0%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-50</td>
                <td className="py-3 px-4 font-mono">50%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-75</td>
                <td className="py-3 px-4 font-mono">75%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-90</td>
                <td className="py-3 px-4 font-mono">90%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-95</td>
                <td className="py-3 px-4 font-mono">95%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-100</td>
                <td className="py-3 px-4 font-mono">100%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-105</td>
                <td className="py-3 px-4 font-mono">105%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-110</td>
                <td className="py-3 px-4 font-mono">110%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-125</td>
                <td className="py-3 px-4 font-mono">125%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-150</td>
                <td className="py-3 px-4 font-mono">150%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">brightness-200</td>
                <td className="py-3 px-4 font-mono">200%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`<!-- Image hover effect -->
<img
  src="photo.jpg"
  class="brightness-90 hover:brightness-110 transition-all duration-300"
/>

<!-- Dark image overlay -->
<div class="relative">
  <img src="hero.jpg" class="brightness-50" />
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-white text-4xl font-bold">Hero Text</h1>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Contrast */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Contrast
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Adjust contrast using <code className="text-blue-600 dark:text-blue-400">contrast-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Contrast</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-0</td>
                <td className="py-3 px-4 font-mono">0%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-50</td>
                <td className="py-3 px-4 font-mono">50%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-75</td>
                <td className="py-3 px-4 font-mono">75%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-100</td>
                <td className="py-3 px-4 font-mono">100%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-125</td>
                <td className="py-3 px-4 font-mono">125%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-150</td>
                <td className="py-3 px-4 font-mono">150%</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">contrast-200</td>
                <td className="py-3 px-4 font-mono">200%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Grayscale & Sepia */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Grayscale & Sepia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Grayscale</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Convert to grayscale using <code className="text-blue-600 dark:text-blue-400">grayscale</code> utilities.
            </p>
            <CodeBlock
              code={`.grayscale-0   /* No grayscale */
.grayscale    /* Full grayscale (100%) */`}
              language="css"
            />
            <CodeBlock
              code={`<!-- Grayscale on hover -->
<img
  src="photo.jpg"
  class="grayscale hover:grayscale-0 transition-all duration-300"
/>

<!-- Always grayscale -->
<div class="grayscale">
  This content is grayscale
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sepia</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Apply sepia tone using <code className="text-blue-600 dark:text-blue-400">sepia</code> utilities.
            </p>
            <CodeBlock
              code={`.sepia-0   /* No sepia */
.sepia     /* Full sepia (100%) */`}
              language="css"
            />
            <CodeBlock
              code={`<!-- Vintage effect -->
<img
  src="photo.jpg"
  class="sepia hover:sepia-0 transition-all duration-300"
/>

<!-- Combined with brightness -->
<img
  src="photo.jpg"
  class="sepia brightness-110 contrast-125"
/>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Hue Rotate */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Hue Rotate
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Rotate the hue using <code className="text-blue-600 dark:text-blue-400">hue-rotate-*</code> utilities.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Class</th>
                <th className="text-left py-3 px-4 font-semibold">Rotation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hue-rotate-0</td>
                <td className="py-3 px-4 font-mono">0deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hue-rotate-15</td>
                <td className="py-3 px-4 font-mono">15deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hue-rotate-30</td>
                <td className="py-3 px-4 font-mono">30deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hue-rotate-60</td>
                <td className="py-3 px-4 font-mono">60deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hue-rotate-90</td>
                <td className="py-3 px-4 font-mono">90deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">hue-rotate-180</td>
                <td className="py-3 px-4 font-mono">180deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">-hue-rotate-15</td>
                <td className="py-3 px-4 font-mono">-15deg</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">-hue-rotate-90</td>
                <td className="py-3 px-4 font-mono">-90deg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Saturate & Invert */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Saturate & Invert
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Saturate</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Adjust color saturation using <code className="text-blue-600 dark:text-blue-400">saturate-*</code>.
            </p>
            <CodeBlock
              code={`.saturate-0    /* 0% saturation (grayscale) */
.saturate-50   /* 50% saturation */
.saturate-100  /* 100% (default) */
.saturate-150  /* 150% saturation */
.saturate-200  /* 200% saturation */`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Invert</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Invert colors using <code className="text-blue-600 dark:text-blue-400">invert</code> utilities.
            </p>
            <CodeBlock
              code={`.invert-0   /* No inversion */
.invert     /* Full inversion (100%) */`}
              language="css"
            />
          </div>
        </div>
      </section>

      {/* Drop Shadow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Drop Shadow
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Apply drop shadow filter using <code className="text-blue-600 dark:text-blue-400">drop-shadow-*</code> utilities.
          Unlike box-shadow, drop-shadow follows the alpha channel of the element.
        </p>

        <CodeBlock
          code={`.drop-shadow-sm     /* Small drop shadow */
.drop-shadow         /* Default drop shadow */
.drop-shadow-md      /* Medium drop shadow */
.drop-shadow-lg      /* Large drop shadow */
.drop-shadow-xl      /* Extra large drop shadow */
.drop-shadow-2xl     /* 2x extra large */
.drop-shadow-none    /* No shadow */`}
          language="css"
        />

        <CodeBlock
          code={`<!-- Drop shadow vs box-shadow -->
<div class="flex gap-8 items-center">
  <!-- Box shadow (square) -->
  <div class="w-16 h-16 bg-blue-500 rounded-full shadow-xl"></div>

  <!-- Drop shadow (follows shape) -->
  <div class="w-16 h-16 bg-blue-500 rounded-full drop-shadow-xl"></div>
</div>

<!-- Drop shadow on icon -->
<svg class="w-8 h-8 text-blue-500 drop-shadow-lg" fill="currentColor">
  <path d="M12 2L2 22h20L12 2z"/>
</svg>`}
          language="html"
        />
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Common Patterns
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Glass Morphism</h3>
            <CodeBlock
              code={`<div class="relative overflow-hidden rounded-2xl">
  <img src="background.jpg" class="absolute inset-0 w-full h-full object-cover" />
  <div class="relative p-8 backdrop-blur-md bg-white/30 border border-white/20">
    <h2 class="text-3xl font-bold text-white drop-shadow-lg">Glass Card</h2>
    <p class="text-white/90">Content with blur backdrop</p>
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Image Gallery Effects</h3>
            <CodeBlock
              code={`<div class="grid grid-cols-3 gap-4">
  <div class="group relative overflow-hidden rounded-lg">
    <img
      src="photo.jpg"
      class="w-full h-48 object-cover
             grayscale group-hover:grayscale-0
             brightness-75 group-hover:brightness-100
             transition-all duration-500"
    />
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Loading Skeleton</h3>
            <CodeBlock
              code={`<div class="animate-pulse">
  <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
  <div class="h-32 bg-gray-200 rounded"></div>
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
          <Alert type="success" title="Combine filters for complex effects">
            Multiple filters can be combined: <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">blur brightness-50</code>
          </Alert>
          <Alert type="success" title="Use backdrop-filter for glass effects">
            backdrop-blur applies to the area behind the element, creating glass morphism effects.
          </Alert>
          <Alert type="success" title="Consider performance">
            Filters can be expensive. Use will-change for elements that animate, but remove it after.
          </Alert>
          <Alert type="warning" title="Browser support">
            Backdrop-filter has limited support in Firefox without enabling a flag.
            Always provide fallback styles.
          </Alert>
        </div>
      </section>
    </section>
  );
}
