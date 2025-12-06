"use client";


import { News } from "@/app/types/news";
import { NewsSection } from "@/app/types/news-section";
import NewsCreate from "./news-insert";

export default function NewsCreatePage() {
  const handleSave = (news: News, sections: NewsSection[]) => {
    console.log("Created news:", news);
    console.log("Created sections:", sections);
  };

  return <NewsCreate onSave={handleSave} />;
}
