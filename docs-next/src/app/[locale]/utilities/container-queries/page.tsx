import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";

export const metadata: Metadata = {
  title: "Container Queries - Apex Documentation",
  description: "Learn how to use CSS container queries for component-level responsive design",
};

export default function ContainerQueriesPage() {
  return (
    <section className="max-w-75 m-auto">
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Container Queries" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Container Queries
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Component-level responsive design using CSS container queries instead of viewport media queries.
      </p>

      <Alert type="info" title="Container vs Media Queries">
        Container queries respond to the size of a container element, not the viewport.
        This enables truly reusable, responsive components that adapt to their context.
      </Alert>

      {/* Basic Concepts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Basic Concepts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Container queries require two things: a container definition and query-based styles.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Step 1: Define a Container</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Use container-type utilities to make an element a query container.
            </p>
            <CodeBlock
              code={`<!-- Inline-size container (width-based queries) -->
<div class="container-type-size">
  <!-- Container query styles apply here based on this div's width -->
</div>

<!-- Size container (width and height queries) -->
<div class="container-type-size">
  <!-- Can query both dimensions -->
</div>

<!-- Normal (remove container) -->
<div class="container-type-normal">
  <!-- No longer a container -->
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Step 2: Apply Container Query Styles</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Use the <code className="text-blue-600 dark:text-blue-400">@</code> prefix for container query utilities.
            </p>
            <CodeBlock
              code={`<!-- Apply styles when container is 400px or wider -->
<div class="grid @md:grid-cols-2 @lg:grid-cols-3 gap-4">
  <!-- 1 col by default, 2 cols at @md, 3 cols at @lg -->
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Container Breakpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Container Breakpoints
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Apex provides the same breakpoints for container queries as responsive utilities.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Prefix</th>
                <th className="text-left py-3 px-4 font-semibold">Min Width</th>
                <th className="text-left py-3 px-4 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">@sm:</td>
                <td className="py-3 px-4 font-mono">640px</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">@sm:flex</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">@md:</td>
                <td className="py-3 px-4 font-mono">768px</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">@md:grid-cols-2</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">@lg:</td>
                <td className="py-3 px-4 font-mono">1024px</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">@lg:grid-cols-3</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">@xl:</td>
                <td className="py-3 px-4 font-mono">1280px</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">@xl:grid-cols-4</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">@2xl:</td>
                <td className="py-3 px-4 font-mono">1536px</td>
                <td className="py-3 px-4 font-mono text-gray-500 dark:text-gray-500">@2xl:grid-cols-5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Practical Examples
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Responsive Card Component</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              A card that adapts its layout based on the container size, not the viewport.
            </p>
            <CodeBlock
              code={`<!-- Card container -->
<div class="container-type-size">
  <div class="card flex flex-col @md:flex-row gap-4 p-4 border rounded-lg">
    <img
      src="avatar.jpg"
      class="w-full @md:w-32 h-48 @md:h-32 object-cover rounded"
    />
    <div class="flex-1">
      <h3 class="text-lg @md:text-xl font-bold">Card Title</h3>
      <p class="text-gray-600 @md:block hidden">Description text...</p>
    </div>
  </div>
</div>

<!-- Same card, different container sizes produce different layouts -->
<div class="w-full md:w-1/2">
  <div class="container-type-size">
    <!-- Card stacks vertically here -->
  </div>
</div>

<div class="w-full">
  <div class="container-type-size">
    <!-- Card becomes horizontal here -->
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sidebar Layout</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              A sidebar that collapses based on available space.
            </p>
            <CodeBlock
              code={`<!-- Main layout container -->
<div class="container-type-size flex gap-6">
  <!-- Sidebar: full width on small containers, fixed width on large -->
  <aside class="w-full @lg:w-64 flex-shrink-0">
    <nav class="flex flex-row @lg:flex-col gap-2">
      <a href="#" class="@lg:block inline-block">Home</a>
      <a href="#" class="@lg:block inline-block">About</a>
      <a href="#" class="@lg:block inline-block">Contact</a>
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1">
    <p>Content goes here...</p>
  </main>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Product Grid</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Grid columns that adapt to the container, not the viewport.
            </p>
            <CodeBlock
              code={`<!-- Product grid in a modal (narrow) -->
<div class="container-type-size">
  <div class="grid grid-cols-1 @sm:grid-cols-2 @md:grid-cols-3 gap-4">
    <!-- Products -->
  </div>
</div>

<!-- Same grid in a full-width section -->
<div class="container-type-size">
  <div class="grid grid-cols-1 @sm:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5 gap-4">
    <!-- Products -->
  </div>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Combining with Responsive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Combining with Responsive Prefixes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Container queries and media queries can work together. Order: responsive → container.
        </p>
        <CodeBlock
          code={`<!-- Only apply container query at md breakpoint and above -->
<div class="container-type-size">
  <div class="grid grid-cols-1 md:@lg:grid-cols-3">
    <!--
      - Default: 1 column
      - At md breakpoint AND container is lg size: 3 columns
    -->
  </div>
</div>

<!-- Dark mode with container queries -->
<div class="container-type-size">
  <div class="bg-white dark:bg-gray-800 @md:dark:bg-gray-700">
    <!-- Dark mode background changes at @md container size -->
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Browser Support */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Browser Support
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Container queries are supported in all modern browsers.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left py-3 px-4 font-semibold">Browser</th>
                <th className="text-left py-3 px-4 font-semibold">Version</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Chrome</td>
                <td className="py-3 px-4 font-mono">105+</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Firefox</td>
                <td className="py-3 px-4 font-mono">110+</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Safari</td>
                <td className="py-3 px-4 font-mono">16+</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Edge</td>
                <td className="py-3 px-4 font-mono">105+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert type="info" title="Progressive Enhancement" className="mt-4">
          Container queries degrade gracefully. Without support, elements simply show their
          default styles. Always design your base styles to work without container queries.
        </Alert>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Best Practices
        </h2>

        <div className="space-y-4">
          <Alert type="success" title="Use container-type-size for most cases">
            The size container type enables the most flexible queries. Only use size when
            you need to query both width and height.
          </Alert>
          <Alert type="success" title="Define containers at layout boundaries">
            Set container-type on layout regions (sidebar, main, cards) where components
            need to respond to available space.
          </Alert>
          <Alert type="success" title="Test in different contexts">
            Since components respond to their container, test them in narrow and wide
            contexts to ensure they adapt correctly.
          </Alert>
        </div>
      </section>
    </section>
  );
}
