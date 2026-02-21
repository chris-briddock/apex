export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Getting Started", href: "/getting-started" },
    ],
  },
  {
    title: "Design System",
    items: [
      { title: "Design System", href: "/design-system" },
      { title: "Customization", href: "/customization" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Utilities", href: "/utilities" },
      { title: "Components", href: "/components" },
      { title: "Responsive Design", href: "/responsive-design" },
      { title: "Dark Mode", href: "/dark-mode" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "API Reference", href: "/api-reference" },
      { title: "Browser Support", href: "/browser-support" },
    ],
  },
  {
    title: "Migration",
    items: [
      { title: "Migration Guides", href: "/migration" },
      { title: "From Tailwind", href: "/migration/from-tailwind" },
      { title: "From Bootstrap", href: "/migration/from-bootstrap" },
      { title: "From Bulma", href: "/migration/from-bulma" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Plugin Development", href: "/plugins" },
      { title: "Performance", href: "/performance" },
      { title: "Accessibility", href: "/accessibility" },
      { title: "RTL Support", href: "/rtl" },
    ],
  },
  {
    title: "Help",
    items: [
      { title: "Troubleshooting", href: "/troubleshooting" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Community", href: "/community" },
      { title: "Contributing", href: "/contributing" },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Playground", href: "/playground" },
      { title: "Configuration", href: "/configuration" },
    ],
  },
];

export const componentLinks = [
  { title: "Buttons", href: "/components/buttons", description: "Button styles and variants" },
  { title: "Cards", href: "/components/cards", description: "Card layouts and styles" },
  { title: "Forms", href: "/components/forms", description: "Form inputs and controls" },
  { title: "Alerts", href: "/components/alerts", description: "Alert messages and notifications" },
  { title: "Badges", href: "/components/badges", description: "Badge components" },
  { title: "Tables", href: "/components/tables", description: "Table styles and variants" },
  { title: "Tabs", href: "/components/tabs", description: "Tab components" },
  { title: "Modals", href: "/components/modals", description: "Modal dialogs" },
  { title: "Dropdowns", href: "/components/dropdowns", description: "Dropdown menus" },
  { title: "Accordion", href: "/components/accordion", description: "Accordion components" },
];

export const utilityLinks = [
  { title: "Spacing", href: "/utilities/spacing", description: "Margin and padding utilities" },
  { title: "Typography", href: "/utilities/typography", description: "Text and font utilities" },
  { title: "Colors", href: "/utilities/colors", description: "Background and text color utilities" },
  { title: "Flexbox", href: "/utilities/flexbox", description: "Flexbox layout utilities" },
  { title: "Grid", href: "/utilities/grid", description: "Grid layout utilities" },
  { title: "Borders", href: "/utilities/borders", description: "Border utilities" },
  { title: "Sizing", href: "/utilities/sizing", description: "Width and height utilities" },
];

/**
 * Utility function to create localized hrefs
 * Usage in client components: const localizeHref = useLocalizeHref()
 * Usage in server components: localizeHrefFactory(locale)(href)
 */
export function localizeHrefFactory(locale: string) {
  return (href: string): string => {
    // Remove leading slash if present for consistency
    const cleanHref = href.startsWith("/") ? href : `/${href}`;

    // Don't add locale if already present
    if (cleanHref.startsWith(`/${locale}/`) || cleanHref === `/${locale}`) {
      return cleanHref;
    }

    // Add locale prefix
    return `/${locale}${cleanHref}`;
  };
}

/**
 * Hook version for client components
 * Must be used inside components with "use client" directive
 */
export function useLocalizeHref(locale: string) {
  return localizeHrefFactory(locale);
}
