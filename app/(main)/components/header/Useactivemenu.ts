"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface MenuItem {
  id: number;
  title: string;
  url?: string;
  children?: MenuItem[];
}

/**
 * Custom hook to detect active menu item based on current pathname
 */
export function useActiveMenu(menuItems: MenuItem[]) {
  const pathname = usePathname();

  const activeMenuId = useMemo(() => {
    for (const item of menuItems) {
      // Check if current path matches item URL
      if (item.url && pathname === item.url) {
        return item.id;
      }
      // Check if current path starts with item URL (for nested routes)
      if (item.url && pathname.startsWith(item.url + "/")) {
        return item.id;
      }
      // Check children
      if (item.children) {
        for (const child of item.children) {
          if (child.url && (pathname === child.url || pathname.startsWith(child.url + "/"))) {
            return item.id;
          }
        }
      }
    }
    return null;
  }, [menuItems, pathname]);

  const isActive = (item: MenuItem): boolean => {
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
  };

  const isChildActive = (childUrl?: string): boolean => {
    if (!childUrl) return false;
    return pathname === childUrl || pathname.startsWith(childUrl + "/");
  };

  return {
    activeMenuId,
    isActive,
    isChildActive,
    currentPath: pathname,
  };
}

export default useActiveMenu;