import { Breadcrumb } from "@/components/Breadcrumb";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Troubleshooting - Apex Documentation",
  description: "Common issues and solutions for Apex",
};

export default function TroubleshootingPage() {
  const t = useTranslations("pages.troubleshooting");
  const issues = [
    {
      title: t("issues.stylesNotApplying.title"),
      solution: t("issues.stylesNotApplying.solution"),
    },
    {
      title: t("issues.darkModeNotWorking.title"),
      solution: t("issues.darkModeNotWorking.solution"),
    },
    {
      title: t("issues.customColorsNotAppearing.title"),
      solution: t("issues.customColorsNotAppearing.solution"),
    },
    {
      title: t("issues.rtlLayoutIssues.title"),
      solution: t("issues.rtlLayoutIssues.solution"),
    },
    {
      title: t("issues.buildErrors.title"),
      solution: t("issues.buildErrors.solution"),
    },
  ];

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

      <Alert type="info" title={t("needMoreHelp.title")}>
        {t("needMoreHelp.content")}
      </Alert>

      <div className="space-y-6 mt-8">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {issue.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{issue.solution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
