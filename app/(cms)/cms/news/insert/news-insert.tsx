"use client";

import { News } from "@/app/types/news";
import { NewsSection } from "@/app/types/news-section";
import { useEffect, useState } from "react";
import ImageUpload from "../../component-shared/ImageUpload";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface NewsCreateProps {
  onSave: (news: News, sections: NewsSection[]) => void;
}

export default function NewsCreate({ onSave }: NewsCreateProps) {
  const router = useRouter();

  const [news, setNews] = useState<News>({
    id: 0,
    title: "",
    description: "",
    image: "",
    order: 1,
    active: true,
    view: 0,
    author: "",
    categoryNewId: 0,
  });
  const [categoryNews, setCategoryNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category-new/get-all`);
      const data = await res.json();
      setCategoryNews(data);
    };
    fetchNews();
  }, []);
  // Danh sách section mặc định rỗng
  const [sections, setSections] = useState<
    (NewsSection & { isNew?: boolean })[]
  >([]);

  const handleSectionChange = (index: number, key: keyof NewsSection, value: any) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], [key]: value };
    setSections(newSections);
  };

  const handleAddSection = () => {
    const newSection: NewsSection & { isNew?: boolean } = {
      id: 0,
      newsId: 0,
      title: "",
      content: "",
      order: sections.length + 1,
      isNew: true,
    };
    setSections([...sections, newSection]);
  };

  const handleRemoveSection = (index: number) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1️⃣ Insert bài viết
      const newsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/insert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      });

      if (!newsRes.ok) throw new Error("Failed to create news");
      const savedNews: News = await newsRes.json();

      // 2️⃣ Insert tất cả section mới
      const savedSections: NewsSection[] = [];

      for (const s of sections) {
        const sectionToSave = { ...s, newsId: savedNews.id };

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/insert`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sectionToSave),
          }
        );

        if (!res.ok) {
          const txt = await res.text();
          console.error("Failed to insert section:", txt);
          throw new Error("Failed to insert section");
        }

        const savedSection = await res.json();
        savedSections.push(savedSection);
      }

      onSave(savedNews, savedSections);
      alert("Tạo bài viết thành công!");
      router.push("/cms/news");
      // Reset form
      setNews({
        id: 0,
        title: "",
        description: "",
        image: "",
        order: 1,
        active: true,
        view: 0,
        author: "",
        categoryNewId: 0,
      });

      setSections([]);

    } catch (error) {
      console.error(error);
      alert("Có lỗi khi tạo bài viết!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Thêm mới Bài viết</h2>

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

      <div className="w-50">
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

      <div>
        <label className="block mb-1 font-medium">Ảnh</label>
        {/* <ImageUpload
          folderName="config-site"
          onUpload={(url) => setNews({ ...news, image: url })}
        />

        {news.image && (
          <div className="bg-gray-200 p-2 flex justify-center items-center mt-2 rounded-md">
            <img
              src={news.image}
              alt={news.title}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        )} */}
        <ImageUpload
          folderName="news"
          value={news.image}                         // <-- nhận giá trị từ form
          onUpload={(url) => setNews({
            ...news,
            image: url                                 // <-- update form như input text
          })}
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <span>Thứ tự</span>
          <input
            type="number"
            value={news.order}
            onChange={(e) => setNews({ ...news, order: Number(e.target.value) })}
            className="w-16 border px-2 py-1 rounded"
          />
        </label>

        <label className="flex items-center space-x-2">
          <span>Kích hoạt</span>
          <input
            type="checkbox"
            checked={news.active}
            onChange={(e) => setNews({ ...news, active: e.target.checked })}
            className="w-4 h-4"
          />
        </label>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Các mục nội dung</h3>
        {sections.map((sec, idx) => (
          <div key={idx} className="border p-3 rounded relative space-y-2">
            <button
              type="button"
              onClick={() => handleRemoveSection(idx)}
              className="absolute top-1 right-1 text-white bg-red-500 rounded-sm p-px"
            >
              <X />
            </button>

            <div>
              <label className="block font-medium">Tiêu đề mục</label>
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
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Thêm mục
        </button>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Tạo mới
      </button>
    </form>
  );
}
