"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryProduct } from "@/app/types/category-product";
import { useImageUpload } from "@/app/utils/upload-image";

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


  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, field: "image") => {
  //   if (!e.target.files || e.target.files.length === 0) return;
  //   const file = e.target.files[0];

  //   // preview cục bộ
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setFormData({ ...formData, [field]: reader.result as string });
  //   };
  //   reader.readAsDataURL(file);

  // };

// const handleFileChange = async (
//   e: React.ChangeEvent<HTMLInputElement>, 
//   field: "image", 
//   folderName: string // tên thư mục truyền vào
// ) => {
//   if (!e.target.files || e.target.files.length === 0) return;
//   const file = e.target.files[0];

//   // 1. Preview cục bộ
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setFormData({ ...formData, [field]: reader.result as string });
//   };
//   reader.readAsDataURL(file);

//   // 2. Tạo đường dẫn dựa trên ngày hiện tại
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");

//   const filePath = `public/${folderName}/${year}/${month}/${day}/${file.name}`;

//   // 3. Log ra console
//   console.log("File path:", filePath);
// };


  // const { preview, uploadFile } = useImageUpload(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`);
  // const [imagePath, setImagePath] = useState("");

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files?.length) return;
  //   const file = e.target.files[0];
  //   const result = await uploadFile(file, "images");
  //   if (result) setImagePath(result.filePath);
  // };

  const { preview, uploadFile } = useImageUpload("/api/upload");
  const [imagePath, setImagePath] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const path = await uploadFile(file, "images");
    if (path) setImagePath(path);
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

          {/* <div>
            <label>Ảnh</label>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} className="w-full border rounded px-3 py-2" />
            {formData.image && <img src={formData.image} alt="Ảnh" className="mt-1 w-24 h-24 object-cover rounded " />}
          </div> */}

              <div className="space-y-2">
      <label className="block font-medium">Upload ảnh</label>
      <input type="file" accept="image/*" onChange={handleChange} className="border rounded px-3 py-2 w-full" />
      {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded mt-2" />}
      {imagePath && <p className="text-sm text-gray-500">Saved path: {imagePath}</p>}
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
