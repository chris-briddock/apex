import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Backgrounds - Apex Documentation",
  description: "Background utilities for controlling background images, gradients, and effects in Apex CSS Framework",
};

export default function BackgroundsPage() {
  const t = useTranslations("pages.utilityPages.backgrounds");

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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("backgroundAttachment.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("backgroundAttachment.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-fixed</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundAttachment.fixed")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-local</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundAttachment.local")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-scroll</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundAttachment.scroll")}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("backgroundClip.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("backgroundClip.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-clip-border</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundClip.border")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-clip-padding</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundClip.padding")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-clip-content</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundClip.content")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-clip-text</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundClip.text")}</p>
          </div>
        </div>
        <CodeBlock
          code={`<div class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  Gradient text
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("backgroundPosition.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("backgroundPosition.description")}
        </p>
        <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-top</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-top-right</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-right</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-bottom-right</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-bottom</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-bottom-left</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-left</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-top-left</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-center">.bg-center</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("backgroundRepeat.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("backgroundRepeat.description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-repeat</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundRepeat.repeat")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-no-repeat</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundRepeat.noRepeat")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-repeat-x</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundRepeat.repeatX")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-repeat-y</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundRepeat.repeatY")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-repeat-round</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundRepeat.round")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-repeat-space</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundRepeat.space")}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("backgroundSize.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("backgroundSize.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-auto</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundSize.auto")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-cover</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundSize.cover")}</p>
          </div>
          <div className="p-4 border rounded">
            <code className="text-pink-600 dark:text-pink-400">.bg-contain</code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t("backgroundSize.contain")}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("gradients.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("gradients.description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="p-4 bg-gradient-to-t from-primary to-secondary rounded h-20" />
          <div className="p-4 bg-gradient-to-tr from-success to-warning rounded h-20" />
          <div className="p-4 bg-gradient-to-r from-danger to-info rounded h-20" />
          <div className="p-4 bg-gradient-to-br from-primary to-dark rounded h-20" />
        </div>
        <CodeBlock
          code={`<div class="h-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
<div class="h-32 bg-gradient-to-br from-success via-warning to-danger"></div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("gradientDirections.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("gradientDirections.description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-t</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-tr</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-r</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-br</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-b</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-bl</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-l</div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center font-mono">.bg-gradient-to-tl</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("gradientColors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("gradientColors.description")}
        </p>
        <CodeBlock
          code={`<div class="bg-gradient-to-r from-primary via-white to-secondary">
  <!-- from-* sets the start color -->
  <!-- via-* sets the middle color (optional) -->
  <!-- to-* sets the end color -->
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
