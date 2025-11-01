// "use client";

// import { News } from "@/app/types/news";
// import { NewsSection } from "@/app/types/news-section";
// import { useEffect, useState } from "react";
// import ImageUpload from "../../component-shared/ImageUpload";
// import { X } from "lucide-react";

// interface NewsFormProps {
//   newsData: News;
//   sectionsData: NewsSection[];
//   onSave: (news: News, sections: NewsSection[]) => void;
// }

// export default function NewsForm({ newsData, sectionsData, onSave }: NewsFormProps) {
//   const [news, setNews] = useState<News>(newsData);
//   const [sections, setSections] = useState<NewsSection[]>(sectionsData);
//   const [categoryNews, setCategoryNews] = useState<News[]>([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category-new/get-all`);
//       const data = await res.json();
//       setCategoryNews(data);
//     };
//     fetchNews();
//   }, []);


//   const handleSectionChange = (index: number, key: keyof NewsSection, value: any) => {
//     const newSections = [...sections];
//     newSections[index] = { ...newSections[index], [key]: value };
//     setSections(newSections);
//   };

//   const handleAddSection = () => {
//     const newSection: NewsSection & { isNew?: boolean } = {
//       id: 0,              // id = 0 cho biết là section mới
//       newsId: news.id || 0,
//       title: "",
//       content: "",
//       order: sections.length + 1,
//       isNew: true,         // đánh dấu section mới
//     };
//     setSections([...sections, newSection]);
//   };

//   const handleRemoveSection = async (index: number) => {
//     const sectionToDelete = sections[index];

//     try {
//       // Nếu section đã tồn tại trong CSDL (id > 0), gọi API xóa
//       if (sectionToDelete.id && sectionToDelete.id > 0) {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/delete`,
//           {
//             method: "DELETE",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ id: sectionToDelete.id }),
//           }
//         );

//         if (!res.ok) {
//           const errText = await res.text();
//           console.error("Failed to delete section:", errText);
//           throw new Error("Failed to delete section");
//         }
//       }

//       // Xóa khỏi state
//       const newSections = [...sections];
//       newSections.splice(index, 1);
//       setSections(newSections);

//     } catch (error: any) {
//       console.error(error);
//       alert("Có lỗi xảy ra khi xóa section!");
//     }
//   };


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // 1️⃣ Lưu news
//       const newsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/update`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(news),
//       });

//       if (!newsRes.ok) throw new Error("Failed to update news");
//       const savedNews: News = await newsRes.json();

//       // 2️⃣ Lưu sections
//       const savedSections: NewsSection[] = [];

//       for (const s of sections) {
//         let apiUrl = "";
//         let method = "";

//         if ((s as any).isNew) {
//           // Section mới -> gọi insert
//           apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/insert`;
//           method = "POST";
//         } else {
//           // Section cũ -> gọi update
//           apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/update`;
//           method = "PUT";
//         }

//         const sectionToSave = { ...s, newsId: savedNews.id };
//         const sectionRes = await fetch(apiUrl, {
//           method,
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(sectionToSave),
//         });

//         if (!sectionRes.ok) {
//           const errText = await sectionRes.text();
//           console.error("Failed to save section:", errText);
//           throw new Error("Failed to save section");
//         }

//         const savedSection: NewsSection = await sectionRes.json();
//         savedSections.push(savedSection);
//       }

//       // 3️⃣ Callback ra component cha
//       onSave(savedNews, savedSections);
//       alert("Cập nhật thành công!");
//     } catch (error: any) {
//       console.error(error);
//       alert("Có lỗi xảy ra khi lưu dữ liệu!");
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 p-4 bg-white rounded shadow">
//       <h2 className="text-xl font-bold">Cập nhật Bài viết</h2>

//       <div className="space-y-2">
//         <label className="block font-medium">Tiêu đề</label>
//         <input
//           type="text"
//           value={news.title}
//           onChange={(e) => setNews({ ...news, title: e.target.value })}
//           className="w-full border px-3 py-2 rounded"
//         />
//       </div>

//       <div className="space-y-2">
//         <label className="block font-medium">Mô tả</label>
//         <textarea
//           value={news.description}
//           onChange={(e) => setNews({ ...news, description: e.target.value })}
//           className="w-full border px-3 py-2 rounded"
//         />
//       </div>

//       <div className="w-50">
//         <label className="block mb-1 font-medium">Danh mục</label>

//         <select
//           name="categoryNewId"
//           value={news.categoryNewId ?? ""}
//           onChange={(e) =>
//             setNews({
//               ...news,
//               categoryNewId: Number(e.target.value),
//             })
//           }
//           className="w-full border rounded px-3 py-2 bg-white"
//         >
//           <option value="">-- Chọn danh mục --</option>

//           {categoryNews.map((cate: any) => (
//             <option key={cate.id} value={cate.id}>
//               {cate.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div >
//         <label className="block mb-1 font-medium">Ảnh</label>
//         {/* <ImageUpload
//           folderName="config-site"
//           onUpload={(url) => setNews({ ...news, image: url })}
//         />
//         {news.image && (
//           <div className="bg-gray-200 p-2 flex justify-center items-center mt-2 rounded-md">
//             <img
//               src={news.image}
//               alt={news.title ?? ""}
//               width={300}
//               height={300}
//               className="object-cover"
//             />
//           </div>
//         )} */}
//         <ImageUpload
//           folderName="news"
//           value={news.image}                         // <-- nhận giá trị từ form
//           onUpload={(url) => setNews({
//             ...news,
//             image: url                                 // <-- update form như input text
//           })}
//         />

//       </div>

//       <div className="flex items-center justify-between space-x-4">
//         <label className="flex items-center space-x-2">
//           <span>Thứ tự của bài viết</span>
//           <input
//             type="number"
//             value={news.order}
//             onChange={(e) => setNews({ ...news, order: Number(e.target.value) })}
//             className="w-16 border px-2 py-1 rounded"
//           />
//         </label>
//         <label className="flex items-center space-x-2">
//           <span>Tình trạng</span>
//           <input
//             type="checkbox"
//             checked={news.active}
//             onChange={(e) => setNews({ ...news, active: e.target.checked })}
//             className="w-4 h-4"
//           />
//         </label>
//       </div>

//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Nội dung các mục Bài viết</h3>
//         {sections.map((sec, idx) => (
//           <div key={sec.id} className="border p-3 rounded space-y-2 relative">
//             <button
//               type="button"
//               onClick={() => handleRemoveSection(idx)}
//               className="absolute top-1 right-1 text-white bg-red-500 hover:bg-white hover:text-red-700 rounded-sm p-px transition-all duration-100 ease-in-out pointer-cursor"
//             >
//               <X />
//             </button>

//             <div>
//               <label className="block font-medium">Tiêu đề đầu mục</label>
//               <input
//                 type="text"
//                 value={sec.title}
//                 onChange={(e) => handleSectionChange(idx, "title", e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-medium">Nội dung</label>
//               <textarea
//                 value={sec.content}
//                 onChange={(e) => handleSectionChange(idx, "content", e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-medium">Thứ tự</label>
//               <input
//                 type="number"
//                 value={sec.order}
//                 onChange={(e) => handleSectionChange(idx, "order", Number(e.target.value))}
//                 className="w-16 border px-2 py-1 rounded"
//               />
//             </div>
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={handleAddSection}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Thêm mục
//         </button>
//       </div>

//       <div>
//         <button
//           type="submit"
//           className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Lưu
//         </button>
//       </div>
//     </form>
//   );
// }





"use client";

import { News } from "@/app/types/news";
import { NewsSection } from "@/app/types/news-section";
import { useEffect, useState } from "react";
import ImageUpload from "../../component-shared/ImageUpload";
import { X } from "lucide-react";

// ✅ Thêm type Store
type Store = {
  id: number;
  name: string;
  address?: string;
};

interface NewsFormProps {
  newsData: News;
  sectionsData: NewsSection[];
  onSave: (news: News, sections: NewsSection[]) => void;
}

export default function NewsForm({ newsData, sectionsData, onSave }: NewsFormProps) {
  const [news, setNews] = useState<News>(newsData);
  const [sections, setSections] = useState<NewsSection[]>(sectionsData);
  const [categoryNews, setCategoryNews] = useState<News[]>([]);
  
  // ✅ Thêm state stores
  const [stores, setStores] = useState<Store[]>([]);
  const [loadingStores, setLoadingStores] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category-new/get-all`);
      const data = await res.json();
      setCategoryNews(data);
    };
    fetchNews();
  }, []);

  // ✅ Fetch danh sách stores
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store/get-all`);
        const data = await res.json();
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      } finally {
        setLoadingStores(false);
      }
    };
    fetchStores();
  }, []);

  const handleSectionChange = (index: number, key: keyof NewsSection, value: any) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], [key]: value };
    setSections(newSections);
  };

  const handleAddSection = () => {
    const newSection: NewsSection & { isNew?: boolean } = {
      id: 0,
      newsId: news.id || 0,
      title: "",
      content: "",
      order: sections.length + 1,
      isNew: true,
    };
    setSections([...sections, newSection]);
  };

  const handleRemoveSection = async (index: number) => {
    const sectionToDelete = sections[index];

    try {
      if (sectionToDelete.id && sectionToDelete.id > 0) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/delete`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: sectionToDelete.id }),
          }
        );

        if (!res.ok) {
          const errText = await res.text();
          console.error("Failed to delete section:", errText);
          throw new Error("Failed to delete section");
        }
      }

      const newSections = [...sections];
      newSections.splice(index, 1);
      setSections(newSections);

    } catch (error: any) {
      console.error(error);
      alert("Có lỗi xảy ra khi xóa section!");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      });

      if (!newsRes.ok) throw new Error("Failed to update news");
      const savedNews: News = await newsRes.json();

      const savedSections: NewsSection[] = [];

      for (const s of sections) {
        let apiUrl = "";
        let method = "";

        if ((s as any).isNew) {
          apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/insert`;
          method = "POST";
        } else {
          apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/update`;
          method = "PUT";
        }

        const sectionToSave = { ...s, newsId: savedNews.id };
        const sectionRes = await fetch(apiUrl, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sectionToSave),
        });

        if (!sectionRes.ok) {
          const errText = await sectionRes.text();
          console.error("Failed to save section:", errText);
          throw new Error("Failed to save section");
        }

        const savedSection: NewsSection = await sectionRes.json();
        savedSections.push(savedSection);
      }

      onSave(savedNews, savedSections);
      alert("Cập nhật thành công!");
    } catch (error: any) {
      console.error(error);
      alert("Có lỗi xảy ra khi lưu dữ liệu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Cập nhật Bài viết</h2>

      <div className="space-y-2">
        <label className="block font-medium">Tiêu đề</label>
        <input
          type="text"
          value={news.title}
          onChange={(e) => setNews({ ...news, title: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Mô tả</label>
        <textarea
          value={news.description}
          onChange={(e) => setNews({ ...news, description: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* ✅ Grid 2 cột cho Danh mục và Cửa hàng */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Danh mục</label>
          <select
            name="categoryNewId"
            value={news.categoryNewId ?? ""}
            onChange={(e) =>
              setNews({
                ...news,
                categoryNewId: Number(e.target.value),
              })
            }
            className="w-full border rounded px-3 py-2 bg-white"
          >
            <option value="">-- Chọn danh mục --</option>
            {categoryNews.map((cate: any) => (
              <option key={cate.id} value={cate.id}>
                {cate.title}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ DROPDOWN CHỌN STORE */}
        <div>
          <label className="block mb-1 font-medium">Cửa hàng</label>
          <select
            name="storeId"
            value={news.storeId ?? ""}
            onChange={(e) =>
              setNews({
                ...news,
                storeId: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            className="w-full border rounded px-3 py-2 bg-white"
            disabled={loadingStores}
          >
            <option value="">-- Không chọn cửa hàng --</option>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name} {store.address && `- ${store.address}`}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Để trống nếu bài viết không thuộc cửa hàng nào
          </p>
        </div>
      </div>

      {/* ✅ Hiển thị Store đã chọn */}
      {news.storeId && (
        <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2 flex items-center gap-2">
          <span className="text-blue-600 font-medium">📍 Cửa hàng:</span>
          <span>{stores.find(s => s.id === news.storeId)?.name}</span>
          <button
            type="button"
            onClick={() => setNews({ ...news, storeId: null })}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            ✕ Bỏ chọn
          </button>
        </div>
      )}

      <div>
        <label className="block mb-1 font-medium">Ảnh</label>
        <ImageUpload
          folderName="news"
          value={news.image}
          onUpload={(url) => setNews({ ...news, image: url })}
        />
      </div>

      <div className="flex items-center justify-between space-x-4">
        <label className="flex items-center space-x-2">
          <span>Thứ tự của bài viết</span>
          <input
            type="number"
            value={news.order}
            onChange={(e) => setNews({ ...news, order: Number(e.target.value) })}
            className="w-16 border px-2 py-1 rounded"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span>Tình trạng</span>
          <input
            type="checkbox"
            checked={news.active}
            onChange={(e) => setNews({ ...news, active: e.target.checked })}
            className="w-4 h-4"
          />
        </label>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Nội dung các mục Bài viết</h3>
        {sections.map((sec, idx) => (
          <div key={sec.id} className="border p-3 rounded space-y-2 relative">
            <button
              type="button"
              onClick={() => handleRemoveSection(idx)}
              className="absolute top-1 right-1 text-white bg-red-500 hover:bg-white hover:text-red-700 rounded-sm p-px transition-all duration-100 ease-in-out pointer-cursor"
            >
              <X />
            </button>

            <div>
              <label className="block font-medium">Tiêu đề đầu mục</label>
              <input
                type="text"
                value={sec.title}
                onChange={(e) => handleSectionChange(idx, "title", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Nội dung</label>
              <textarea
                value={sec.content}
                onChange={(e) => handleSectionChange(idx, "content", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Thứ tự</label>
              <input
                type="number"
                value={sec.order}
                onChange={(e) => handleSectionChange(idx, "order", Number(e.target.value))}
                className="w-16 border px-2 py-1 rounded"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddSection}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Thêm mục
        </button>
      </div>

      <div>
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Lưu
        </button>
      </div>
    </form>
  );
}