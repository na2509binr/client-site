"use client";

import { CategoryProduct } from "@/app/types/category-product";
import { useState } from "react";

type Props = {
  records: CategoryProduct[];
  onSelect: (record: CategoryProduct) => void;
  onDelete: (id: number) => void;
  pageSize?: number;
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth() + 1
  ).padStart(2, "0")}/${d.getFullYear()}`;
}

export default function TableCategory({
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
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-center">Chọn</th>
              <th className="px-4 py-2 text-center">Tên danh mục</th>
              <th className="px-4 py-2 text-center">Trạng thái</th>
              <th className="px-4 py-2 text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentRecords.map((c) => (
              <tr key={c.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-center">
                  <input
                    type="radio"
                    checked={selectedId === c.id}
                    onChange={() => {
                      setSelectedId(c.id);
                      onSelect(c);
                    }}
                  />
                </td>

                <td className="px-4 py-2">{c.title}</td>
                <td className="px-4 py-2">{c.isActive ? "Hoạt động" : "Ẩn"}</td>

                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onDelete(c.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}

            {currentRecords.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  Không có danh mục nào
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

          {Array.from({ length: totalPages }).map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  page === currentPage ? "bg-gray-200 font-bold" : ""
                }`}
              >
                {page}
              </button>
            );
          })}

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
