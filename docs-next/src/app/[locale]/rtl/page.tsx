"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { CheckCircle, AlertCircle, Globe } from "lucide-react";

export default function RTLPage() {
  const t = useTranslations("pages.rtl");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("howItWorks.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("howItWorks.content")}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              {t("automaticFlipping.title")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• {t("automaticFlipping.marginLeft")}</li>
              <li>• {t("automaticFlipping.paddingLeft")}</li>
              <li>• {t("automaticFlipping.left")}</li>
              <li>• {t("automaticFlipping.borderLeft")}</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              {t("logicalProperties.title")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• {t("logicalProperties.start")}</li>
              <li>• {t("logicalProperties.end")}</li>
              <li>• {t("logicalProperties.insetInlineStart")}</li>
              <li>• {t("logicalProperties.textAlignStart")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RTL Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("examples.title")}
        </h2>

        {/* Layout Example */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">{t("examples.layout.title")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t("examples.layout.description")}</p>
          </div>
          <div className="p-8 flex items-center justify-center bg-white dark:bg-gray-900">
            <div dir="rtl" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg w-full max-w-lg">
              <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{t("examples.layout.content")}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{t("examples.layout.flowsRightToLeft")}</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                {t("examples.layout.button")}
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <CodeBlock
              code={`<div dir="rtl" class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
  <div class="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
    A
  </div>
  <div class="flex-1">
    <h3 class="font-semibold text-gray-900">${t("examples.layout.content")}</h3>
    <p class="text-gray-600 text-sm">${t("examples.layout.flowsRightToLeft")}</p>
  </div>
  <button class="px-4 py-2 bg-blue-500 text-white rounded">
    ${t("examples.layout.button")}
  </button>
</div>`}
              language="html"
            />
          </div>
        </div>

        {/* Spacing Example */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">{t("examples.spacing.title")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t("examples.spacing.description")}</p>
          </div>
          <div className="p-8 flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="space-y-4 w-full max-w-lg" dir="rtl">
              <div className="ml-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                <span className="text-sm text-blue-800 dark:text-blue-300">{t("examples.spacing.ml4Becomes")}</span>
              </div>
              <div className="mr-4 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                <span className="text-sm text-green-800 dark:text-green-300">{t("examples.spacing.mr4Becomes")}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <CodeBlock
              code={`<!-- ${t("examples.spacing.ltrMargin")} -->
<!-- ${t("examples.spacing.rtlMargin")} -->
<div dir="rtl">
  <div class="ml-4">${t("examples.spacing.marginStart")}</div>
  <div class="mr-4">${t("examples.spacing.marginEnd")}</div>
</div>

<!-- Physical properties stay fixed -->
<div class="border-l-4 border-blue-500 pl-4">
  ${t("examples.spacing.physicalLeft")}
</div>`}
              language="html"
            />
          </div>
        </div>

        {/* Flexbox Example */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">{t("examples.flexbox.title")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t("examples.flexbox.description")}</p>
          </div>
          <div className="p-8 flex items-center justify-center bg-white dark:bg-gray-900">
            <div dir="rtl" className="flex justify-between items-center gap-4 w-full max-w-lg">
              <div className="bg-blue-500 text-white px-4 py-2 rounded">
                {t("examples.flexbox.start")}
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded">
                {t("examples.flexbox.center")}
              </div>
              <div className="bg-purple-500 text-white px-4 py-2 rounded">
                {t("examples.flexbox.end")}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <CodeBlock
              code={`<div dir="rtl" class="flex justify-between items-center gap-4">
  <div class="bg-blue-500 text-white px-4 py-2 rounded">
    ${t("examples.flexbox.visualRight")}
  </div>
  <div class="bg-green-500 text-white px-4 py-2 rounded">
    ${t("examples.flexbox.center")}
  </div>
  <div class="bg-purple-500 text-white px-4 py-2 rounded">
    ${t("examples.flexbox.visualLeft")}
  </div>
</div>`}
              language="html"
            />
          </div>
        </div>

        {/* Text Alignment */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">{t("examples.textAlignment.title")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t("examples.textAlignment.description")}</p>
          </div>
          <div className="p-8 flex items-center justify-center bg-white dark:bg-gray-900">
            <div dir="rtl" className="space-y-2 w-full max-w-lg">
              <p className="text-left p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm">{t("examples.textAlignment.textLeft")}</p>
              <p className="text-right p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm">{t("examples.textAlignment.textRight")}</p>
              <p className="text-start p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">{t("examples.textAlignment.textStart")}</p>
              <p className="text-end p-2 bg-green-100 dark:bg-green-900/30 rounded text-sm">{t("examples.textAlignment.textEnd")}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            <CodeBlock
              code={`<div dir="rtl">
  <p class="text-left">${t("examples.textAlignment.textLeftBecomes")}</p>
  <p class="text-right">${t("examples.textAlignment.textRightBecomes")}</p>
  <p class="text-start">${t("examples.textAlignment.textStartLogical")}</p>
  <p class="text-end">${t("examples.textAlignment.textEndLogical")}</p>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("implementation.title")}
        </h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            {t("implementation.setHtmlDirection.title")}
          </h3>
          <CodeBlock
            code={`<!-- ${t("implementation.setHtmlDirection.inHtmlHead")} -->
<html lang="ar" dir="rtl">

<!-- ${t("implementation.setHtmlDirection.orSetDynamically")} -->
<script>
  document.documentElement.dir = 'rtl';
  document.documentElement.lang = 'ar';
</script>`}
            language="html"
          />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            {t("implementation.reactNextjs.title")}
          </h3>
          <CodeBlock
            code={`// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar', 'he'],
  defaultLocale: 'en'
});

// ${t("implementation.reactNextjs.automaticallyHandles")}
// ${t("implementation.reactNextjs.dirAttributeSet")}`}
            language="typescript"
          />
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-400 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {t("implementation.importantConsiderations.title")}
          </h3>
          <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
            <li>• {t("implementation.importantConsiderations.useLogical")}</li>
            <li>• {t("implementation.importantConsiderations.iconsImages")}</li>
            <li>• {t("implementation.importantConsiderations.testWithActual")}</li>
            <li>• {t("implementation.importantConsiderations.considerBidirectional")}</li>
          </ul>
        </div>
      </section>

      {/* Supported Languages */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("supportedLanguages.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { code: "ar", name: t("supportedLanguages.arabic"), flag: "🇸🇦" },
            { code: "he", name: t("supportedLanguages.hebrew"), flag: "🇮🇱" },
            { code: "fa", name: t("supportedLanguages.persian"), flag: "🇮🇷" },
            { code: "ur", name: t("supportedLanguages.urdu"), flag: "🇵🇰" },
          ].map((lang) => (
            <div
              key={lang.code}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <span className="text-3xl mb-2 block">{lang.flag}</span>
              <p className="font-medium text-gray-900 dark:text-white">{lang.name}</p>
              <p className="text-sm text-gray-500">{lang.code}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
