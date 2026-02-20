import { Breadcrumb } from "@/components/Breadcrumb";
import { ColorExplorer } from "@/components/ColorExplorer";

export const metadata = {
  title: "Colors - Apex Documentation",
  description: "Explore and copy color utilities in Apex",
};

export default function ColorsPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Utilities", href: "/utilities" },
          { label: "Colors" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Colors
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Explore the complete color palette. Click any color to copy its class name.
      </p>

      <ColorExplorer />
    </div>
  );
}
