"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { News } from "@/app/types/news";
import { NewsSection } from "@/app/types/news-section";
import NewsForm from "./news-update";

export default function UpdatePageClient() {
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");

  const [news, setNews] = useState<News | null>(null);
  const [sections, setSections] = useState<NewsSection[]>([]);

  useEffect(() => {
    if (!newsId) return;

    const fetchData = async () => {
      const newsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/new/get-by-id?id=${newsId}`
      );
      const newsData: News = await newsRes.json();

      const sectionsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news-section/get-by-news-id/?newsId=${newsId}`
      );
      const sectionsData: NewsSection[] = await sectionsRes.json();

      setNews(newsData);
      setSections(sectionsData);
    };

    fetchData();
  }, [newsId]);

  if (!news) return <div>Loading...</div>;

  return (
    <NewsForm
      newsData={news}
      sectionsData={sections}
      onSave={(updatedNews, updatedSections) => {
        console.log(updatedNews, updatedSections);
      }}
    />
  );
}
