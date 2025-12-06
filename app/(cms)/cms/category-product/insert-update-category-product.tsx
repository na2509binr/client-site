"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryProduct } from "@/app/types/category-product";
// import { useImageUpload } from "@/app/utils/upload-image";
import ImageUpload from "../component-shared/ImageUpload";

type Props = {
  initialData?: Partial<CategoryProduct>;
  fetchCategories: () => void;
};

export default function InsertUpdateCategoryForm({ initialData, fetchCategories }: Props) {
  const [activeTab, setActiveTab] = useState<"insert" | "update">("insert");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState<Partial<CategoryProduct>>({
    title: "",
    desciption: "",
    image: "",
    slug: "",
    parentId: undefined,
    isActive: true,
    showMenu: true,
  });


  useEffect(() => {
    if (initialData && initialData.id) {
      setActiveTab("update");
      setFormData(initialData);
    }

    const fetchCategories = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category-product/get-all`);
      const data = await res.json();
      setCategories(data); // data phải là array [{ id, title, ... }]
    };

    fetchCategories();
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
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
      desciption: "",
      image: "",
      slug: "",
      parentId: undefined,
      isActive: true,
      showMenu: true,
    });
    setActiveTab("insert");
    fetchCategories();
  };




  return (
    // <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
    <div className="w-full p-4 md:p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Quản lý Danh mục sản phẩm</h2>
      <div className="flex border-b mb-4">
        {["insert", "update"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 py-2 ${activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
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
          className="space-y-4 grid grid-cols-2 gap-4"
        >
          <div>
            <label className="block mb-1 font-medium">Tiêu đề</label>
            <input
              name="title"
              value={formData.title ?? ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>



          {/* <div >
            <label className="block mb-1 font-medium">Upload Ảnh</label>

            <ImageUpload
              folderName="category-product"
              onUpload={(url) => setFormData({ ...formData, image: url })}
            />
          </div> */}


                      <div >
                        <label className="block mb-1 font-medium">Ảnh</label>
                        {/* <ImageUpload
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
                        )} */}
                        <ImageUpload
    folderName="category-product"
    value={formData.image}                         // <-- nhận giá trị từ form
    onUpload={(url) => setFormData({
        ...formData,
        image: url                                 // <-- update form như input text
    })}
/>

                      </div>

          <div className="col-span-3">
            <label className="block mb-1 font-medium">Mô tả</label>
            <textarea
              name="desciption"
              value={formData.desciption ?? ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>



          <div className="flex items-center space-x-3 col-span-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="isActive" checked={formData.isActive ?? true} onChange={handleChange} />
              <span>Tình trạng</span>
            </label>

            {/* <label className="flex items-center space-x-2">
              <input type="checkbox" name="showMenu" checked={formData.showMenu ?? true} onChange={handleChange} />
              <span>Hi</span>
            </label> */}
          </div>

          <div className="col-span-2">

            <button
              type="submit"
              className={`w-full  py-2 rounded text-white ${activeTab === "insert" ? "bg-blue-500" : "bg-green-500"
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
