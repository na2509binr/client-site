"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { News } from "@/app/types/news";
import ImageUpload from "../component-shared/ImageUpload";

type Props = {
    initialData?: Partial<News>;
    fetchNews: () => void;
};

export default function InsertUpdateNews({ initialData, fetchNews }: Props) {
    const [activeTab, setActiveTab] = useState<"insert" | "update">("insert");

    const [formData, setFormData] = useState<Partial<News>>({
        title: "",
        description: "",
        view: 0,
        image: "",
        author: "",
        active: true,
        order: 0,
    });

    useEffect(() => {
        if (initialData && initialData.id) {
            setActiveTab("update");
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const api = activeTab === "insert"
            ? "/api/new/insert"
            : "/api/new/update";

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}${api}`, {
            method: activeTab === "insert" ? "POST" : "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setFormData({
            title: "",
            description: "",
            view: 0,
            image: "",
            author: "",
            active: true,
            order: 0,
        });

        setActiveTab("insert");
        fetchNews();
    };


    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, field: "image") => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];

        // preview cục bộ
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, [field]: reader.result as string });
        };
        reader.readAsDataURL(file);

    };

    return (
        <div className="w-full mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Quản lý Bài viết</h2>

            <div className="flex border-b mb-4">
                {["insert", "update"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`flex-1 py-2 ${activeTab === tab
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500 hover:text-blue-500"
                            }`}
                    >
                        {tab === "insert" ? "Thêm mới" : "Cập nhật"}
                    </button>
                ))}
            </div>


            <AnimatePresence mode="wait">
                <motion.form
                    key={activeTab}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >

                    <div>
                        <label className="block mb-1 font-medium">Tiêu đề</label>
                        <input
                            name="title"
                            value={formData.title ?? ""}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Nhập tiêu đề"
                        />
                    </div>

                    <div >
                        <label className="block mb-1 font-medium">Ảnh</label>
                        <ImageUpload
                            folderName="config-site"
                            onUpload={(url) => setFormData({ ...formData, image: url })}
                        />
                        {formData.image && (
                            <div className="bg-gray-200 p-2 flex justify-center items-center mt-2 rounded-md">
                                <img
                                    src={formData.image}
                                    alt={formData.title ?? ""}
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Tình trạng</label>
                        <input
                            type="checkbox"
                            name="active"
                            checked={formData.active ?? true}
                            onChange={handleChange}
                        />{" "}
                        Hiển thị
                    </div>

                    <div className="col-span-3">
                        <div >
                            <label>Mô tả</label>
                            <textarea name="description" value={formData.description ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                        </div>
                    </div>



                    <div className="col-span-3">

                        <button
                            type="submit"
                            className={`w-full py-2 rounded text-white ${activeTab === "insert"
                                ? "bg-blue-500 hover:bg-blue-600"
                                : "bg-green-500 hover:bg-green-600"
                                }`}
                        >
                            {activeTab === "insert" ? "Thêm mới" : "Cập nhật"}
                        </button>
                    </div>
                </motion.form>
            </AnimatePresence>
        </div>
    );
}
