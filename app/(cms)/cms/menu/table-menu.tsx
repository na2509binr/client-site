"use client";

import { MenuItem } from "@/app/types/menu";
import { useState } from "react";

type Props = {
    records: MenuItem[];
    onSelect: (record: MenuItem) => void;
    onDelete: (id: number) => void;
    pageSize?: number;
};

export default function TableMenuItem({
    records,
    onSelect,
    onDelete,
    pageSize = 10,
}: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(records.length / pageSize);
    const start = (currentPage - 1) * pageSize;
    const currentRecords = records.slice(start, start + pageSize);

    return (
        <div>
            <div className="overflow-x-auto border rounded shadow">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-center">Chọn</th>
                            <th className="px-4 py-2">Tiêu đề</th>
                            <th className="px-4 py-2">URL</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {currentRecords.map((m) => (
                            <tr key={m.id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 text-center">
                                    <input
                                        type="radio"
                                        checked={selectedId === m.id}
                                        onChange={() => {
                                            setSelectedId(m.id);
                                            onSelect(m);
                                        }}
                                    />
                                </td>

                                <td className="px-4 py-2">{m.title}</td>
                                <td className="px-4 py-2">{m.url || "—"}</td>

                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => onDelete(m.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {currentRecords.length === 0 && (
                            <tr>
                                <td colSpan={4} className="py-4 text-center text-gray-500">
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                        onClick={() => setCurrentPage((p) => p - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`px-3 py-1 border rounded ${
                                currentPage === idx + 1 ? "bg-gray-200 font-bold" : ""
                            }`}
                        >
                            {idx + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((p) => p + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
