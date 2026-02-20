import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Contributing - Apex Documentation",
  description: "Contribute to Apex",
};

export default function ContributingPage() {
  const t = useTranslations("pages.contributing");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <Alert type="info" title={t("codeOfConduct.title")}>
        {t("codeOfConduct.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("gettingStarted.title")}
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("gettingStarted.steps.fork")}</li>
          <li>{t("gettingStarted.steps.clone")}</li>
          <li>{t("gettingStarted.steps.install")}</li>
          <li>{t("gettingStarted.steps.branch")}</li>
          <li>{t("gettingStarted.steps.makeChanges")}</li>
          <li>{t("gettingStarted.steps.submit")}</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("developmentSetup.title")}
        </h2>
        <CodeBlock
          code={`# Clone the repository
git clone https://github.com/apexcss/apexcss.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test`}
          language="bash"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("pullRequestGuidelines.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("pullRequestGuidelines.steps.style")}</li>
          <li>{t("pullRequestGuidelines.steps.commits")}</li>
          <li>{t("pullRequestGuidelines.steps.tests")}</li>
          <li>{t("pullRequestGuidelines.steps.docs")}</li>
          <li>{t("pullRequestGuidelines.steps.issues")}</li>
        </ul>
      </section>
    </div>
  );
}
