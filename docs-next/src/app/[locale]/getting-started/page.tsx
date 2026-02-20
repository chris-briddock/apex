import { useTranslations } from "next-intl";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";

export const metadata = {
  title: "Getting Started - Apex Documentation",
  description: "Learn how to get started with Apex",
};

export default function GettingStartedPage() {
  const t = useTranslations("pages.gettingStarted");
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

      <Alert type="info" title={t("prerequisites.title")}>
        {t("prerequisites.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("installation.title")}
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t("installation.viaCdn.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("installation.viaCdn.description")}
        </p>
        <CodeBlock
          code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcss@latest/dist/framework.css">`}
          language="html"
        />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("installation.viaNpm.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("installation.viaNpm.description")}
        </p>
        <CodeBlock code="npm install apexcss" language="bash" />

        <p className="text-gray-600 dark:text-gray-400 mb-4 mt-4">
          {t("installation.viaNpm.import")}
        </p>
        <CodeBlock code={`@import 'apexcss/dist/framework.css';`} language="css" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("frameworkIntegration.title")}
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {t("frameworkIntegration.react.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("frameworkIntegration.react.description")}
        </p>
        <CodeBlock code={`// app/globals.css or styles/globals.css
@import 'apexcss/dist/framework.css';`} language="css" />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("frameworkIntegration.vue.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("frameworkIntegration.vue.description")}
        </p>
        <CodeBlock
          code={`import 'apexcss/dist/framework.css';`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-6">
          {t("frameworkIntegration.angular.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("frameworkIntegration.angular.description")}
        </p>
        <CodeBlock
          code={`{
  "styles": [
    "node_modules/apexcss/dist/framework.css",
    "src/styles.css"
  ]
}`}
          language="json"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("firstSteps.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("firstSteps.description")}
        </p>
        <CodeBlock
          code={`<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Hello, Apex!</h1>
  <p class="text-gray-600">Start building with utility classes.</p>
</div>`}
          language="html"
        />

        <div className="mt-6">
          <Alert type="success">
            {t("firstSteps.congratulations")}
          </Alert>
        </div>
      </section>
    </div>
  );
}
