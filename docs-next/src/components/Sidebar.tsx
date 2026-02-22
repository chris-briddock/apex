"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, X, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navigation, NavSection } from "@/lib/navigation";
import { VersionSwitcher } from "./VersionSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Subscribe function for useSyncExternalStore
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Sidebar() {
  const t = useTranslations();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Close sidebar when pathname changes
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Map navigation section titles to translation keys
  const getSectionTitle = (section: NavSection) => {
    const translationMap: Record<string, string> = {
      "Getting Started": t("sidebar.gettingStarted"),
      "Design System": t("sidebar.designSystem"),
      "Core Concepts": t("sidebar.coreConcepts"),
      "Reference": t("sidebar.reference"),
      "Migration": t("sidebar.migration"),
      "Advanced": t("sidebar.advanced"),
      "Help": t("sidebar.help"),
      "Community": t("sidebar.community"),
      "Tools": t("sidebar.tools"),
    };
    return translationMap[section.title] || section.title;
  };

  // Map navigation item titles to translation keys
  const getItemTitle = (title: string) => {
    const translationMap: Record<string, string> = {
      "Introduction": t("sidebar.introduction"),
      "Getting Started": t("sidebar.gettingStarted"),
      "Base Styles": t("sidebar.baseStyles"),
      "Utilities": t("sidebar.utilities"),
      "Components": t("sidebar.components"),
      "Responsive Design": t("sidebar.responsiveDesign"),
      "Dark Mode": t("sidebar.darkMode"),
      "Design System": t("sidebar.designSystem"),
      "Customization": t("sidebar.customization"),
      "API Reference": t("sidebar.apiReference"),
      "Browser Support": t("sidebar.browserSupport"),
      "Migration Guides": t("sidebar.migrationGuides"),
      "From Tailwind": t("sidebar.fromTailwind"),
      "From Bootstrap": t("sidebar.fromBootstrap"),
      "From Bulma": t("sidebar.fromBulma"),
      "Plugin Development": t("sidebar.pluginDevelopment"),
      "Performance": t("sidebar.performance"),
      "Accessibility": t("sidebar.accessibility"),
      "RTL Support": t("sidebar.rtlSupport"),
      "Troubleshooting": t("sidebar.troubleshooting"),
      "FAQ": t("sidebar.faq"),
      "Community": t("sidebar.community"),
      "Contributing": t("sidebar.contributing"),
      "Playground": t("sidebar.playground"),
      "Configuration": t("sidebar.configuration"),
    };
    return translationMap[title] || title;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-51 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md md:hidden"
        aria-label={t("navigation.toggleMenu")}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-49 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700 z-50 overflow-y-auto transform transition-transform duration-300 md:translate-x-0 rtl:right-0 rtl:left-auto rtl:border-r-0 rtl:border-l ${
          isOpen ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg md:hidden"
          aria-label={t("navigation.toggleMenu")}
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-6 mt-2">
          <Link href="/" className="text-lg font-bold text-gray-800 dark:text-white">
            Apex
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={t("navigation.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          )}
        </div>

        {/* Language Switcher */}
        <div className="mb-6">
          <LanguageSwitcher />
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          {navigation.map((section) => (
            <div key={section.title} className="mb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {getSectionTitle(section)}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname === `${item.href}/`;
                  return (
                    <Link
                      key={item.href}
                      href={item.href as never}
                      onClick={handleLinkClick}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      {getItemTitle(item.title)}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Version Selector */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <VersionSwitcher />
        </div>
      </aside>
    </>
  );
}
