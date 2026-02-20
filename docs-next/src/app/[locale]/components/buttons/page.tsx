import { Breadcrumb } from "@/components/Breadcrumb";
import { ButtonDemo } from "@/components/ButtonDemo";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Buttons - Apex Documentation",
  description: "Button component documentation with interactive demo",
};

export default function ButtonsPage() {
  const t = useTranslations("pages.componentPages.buttons");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Components", href: "/components" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      {/* Interactive Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("interactiveDemo.title")}
        </h2>
        <ButtonDemo />
      </section>

      {/* Basic Button */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicButton.title")}
        </h2>
        <CodeBlock
          code={`<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Button
</button>`}
          language="html"
        />
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("variants.title")}
        </h2>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t("variants.solid")}</h3>
        <CodeBlock
          code={`<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Primary
</button>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">{t("variants.outline")}</h3>
        <CodeBlock
          code={`<button class="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
  ${t("variants.outline")}
</button>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">{t("variants.ghost")}</h3>
        <CodeBlock
          code={`<button class="px-4 py-2 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
  ${t("variants.ghost")}
</button>`}
          language="html"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">{t("variants.soft")}</h3>
        <CodeBlock
          code={`<button class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
  ${t("variants.soft")}
</button>`}
          language="html"
        />
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("sizes.title")}
        </h2>
        <CodeBlock
          code={`<!-- ${t("sizes.extraSmall")} -->
<button class="px-2.5 py-1.5 text-xs bg-blue-500 text-white rounded-lg">
  ${t("sizes.extraSmall")}
</button>

<!-- ${t("sizes.small")} -->
<button class="px-3 py-2 text-sm bg-blue-500 text-white rounded-lg">
  ${t("sizes.small")}
</button>

<!-- ${t("sizes.medium")} -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
  ${t("sizes.medium")}
</button>

<!-- ${t("sizes.large")} -->
<button class="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg">
  ${t("sizes.large")}
</button>

<!-- ${t("sizes.extraLarge")} -->
<button class="px-8 py-4 text-xl bg-blue-500 text-white rounded-lg">
  ${t("sizes.extraLarge")}
</button>`}
          language="html"
        />
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("states.title")}
        </h2>
        <CodeBlock
          code={`<!-- ${t("states.disabled")} -->
<button disabled class="px-4 py-2 bg-blue-500 text-white rounded-lg opacity-50 cursor-not-allowed">
  ${t("states.disabled")}
</button>

<!-- ${t("states.loading")} -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg opacity-70 cursor-wait">
  <span class="animate-spin inline-block mr-2">⟳</span>
  ${t("states.loading")}
</button>

<!-- ${t("states.fullWidth")} -->
<button class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
  ${t("states.fullWidth")}
</button>`}
          language="html"
        />
      </section>
    </div>
  );
}
