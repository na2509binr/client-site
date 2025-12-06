import { News } from "@/app/types/news";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    records: News[];
    onSelect: (record: News) => void;
    onDelete: (id: number) => void;
    pageSize?: number;
};

function getValidImageUrl(path?: string) {
    if (!path) return "/no-image.png";

    try {
        new URL(path); // nếu hợp lệ → trả về luôn
        return path;
    } catch {
        // nếu path là dạng "uploads/news/abc.jpg" 
        return `${process.env.NEXT_PUBLIC_}${path}`;
    }
}

export default function TableNews({ records, onSelect, onDelete, pageSize = 10 }: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(records.length / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const currentRecords = records.slice(startIdx, startIdx + pageSize);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };




    return (
        <div>
            <div className="overflow-x-auto border rounded shadow">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-center">Chọn</th>
                            <th className="px-4 py-2 text-center">Ảnh</th>
                            <th className="px-4 py-2 text-center">Tiêu đề</th>
                            <th className="px-4 py-2 text-center">Tác giả</th>
                            <th className="px-4 py-2 text-center">Lượt xem</th>
                            <th className="px-4 py-2 text-center">Tình trạng</th>
                            <th className="px-4 py-2 text-center"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {currentRecords.map((n) => (
                            <tr key={n.id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 text-center">
                                    <input
                                        type="radio"
                                        checked={selectedId === n.id}
                                        onChange={() => {
                                            setSelectedId(n.id || null);
                                            onSelect(n);
                                        }}
                                    />
                                </td>
                                {/* <td className="px-4 py-2">{n.image}</td> */}
                                <td className="px-4 py-2 flex items-center justify-center">
                                    {<img src={n.image ? `${n.image}` : '/placeholder.png'} alt={n.title} width={300} height={300} className="object-cover rounded" />}
                                </td>
                                <td className="px-4 py-2">{n.title}</td>
                                <td className="px-4 py-2">{n.author}</td>
                                <td className="px-4 py-2 text-center">{n.view}</td>
                                {/* <td className="px-4 py-2 text-center">{n.active ? "✔️" : "❌"}</td> */}
                                <td className="px-4 py-2 text-center">{n.active ? "Hoạt động" : "Ẩn"}</td>
                                {/* <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => onDelete(n.id!)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                </td> */}

                                <td className="px-4 py-2 text-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <Link
                                            href={`/cms/news/update?id=${n.id}`} // truyền id qua query param
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                        >
                                            Cập nhật
                                        </Link>
                                        <button
                                            onClick={() => onDelete(n.id!)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Xóa
                                        </button>

                                    </div>
                                </td>


                            </tr>
                        ))}
                        {currentRecords.length === 0 && (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">
                                    Không có bài viết nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1 border rounded ${page === currentPage ? 'bg-gray-200 font-bold' : ''}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
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
