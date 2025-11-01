"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store } from "@/app/types/store";
import ImageUpload from "../component-shared/ImageUpload";

type Props = {
    initialData?: Partial<Store>;
    fetchStores: () => void;
};

export default function InsertUpdateStoreForm({ initialData, fetchStores }: Props) {
    const [activeTab, setActiveTab] = useState<"insert" | "update">("insert");
    const [formData, setFormData] = useState<Partial<Store>>({
        name: "",
        address: "",
        phone: "",
        city: "",
        ward: "",
        image: "",
        note: "",
    });

    useEffect(() => {
        if (initialData && initialData.id) {
            setActiveTab("update");
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const url =
            activeTab === "insert"
                ? `${process.env.NEXT_PUBLIC_API_URL}/api/store/insert`
                : `${process.env.NEXT_PUBLIC_API_URL}/api/store/update`;

        await fetch(url, {
            method: activeTab === "insert" ? "POST" : "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setFormData({
            name: "",
            address: "",
            phone: "",
            city: "",
            ward: "",
            image: "",
            note: "",
        });

        setActiveTab("insert");
        fetchStores();
    };

    return (
        <div className="w-full p-4 md:p-8 bg-white">
            <h2 className="text-2xl font-bold mb-4">Quản lý cửa hàng</h2>

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
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* LEFT */}
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Tên cửa hàng</label>
                            <input
                                name="name"
                                value={formData.name || ""}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Địa chỉ</label>
                            <input
                                name="address"
                                value={formData.address || ""}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Số điện thoại</label>
                            <input
                                name="phone"
                                value={formData.phone || ""}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Ảnh</label>
                            {/* <ImageUpload
                                folderName="store"
                                onUpload={(url) => setFormData({ ...formData, image: url })}
                            />
                                                        {formData.image && (
                                <div className="bg-gray-200 p-2 flex justify-center items-center mt-2 rounded-md">
                                    <img
                                        src={formData.image}
                                        alt={formData.name ?? ""}
                                        width={300}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            )} */}

                                    <ImageUpload
                                      folderName="store"
                                      value={formData.image}                         // <-- nhận giá trị từ form
                                      onUpload={(url) => setFormData({
                                        ...formData,
                                        image: url                                 // <-- update form như input text
                                      })}
                                    />

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Thành phố</label>
                            <input
                                name="city"
                                value={formData.city || ""}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Phường</label>
                            <input
                                name="ward"
                                value={formData.ward || ""}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Ghi chú</label>
                            <textarea
                                name="note"
                                value={formData.note || ""}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 h-24"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
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
