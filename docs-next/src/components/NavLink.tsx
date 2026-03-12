"use client";

import { Link } from "@/i18n/navigation";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

 
export function NavLink({ href, isActive, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href as string}
      onClick={onClick}
      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
        isActive
          ? "bg-blue-500 text-white"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
      }`}
    >
      {children}
    </Link>
  );
}
