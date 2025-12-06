// import { CategoryProduct } from "@/app/types/category-product";
// import { useState } from "react";

// type Props = {
//   records: CategoryProduct[];
//   onSelect: (record: CategoryProduct) => void;
//   onDelete: (id: number) => void;
// };

// export default function TableCategory({ records, onSelect, onDelete }: Props) {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   return (
//     <div className="overflow-x-auto border rounded shadow">
//       <table className="min-w-full">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-4 py-2">Select</th>
//             <th className="px-4 py-2 text-left">Tiêu đề</th>
//             <th className="px-4 py-2 text-left">Slug</th>
//             <th className="px-4 py-2 text-left">Active</th>
//             <th className="px-4 py-2 text-center">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {records.map((c) => (
//             <tr key={c.id} className="hover:bg-gray-100">
//               <td className="px-4 py-2">
//                 <input
//                   type="radio"
//                   checked={selectedId === c.id}
//                   onChange={() => {
//                     setSelectedId(c.id);
//                     onSelect(c);
//                   }}
//                 />
//               </td>

//               <td className="px-4 py-2">{c.title}</td>
//               <td className="px-4 py-2">{c.slug}</td>
//               <td className="px-4 py-2">{c.isActive ? "Yes" : "No"}</td>

//               <td className="px-4 py-2 text-center">
//                 <button
//                   onClick={() => onDelete(c.id!)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Xóa
//                 </button>
//               </td>
//             </tr>
//           ))}

//           {records.length === 0 && (
//             <tr>
//               <td colSpan={5} className="text-center py-4 text-gray-500">
//                 Không có category nào
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }







import { CategoryProduct } from "@/app/types/category-product";
import { useState } from "react";
import Image from "next/image";

type Props = {
  records: CategoryProduct[];
  onSelect: (record: CategoryProduct) => void;
  onDelete: (id: number) => void;
  pageSize?: number;
};

export default function TableCategory({ records, onSelect, onDelete, pageSize = 10 }: Props) {
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
              {/* <th className="px-4 py-2 text-center"> cha</th> */}
              <th className="px-4 py-2 text-center">Mô tả</th>
              <th className="px-4 py-2 text-center">Tình trạng</th>
              <th className="px-4 py-2 text-center"></th>
            </tr>
          </thead>
          <tbody>
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
                <td className="px-4 py-2 flex items-center justify-center">
                  {<Image src={c.image ? c.image : '/placeholder.png'} alt={c.title} width={300} height={300} className="object-cover rounded" />}
                </td>
                <td className="px-4 py-2">{c.title}</td>
                <td className="px-4 py-2">{c.desciption}</td>
                <td className="px-4 py-2">{c.isActive ? "Hoạt động" : "Ẩn"}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onDelete(c.id!)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            {currentRecords.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  Không có category nào
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
