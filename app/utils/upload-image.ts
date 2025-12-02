// import { useState } from "react";

// type UploadResult = {
//   filePath: string;
// };

// export const useImageUpload = (apiUrl: string) => {
//   const [preview, setPreview] = useState<string>("");

//   const uploadFile = async (file: File, folderName: string): Promise<UploadResult | null> => {
//     const reader = new FileReader();
//     reader.onloadend = () => setPreview(reader.result as string);
//     reader.readAsDataURL(file);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("folderName", folderName);

//     try {
//       const res = await fetch(apiUrl, { method: "POST", body: formData });
//       if (!res.ok) throw new Error("Upload failed");
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

//   return { preview, uploadFile };
// };



import { useState } from "react";

export const useImageUpload = (apiUrl: string) => {
  const [preview, setPreview] = useState<string>("");

  const uploadFile = async (file: File, folderName: string): Promise<string | null> => {
    // Preview cục bộ
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    // Gửi file lên API
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folderName", folderName);

    try {
      const res = await fetch(apiUrl, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      return data.filePath; // đường dẫn FE dùng trực tiếp
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return { preview, uploadFile };
};

