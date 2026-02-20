import { Breadcrumb } from "@/components/Breadcrumb";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "FAQ - Apex Documentation",
  description: "Frequently asked questions about Apex",
};

export default function FAQPage() {
  const t = useTranslations("pages.faq");
  const faqs = [
    {
      question: t("questions.whatIs.question"),
      answer: t("questions.whatIs.answer"),
    },
    {
      question: t("questions.productionReady.question"),
      answer: t("questions.productionReady.answer"),
    },
    {
      question: t("questions.newSyntax.question"),
      answer: t("questions.newSyntax.answer"),
    },
    {
      question: t("questions.customize.question"),
      answer: t("questions.customize.answer"),
    },
    {
      question: t("questions.darkMode.question"),
      answer: t("questions.darkMode.answer"),
    },
    {
      question: t("questions.rtl.question"),
      answer: t("questions.rtl.answer"),
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

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
