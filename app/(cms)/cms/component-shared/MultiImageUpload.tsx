// "use client";

// import { useState } from "react";

// interface MultiImageUploadProps {
//   folderName: string;
//   onUpload?: (urls: string) => void; // trả về string "url1,url2,url3"
// }

// export default function MultiImageUpload({ folderName, onUpload }: MultiImageUploadProps) {
//   const [images, setImages] = useState<string>(""); // lưu chuỗi

//   const imageList = images
//     .split(",")
//     .filter((x) => x.trim() !== ""); // convert sang array để hiển thị

//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     let newUrls: string[] = [];

//     for (const file of Array.from(files)) {
//       const form = new FormData();
//       form.append("file", file);
//       form.append("folder", folderName);

//       const res = await fetch("/api/upload", { method: "POST", body: form });
//       const data = await res.json();

//       newUrls.push(data.url);
//     }

//     // gộp vào chuỗi hiện tại
//     const updatedString = [...imageList, ...newUrls].join(",");
//     setImages(updatedString);

//     onUpload?.(updatedString);
//   };

//   const removeImage = (url: string) => {
//     const updated = imageList.filter((x) => x !== url).join(",");
//     setImages(updated);
//     onUpload?.(updated);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">

//       <label className="cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:text-blue-500">
//         <svg
//           className="w-10 h-10 mb-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6"
//           />
//         </svg>

//         <span className="text-sm font-medium">Click or drag files to upload</span>
//         <input type="file" multiple onChange={handleUpload} className="hidden" />
//       </label>

//       {imageList.length > 0 && (
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           {imageList.map((url) => (
//             <div key={url} className="w-32 h-32 relative bg-gray-200">
//               <img
//                 src={url}
//                 alt="Preview"
//                 className="w-full h-full object-cover rounded-lg shadow"
//               />

//               <span
//                 className="absolute top-1 right-1 bg-white px-2 py-1 text-xs rounded shadow cursor-pointer"
//                 onClick={() => removeImage(url)}
//               >
//                 Remove
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";

interface MultiImageUploadProps {
    folderName: string;
    value?: string;                 // <-- nhận string từ parent
    onUpload?: (urls: string) => void;
}

export default function MultiImageUpload({ folderName, value = "", onUpload }: MultiImageUploadProps) {
    // state local để hiển thị UI
    const [images, setImages] = useState<string>("");

    // sync dữ liệu từ parent vào local UI (edit mode)
    useEffect(() => {
        setImages(value);
    }, [value]);

    const imageList = images
        .split(",")
        .map((x) => x.trim())
        .filter((x) => x !== "");

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        let newUrls: string[] = [];

        for (const file of Array.from(files)) {
            const form = new FormData();
            form.append("file", file);
            form.append("folder", folderName);

            const res = await fetch("/api/upload", { method: "POST", body: form });
            const data = await res.json();

            newUrls.push(data.url);
        }

        const updatedString = [...imageList, ...newUrls].join(",");

        setImages(updatedString);
        onUpload?.(updatedString); // <-- chuẩn
    };

    const removeImage = (url: string) => {
        const updated = imageList.filter((x) => x !== url).join(",");

        console.log("Updated string after removal:", updated);
        setImages(updated);
        onUpload?.(updated); // <-- cũng trả string
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
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6"
                    />
                </svg>

                <span className="text-sm font-medium">Click or drag files to upload</span>
                <input type="file" multiple onChange={handleUpload} className="hidden" />
            </label>

            {imageList.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {imageList.map((url) => (
                        <div key={url} className="w-32 h-32 relative bg-gray-200">
                            <img
                                src={url}
                                alt="Preview"
                                className="w-full h-full object-cover rounded-lg shadow"
                            />

                            <span
                                className="absolute top-1 right-1 bg-white px-2 py-1 text-xs rounded shadow cursor-pointer"
                                onClick={() => removeImage(url)}
                            >
                                Remove
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
