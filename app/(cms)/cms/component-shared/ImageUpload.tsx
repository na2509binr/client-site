// "use client";

// import { useState } from "react";

// interface ImageUploadProps {
//     folderName: string;
// }

// export default function ImageUpload({ folderName }: ImageUploadProps) {
//     const [imageUrl, setImageUrl] = useState("");

//     const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (!file) return;

//         const form = new FormData();
//         form.append("file", file);
//         form.append("folder", folderName);

//         const res = await fetch("/api/upload", {
//             method: "POST",
//             body: form,
//         });

//         const data = await res.json();
//         setImageUrl(data.url);
//     };

//     return (
//         <div className="flex flex-col items-center space-y-4 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">
//             <label className="cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:text-blue-500">
//                 <svg
//                     className="w-10 h-10 mb-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6" />
//                 </svg>
//                 <span className="text-sm font-medium">Click or drag file to upload</span>
//                 <input type="file" onChange={handleUpload} className="hidden" />
//             </label>

//             {imageUrl && (
//                 <div className="w-48 h-48 relative">
//                     <img
//                         src={imageUrl}
//                         alt="Preview"
//                         className="w-full h-full object-cover rounded-lg shadow"
//                     />
//                     <span className="absolute top-1 right-1 bg-white px-2 py-1 text-xs rounded shadow cursor-pointer"
//                         onClick={() => setImageUrl("")}>
//                         Remove
//                     </span>
//                 </div>
//             )}
//         </div>

//     );
// }







// "use client";

// import { useState } from "react";

// interface ImageUploadProps {
//   folderName: string;
//   onUpload?: (url: string) => void; // callback trả URL lên component cha
// }

// export default function ImageUpload({ folderName, onUpload }: ImageUploadProps) {
//   const [imageUrl, setImageUrl] = useState("");

//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const form = new FormData();
//     form.append("file", file);
//     form.append("folder", folderName);

//     const res = await fetch("/api/upload", { method: "POST", body: form });
//     const data = await res.json();

//     setImageUrl(data.url);

//     if (onUpload) {
//       onUpload(data.url); // trả URL lên component cha
//     }
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">
//       <label className="cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:text-blue-500">
//         <svg
//           className="w-10 h-10 mb-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6" />
//         </svg>
//         <span className="text-sm font-medium">Click or drag file to upload</span>
//         <input type="file" onChange={handleUpload} className="hidden" />
//       </label>

//       {imageUrl && (
//         <div className="w-48 h-48 relative bg-gray-200">
//           <img
//             src={imageUrl}
//             alt="Preview"
//             className="w-full h-full object-cover rounded-lg shadow"
//           />
//           <span
//             className="absolute top-1 right-1 bg-white px-2 py-1 text-xs rounded shadow cursor-pointer"
//             onClick={() => setImageUrl("")}
//           >
//             Remove
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }








"use client";

import { useState, useEffect } from "react";

interface ImageUploadProps {
  folderName: string;
  value?: string;                // <-- nhận dữ liệu từ parent
  onUpload?: (url: string) => void; 
}

export default function ImageUpload({ folderName, value = "", onUpload }: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState("");

  // Sync từ parent sang local UI (edit mode)
  useEffect(() => {
    setImageUrl(value);
  }, [value]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);
    form.append("folder", folderName);

    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();

    setImageUrl(data.url);
    onUpload?.(data.url); // trả URL lên parent
  };

  const handleRemove = () => {
    setImageUrl("");
    onUpload?.("");
  };

  return (
    <div className="flex flex-col items-center space-y-4 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">
      <label className="cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:text-blue-500">
        <svg
          className="w-10 h-10 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6" />
        </svg>
        <span className="text-sm font-medium">Click or drag file to upload</span>
        <input type="file" onChange={handleUpload} className="hidden" />
      </label>

      {imageUrl && (
        <div className="w-48 h-48 relative bg-gray-200">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg shadow"
          />

          <span
            className="absolute top-1 right-1 bg-white px-2 py-1 text-xs rounded shadow cursor-pointer"
            onClick={handleRemove}
          >
            Remove
          </span>
        </div>
      )}
    </div>
  );
}
