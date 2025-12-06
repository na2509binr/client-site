// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
// import { SiTiktok, SiX, SiZalo } from "react-icons/si";
// import { ConfigSite } from "@/app/types/config-stie";

// export default function UpdateConfigSiteForm() {
//   const [formData, setFormData] = useState<Partial<ConfigSite>>({});
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/configsite/get`);
//         const data = await res.json();
//         setFormData(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);
//     try {
//       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/configsite/update`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       alert("Cập nhật thành công!");
//     } catch (err) {
//       console.error(err);
//       alert("Có lỗi xảy ra!");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) return <p>Đang tải cấu hình...</p>;

//   const socialFields: { name: keyof ConfigSite; icon: JSX.Element; placeholder: string }[] = [
//     { name: "facebook", icon: <FaFacebookF className="text-blue-600" />, placeholder: "Facebook" },
//     { name: "zalo", icon: <SiZalo className="text-blue-500" />, placeholder: "Zalo" },
//     { name: "instagram", icon: <FaInstagram className="text-pink-500" />, placeholder: "Instagram" },
//     { name: "linkedin", icon: <FaLinkedin className="text-blue-700" />, placeholder: "LinkedIn" },
//     { name: "tiktok", icon: <SiTiktok className="text-black" />, placeholder: "TikTok" },
//     { name: "twitter", icon: <FaTwitter className="text-blue-400" />, placeholder: "Twitter" },
//     { name: "x", icon: <SiX className="text-black" />, placeholder: "X" },
//     { name: "youtube", icon: <FaYoutube className="text-red-600" />, placeholder: "YouTube" },
//     { name: "pinterest", icon: <FaPinterest className="text-red-500" />, placeholder: "Pinterest" },
//     { name: "liveChat", icon: <div className="font-bold">💬</div>, placeholder: "Live Chat" },
//   ];

//   return (
//     <div className="max-w-full mx-auto p-6 bg-white rounded shadow space-y-6">
//       <h2 className="text-xl font-semibold border-b pb-2">Cập nhật thông tin website</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">

//         {/* Thông tin chung */}
//         <section className="space-y-4">
//           <h3 className="font-semibold text-gray-700">Thông tin chung</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label>Email</label>
//               <input name="email" value={formData.email ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//             <div>
//               <label>Hotline</label>
//               <input name="hotline" value={formData.hotline ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//             <div className="col-span-2">
//               <label>Mô tả</label>
//               <textarea name="description" value={formData.description ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//             {/* <div>
//               <label>Thông tin liên lạc</label>
//               <textarea name="infoContact" value={formData.infoContact ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div> */}
//             <div className="col-span-2">
//               <label>Nội dung chân trang</label>
//               <textarea name="infoFooter" value={formData.infoFooter ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//             <div>
//               <label>Logo</label>
//               <input name="image" value={formData.image ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//               {formData.image && <img src={formData.image} alt="Image" className="mt-1 w-24 h-24 object-cover rounded border" />}
//             </div>
//             <div>
//               <label>Favicon</label>
//               <input name="favicon" value={formData.favicon ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//               {formData.favicon && <img src={formData.favicon} alt="Favicon" className="mt-1 w-12 h-12 object-cover rounded border" />}
//             </div>
//             <div>
//               <label>Google Map Embed</label>
//               <textarea name="googleMap" value={formData.googleMap ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//             <div>
//               <label>Google Analytics</label>
//               <textarea name="googleAnalytics" value={formData.googleAnalytics ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//             <div>
//               <label>Địa chỉ</label>
//               <input name="place" value={formData.place ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//             </div>
//           </div>
//         </section>


//         {/* Mạng xã hội */}
//         <section className="space-y-4">
//           <h3 className="font-semibold text-gray-700">Mạng xã hội</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {socialFields.map((field) => (
//               <div key={field.name} className="flex items-center space-x-2">
//                 <div className="w-6 h-6 flex items-center justify-center">{field.icon}</div>
//                 <input
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   value={(formData[field.name] as string) ?? ""}
//                   onChange={handleChange}
//                   className="flex-1 border rounded px-2 py-1"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         <button
//           type="submit"
//           disabled={saving}
//           className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//         >
//           {saving ? "Đang lưu..." : "Lưu thay đổi"}
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";

import { JSX, useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
import { SiTiktok, SiX, SiZalo } from "react-icons/si";
import { ConfigSite } from "@/app/types/config-stie";
import Image from "next/image";
import ImageUpload from "../component-shared/ImageUpload";


export default function UpdateConfigSiteForm() {
  const [formData, setFormData] = useState<Partial<ConfigSite>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/config-site/get-all`);
  //       const data = await res.json();
  //       setFormData(data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/config-site/get-all`);
        const data = await res.json();
        setFormData(Array.isArray(data) ? data[0] : data); // lấy bản ghi đầu tiên nếu trả về mảng
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý upload ảnh (Logo/Favicon)
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, field: "image" | "favicon") => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    // preview cục bộ
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, [field]: reader.result as string });
    };
    reader.readAsDataURL(file);

    // TODO: nếu có server upload ảnh, upload file và lấy URL về lưu vào formData[field]
    // Ví dụ:
    // const form = new FormData();
    // form.append("file", file);
    // const res = await fetch("/api/upload", { method: "POST", body: form });
    // const data = await res.json();
    // setFormData({ ...formData, [field]: data.url });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/config-site/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Cập nhật thành công!");
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra!");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Đang tải cấu hình...</p>;

  const socialFields: { name: keyof ConfigSite; icon: JSX.Element; placeholder: string }[] = [
    { name: "facebook", icon: <FaFacebookF className="text-blue-600" />, placeholder: "Facebook" },
    { name: "zalo", icon: <SiZalo className="text-blue-500" />, placeholder: "Zalo" },
    { name: "instagram", icon: <FaInstagram className="text-pink-500" />, placeholder: "Instagram" },
    { name: "linkedin", icon: <FaLinkedin className="text-blue-700" />, placeholder: "LinkedIn" },
    { name: "tiktok", icon: <SiTiktok className="text-black" />, placeholder: "TikTok" },
    { name: "twitter", icon: <FaTwitter className="text-blue-400" />, placeholder: "Twitter" },
    { name: "x", icon: <SiX className="text-black" />, placeholder: "X" },
    { name: "youtube", icon: <FaYoutube className="text-red-600" />, placeholder: "YouTube" },
    { name: "pinterest", icon: <FaPinterest className="text-red-500" />, placeholder: "Pinterest" },
    { name: "liveChat", icon: <div className="font-bold">💬</div>, placeholder: "Live Chat" },
  ];

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded shadow space-y-6">
      <h2 className="text-xl font-semibold border-b pb-2">Cập nhật thông tin website</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Thông tin chung */}
        <section className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Email</label>
              <input name="email" value={formData.email ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label>Hotline</label>
              <input name="hotline" value={formData.hotline ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div className="col-span-2">
              <label>Mô tả</label>
              <textarea name="description" value={formData.description ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            {/* <div className="col-span-2">
              <label>Nội dung chân trang</label>
              <textarea name="infoFooter" value={formData.infoFooter ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div> */}


            {/* <div className="col-span-2">
              {/* <CKEditor
                editor={ClassicEditor as any}  // ⚠️ cast sang any để tránh lỗi TypeScript
                data={formData.infoFooter}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFormData({ ...formData, infoFooter: data });
                }}
              /> 

<CKEditorComponent
  value={formData.infoFooter ?? ""}
  onChange={(val) => setFormData({ ...formData, infoFooter: val })}
/>
            </div> */}

            {/* Logo */}
            <div >
              <label className="block mb-1 font-medium">Logo</label>
              {/* <ImageUpload
                folderName="config-site"
                onUpload={(url) => setFormData({ ...formData, image: url })}
              />
              {formData.image && (
                <div className="bg-gray-200 p-2 flex justify-center items-center mt-2 rounded-md">
                  <img
                    src={formData.image}
                    alt={formData.aboutText ?? ""}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              )} */}
              <ImageUpload
    folderName="config-site"
    value={formData.image}                         // <-- nhận giá trị từ form
    onUpload={(url) => setFormData({
        ...formData,
        image: url                                 // <-- update form như input text
    })}
/>

            </div>

            {/* Favicon */}
            <div >
              <label className="block mb-1 font-medium">Favicon</label>
              {/* <ImageUpload
                folderName="config-site"
                onUpload={(url) => setFormData({ ...formData, favicon: url })}
              />
              {formData.favicon && (
                <div className="bg-gray-200 p-2 flex justify-center items-center mt-2 rounded-md">
                  <img
                    src={formData.favicon}
                    alt="Favicon"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              )} */}
              <ImageUpload
    folderName="config-site"
    value={formData.favicon}                         // <-- nhận giá trị từ form
    onUpload={(url) => setFormData({
        ...formData,
        favicon: url                                 // <-- update form như input text
    })}
/>

            </div>

            <div>
              <label>Google Map Embed</label>
              <textarea name="googleMap" value={formData.googleMap ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label>Google Analytics</label>
              <textarea name="googleAnalytics" value={formData.googleAnalytics ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label>Địa chỉ</label>
              <input name="place" value={formData.place ?? ""} onChange={handleChange} className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        </section>

        {/* Mạng xã hội */}
        <section className="space-y-4">
          <h3 className="font-semibold text-gray-700">Mạng xã hội</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {socialFields.map((field) => (
              <div key={field.name} className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">{field.icon}</div>
                <input
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(formData[field.name] as string) ?? ""}
                  onChange={handleChange}
                  className="flex-1 border rounded px-2 py-1"
                />
              </div>
            ))}
          </div>
        </section>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          {saving ? "Đang lưu..." : "Lưu thay đổi"}
        </button>
      </form>
    </div>
  );
}
