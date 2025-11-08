import { news } from "@/app/types/new";
import NewDetail from "./news-detail";


export default async function NewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = news.find(p => p.url?.endsWith(slug));
    if (!post) return <h1>Product not found</h1>;

    return (
        <NewDetail post={post} />
    );
}
