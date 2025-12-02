// import { User } from "@/app/types/user";
// import { useState } from "react";

// type Props = {
//   records: User[];
//   onSelect: (record: User) => void;
//   onDelete: (id: string) => void;
// };

// export default function TableUser({ records, onSelect, onDelete }: Props) {
//   const [selectedId, setSelectedId] = useState<string | null>(null);

//   return (
//     <div className="overflow-x-auto border rounded shadow">
//       <table className="min-w-full">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-4 py-2 text-left">Select</th>
//             <th className="px-4 py-2 text-left">Họ và Tên</th>
//             <th className="px-4 py-2 text-left">Email</th>
//             <th className="px-4 py-2 text-left">Mật khẩu</th>
//             <th className="px-4 py-2 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y">
//           {records.map((u) => (
//             <tr key={u.id} className="hover:bg-gray-100">
//               <td className="px-4 py-2">
//                 <input
//                   type="radio"
//                   checked={selectedId === u.id}
//                   onChange={() => {
//                     setSelectedId(u.id);
//                     onSelect(u);
//                   }}
//                 />
//               </td>
//               <td className="px-4 py-2">{u.displayName}</td>
//               <td className="px-4 py-2">{u.email}</td>
//               <td className="px-4 py-2">{u.passwordHash}</td>
//               <td className="px-4 py-2 text-center">
//                 <button
//                   onClick={() => onDelete(u.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Xóa
//                 </button>
//               </td>
//             </tr>
//           ))}

//           {records.length === 0 && (
//             <tr>
//               <td colSpan={4} className="text-center py-4 text-gray-500">
//                 Không có bản ghi nào
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }







import { User } from "@/app/types/user";
import { useState } from "react";

type Props = {
  records: User[];
  onSelect: (record: User) => void;
  onDelete: (id: string) => void;
  pageSize?: number;
};

export default function TableUser({ records, onSelect, onDelete, pageSize = 10 }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
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
              <th className="px-4 py-2 text-left">Select</th>
              <th className="px-4 py-2 text-left">Họ và Tên</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Mật khẩu</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentRecords.map((u) => (
              <tr key={u.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">
                  <input
                    type="radio"
                    checked={selectedId === u.id}
                    onChange={() => {
                      setSelectedId(u.id);
                      onSelect(u);
                    }}
                  />
                </td>
                <td className="px-4 py-2">{u.displayName}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.passwordHash}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onDelete(u.id)}
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
                  Không có bản ghi nào
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
