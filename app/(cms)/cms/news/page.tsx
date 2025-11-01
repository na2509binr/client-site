"use client";

import { useEffect, useState } from "react";
import { News } from "@/app/types/news";
import InsertUpdateNews from "./insert-update-news";
import TableNews from "./table-news";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

export default function NewsPage() {
    const [records, setRecords] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);
    const [updateData, setUpdateData] = useState<Partial<News>>({});

    const fetchNews = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/get-all`);
            const data = await res.json();
            setRecords(data);
        } catch (err) {
            console.error("Fetch News error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const handleSelect = (record: News) => {
        setUpdateData(record);
    };

    const handleDelete = async (id: number) => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/delete?id=${id}`, {
            method: "DELETE",
        });
        fetchNews();
    };

    return (
        <div className="space-y-8">
            {/* <InsertUpdateNews initialData={updateData} fetchNews={fetchNews} /> */}
            <div className="flex justify-end items-center">
                <Link
                    href={`/cms/news/insert`} // truyền id qua query param
                    className=" text-white px-3 py-1 rounded bg-green-400 text-lg font-bold "
                >
                    <div className="flex justify-between items-center gap-2">
                        <CirclePlus />
                        Thêm mới
                    </div>
                </Link>
            </div>
            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <TableNews records={records} onSelect={handleSelect} onDelete={handleDelete} />
            )}
        </div>
    );
}
