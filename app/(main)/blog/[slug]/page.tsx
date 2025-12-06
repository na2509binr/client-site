// "use client";


// // import { news } from "@/app/types/new";
// import { usePathname } from "next/navigation";
// import NewDetail from "./news-detail";
// import { useEffect, useState } from "react";
// import { NewsAPI } from "@/app/utils/api";


// export default async function NewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
//     const pathname = usePathname();
//     const isHome = pathname === "/";


//     const [news, setNews] = useState<any[]>([]);
//     useEffect(() => {
//         NewsAPI.getAll().then(setNews);
//     }, []);


//     const { slug } = await params;
//     console.log("Slug:", slug);
//     console.log("news:", news);
//     const post = news.find(p => p.url?.endsWith(slug));
//     if (!post) return <h1>Product not found</h1>;

//     return (
//         <NewDetail post={post} />
//     );
// }







import DetailClient from "./detail-client";

export default async function NewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <DetailClient slug={slug} />;
}

