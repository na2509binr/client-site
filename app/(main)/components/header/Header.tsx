"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Home } from "lucide-react";

export interface MenuItem {
  id: number;
  title: string;
  url?: string;
  children?: MenuItem[];
}

interface HeaderProps {
  menuItems: MenuItem[];
  logo?: {
    src: string;
    alt: string;
    subtitle?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ menuItems, logo }) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname();

  const isActive = (item: MenuItem): boolean => {
    if (item.url && pathname === item.url) return true;
    if (item.children) {
      return item.children.some((child) => child.url === pathname);
    }
    return false;
  };

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between h-16 px-4">
          {/* Left side - Home icon */}
          <div className="flex items-center">
            <Link
              href="/"
              className="p-2 text-[#006838] hover:text-[#00a651] transition-colors"
            >
              <Home className="w-6 h-6" />
            </Link>
          </div>

          {/* Center - Menu items with Logo in center */}
          <div className="flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const isItemActive = isActive(item);
                const isHovered = hoveredItem === item.id;
                const hasChildren = item.children && item.children.length > 0;

                // Insert logo in the middle
                const middleIndex = Math.floor(menuItems.length / 2);
                const showLogoBefore = index === middleIndex && logo;

                return (
                  <React.Fragment key={item.id}>
                    {showLogoBefore && (
                      <li className="px-4">
                        <Link href="/" className="flex flex-col items-center">
                          <div className="text-[#006838] font-bold text-2xl tracking-wide">
                            VINH<span className="text-[#00a651]">PHÁT</span>
                          </div>
                          <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                            {logo.subtitle || "Công ty TNHH Gạo Vinh Phát Wilmar"}
                          </span>
                        </Link>
                      </li>
                    )}

                    <li
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        href={item.url || "#"}
                        className={`
                          relative flex items-center gap-1 px-4 py-5 text-sm font-medium
                          transition-colors duration-200
                          ${isItemActive ? "text-[#006838]" : "text-gray-700 hover:text-[#006838]"}
                        `}
                      >
                        <span>{item.title}</span>
                        {hasChildren && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isHovered ? "rotate-180" : ""
                            }`}
                          />
                        )}

                        {/* Underline animation */}
                        <span
                          className={`
                            absolute bottom-3 left-4 right-4 h-0.5 bg-[#00a651]
                            transition-transform duration-300 ease-out origin-left
                            ${isItemActive ? "scale-x-100" : isHovered ? "scale-x-100" : "scale-x-0"}
                          `}
                        />
                      </Link>

                      {/* Dropdown menu */}
                      {hasChildren && (
                        <div
                          className={`
                            absolute top-full left-0 min-w-[200px] bg-white
                            shadow-lg border border-gray-100 rounded-b-md
                            transition-all duration-200 ease-out
                            ${isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                          `}
                        >
                          <ul className="py-2">
                            {item.children?.map((child) => {
                              const isChildActive = child.url === pathname;
                              return (
                                <li key={child.id}>
                                  <Link
                                    href={child.url || "#"}
                                    className={`
                                      block px-4 py-2.5 text-sm
                                      transition-colors duration-150
                                      ${
                                        isChildActive
                                          ? "bg-[#006838] text-white"
                                          : "text-gray-700 hover:bg-[#006838] hover:text-white"
                                      }
                                    `}
                                  >
                                    {child.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>

          {/* Right side - Language flag */}
          <div className="flex items-center">
            <button className="p-2 hover:opacity-80 transition-opacity">
              <div className="w-6 h-4 bg-red-600 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;