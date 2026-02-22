import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Blend Modes - Apex Documentation",
  description: "Blend mode utilities for controlling how elements blend with their backdrop in Apex CSS Framework",
};

export default function BlendModesPage() {
  const t = useTranslations("pages.utilityPages.blendModes");

  const mixBlendModes = [
    { class: "mix-blend-normal", description: t("mixBlendModes.normal") },
    { class: "mix-blend-multiply", description: t("mixBlendModes.multiply") },
    { class: "mix-blend-screen", description: t("mixBlendModes.screen") },
    { class: "mix-blend-overlay", description: t("mixBlendModes.overlay") },
    { class: "mix-blend-darken", description: t("mixBlendModes.darken") },
    { class: "mix-blend-lighten", description: t("mixBlendModes.lighten") },
    { class: "mix-blend-color-dodge", description: t("mixBlendModes.colorDodge") },
    { class: "mix-blend-color-burn", description: t("mixBlendModes.colorBurn") },
    { class: "mix-blend-hard-light", description: t("mixBlendModes.hardLight") },
    { class: "mix-blend-soft-light", description: t("mixBlendModes.softLight") },
    { class: "mix-blend-difference", description: t("mixBlendModes.difference") },
    { class: "mix-blend-exclusion", description: t("mixBlendModes.exclusion") },
    { class: "mix-blend-hue", description: t("mixBlendModes.hue") },
    { class: "mix-blend-saturation", description: t("mixBlendModes.saturation") },
    { class: "mix-blend-color", description: t("mixBlendModes.color") },
    { class: "mix-blend-luminosity", description: t("mixBlendModes.luminosity") },
    { class: "mix-blend-plus-darker", description: t("mixBlendModes.plusDarker") },
    { class: "mix-blend-plus-lighter", description: t("mixBlendModes.plusLighter") },
  ];

  const bgBlendModes = [
    { class: "bg-blend-normal", description: t("bgBlendModes.normal") },
    { class: "bg-blend-multiply", description: t("bgBlendModes.multiply") },
    { class: "bg-blend-screen", description: t("bgBlendModes.screen") },
    { class: "bg-blend-overlay", description: t("bgBlendModes.overlay") },
    { class: "bg-blend-darken", description: t("bgBlendModes.darken") },
    { class: "bg-blend-lighten", description: t("bgBlendModes.lighten") },
    { class: "bg-blend-color-dodge", description: t("bgBlendModes.colorDodge") },
    { class: "bg-blend-color-burn", description: t("bgBlendModes.colorBurn") },
    { class: "bg-blend-hard-light", description: t("bgBlendModes.hardLight") },
    { class: "bg-blend-soft-light", description: t("bgBlendModes.softLight") },
    { class: "bg-blend-difference", description: t("bgBlendModes.difference") },
    { class: "bg-blend-exclusion", description: t("bgBlendModes.exclusion") },
    { class: "bg-blend-hue", description: t("bgBlendModes.hue") },
    { class: "bg-blend-saturation", description: t("bgBlendModes.saturation") },
    { class: "bg-blend-color", description: t("bgBlendModes.color") },
    { class: "bg-blend-luminosity", description: t("bgBlendModes.luminosity") },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicUsage.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicUsage.description")}
        </p>
        <CodeBlock
          code={`<div class="relative">
  <img src="background.jpg" class="w-full" />
  <div class="absolute inset-0 bg-primary mix-blend-multiply"></div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("mixBlendMode.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("mixBlendMode.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("table.classHeader")}</th>
                <th className="px-4 py-3">{t("table.descriptionHeader")}</th>
              </tr>
            </thead>
            <tbody>
              {mixBlendModes.map((mode) => (
                <tr key={mode.class} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">{mode.class}</td>
                  <td className="px-4 py-3">{mode.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("bgBlendMode.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("bgBlendMode.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("table.classHeader")}</th>
                <th className="px-4 py-3">{t("table.descriptionHeader")}</th>
              </tr>
            </thead>
            <tbody>
              {bgBlendModes.map((mode) => (
                <tr key={mode.class} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">{mode.class}</td>
                  <td className="px-4 py-3">{mode.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("examples.title")}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("examples.duotone.title")}
            </h3>
            <CodeBlock
              code={`<div class="relative">
  <img src="photo.jpg" class="w-full h-64 object-cover" />
  <div class="absolute inset-0 bg-primary opacity-75 mix-blend-multiply"></div>
  <div class="absolute inset-0 bg-secondary opacity-50 mix-blend-lighten"></div>
</div>`}
              language="html"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("examples.textOverlay.title")}
            </h3>
            <CodeBlock
              code={`<div class="relative bg-cover" style="background-image: url('image.jpg')">
  <h1 class="text-6xl font-bold text-white mix-blend-overlay">
    Blended Text
  </h1>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
