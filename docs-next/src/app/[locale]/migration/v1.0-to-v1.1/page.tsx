"use client";

import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MigrationV101Page() {
  const t = useTranslations("pages.migrationPages.v1ToV1_1");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Migration", href: "/migration/" },
          { label: "v1.0 to v1.1" },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t("title")}
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("description")}
        </p>
      </div>

      {/* Overview */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900 dark:text-green-400">{t("overview.title")}</h3>
            <p className="text-sm text-green-800 dark:text-green-300 mt-1">
              {t("overview.message")}
            </p>
          </div>
        </div>
      </div>

      {/* What's New */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("whatsNew.title")}</h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t("whatsNew.newSpacingScale.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("whatsNew.newSpacingScale.description")}
            </p>
            <CodeBlock
              code={`<!-- ${t("whatsNew.newSpacingScale.comment")} -->
<div class="p-0.5">...</div>
<div class="p-72">...</div>
<div class="p-80">...</div>
<div class="p-96">...</div>`}
              language="html"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t("whatsNew.improvedFocusVisible.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("whatsNew.improvedFocusVisible.description")}
            </p>
            <CodeBlock
              code={`<!-- ${t("whatsNew.improvedFocusVisible.comment")} -->
<button class="focus-visible:ring-2 focus-visible:ring-blue-500">
  ${t("whatsNew.improvedFocusVisible.buttonText")}
</button>`}
              language="html"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t("whatsNew.ariaHelperUtilities.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("whatsNew.ariaHelperUtilities.description")}
            </p>
            <CodeBlock
              code={`<!-- ${t("whatsNew.ariaHelperUtilities.srOnlyComment")} -->
<span class="sr-only">${t("whatsNew.ariaHelperUtilities.srOnlyText")}</span>

<!-- ${t("whatsNew.ariaHelperUtilities.ariaHiddenComment")} -->
<span aria-hidden="true">→</span>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Upgrade Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("upgradeSteps.title")}</h2>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("upgradeSteps.step1.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{t("upgradeSteps.step1.description")}</p>
              <CodeBlock
                code={`# ${t("upgradeSteps.step1.npm")}
npm install apexcss@^1.1.0

# ${t("upgradeSteps.step1.yarn")}
yarn upgrade apexcss@^1.1.0

# ${t("upgradeSteps.step1.pnpm")}
pnpm update apexcss@^1.1.0`}
                language="bash"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("upgradeSteps.step2.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t("upgradeSteps.step2.description")}</p>
              <CodeBlock code={`npm run build`} language="bash" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t("upgradeSteps.step3.title")}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("upgradeSteps.step3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Known Issues */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("knownIssues.title")}</h2>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-400 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {t("knownIssues.cssPurging.title")}
          </h3>
          <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-3">
            {t("knownIssues.cssPurging.description")}
          </p>
          <CodeBlock
            code={`// ${t("knownIssues.cssPurging.configFile")}
module.exports = {
  safelist: [
    // ${t("knownIssues.cssPurging.comment")}
    /^(p|m)-(0\.5|72|80|96)$/,
    /^focus-visible:/,
    /^sr-only$/,
  ],
};`}
            language="javascript"
          />
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("nextSteps.title")}</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t("nextSteps.viewChangelog")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {t("nextSteps.backToDocs")}
          </Link>
        </div>
      </section>
    </div>
  );
}
