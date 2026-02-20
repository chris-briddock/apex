import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheatsheet - Apex Documentation",
  description: "Quick reference cheatsheet for Apex utilities",
};

export default function CheatsheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
