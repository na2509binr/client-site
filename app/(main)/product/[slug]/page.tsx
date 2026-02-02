"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetailClient from "./product-detail";
import SwiperProduct from "@/app/(main)/components/swiper-product";
import { Product } from "@/app/types/product";

export function parseImageString(str: string): string[] {
  if (!str) return [];
  return str
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "");
}


export default function ProductDetailClientPage() {
  const { category, slug } = useParams() as {
    category: string;
    slug: string;
  };


  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const productRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/get-all`);
        const productData = await productRes.json();

        const cateRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category-product/get-all`);
        const cateData = await cateRes.json();

        setProducts(productData);
        setCategories(cateData);

        const found = productData.find((p: any) => p.url?.endsWith(slug));
        setProduct(found);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [slug]);

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <h1>Product not found</h1>;

  const filteredProducts = products.filter((p: any) => p.categoryProductId == product.categoryProductId && p.isActive == true);

  const images = parseImageString(product.image);
  console.log("Parsed images:", slug);
  console.log("Parsed images:", products);
  console.log("Parsed images:", product);
  console.log("Parsed images:", filteredProducts);

  return (
    <>
      {/* <ProductDetailClient product={product} category={categories} images={images} /> */}
      <ProductDetailClient product={product} category={categories} images={images} />

      {/* <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
        <div className="col-start-2 border-t border-[#eeeeee]">
          <h2 className="text-[30px] my-10">Sản phẩm liên quan</h2>

          <div className="w-full max-w-6xl 2xl:max-w-7xl">
            <SwiperProduct products={filteredProducts} />
          </div>
        </div>
      </div> */}
    </>
  );
}





















  // return (
  //   <>
  //     {/* <BannerPages /> */}
  //     <div className="relative h-[600px]">
  //       <Image
  //         className="z-0 dark:invert h-full object-cover "
  //         src="/images/about-bg.jpg"
  //         alt="Logo"
  //         width={1900}
  //         height={20}
  //         priority
  //       />
  //       <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

  //       <div className="absolute h-full top-0 grid grid-cols-[1fr_2fr_3fr] items-center text-white">
  //         <div className="col-start-2">
  //           <h1 className="text-[60px] font-extrabold">
  //             {/* <span className="block text-[40px] font-extralight">SẢN PHẨM</span> */}
  //             <span className="">{product.name.toUpperCase()}</span>
  //           </h1>
  //           <p className="my-6 ">
  //             {product.description}
  //           </p>
  //           <div className="text-[13px] font-semibold flex items-center space-x-0.75">
  //             <Link href="/" className="text-[#b3e53f]">
  //               <span>Trang chủ</span>
  //             </Link>
  //             <FontAwesomeIcon icon={faAngleRight} />
  //             <Link href="/product" className="text-[#b3e53f]">
  //               <span>Sản phẩm</span>
  //             </Link>
  //             <FontAwesomeIcon icon={faAngleRight} />
  //             <Link href={"/product/" + toSlug(cate.name)} className="text-[#b3e53f]">
  //               <span>{cate.name}</span>
  //             </Link>
  //             <FontAwesomeIcon icon={faAngleRight} />
  //             <span>{product.name}</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>


  //     {/* <div className="max-w-4xl mx-auto py-10">
  //       <img src={product.image} className="w-full max-w-md rounded shadow" />
  //       <h1 className="text-3xl font-bold mt-4">{product.name}</h1>

  //       <p className="text-xl text-red-600 font-bold mt-3">
  //         {product.salePrice.toLocaleString()}đ
  //       </p>

  //       <p className="text-gray-600 mt-2">
  //         Giá gốc: {product.price.toLocaleString()}đ
  //       </p>
  //     </div> */}

  //     <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
  //       <div className="col-start-2 ">
  //         <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

  //     {/* ✅ LEFT: Thumbnail List */}
  //     <div className="lg:col-span-2 space-y-4 flex lg:block overflow-x-auto lg:overflow-visible">
  //       {images.map((img, i) => (
  //         <button
  //           key={i}
  //           onClick={() => setActiveImage(img)}
  //           className={`border rounded overflow-hidden w-20 h-28 shrink-0 ${
  //             activeImage === img ? "border-green-600" : "border-gray-300"
  //           }`}
  //         >
  //           <Image
  //             src={img}
  //             alt="Thumbnail"
  //             width={200}
  //             height={300}
  //             className="object-cover w-full h-full"
  //           />
  //         </button>
  //       ))}
  //     </div>

  //     {/* ✅ CENTER: Main Image */}
  //     <div className="lg:col-span-5 flex justify-center">
  //       <div className="border rounded-lg p-4 max-h-[600px]">
  //         <Image
  //           src={activeImage}
  //           alt="Main Product"
  //           width={600}
  //           height={800}
  //           className="object-contain max-h-[560px] mx-auto"
  //         />
  //       </div>
  //     </div>

  //     {/* ✅ RIGHT: Product Info */}
  //     <div className="lg:col-span-5">
  //       <h1 className="text-2xl font-bold text-gray-800 leading-snug">
  //         Gạo Lứt Tím đóng túi 1KG Vinh Hiển – Đạt chuẩn HACCP – Ngọt cơm, dinh dưỡng
  //       </h1>

  //       <div className="text-red-600 mt-3 text-xl font-bold">
  //         Liên hệ
  //       </div>

  //       {/* Description */}
  //       <div className="mt-5 space-y-4 text-gray-700">
  //         <h2 className="text-lg font-bold text-green-700">Mô tả</h2>
  //         <p>
  //           Công ty <strong>CỔ PHẦN VINH HIỂN FARM</strong> xin công bố sản phẩm mới
  //           sắp hiện diện trên thị trường: <strong>Gạo Lứt Tím Vinh Hiển Túi 1kg</strong>
  //           – Đạt chuẩn HACCP – Ngọt Cơm, Dinh Dưỡng.
  //         </p>

  //         <h2 className="text-lg font-bold text-green-700">Câu chuyện ra đời</h2>
  //         <p>
  //           Tiếp nối sự thành công của các sản phẩm gạo lứt cao cấp, Vinh Hiển Farm
  //           cho ra đời dòng sản phẩm mới đáp ứng nhu cầu của khách hàng – Gạo Lứt Tím.
  //         </p>

  //         <h2 className="text-lg font-bold text-green-700">Đặc tính sản phẩm</h2>
  //         <ul className="list-disc ml-5 space-y-2">
  //           <li>Mùi thơm nhẹ, đậm đà, mềm, dẻo.</li>
  //           <li>Cơm ngọt, giữ nguyên lớp cám, giàu dinh dưỡng.</li>
  //           <li>Chế biến được nhiều món: cơm, cháo, cơm trộn, cơm niêu.</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  //       </div>
  //     </div>




  //   </>
  // );

