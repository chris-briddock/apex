import { Breadcrumb } from "@/components/Breadcrumb";
import { SpacingExplorer } from "@/components/SpacingExplorer";

export const metadata = {
  title: "Spacing - Apex Documentation",
  description: "Interactive spacing explorer for Apex",
};

export default function SpacingPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Spacing" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Spacing
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Interactive spacing explorer. Adjust the controls to see how different spacing values affect your layout.
      </p>

      <SpacingExplorer />
    </div>
  );
}
