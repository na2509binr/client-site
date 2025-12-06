"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryProduct } from "@/app/types/category-product";

type Props = {
  initialData?: Partial<CategoryProduct>;
  fetchCategories: () => void;
};

export default function InsertUpdateCategoryForm({ initialData, fetchCategories }: Props) {
  const [activeTab, setActiveTab] = useState<"insert" | "update">("insert");
  const [formData, setFormData] = useState<Partial<CategoryProduct>>({
    title: "",
    isActive: true,
  });

  useEffect(() => {
    if (initialData && initialData.id) {
      setActiveTab("update");
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const type = (target as HTMLInputElement).type;
    let value: any = target.value;

    if (type === "checkbox") value = (target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      activeTab === "insert"
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/category-product/insert`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/category-product/update`;

    await fetch(url, {
      method: activeTab === "insert" ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({
      title: "",
      isActive: true,
    });
    setActiveTab("insert");
    fetchCategories();
  };

  return (
    <div className="w-full p-4 md:p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Quản lý Danh mục</h2>
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
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Tên danh mục</label>
              <input
                name="title"
                value={formData.title ?? ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Nhập tên danh mục"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive ?? true}
                onChange={handleChange}
              />
              <label className="font-medium">Active</label>
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
