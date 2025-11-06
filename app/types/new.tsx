export interface New {
    id: number;
    title: string;
    image: string;
    url?: string;
    description: string;
    createDate: string;
    cateId: number;
}

export interface CategoryNew {
    id: number;
    name: string;
    image: string;
    url?: string;
}


export const categoriesNew: CategoryNew[] = [
  { id: 1, name: "Tin công ty", image: "/images/category-1.webp", url: "/category/1" },
  { id: 2, name: "Sản phẩm mới", image: "/images/category-2.webp", url: "/category/2" },
  { id: 3, name: "Khuyến mãi", image: "/images/category-3.webp", url: "/category/3" },
  { id: 4, name: "Xuất khẩu", image: "/images/category-4.webp", url: "/category/4" },
]

export const news: New[] = [
  {
    id: 1,
    title: "Công ty An Khang ra mắt sản phẩm mới",
    image: "/images/new-1.jpg",
    url: "/new/1",
    description: "Giới thiệu sản phẩm gạo cao cấp mới, thơm ngon, đạt tiêu chuẩn xuất khẩu.",
    createDate: "2025-11-01",
    cateId: 2,
  },
  {
    id: 2,
    title: "Khuyến mãi hấp dẫn cho khách hàng tháng 11",
    image: "/images/new-2.jpg",
    url: "/new/2",
    description: "Nhân dịp tháng 11, công ty áp dụng chương trình khuyến mãi đặc biệt.",
    createDate: "2025-11-02",
    cateId: 3,
  },
  {
    id: 3,
    title: "Tin tức xuất khẩu sang thị trường Úc",
    image: "/images/new-3.jpg",
    url: "/new/3",
    description: "Các lô hàng gạo đạt tiêu chuẩn xuất khẩu sang Úc đã được vận chuyển thành công.",
    createDate: "2025-11-03",
    cateId: 4,
  },
  {
    id: 4,
    title: "Cập nhật thông tin công ty tháng 11",
    image: "/images/new-2.jpg",
    url: "/new/4",
    description: "Những thông tin mới nhất về hoạt động và sự kiện nội bộ công ty An Khang.",
    createDate: "2025-11-04",
    cateId: 1,
  },
  {
    id: 5,
    title: "Ra mắt sản phẩm ngũ cốc hữu cơ",
    image: "/images/new-3.jpg",
    url: "/new/5",
    description: "Giới thiệu dòng sản phẩm ngũ cốc hữu cơ, đảm bảo chất lượng cao.",
    createDate: "2025-11-05",
    cateId: 2,
  },
  {
    id: 6,
    title: "Khuyến mãi cuối năm 2025",
    image: "/images/new-1.jpg",
    url: "/new/6",
    description: "Những chương trình khuyến mãi cuối năm hấp dẫn dành cho khách hàng thân thiết.",
    createDate: "2025-11-06",
    cateId: 3,
  },
  {
    id: 7,
    title: "Giao hàng thành công sang Canada",
    image: "/images/new-2.jpg",
    url: "/new/7",
    description: "Lô hàng gạo chất lượng cao đã được xuất khẩu sang Canada thành công.",
    createDate: "2025-11-07",
    cateId: 4,
  },
  {
    id: 8,
    title: "Cập nhật chính sách nội bộ công ty",
    image: "/images/new-3.jpg",
    url: "/new/8",
    description: "Những điều chỉnh mới về chính sách nhân sự và nội quy công ty.",
    createDate: "2025-11-08",
    cateId: 1,
  },
  {
    id: 9,
    title: "Sản phẩm gạo thơm mới ra mắt",
    image: "/images/new-3.jpg",
    url: "/new/9",
    description: "Ra mắt sản phẩm gạo thơm hảo hạng, phù hợp cho xuất khẩu và tiêu dùng trong nước.",
    createDate: "2025-11-09",
    cateId: 2,
  },
  {
    id: 10,
    title: "Chương trình khuyến mãi tháng 12",
    image: "/images/new-1.jpg",
    url: "/new/10",
    description: "Các chương trình ưu đãi hấp dẫn dành cho khách hàng trong tháng cuối năm.",
    createDate: "2025-11-10",
    cateId: 3,
  },
];


export default async function getNewsBySlug(slug: string) {
    return news.find((x) => x.url === slug) || null;
}