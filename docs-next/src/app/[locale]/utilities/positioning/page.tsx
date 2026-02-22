import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Positioning - Apex Documentation",
  description: "Positioning utilities for controlling element position, z-index, and inset values",
};

export default function PositioningPage() {
  const t = useTranslations("pages.utilityPages.positioning");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      {/* Position Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("positionTypes.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("positionTypes.description")}
        </p>
        <CodeBlock
          code={`.static     /* position: static (default) */
.relative   /* position: relative */
.absolute   /* position: absolute */
.fixed      /* position: fixed */
.sticky     /* position: sticky */`}
          language="css"
        />
      </section>

      {/* Inset */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("inset.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("inset.description")}
        </p>
        <CodeBlock
          code={`.inset-0       /* inset: 0 (all sides) */
.inset-auto    /* inset: auto */
.inset-x-0     /* left: 0; right: 0 */
.inset-y-0     /* top: 0; bottom: 0 */
.inset-x-auto  /* left: auto; right: auto */
.inset-y-auto  /* top: auto; bottom: auto */`}
          language="css"
        />
      </section>

      {/* Top */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("top.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("top.description")}
        </p>
        <CodeBlock
          code={`.top-0       /* top: 0 */
.top-auto    /* top: auto */
.top-1       /* top: 0.25rem (4px) */
.top-2       /* top: 0.5rem (8px) */
.top-3       /* top: 0.75rem (12px) */
.top-4       /* top: 1rem (16px) */
.top-5       /* top: 1.25rem (20px) */
.top-6       /* top: 1.5rem (24px) */
.top-8       /* top: 2rem (32px) */
.top-10      /* top: 2.5rem (40px) */
.top-12      /* top: 3rem (48px) */
.top-16      /* top: 4rem (64px) */
.top-20      /* top: 5rem (80px) */
.top-24      /* top: 6rem (96px) */
.top-1/2     /* top: 50% */
.top-full    /* top: 100% */`}
          language="css"
        />
      </section>

      {/* Right */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("right.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("right.description")}
        </p>
        <CodeBlock
          code={`.right-0       /* right: 0 */
.right-auto    /* right: auto */
.right-1       /* right: 0.25rem (4px) */
.right-2       /* right: 0.5rem (8px) */
.right-3       /* right: 0.75rem (12px) */
.right-4       /* right: 1rem (16px) */
.right-5       /* right: 1.25rem (20px) */
.right-6       /* right: 1.5rem (24px) */
.right-8       /* right: 2rem (32px) */
.right-10      /* right: 2.5rem (40px) */
.right-12      /* right: 3rem (48px) */
.right-16      /* right: 4rem (64px) */
.right-20      /* right: 5rem (80px) */
.right-24      /* right: 6rem (96px) */
.right-1/2     /* right: 50% */
.right-full    /* right: 100% */`}
          language="css"
        />
      </section>

      {/* Bottom */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("bottom.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("bottom.description")}
        </p>
        <CodeBlock
          code={`.bottom-0       /* bottom: 0 */
.bottom-auto    /* bottom: auto */
.bottom-1       /* bottom: 0.25rem (4px) */
.bottom-2       /* bottom: 0.5rem (8px) */
.bottom-3       /* bottom: 0.75rem (12px) */
.bottom-4       /* bottom: 1rem (16px) */
.bottom-5       /* bottom: 1.25rem (20px) */
.bottom-6       /* bottom: 1.5rem (24px) */
.bottom-8       /* bottom: 2rem (32px) */
.bottom-10      /* bottom: 2.5rem (40px) */
.bottom-12      /* bottom: 3rem (48px) */
.bottom-16      /* bottom: 4rem (64px) */
.bottom-20      /* bottom: 5rem (80px) */
.bottom-24      /* bottom: 6rem (96px) */
.bottom-1/2     /* bottom: 50% */
.bottom-full    /* bottom: 100% */`}
          language="css"
        />
      </section>

      {/* Left */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("left.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("left.description")}
        </p>
        <CodeBlock
          code={`.left-0       /* left: 0 */
.left-auto    /* left: auto */
.left-1       /* left: 0.25rem (4px) */
.left-2       /* left: 0.5rem (8px) */
.left-3       /* left: 0.75rem (12px) */
.left-4       /* left: 1rem (16px) */
.left-5       /* left: 1.25rem (20px) */
.left-6       /* left: 1.5rem (24px) */
.left-8       /* left: 2rem (32px) */
.left-10      /* left: 2.5rem (40px) */
.left-12      /* left: 3rem (48px) */
.left-16      /* left: 4rem (64px) */
.left-20      /* left: 5rem (80px) */
.left-24      /* left: 6rem (96px) */
.left-1/2     /* left: 50% */
.left-full    /* left: 100% */`}
          language="css"
        />
      </section>

      {/* Z-Index */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("zIndex.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("zIndex.description")}
        </p>
        <CodeBlock
          code={`.z-negative   /* z-index: -1 */
.z-0          /* z-index: 0 */
.z-10         /* z-index: 10 */
.z-20         /* z-index: 20 */
.z-30         /* z-index: 30 */
.z-40         /* z-index: 40 */
.z-50         /* z-index: 50 */
.z-auto       /* z-index: auto */`}
          language="css"
        />
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("commonPatterns.title")}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.centeredOverlay")}
            </h3>
            <CodeBlock
              code={`<div class="relative">
  <img src="photo.jpg" alt="Photo">
  <div class="absolute inset-0 flex items-center justify-center bg-black/50">
    <span class="text-white">Overlay Content</span>
  </div>
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.fixedHeader")}
            </h3>
            <CodeBlock
              code={`<header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
  <nav>Navigation content</nav>
</header>
<main class="pt-16"> {/* Add padding for fixed header */}
  Page content
</main>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.stickySidebar")}
            </h3>
            <CodeBlock
              code={`<aside class="sticky top-4">
  Sidebar content stays visible while scrolling
</aside>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.positionedBadge")}
            </h3>
            <CodeBlock
              code={`<div class="relative inline-block">
  <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
    3
  </span>
  <svg><!-- Icon --></svg>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
