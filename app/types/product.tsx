export interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    salePrice: number;
    url?: string;
    cateId?: number;
    createDate: string;
    description: string;
    content: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    description: string;
}


export const categories: Category[] = [
  {
    id: 1,
    name: "Gạo",
    image: "/images/categories/gao.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    name: "Bột mì",
    image: "/images/categories/bot-mi.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 3,
    name: "Ngũ cốc",
    image: "/images/categories/ngu-coc.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 4,
    name: "Gạo hữu cơ",
    image: "/images/categories/gao-huu-co.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Gạo ST25 Thượng Hạng",
    image: "/images/product-1.webp",
    price: 28000,
    salePrice: 25000,
    url: "/product/gao-st25-thuong-hang",
    cateId: 1,
    createDate: "2025-01-12",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 2,
    name: "Gạo Lài Sữa Cao Cấp",
    image: "/images/product-2.webp",
    price: 32000,
    salePrice: 29000,
    url: "/product/gao-lai-sua-cao-cap",
    cateId: 1,
    createDate: "2025-01-10",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 3,
    name: "Gạo Hữu Cơ Nhật Bản",
    image: "/images/product-3.webp",
    price: 39000,
    salePrice: 35000,
    url: "/product/gao-huu-co-nhat-ban",
    cateId: 4,
    createDate: "2025-01-08",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 4,
    name: "Bột Mì Số 11 Đa Dụng",
    image: "/images/product-4.webp",
    price: 18000,
    salePrice: 15000,
    url: "/product/bot-mi-so-11-da-dung",
    cateId: 2,
    createDate: "2025-01-07",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 5,
    name: "Bột Mì Nguyên Cám",
    image: "/images/product-5.webp",
    price: 22000,
    salePrice: 19000,
    url: "/product/bot-mi-nguyen-cam",
    cateId: 2,
    createDate: "2025-01-05",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 6,
    name: "Ngũ Cốc Dinh Dưỡng Sấy",
    image: "/images/product-1.webp",
    price: 45000,
    salePrice: 39900,
    url: "/product/ngu-coc-dinh-duong-say",
    cateId: 3,
    createDate: "2025-01-04",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 7,
    name: "Ngũ Cốc Mầm Lúa Mạch",
    image: "/images/product-2.webp",
    price: 42000,
    salePrice: 38000,
    url: "/product/ngu-coc-mam-lua-mach",
    cateId: 3,
    createDate: "2025-01-03",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 8,
    name: "Gạo Nàng Hoa 9",
    image: "/images/product-3.webp",
    price: 26000,
    salePrice: 23000,
    url: "/product/gao-nang-hoa-9",
    cateId: 1,
    createDate: "2025-01-02",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 9,
    name: "Gạo Tấm Thơm",
    image: "/images/product-4.webp",
    price: 18000,
    salePrice: 15000,
    url: "/product/gao-tam-thom",
    cateId: 1,
    createDate: "2025-01-01",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },
  {
    id: 10,
    name: "Gạo Nhật Japonica",
    image: "/images/product-5.webp",
    price: 38000,
    salePrice: 34000,
    url: "/product/gao-nhat-japonica",
    cateId: 4,
    createDate: "2024-12-30",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    content: ""
  },

  // ✅ Tự động sinh 40 sản phẩm còn lại
  ...Array.from({ length: 40 }).map((_, i) => {
    const id = i + 11;
    const randomImage = `/images/product-${((i % 5) + 1)}.webp`;
    const names = [
      "Gạo Thơm Đặc Sản",
      "Bột Mì Hảo Hạng",
      "Ngũ Cốc Tổng Hợp",
      "Gạo Lứt Dinh Dưỡng",
      "Bột Mì Làm Bánh",
      "Ngũ Cốc Nguyên Hạt",
      "Gạo Hạt Ngọc",
      "Gạo Nếp Thơm",
      "Ngũ Cốc Ít Đường",
      "Bột Mì Tinh Luyện"
    ];
    const name = names[i % names.length];

    const price = 15000 + (i * 500) % 30000;
    const salePrice = price - 2000;

    const cateId = (i % 4) + 1;

    const date = new Date(2024, 8, 1 + i).toISOString().split("T")[0];

    return {
      id,
      name,
      image: randomImage,
      price,
      salePrice,
      // url: `/product/${name.toLowerCase().replace(/ /g, "-")}-${id}`,
      url: `/${toSlugM(name)}`,
      cateId,
      createDate: date,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      content: ""
    };
  })
];


export function toSlugM(phrase: string): string {
  if (!phrase || phrase.trim() === "") return "";

  // Thay đ/Đ trước để không bị mất
  let str = phrase.replace(/Đ/g, "D").replace(/đ/g, "d");

  // Tách dấu Unicode rồi loại bỏ các ký tự mark (dấu)
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Chuyển về lowercase
  str = str.toLowerCase();

  // Loại bỏ ký tự không phải a-z, 0-9, khoảng trắng hoặc dấu -
  str = str.replace(/[^a-z0-9\s-]/g, "");

  // Đổi khoảng trắng thành -, trim và gom nhiều - thành 1
  str = str.trim().replace(/\s+/g, "-").replace(/-+/g, "-");

  return str;
}

// import { products } from "./product";

// export async function getProductBySlug(slug: string) {
//     return products.find((x) => x.url === slug) || null;
// }


// export async function getProdCateBySlug(slug: string) {
//     return categories.find((x) => toSlug(x.name) === slug) || null;
// }
