import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";
import { Github, MessageCircle, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Community - Apex Documentation",
  description: "Join the Apex community",
};

export default function CommunityPage() {
  const t = useTranslations("pages.community");
  const links = [
    {
      title: t("links.github.title"),
      href: "https://github.com/apexcss/apexcss",
      description: t("links.github.description"),
      icon: <Github className="w-6 h-6" />,
    },
    {
      title: t("links.discord.title"),
      href: "https://discord.gg/apexcss",
      description: t("links.discord.description"),
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      title: t("links.twitter.title"),
      href: "https://twitter.com/apexcss",
      description: t("links.twitter.description"),
      icon: <Twitter className="w-6 h-6" />,
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
          >
            <div className="text-blue-500 mb-3">{link.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {link.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {link.description}
            </p>
          </a>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("showcase.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("showcase.description")}
        </p>
        <Link
          href="/contributing"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {t("showcase.submitProject")}
        </Link>
      </section>
    </div>
  );
}
