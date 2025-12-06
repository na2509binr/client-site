"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/app/types/menu";
import { MenuAPI } from "@/app/utils/api";

type Props = {
    initialData?: Partial<MenuItem>;
    fetchMenus: () => void;
};

export default function InsertUpdateMenuForm({ initialData, fetchMenus }: Props) {
    const [activeTab, setActiveTab] = useState<"insert" | "update">("insert");

    const [formData, setFormData] = useState<Partial<MenuItem>>({
        title: "",
        url: "",
        children: [],
    });

    useEffect(() => {
        if (initialData && initialData.id) {
            setActiveTab("update");
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const url =
            activeTab === "insert"
                ? `${process.env.NEXT_PUBLIC_API_URL}/api/menu/insert`
                : `${process.env.NEXT_PUBLIC_API_URL}/api/menu/update`;

        await fetch(url, {
            method: activeTab === "insert" ? "POST" : "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setFormData({ title: "", url: "" });
        setActiveTab("insert");
        fetchMenus();
    };

    return (
        <div className="w-full p-4 md:p-8 bg-white">
            <h2 className="text-2xl font-bold mb-4">Quản lý Menu</h2>

            <div className="flex border-b mb-6">
                {["insert", "update"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`flex-1 py-3 text-lg font-medium ${
                            activeTab === tab
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
                    className="grid grid-cols-1 gap-6"
                >
                    <div>
                        <label className="block mb-1 font-medium">Tiêu đề</label>
                        <input
                            name="title"
                            value={formData.title ?? ""}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Nhập tiêu đề menu"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">URL</label>
                        <input
                            name="url"
                            value={formData.url ?? ""}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="https://example.com/page"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`w-full py-3 rounded text-white ${
                                activeTab === "insert"
                                    ? "bg-blue-500 hover:bg-blue-600"
                                    : "bg-green-500 hover:bg-green-600"
                            }`}
                        >
                            {activeTab === "insert" ? "Insert" : "Update"}
                        </button>
                    </div>
                </motion.form>
            </AnimatePresence>
        </div>
    );
}
