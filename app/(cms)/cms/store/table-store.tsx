"use client";

import { Store } from "@/app/types/store";
import Image from "next/image";
import { useState } from "react";

type Props = {
    records: Store[];
    onSelect: (record: Store) => void;
    onDelete: (id: number) => void;
    pageSize?: number;
};

function formatDate(dateStr?: string) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

export default function TableStore({
    records,
    onSelect,
    onDelete,
    pageSize = 10,
}: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(records.length / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const currentRecords = records.slice(startIdx, startIdx + pageSize);

    return (
        <div>
            <div className="overflow-x-auto border rounded shadow">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-center">Chọn</th>
                            <th className="px-4 py-2 text-center">Ảnh</th>
                            <th className="px-4 py-2 text-center">Tên</th>
                            <th className="px-4 py-2 text-center">Điện thoại</th>
                            <th className="px-4 py-2 text-center">Địa chỉ</th>
                            <th className="px-4 py-2 text-center">Thành phố</th>
                            <th className="px-4 py-2 text-center">Phường</th>
                            <th className="px-4 py-2 text-center">Ghi chú</th>
                            <th className="px-4 py-2 text-center">Ngày tạo</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {currentRecords.map((s) => (
                            <tr key={s.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 text-center">
                                    <input
                                        type="radio"
                                        checked={selectedId === s.id}
                                        onChange={() => {
                                            setSelectedId(s.id);
                                            onSelect(s);
                                        }}
                                    />
                                </td>

                                <td className="px-4 py-2 flex justify-center">
                                    <Image
                                        src={s.image || "/placeholder.png"}
                                        alt={s.name}
                                        width={80}
                                        height={80}
                                        className="object-cover rounded"
                                    />
                                </td>

                                <td className="px-4 py-2">{s.name}</td>
                                <td className="px-4 py-2">{s.phone}</td>
                                <td className="px-4 py-2">{s.address}</td>
                                <td className="px-4 py-2">{s.city}</td>
                                <td className="px-4 py-2">{s.ward}</td>
                                <td className="px-4 py-2">{s.note}</td>
                                <td className="px-4 py-2">{formatDate(s.createdAt)}</td>

                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => onDelete(s.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {currentRecords.length === 0 && (
                            <tr>
                                <td colSpan={10} className="py-4 text-center text-gray-500">
                                    Không có cửa hàng nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    <button
                        onClick={() => setCurrentPage((p) => p - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 border rounded ${
                                currentPage === i + 1 ? "bg-gray-200 font-bold" : ""
                            }`}
                        >
                            {i + 1}
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
