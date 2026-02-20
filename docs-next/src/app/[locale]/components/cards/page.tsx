import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardDemo } from "@/components/CardDemo";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Cards - Apex Documentation",
  description: "Card components for displaying content in Apex",
};

export default function CardsPage() {
  const t = useTranslations("pages.componentPages.cards");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Components", href: "/components" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("title")}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("interactiveDemo.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("interactiveDemo.description")}
        </p>
        <CardDemo />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicUsage.title")}
        </h2>
        <CodeBlock
          code={`<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle</p>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("variants.title")}
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.card            /* ${t("variants.default")} */
.card-outlined  /* ${t("variants.outlined")} */
.card-elevated  /* ${t("variants.elevated")} */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("sizes.title")}
        </h2>
        <CodeBlock
          code={`.card-sm   /* ${t("sizes.sm")} */
.card-md   /* ${t("sizes.md")} */
.card-lg   /* ${t("sizes.lg")} */`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("withImage.title")}
        </h2>
        <CodeBlock
          code={`<div class="card">
  <img class="card-image" src="image.jpg" alt="Card image" />
  <div class="card-body">
    <h3 class="card-title">Card with Image</h3>
    <p>Cards can include images at the top.</p>
  </div>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
