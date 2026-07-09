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
      <div className="hidden px-2 lg:px-0 lg:grid lg:grid-cols-[1fr_6fr_1fr] bg-transparent py-4">
      {/* <div className="hidden px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_6fr_1fr] bg-transparent"> */}
        <nav className="col-start-2 grid grid-cols-[1fr_8fr_2fr_8fr_1fr] h-auto items-center justify-between">
          {/* Left side - Home icon */}
          <div className="col-start-1 hidden flex-1 items-center justify-start shrink-0">
            <Link
              href="/"
              className="p-2 text-[#006838] hover:text-[#00a651] transition-colors"
              aria-label="Trang chủ"
            >
              <Home className="w-5 h-5" fill="currentColor" />
            </Link>
          </div>

          {/* Left menu items */}
          <ul className={`col-start-2 grid grid-cols-${leftMenuItems.length} justify-between`}>
            {leftMenuItems.map(renderMenuItem)}
          </ul>

          {/* Center - Logo */}
          <div className="col-start-3 ">
            {/* <Link href="/" className="flex flex-col items-center group">
              <div className="flex items-baseline">
                <span 
                  className="font-bold text-[28px] tracking-wider"
                  style={{ 
                    color: '#006838',
                    fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif"
                  }}
                >
                  VINH
                </span>
                <span
                  className="font-bold text-[28px] tracking-wider"
                  style={{
                    color: '#00a651',
                    fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif"
                  }}
                >
                  PHÁT
                </span>
              </div>
              <span className="text-[9px] text-gray-500 uppercase tracking-[0.15em] whitespace-nowrap -mt-0.5">
                {logo?.subtitle || "CÔNG TY TNHH GẠO VINH PHÁT WILMAR"}
              </span>
            </Link> */}

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
                    <ul className={`col-start-4 grid grid-cols-${rightMenuItems.length}  justify-between gap-1`}>
            {rightMenuItems.map(renderMenuItem)}
          </ul>
          {/* <ul className="col-start-4 flex items-center justify-between">
            {rightMenuItems.map(renderMenuItem)}
          </ul> */}

          {/* Right side - Vietnam flag */}
          <div className="col-start-5 hidden items-center justify-end shrink-0">
          {/* <div className="col-start-5 flex items-center justify-end shrink-0 invisible"> */}
            <button 
              onClick={onLanguageChange}
              className="p-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#006838] rounded"
              aria-label="Đổi ngôn ngữ"
            >
              <div className="w-8 h-5 bg-[#da251d] relative overflow-hidden rounded-xs shadow-sm border border-red-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="#ffff00"
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

export default VinhPhatHeader;