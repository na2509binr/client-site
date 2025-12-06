"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { menuData } from "../../types/menu";
import { usePathname } from "next/navigation";
import { MenuAPI } from "@/app/utils/api";

export default function HeaderMobile() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [menuData, setMenus] = useState<any[]>([]);
    useEffect(() => {
        MenuAPI.getTree().then(setMenus);
    }, []);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleMenuChild = (id: number) =>
        setOpenMenuId((prev) => (prev === id ? null : id));

    const getBarClass = (index: number) => {
        if (!menuOpen) return "block w-6 h-0.5 bg-black my-1 transition-all";
        if (index === 1) return "rotate-45 translate-y-3 w-6 h-0.5 bg-black my-1 transition-all";
        if (index === 2) return "opacity-0 w-6 h-0.5 bg-black my-1 transition-all";
        if (index === 3) return "-rotate-45 -translate-y-2 w-6 h-0.5 bg-black my-1 transition-all";
        return "";
    };

    const getAccordionClass = () => (menuOpen ? "max-h-[1000px]" : "max-h-0");

    const renderChildren = (items: any[]) => (
        <ul className="ml-4 border-l border-gray-300 pl-3">
            {items.map((child) => (
                <li key={child.id}>
                    <Link
                        href={child.url || "#"}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-[#01387F]"
                    >
                        {child.title.toUpperCase()}
                    </Link>

                    {/* Đệ quy nếu có cấp cháu */}
                    {child.children && child.children.length > 0 && (
                        <div className="ml-4">{renderChildren(child.children)}</div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className={`bg-white shadow-xl   px-2 md:px-3 lg:px-4 xl:grid xl:grid-cols-[1fr_7fr_1fr] mb-2`}>
            {/* Logo + Hamburger */}
            <div className="col-start-2 grid grid-cols-2 lg:grid-cols-[1fr_3fr_1fr] items-center">

                {/* Logo */}
                <div className="flex justify-start items-center">
                    <div className="bg-[#ff281c] px-2 py-3.5 shadow-2xl">
                        <Link href="/" className="text-blue-600 hover:underline">
                            <Image
                                className="dark:invert"
                                src="/images/LOGO DƯƠNG BẢN.png"
                                alt="Logo"
                                width={100}
                                height={20}
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* Hamburger */}
                <div className="flex justify-end lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-center items-center w-10 h-10 
                       group border border-[#dfe0e1] rounded-md px-7"
                    >
                        <span className={getBarClass(1)}></span>
                        <span className={getBarClass(2)}></span>
                        <span className={getBarClass(3)}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Accordion Menu */}
            <div
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${getAccordionClass()}`}
            >
                <ul className="mb-2 text-[#01387F] font-normal select-none py-3.5">
                    {menuData.map((menu) => {
                        const hasChildren = !!menu.children?.length;
                        const isOpen = openMenuId === menu.id;

                        return (
                            <li key={menu.id} className="relative border-b border-gray-200">

                                <div
                                    className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => toggleMenuChild(menu.id)}
                                >
                                    <Link
                                        href={hasChildren ? "#" : menu.url || "#"}
                                        className="flex-1"
                                    >
                                        {menu.title.toUpperCase()}
                                    </Link>

                                    {hasChildren && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#DC2626]" : "text-gray-500"
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </div>

                                {hasChildren && (
                                    <ul
                                        className={`overflow-hidden transition-all duration-300 ease-in-out 
                                        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} ml-4 
                                        border-l border-gray-300 pl-3`}
                                    >
                                        {renderChildren(menu.children || [])}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
