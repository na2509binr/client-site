// import { News } from "@/app/types/news";
// import { useState } from "react";

// type Props = {
//     records: News[];
//     onSelect: (record: News) => void;
//     onDelete: (id: number) => void;
// };

// export default function TableNews({ records, onSelect, onDelete }: Props) {
//     const [selectedId, setSelectedId] = useState<number | null>(null);

//     return (
//         <div className="overflow-x-auto border rounded shadow">
//             <table className="min-w-full">
//                 <thead className="bg-gray-50">
//                     <tr>
//                         <th className="px-4 py-2">Select</th>
//                         <th className="px-4 py-2 text-left">Title</th>
//                         <th className="px-4 py-2 text-left">Author</th>
//                         <th className="px-4 py-2 text-center">Views</th>
//                         <th className="px-4 py-2 text-center">Active</th>
//                         <th className="px-4 py-2 text-center">Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody className="divide-y">
//                     {records.map((n) => (
//                         <tr key={n.id} className="hover:bg-gray-100">
//                             <td className="px-4 py-2 text-center">
//                                 <input
//                                     type="radio"
//                                     checked={selectedId === n.id}
//                                     onChange={() => {
//                                         setSelectedId(n.id!);
//                                         onSelect(n);
//                                     }}
//                                 />
//                             </td>

//                             <td className="px-4 py-2">{n.title}</td>
//                             <td className="px-4 py-2">{n.author}</td>

//                             <td className="px-4 py-2 text-center">{n.view}</td>

//                             <td className="px-4 py-2 text-center">
//                                 {n.active ? "✔️" : "❌"}
//                             </td>

//                             <td className="px-4 py-2 text-center">
//                                 <button
//                                     onClick={() => onDelete(n.id!)}
//                                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                                 >
//                                     Xóa
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}

//                     {records.length === 0 && (
//                         <tr>
//                             <td colSpan={6} className="text-center py-4 text-gray-500">
//                                 Không có bài viết nào
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }








import { News } from "@/app/types/news";
import { useState } from "react";

type Props = {
    records: News[];
    onSelect: (record: News) => void;
    onDelete: (id: number) => void;
    pageSize?: number;
};

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
                            <th className="px-4 py-2">Chọn</th>
                            <th className="px-4 py-2 text-left">Ảnh</th>
                            <th className="px-4 py-2 text-left">Tiêu đề</th>
                            <th className="px-4 py-2 text-left">Tác giả</th>
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
                                <td className="px-4 py-2">{n.image}</td>
                                <td className="px-4 py-2">{n.title}</td>
                                <td className="px-4 py-2">{n.author}</td>
                                <td className="px-4 py-2 text-center">{n.view}</td>
                                {/* <td className="px-4 py-2 text-center">{n.active ? "✔️" : "❌"}</td> */}
                                <td className="px-4 py-2 text-center">{n.active ? "Hoạt động" : "Ẩn"}</td>
                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => onDelete(n.id!)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
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
