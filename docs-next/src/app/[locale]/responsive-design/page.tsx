import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Responsive Design - Apex Documentation",
  description: "Learn about responsive design with Apex",
};

export default function ResponsiveDesignPage() {
  const t = useTranslations("pages.responsiveDesign");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <Alert type="info" title={t("mobileFirst.title")}>
        {t("mobileFirst.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("breakpoints.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("breakpoints.description")}
        </p>
        <CodeBlock
          code={`sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* Extra extra large devices */`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsiveModifiers.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsiveModifiers.description")}
        </p>
        <CodeBlock
          code={`<!-- Stack on mobile, side-by-side on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("responsiveTypography.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("responsiveTypography.description")}
        </p>
        <CodeBlock
          code={`<h1 class="text-xl md:text-2xl lg:text-4xl">
  Responsive Heading
</h1>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("hideShowElements.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("hideShowElements.description")}
        </p>
        <CodeBlock
          code={`<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">
  ${t("hideShowElements.desktopOnly")}
</div>

<!-- Show on mobile, hide on desktop -->
<div class="md:hidden">
  ${t("hideShowElements.mobileOnly")}
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
