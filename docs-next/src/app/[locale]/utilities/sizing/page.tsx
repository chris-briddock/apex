import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Sizing - Apex Documentation",
  description: "Sizing utilities for Apex CSS framework",
};

export default function SizingPage() {
  const t = useTranslations("pages.utilityPages.sizing");
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

      {/* Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("width.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("width.description")}
        </p>
        <CodeBlock
          code={`<div class="w-full">Full width (100%)</div>
<div class="w-1/2">Half width (50%)</div>
<div class="w-1/3">One-third width (33.333%)</div>
<div class="w-2/3">Two-thirds width (66.666%)</div>
<div class="w-1/4">One-quarter width (25%)</div>
<div class="w-3/4">Three-quarters width (75%)</div>
<div class="w-auto">Auto width</div>`}
          language="html"
        />
      </section>

      {/* Fixed Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("fixedWidth.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("fixedWidth.description")}
        </p>
        <CodeBlock
          code={`<div class="w-0">0px</div>
<div class="w-px">1px</div>
<div class="w-0.5">2px</div>
<div class="w-1">4px</div>
<div class="w-2">8px</div>
<div class="w-4">16px</div>
<div class="w-8">32px</div>
<div class="w-12">48px</div>
<div class="w-16">64px</div>
<div class="w-24">96px</div>
<div class="w-32">128px</div>
<div class="w-48">192px</div>
<div class="w-64">256px</div>
<div class="w-96">384px</div>`}
          language="html"
        />
      </section>

      {/* Max Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("maxWidth.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("maxWidth.description")}
        </p>
        <CodeBlock
          code={`<div class="max-w-xs">Max width 20rem (320px)</div>
<div class="max-w-sm">Max width 24rem (384px)</div>
<div class="max-w-md">Max width 28rem (448px)</div>
<div class="max-w-lg">Max width 32rem (512px)</div>
<div class="max-w-xl">Max width 36rem (576px)</div>
<div class="max-w-2xl">Max width 42rem (672px)</div>
<div class="max-w-3xl">Max width 48rem (768px)</div>
<div class="max-w-4xl">Max width 56rem (896px)</div>
<div class="max-w-5xl">Max width 64rem (1024px)</div>
<div class="max-w-6xl">Max width 72rem (1152px)</div>
<div class="max-w-7xl">Max width 80rem (1280px)</div>
<div class="max-w-full">Max width 100%</div>
<div class="max-w-none">No max width</div>`}
          language="html"
        />
      </section>

      {/* Height */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("height.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("height.description")}
        </p>
        <CodeBlock
          code={`<div class="h-full">Full height (100%)</div>
<div class="h-screen">Full viewport height</div>
<div class="h-auto">Auto height</div>`}
          language="html"
        />
      </section>

      {/* Fixed Height */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("fixedHeight.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("fixedHeight.description")}
        </p>
        <CodeBlock
          code={`<div class="h-0">0px</div>
<div class="h-px">1px</div>
<div class="h-0.5">2px</div>
<div class="h-1">4px</div>
<div class="h-2">8px</div>
<div class="h-4">16px</div>
<div class="h-8">32px</div>
<div class="h-12">48px</div>
<div class="h-16">64px</div>
<div class="h-24">96px</div>
<div class="h-32">128px</div>
<div class="h-48">192px</div>
<div class="h-64">256px</div>
<div class="h-96">384px</div>`}
          language="html"
        />
      </section>

      {/* Max Height */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("maxHeight.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("maxHeight.description")}
        </p>
        <CodeBlock
          code={`<div class="max-h-full">Max height 100%</div>
<div class="max-h-screen">Max viewport height</div>
<div class="max-h-0">Max height 0px</div>
<div class="max-h-px">Max height 1px</div>
<div class="max-h-8">Max height 32px</div>
<div class="max-h-16">Max height 64px</div>
<div class="max-h-32">Max height 128px</div>
<div class="max-h-48">Max height 192px</div>
<div class="max-h-64">Max height 256px</div>
<div class="max-h-96">Max height 384px</div>`}
          language="html"
        />
      </section>

      {/* Aspect Ratio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("aspectRatio.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("aspectRatio.description")}
        </p>
        <CodeBlock
          code={`<div class="aspect-square">Square (1:1)</div>
<div class="aspect-video">Video (16:9)</div>
<div class="aspect-[4/3]">Custom (4:3)</div>
<div class="aspect-[21/9]">Custom (21:9)</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
