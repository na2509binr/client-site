"use client";

import { Product } from "@/app/types/product";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CategoryProductAPI } from "@/app/utils/api";

type Props = {
  records: Product[];
  onSelect: (record: Product) => void;
  onDelete: (id: number) => void;
  pageSize?: number;
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth() + 1
  ).padStart(2, "0")}/${d.getFullYear()}`;
}

export function parseImageString(str: string): string[] {
  if (!str) return [];
  return str
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "");
}


export default function TableProduct({
  records,
  onSelect,
  onDelete,
  pageSize = 10,
}: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [categoryMap, setCategoryMap] = useState<Record<number, string>>({});

  // 🔥 Fetch ALL category 1 lần → build map id -> title
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await CategoryProductAPI.getAll();
      const map: Record<number, string> = {};

      categories.forEach((c: any) => {
        map[c.id] = c.title;
      });

      setCategoryMap(map);
    };

    fetchCategories();
  }, []);



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
              <th className="px-4 py-2 text-center">Ảnh</th>
              <th className="px-4 py-2 text-center">Tên</th>
              <th className="px-4 py-2 text-center">Giá</th>
              <th className="px-4 py-2 text-center">Giá khuyến mãi</th>
              <th className="px-4 py-2 text-center">Thể loại</th>
              <th className="px-4 py-2 text-center">Mô tả</th>
              <th className="px-4 py-2 text-center">Trạng thái</th>
              <th className="px-4 py-2 text-center">Ngày tạo</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {/* {currentRecords.map((p) => (

              
              <tr key={p.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">
                  <input
                    type="radio"
                    checked={selectedId === p.id}
                    onChange={() => {
                      setSelectedId(p.id);
                      onSelect(p);
                    }}
                  />
                </td>

                <td className="px-4 py-2 flex items-center justify-center">
                  <Image
                    src={p.image || "/placeholder.png"}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="object-cover rounded"
                  />
                </td>

                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.price.toLocaleString()}₫</td>
                <td className="px-4 py-2">{p.salePrice.toLocaleString()}₫</td>

                <td className="px-4 py-2">
                  {categoryMap[p.categoryProductId] || "—"}
                </td>

                <td className="px-4 py-2">{p.description}</td>
                <td className="px-4 py-2">{p.isActive ? "Hoạt động" : "Ẩn"}</td>
                <td className="px-4 py-2">{formatDate(p.createDate)}</td>

                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onDelete(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))} */}



            {currentRecords.map((p) => {
              const images = parseImageString(p.image); // biến string → array
              const firstImage = images[0] || "/placeholder.png";

              return (
                <tr key={p.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      checked={selectedId === p.id}
                      onChange={() => {
                        setSelectedId(p.id);
                        onSelect(p);
                      }}
                    />
                  </td>

                  <td className="px-4 py-2 flex items-center justify-center">
                    <Image
                      src={firstImage}
                      alt={p.name}
                      width={300}
                      height={300}
                      className="object-cover rounded"
                    />
                  </td>

                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.price.toLocaleString()}₫</td>
                  <td className="px-4 py-2">{p.salePrice.toLocaleString()}₫</td>

                  <td className="px-4 py-2">{categoryMap[p.categoryProductId] || "—"}</td>

                  <td className="px-4 py-2">{p.description}</td>
                  <td className="px-4 py-2">{p.isActive ? "Hoạt động" : "Ẩn"}</td>
                  <td className="px-4 py-2">{formatDate(p.createDate)}</td>

                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => onDelete(p.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}





            {currentRecords.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-4 text-gray-500">
                  Không có sản phẩm nào
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
                className={`px-3 py-1 border rounded ${page === currentPage ? "bg-gray-200 font-bold" : ""
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
