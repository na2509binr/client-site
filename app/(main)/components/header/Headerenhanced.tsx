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
  highlighted?: boolean; // For menu items like "TUYỂN DỤNG" with border
}

interface HeaderProps {
  menuItems: MenuItem[];
  logo?: {
    src?: string;
    alt?: string;
    subtitle?: string;
  };
}

const HeaderEnhanced: React.FC<HeaderProps> = ({ menuItems, logo }) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname();

  const isActive = (item: MenuItem): boolean => {
    if (item.url && pathname === item.url) return true;
    if (item.children) {
      return item.children.some((child) => child.url === pathname);
    }
    return false;
  };

  // Split menu items for left and right of logo
  const middleIndex = Math.ceil(menuItems.length / 2);
  const leftMenuItems = menuItems.slice(0, middleIndex);
  const rightMenuItems = menuItems.slice(middleIndex);

  const renderMenuItem = (item: MenuItem) => {
    const isItemActive = isActive(item);
    const isHovered = hoveredItem === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <li
        key={item.id}
        className="relative"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <Link
          href={item.url || "#"}
          className={`
            relative flex items-center gap-1 px-4 py-5 text-sm font-medium
            transition-all duration-200 whitespace-nowrap
            ${item.highlighted 
              ? "border border-[#00a651] text-[#00a651] mx-1 py-2 rounded-sm hover:bg-[#00a651] hover:text-white" 
              : isItemActive 
                ? "text-[#006838]" 
                : "text-gray-700 hover:text-[#006838]"
            }
          `}
        >
          <span>{item.title}</span>
          {hasChildren && (
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                isHovered ? "rotate-180" : ""
              }`}
            />
          )}

          {/* Underline animation - only for non-highlighted items */}
          {!item.highlighted && (
            <span
              className={`
                absolute bottom-3 left-4 right-4 h-0.5 bg-[#00a651]
                transition-transform duration-300 ease-out origin-left
                ${isItemActive ? "scale-x-100" : isHovered ? "scale-x-100" : "scale-x-0"}
              `}
            />
          )}
        </Link>

        {/* Dropdown menu */}
        {hasChildren && (
          <div
            className={`
              absolute top-full left-0 min-w-[220px] bg-white
              shadow-lg border-t-2 border-[#006838]
              transition-all duration-200 ease-out z-50
              ${isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
            `}
          >
            <ul className="py-0">
              {item.children?.map((child, childIndex) => {
                const isChildActive = child.url === pathname;
                return (
                  <li key={child.id}>
                    <Link
                      href={child.url || "#"}
                      className={`
                        block px-5 py-3 text-sm font-medium
                        transition-colors duration-150
                        border-b border-gray-100 last:border-b-0
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
    );
  };

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between h-16 px-4">
          {/* Left side - Home icon */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="p-2 text-[#006838] hover:text-[#00a651] transition-colors"
            >
              <Home className="w-5 h-5" fill="#006838" />
            </Link>
          </div>

          {/* Left menu items */}
          <ul className="flex items-center">
            {leftMenuItems.map(renderMenuItem)}
          </ul>

          {/* Center - Logo */}
          <div className="px-6 shrink-0">
            <Link href="/" className="flex flex-col items-center">
              <div className="flex items-baseline">
                <span className="text-[#006838] font-bold text-2xl tracking-wide">
                  VINH
                </span>
                <span className="text-[#00a651] font-bold text-2xl tracking-wide">
                  PHÁT
                </span>
              </div>
              <span className="text-[8px] text-gray-500 uppercase tracking-wider whitespace-nowrap">
                {logo?.subtitle || "CÔNG TY TNHH GẠO VINH PHÁT WILMAR"}
              </span>
            </Link>
          </div>

          {/* Right menu items */}
          <ul className="flex items-center">
            {rightMenuItems.map(renderMenuItem)}
          </ul>

          {/* Right side - Language flag */}
          <div className="flex items-center shrink-0">
            <button className="p-2 hover:opacity-80 transition-opacity">
              <div className="w-7 h-5 bg-[#da251d] relative overflow-hidden rounded-sm shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[#ffff00]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
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

export default HeaderEnhanced;