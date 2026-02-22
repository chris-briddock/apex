import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Cursor - Apex Documentation",
  description: "Cursor utilities for controlling mouse cursors in Apex CSS Framework",
};

export default function CursorPage() {
  const t = useTranslations("pages.utilityPages.cursor");

  const cursorExamples = [
    { class: "cursor-auto", description: t("cursors.auto") },
    { class: "cursor-default", description: t("cursors.default") },
    { class: "cursor-pointer", description: t("cursors.pointer") },
    { class: "cursor-wait", description: t("cursors.wait") },
    { class: "cursor-text", description: t("cursors.text") },
    { class: "cursor-move", description: t("cursors.move") },
    { class: "cursor-help", description: t("cursors.help") },
    { class: "cursor-not-allowed", description: t("cursors.notAllowed") },
    { class: "cursor-none", description: t("cursors.none") },
    { class: "cursor-context-menu", description: t("cursors.contextMenu") },
    { class: "cursor-progress", description: t("cursors.progress") },
    { class: "cursor-cell", description: t("cursors.cell") },
    { class: "cursor-crosshair", description: t("cursors.crosshair") },
    { class: "cursor-vertical-text", description: t("cursors.verticalText") },
    { class: "cursor-alias", description: t("cursors.alias") },
    { class: "cursor-copy", description: t("cursors.copy") },
    { class: "cursor-no-drop", description: t("cursors.noDrop") },
    { class: "cursor-grab", description: t("cursors.grab") },
    { class: "cursor-grabbing", description: t("cursors.grabbing") },
    { class: "cursor-all-scroll", description: t("cursors.allScroll") },
    { class: "cursor-col-resize", description: t("cursors.colResize") },
    { class: "cursor-row-resize", description: t("cursors.rowResize") },
    { class: "cursor-zoom-in", description: t("cursors.zoomIn") },
    { class: "cursor-zoom-out", description: t("cursors.zoomOut") },
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
          code={`<button class="cursor-pointer">Clickable button</button>
<input type="text" class="cursor-text" placeholder="Text input">
<div class="cursor-not-allowed">Disabled area</div>
<div class="cursor-wait">Loading...</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("availableCursors.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("availableCursors.description")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">{t("availableCursors.classHeader")}</th>
                <th className="px-4 py-3">{t("availableCursors.descriptionHeader")}</th>
                <th className="px-4 py-3">{t("availableCursors.previewHeader")}</th>
              </tr>
            </thead>
            <tbody>
              {cursorExamples.map((cursor, index) => (
                <tr key={cursor.class} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">{cursor.class}</td>
                  <td className="px-4 py-3">{cursor.description}</td>
                  <td className="px-4 py-3">
                    <div className={`${cursor.class} bg-gray-100 dark:bg-gray-800 p-2 rounded text-center`}>
                      Hover me
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("commonUseCases.title")}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonUseCases.buttons.title")}
            </h3>
            <CodeBlock
              code={`<button class="cursor-pointer bg-primary text-white px-4 py-2 rounded">
  Click Me
</button>
<button class="cursor-not-allowed opacity-50" disabled>
  Disabled
</button>`}
              language="html"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonUseCases.loading.title")}
            </h3>
            <CodeBlock
              code={`<div class="cursor-wait">
  <p>Processing your request...</p>
  <div class="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
</div>`}
              language="html"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("commonUseCases.draggable.title")}
            </h3>
            <CodeBlock
              code={`<div class="cursor-grab active:cursor-grabbing bg-gray-100 p-4 rounded">
  Drag me
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
