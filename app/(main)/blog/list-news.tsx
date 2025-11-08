"use client";

import { useState } from "react";
import { New } from "../../types/new";
import ItemCardNew from "./item-card-new";
// import ItemCardNew, { NewsItem } from "./ItemCard";

type Props = {
  data: New[];
};

export default function NewsList({ data }: Props) {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const currentItems = data.slice(start, start + itemsPerPage);

  return (
    <div>
      {/* GRID 3 columns × 2 rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {currentItems.map((item) => (
          <ItemCardNew key={item.id} item={item} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <button
          className="px-4 py-2 border rounded disabled:opacity-40 cursor-pointer"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded cursor-pointer ${
              page === i + 1 ? "bg-[#ff281c] text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 border rounded disabled:opacity-40 cursor-pointer"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
