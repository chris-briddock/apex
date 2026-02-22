import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Transitions & Animations - Apex Documentation",
  description: "Transition and animation utilities for controlling element transitions, timing, and animations",
};

export default function TransitionsPage() {
  const t = useTranslations("pages.utilityPages.transitions");
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

      {/* Transition Property */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("transitionProperty.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("transitionProperty.description")}
        </p>
        <CodeBlock
          code={`.transition-none      /* transition-property: none */
.transition           /* transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter */
.transition-all       /* transition-property: all */
.transition-colors    /* transition-property: color, background-color, border-color, text-decoration-color, fill, stroke */
.transition-opacity   /* transition-property: opacity */
.transition-shadow    /* transition-property: box-shadow */
.transition-transform /* transition-property: transform */`}
          language="css"
        />
      </section>

      {/* Transition Duration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("duration.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("duration.description")}
        </p>
        <CodeBlock
          code={`.duration-75    /* 75ms */
.duration-100   /* 100ms */
.duration-150   /* 150ms */
.duration-200   /* 200ms */
.duration-300   /* 300ms */
.duration-500   /* 500ms */
.duration-700   /* 700ms */
.duration-1000  /* 1000ms (1 second) */`}
          language="css"
        />
      </section>

      {/* Transition Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("timing.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("timing.description")}
        </p>
        <CodeBlock
          code={`.ease-linear     /* linear */
.ease             /* ease (default) */
.ease-in          /* ease-in */
.ease-out         /* ease-out */
.ease-in-out      /* ease-in-out */`}
          language="css"
        />
      </section>

      {/* Transition Delay */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("delay.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("delay.description")}
        </p>
        <CodeBlock
          code={`.delay-75    /* 75ms delay */
.delay-100   /* 100ms delay */
.delay-150   /* 150ms delay */
.delay-200   /* 200ms delay */
.delay-300   /* 300ms delay */
.delay-500   /* 500ms delay */
.delay-700   /* 700ms delay */
.delay-1000  /* 1000ms delay */`}
          language="css"
        />
      </section>

      {/* Animations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("animations.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("animations.description")}
        </p>
        <CodeBlock
          code={`.animate-none   /* animation: none */
.animate-spin   /* spin 1s linear infinite - for loading indicators */
.animate-ping   /* ping 1s cubic-bezier(0, 0, 0.2, 1) infinite - for notifications */
.animate-pulse  /* pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite - for emphasis */
.animate-bounce /* bounce 1s infinite - for attention */`}
          language="css"
        />
      </section>

      {/* Animation Descriptions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("animationDetails.title")}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("animationDetails.spin.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t("animationDetails.spin.description")}
            </p>
            <CodeBlock
              code={`<svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
</svg>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("animationDetails.ping.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t("animationDetails.ping.description")}
            </p>
            <CodeBlock
              code={`<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("animationDetails.pulse.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t("animationDetails.pulse.description")}
            </p>
            <CodeBlock
              code={`<div class="animate-pulse bg-gray-200 rounded h-4 w-32"></div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("animationDetails.bounce.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t("animationDetails.bounce.description")}
            </p>
            <CodeBlock
              code={`<div class="animate-bounce">
  ↓ Scroll down
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Responsive Transitions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsive.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsive.description")}
        </p>
        <CodeBlock
          code={`/* Responsive transition properties */
.sm:transition .md:transition-all .lg:transition-colors

/* Responsive durations */
.sm:duration-150 .md:duration-300 .lg:duration-500

/* Responsive timing functions */
.sm:ease-in .md:ease-out .lg:ease-in-out

/* Responsive animations */
.sm:animate-pulse .md:animate-bounce .lg:animate-spin`}
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
              {t("commonPatterns.buttonHover")}
            </h3>
            <CodeBlock
              code={`<button class="bg-blue-500 text-white px-4 py-2 rounded
               transition-colors duration-200 ease-in-out
               hover:bg-blue-600">
  Hover Me
</button>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.fadeIn")}
            </h3>
            <CodeBlock
              code={`<div class="opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
  Fade in on hover
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.scaleTransform")}
            </h3>
            <CodeBlock
              code={`<div class="transform transition-transform duration-300 ease-out hover:scale-105">
  Scale up on hover
</div>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonPatterns.cardHover")}
            </h3>
            <CodeBlock
              code={`<div class="bg-white rounded-lg shadow transition-all duration-300 ease-in-out
            hover:shadow-lg hover:-translate-y-1">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Reduced Motion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("reducedMotion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("reducedMotion.description")}
        </p>
        <CodeBlock
          code={`<div class="animate-pulse motion-reduce:animate-none">
  This will respect user's motion preferences
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
