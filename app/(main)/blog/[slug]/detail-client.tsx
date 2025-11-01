"use client";

import { useEffect, useState } from "react";
import NewDetail from "./news-detail";
import { NewsAPI } from "@/app/utils/api";

export default function DetailClient({ slug }: { slug: string }) {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("Slug in DetailClient:", slug);
  console.log("News data:", news);
  
  useEffect(() => {
      NewsAPI.getAll().then((res) => {
          setNews(res);
          setLoading(false);
        });
    }, []);
    
    if (loading) return <div>Loading...</div>;
    
    const post = news.find((p) => p.url?.endsWith(slug));
    console.log("Post:", post);
  if (!post) return <h1>Not found</h1>;

  return <NewDetail post={post} />;
}
