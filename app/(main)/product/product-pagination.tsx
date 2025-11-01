"use client";

import { useMemo, useState } from "react";
import { Product } from "@/app/types/product";
import ItemCardProduct from "./item-card-product";
// import ItemCardProduct, { ProductsItem } from "./ItemCard";

type Props = {
    data: Product[];
    cate: string;
};

export default function ProductsPagination({ data, cate }: Props) {
    const itemsPerPage = 6;
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const start = (page - 1) * itemsPerPage;
    const currentItems = data.slice(start, start + itemsPerPage);

    return (
        <div>
            {/* GRID 3 columns × 2 rows */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4 lg:gap-10">
                {currentItems.map((item) => (
                    <ItemCardProduct key={item.id} item={item} cate={cate} />
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
                        className={`px-4 py-2 border rounded cursor-pointer ${page === i + 1 ? "bg-[#ff281c] text-white" : ""
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
