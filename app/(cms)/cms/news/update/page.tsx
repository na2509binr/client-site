"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { News } from "@/app/types/news";
import { NewsSection } from "@/app/types/news-section";
import NewsForm from "./news-update";

export default function NewsSectionPage() {
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id"); // lấy id từ URL
  const [news, setNews] = useState<News | null>(null);
  const [sections, setSections] = useState<NewsSection[]>([]);

  useEffect(() => {
    if (!newsId) return;

    // Giả lập fetch từ API hoặc dữ liệu mock
    const fetchData = async () => {
      // TODO: thay bằng API thật của bạn
      const newsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/get-by-id?id=${newsId}`);
      const newsData: News = await newsRes.json();

      const sectionsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-section/get-by-news-id/?newsId=${newsId}`);
      const sectionsData: NewsSection[] = await sectionsRes.json();

      setNews(newsData);
      setSections(sectionsData);
    };

    fetchData();
    console.log("Fetched newsId:", newsId);
    console.log("Fetched news:", news);
  }, [newsId]);

  const handleSave = (updatedNews: News, updatedSections: NewsSection[]) => {
    // TODO: gọi API để lưu
    console.log("Save news:", updatedNews);
    console.log("Save sections:", updatedSections);
  };

  if (!news) return <div>Loading...</div>;

  return <NewsForm newsData={news} sectionsData={sections} onSave={handleSave} />;
}
