import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Typography - Apex Documentation",
  description: "Typography utilities for Apex CSS framework",
};

export default function TypographyPage() {
  const t = useTranslations("pages.utilityPages.typography");
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

      {/* Font Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("fontSizes.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("fontSizes.description")}
        </p>
        <CodeBlock
          code={`<p class="text-xs">Extra Small text (12px)</p>
<p class="text-sm">Small text (14px)</p>
<p class="text-base">Base text (16px)</p>
<p class="text-lg">Large text (18px)</p>
<p class="text-xl">Extra Large text (20px)</p>
<p class="text-2xl">2XL text (24px)</p>
<p class="text-3xl">3XL text (30px)</p>
<p class="text-4xl">4XL text (36px)</p>
<p class="text-5xl">5XL text (48px)</p>
<p class="text-6xl">6XL text (60px)</p>`}
          language="html"
        />
      </section>

      {/* Font Weights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("fontWeights.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("fontWeights.description")}
        </p>
        <CodeBlock
          code={`<p class="font-thin">Thin (100)</p>
<p class="font-extralight">Extra Light (200)</p>
<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>
<p class="font-extrabold">Extra Bold (800)</p>
<p class="font-black">Black (900)</p>`}
          language="html"
        />
      </section>

      {/* Line Heights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("lineHeights.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("lineHeights.description")}
        </p>
        <CodeBlock
          code={`<p class="leading-none">No leading</p>
<p class="leading-tight">Tight leading</p>
<p class="leading-snug">Snug leading</p>
<p class="leading-normal">Normal leading</p>
<p class="leading-relaxed">Relaxed leading</p>
<p class="leading-loose">Loose leading</p>`}
          language="html"
        />
      </section>

      {/* Text Alignment */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("textAlignments.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("textAlignments.description")}
        </p>
        <CodeBlock
          code={`<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
<p class="text-justify">Justified text</p>`}
          language="html"
        />
      </section>

      {/* Text Decoration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("textDecoration.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("textDecoration.description")}
        </p>
        <CodeBlock
          code={`<p class="underline">Underlined text</p>
<p class="line-through">Line-through text</p>
<p class="no-underline">No underline text</p>`}
          language="html"
        />
      </section>

      {/* Text Transform */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("textTransform.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("textTransform.description")}
        </p>
        <CodeBlock
          code={`<p class="uppercase">Uppercase text</p>
<p class="lowercase">Lowercase text</p>
<p class="capitalize">Capitalized text</p>`}
          language="html"
        />
      </section>

      {/* Letter Spacing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("letterSpacing.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("letterSpacing.description")}
        </p>
        <CodeBlock
          code={`<p class="tracking-tighter">Tighter tracking</p>
<p class="tracking-tight">Tight tracking</p>
<p class="tracking-normal">Normal tracking</p>
<p class="tracking-wide">Wide tracking</p>
<p class="tracking-wider">Wider tracking</p>
<p class="tracking-widest">Widest tracking</p>`}
          language="html"
        />
      </section>

      {/* Text Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("textColors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("textColors.description")}
        </p>
        <CodeBlock
          code={`<p class="text-gray-900">Gray 900 text</p>
<p class="text-gray-600">Gray 600 text</p>
<p class="text-gray-400">Gray 400 text</p>
<p class="text-blue-500">Blue 500 text</p>
<p class="text-red-500">Red 500 text</p>
<p class="text-green-500">Green 500 text</p>`}
          language="html"
        />
      </section>
    </div>
  );
}
