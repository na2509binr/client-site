"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Home } from "lucide-react";

export interface MenuItem {
  id: number;
  title: string;
  url?: string;
  children?: MenuItem[];
  highlighted?: boolean;
}

interface HeaderProps {
  menuItems: MenuItem[];
  logo?: {
    src?: string;
    alt?: string;
    subtitle?: string;
  };
  onLanguageChange?: () => void;
}

const VinhPhatHeader: React.FC<HeaderProps> = ({
  menuItems,
  logo,
  onLanguageChange
}) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname();

  const isActive = useCallback((item: MenuItem): boolean => {
    if (item.url && pathname === item.url) return true;
    if (item.url && pathname.startsWith(item.url + "/")) return true;
    if (item.children) {
      return item.children.some(
        (child) =>
          child.url &&
          (pathname === child.url || pathname.startsWith(child.url + "/"))
      );
    }
    return false;
  }, [pathname]);

  // Split menu items for left and right of logo
  const middleIndex = Math.floor(menuItems.length / 2);
  const leftMenuItems = menuItems.slice(0, middleIndex);
  const rightMenuItems = menuItems.slice(middleIndex);

  const renderMenuItem = (item: MenuItem) => {
    const isItemActive = isActive(item);
    const isHovered = hoveredItem === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <li
        key={item.id}
        className="relative group"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <Link
          href={item.url || "#"}
          className={`
            relative flex items-center justify-center text-[13px] font-semibold
            transition-all duration-200 whitespace-nowrap uppercase tracking-wide
            ${item.highlighted
              ? `border border-[#00a651] text-[#00a651] px-3 py-1.5 mx-1
                 hover:bg-[#00a651] hover:text-white transition-colors`
              : ` py-3 ${isItemActive ? "text-[#006838]" : "text-gray-600 hover:text-[#006838]"}`
            }
          `}
        >
          <div className="relative">
            <div className="flex justify-between items-center">
              <span className={`font-black`}>{item.title}</span>
              {hasChildren && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ml-0.5 ${isHovered ? "rotate-180" : ""
                    }`}
                />
              )}
            </div>

            {/* Animated underline - only for non-highlighted items */}
            {!item.highlighted && (
              <span className={`
                                absolute -bottom-1 w-full h-0.75 bg-[#00a651]
                                origin-left transition-transform duration-300 ease-out
                                ${isItemActive || isHovered ? "scale-x-100" : "scale-x-0"}
                            `}
              />
            )}
          </div>
        </Link>

        {/* Dropdown menu */}
        {hasChildren && (
          <div
            className={`
              absolute top-full left-0 min-w-[220px] bg-white
              shadow-xl border-t-[3px] border-[#006838]
              transition-all duration-200 ease-out z-50
              ${isHovered
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }
            `}
          >
            <ul>
              {item.children?.map((child) => {
                const isChildActive =
                  child.url === pathname ||
                  (child.url && pathname.startsWith(child.url + "/"));

                return (
                  <li key={child.id}>
                    <Link
                      href={child.url || "#"}
                      className={`
                        block px-5 py-3.5 text-[13px] font-black uppercase
                        transition-all duration-150 tracking-wide
                        border-b border-gray-100 last:border-b-0
                        ${isChildActive
                          ? "bg-[#006838] text-white"
                          : "text-gray-700 hover:bg-[#006838] hover:text-white hover:pl-7"
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
      {/* <div className="hidden px-2 lg:px-4 lg:block 2xl:px-0 2xl:grid 2xl:grid-cols-[1fr_6fr_1fr] bg-transparent py-4">
        <nav className="col-start-2 grid 2xl:grid-cols-[1fr_8fr_2fr_8fr_1fr] h-auto items-center justify-between"> */}
<div className="hidden px-2 lg:px-4 lg:flex 2xl:px-0 bg-transparent py-4 items-center justify-center">
  <nav className="w-full max-w-[1400px] grid grid-cols-[1fr_auto_1fr] items-center h-auto">

    {/* Left menu items */}
    <ul className="flex items-center justify-end gap-4">
      {leftMenuItems.map(renderMenuItem)}
    </ul>

    {/* Center - Logo */}
    <div className="flex-shrink-0 px-8">
      <Link href="/" className="text-blue-600 hover:underline">
        <Image
          className="dark:invert"
          src="/images/Logo_LOGO MÀU CHUẨN.jpg"
          alt="Logo"
          width={200}
          height={60}
          priority
        />
      </Link>
    </div>

    {/* Right menu items */}
    <ul className="flex items-center justify-start gap-4">
      {rightMenuItems.map(renderMenuItem)}
    </ul>

  </nav>
</div>
    </header>
  );
};

export default VinhPhatHeader;