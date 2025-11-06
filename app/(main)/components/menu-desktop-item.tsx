import Link from "next/link";

export default function MenuItem({ menu, isHome }: any) {
  const hasChildren = menu.children && menu.children.length > 0;

  return (
    <li className="relative group">
      <Link
        href={menu.url || "#"}
        className={`hover:text-[#ff281c] transition-all duration-300 ease-in-out ${
          isHome ? "text-gray-700" : ""
        }`}
      >
        <div className="flex items-center space-x-0.75">
          <span>{menu.title}</span>

          {hasChildren && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 ${isHome ? "text-gray-700" : ""} group-hover:text-[#ff281c] transition-all duration-300 ease-in-out`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      </Link>

      {hasChildren && (
        <div className="absolute left-0 mt-2 w-48 z-10 bg-white shadow-lg rounded-xl p-3 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-200 ease-in-out">
          <ul className="space-y-2 text-gray-700">
            {menu.children.map((child: any) => (
              <MenuItem key={child.id} menu={child} isHome={isHome} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
