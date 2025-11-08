// export interface New {
//     id: number;
//     title: string;
//     image: string;
//     url?: string;
//     description: string;
//     createDate: string;
//     cateId: number;
// }

export interface New {
  id: number;
  title: string;
  description: string;
  url?: string;
  view: number;
  image: string;
  author: string;
  active: boolean;
  order: number;
  createdAt: string;
  categoryNewsId: number;

  /**
   * Quan hệ 1-n
   */
  categoryNews?: CategoryNew;
  sections?: NewsSection[];
}

export interface NewsSection {
  id: number;
  newsId: number;
  title: string;
  content: string;
  order: number;
}

export interface CategoryNew {
  id: number;
  name: string;
  image: string;
  url?: string;
}


// export const categoriesNew: CategoryNew[] = [
//   { id: 1, name: "Tin công ty", image: "/images/category-1.webp", url: "/category/1" },
//   { id: 2, name: "Sản phẩm mới", image: "/images/category-2.webp", url: "/category/2" },
//   { id: 3, name: "Khuyến mãi", image: "/images/category-3.webp", url: "/category/3" },
//   { id: 4, name: "Xuất khẩu", image: "/images/category-4.webp", url: "/category/4" },
// ]

// export const news: New[] = [
//   {
//     id: 1,
//     title: "Công ty An Khang ra mắt sản phẩm mới",
//     image: "/images/new-1.jpg",
//     url: "cong-ty-an-khang-ra-mat-san-pham-moi",
//     description: "Giới thiệu sản phẩm gạo cao cấp mới, thơm ngon, đạt tiêu chuẩn xuất khẩu.",
//     createDate: "2025-11-01",
//     cateId: 2,
//   },
//   {
//     id: 2,
//     title: "Khuyến mãi hấp dẫn cho khách hàng tháng 11",
//     image: "/images/new-2.jpg",
//     url: "khuyen-mai-hap-dan-cho-khach-hang-thang-11",
//     description: "Nhân dịp tháng 11, công ty áp dụng chương trình khuyến mãi đặc biệt.",
//     createDate: "2025-11-02",
//     cateId: 3,
//   },
//   {
//     id: 3,
//     title: "Tin tức xuất khẩu sang thị trường Úc",
//     image: "/images/new-3.jpg",
//     url: "tin-tuc-xuat-khau-sang-thi-truong-uc",
//     description: "Các lô hàng gạo đạt tiêu chuẩn xuất khẩu sang Úc đã được vận chuyển thành công.",
//     createDate: "2025-11-03",
//     cateId: 4,
//   },
//   {
//     id: 4,
//     title: "Cập nhật thông tin công ty tháng 11",
//     image: "/images/new-2.jpg",
//     url: "cap-nhat-thong-tin-cong-ty-thang-11",
//     description: "Những thông tin mới nhất về hoạt động và sự kiện nội bộ công ty An Khang.",
//     createDate: "2025-11-04",
//     cateId: 1,
//   },
//   {
//     id: 5,
//     title: "Ra mắt sản phẩm ngũ cốc hữu cơ",
//     image: "/images/new-3.jpg",
//     url: "ra-mat-san-pham-ngu-coc-huu-co",
//     description: "Giới thiệu dòng sản phẩm ngũ cốc hữu cơ, đảm bảo chất lượng cao.",
//     createDate: "2025-11-05",
//     cateId: 2,
//   },
//   {
//     id: 6,
//     title: "Khuyến mãi cuối năm 2025",
//     image: "/images/new-1.jpg",
//     url: "khuyen-mai-cuoi-nam-2025",
//     description: "Những chương trình khuyến mãi cuối năm hấp dẫn dành cho khách hàng thân thiết.",
//     createDate: "2025-11-06",
//     cateId: 3,
//   },
//   {
//     id: 7,
//     title: "Giao hàng thành công sang Canada",
//     image: "/images/new-2.jpg",
//     url: "giao-hang-thanh-cong-sang-canada",
//     description: "Lô hàng gạo chất lượng cao đã được xuất khẩu sang Canada thành công.",
//     createDate: "2025-11-07",
//     cateId: 4,
//   },
//   {
//     id: 8,
//     title: "Cập nhật chính sách nội bộ công ty",
//     image: "/images/new-3.jpg",
//     url: "cap-nhat-chinh-sach-noi-bo-cong-ty",
//     description: "Những điều chỉnh mới về chính sách nhân sự và nội quy công ty.",
//     createDate: "2025-11-08",
//     cateId: 1,
//   },
//   {
//     id: 9,
//     title: "Sản phẩm gạo thơm mới ra mắt",
//     image: "/images/new-3.jpg",
//     url: "san-pham-gao-thom-moi-ra-mat",
//     description: "Ra mắt sản phẩm gạo thơm hảo hạng, phù hợp cho xuất khẩu và tiêu dùng trong nước.",
//     createDate: "2025-11-09",
//     cateId: 2,
//   },
//   {
//     id: 10,
//     title: "Chương trình khuyến mãi tháng 12",
//     image: "/images/new-1.jpg",
//     url: "chuong-trinh-khuyen-mai-thang-12",
//     description: "Các chương trình ưu đãi hấp dẫn dành cho khách hàng trong tháng cuối năm.",
//     createDate: "2025-11-10",
//     cateId: 3,
//   },
// ];



export const categoryNewsData: CategoryNew[] = [
  {
    id: 1,
    name: "Tin Công Nghệ",
    image: "/images/categories/cong-nghe.jpg",
    url: "tin-cong-nghe"
  },
  {
    id: 2,
    name: "Thời Sự Việt Nam",
    image: "/images/categories/thoi-su.jpg",
    url: "thoi-su-viet-nam"
  }
];


// export const newsSectionsData: NewsSection[] = [
//   {
//     id: 1,
//     newsId: 1,
//     title: "Giới thiệu",
//     content: "Phần này nói về tổng quan nội dung bài viết.",
//     order: 1,
//   },
//   {
//     id: 2,
//     newsId: 1,
//     title: "Chi tiết",
//     content: "Đây là phần mô tả chi tiết nội dung.",
//     order: 2,
//   },
//   {
//     id: 3,
//     newsId: 2,
//     title: "Bối cảnh",
//     content: "Mô tả bối cảnh của sự kiện.",
//     order: 1,
//   }
// ];



export const news: New[] = [
  {
    id: 1,
    title: "Apple ra mắt MacBook Pro 2025",
    description: "Apple chính thức giới thiệu MacBook Pro 2025 với nhiều nâng cấp mạnh mẽ.",
    url: "apple-ra-mat-macbook-pro-2025",
    view: 1500,
    image: "/images/new-1.jpg",
    author: "Nhật Đỗ Đức",
    active: true,
    order: 1,
    createdAt: "2025-11-01",
    categoryNewsId: 1,
    sections: [
      { id: 1, newsId: 1, title: "Giới thiệu", content: "Tổng quan sản phẩm mới.", order: 1 },
      { id: 2, newsId: 1, title: "Nâng cấp", content: "Chip M5X mạnh mẽ hơn.", order: 2 }
    ]
  },

  {
    id: 2,
    title: "Google công bố Android 16",
    description: "Android 16 tập trung vào AI và tối ưu bảo mật.",
    url: "google-cong-bo-android-16",
    view: 980,
    image: "/images/new-1.jpg",
    author: "Hà Minh",
    active: true,
    order: 2,
    createdAt: "2025-11-02",
    categoryNewsId: 1,
    sections: [
      { id: 3, newsId: 2, title: "Tính năng mới", content: "AI hỗ trợ thông minh.", order: 1 }
    ]
  },

  {
    id: 3,
    title: "Samsung ra mắt Galaxy S26",
    description: "Galaxy S26 mang đến bước tiến mạnh về camera AI.",
    url: "samsung-ra-mat-galaxy-s26",
    view: 2120,
    image: "/images/new-3.jpg",
    author: "Duy Khang",
    active: true,
    order: 3,
    createdAt: "2025-11-03",
    categoryNewsId: 1,
    sections: [
      { id: 4, newsId: 3, title: "Camera", content: "Cảm biến 250MP thế hệ mới.", order: 1 },
      { id: 5, newsId: 3, title: "Pin", content: "Sạc nhanh 90W.", order: 2 }
    ]
  },

  {
    id: 4,
    title: "Giá vàng lập đỉnh mới tháng 11",
    description: "Thị trường vàng tiếp tục biến động mạnh.",
    url: "gia-vang-lap-dinh-moi-thang-11",
    view: 540,
    image: "/images/new-2.jpg",
    author: "Mai Hương",
    active: true,
    order: 4,
    createdAt: "2025-11-04",
    categoryNewsId: 2,
    sections: [
      { id: 6, newsId: 4, title: "Diễn biến", content: "Vàng tăng 1.5%.", order: 1 }
    ]
  },

  {
    id: 5,
    title: "Thời tiết miền Bắc rét đậm",
    description: "Miền Bắc chuẩn bị đón không khí lạnh tăng cường.",
    url: "thoi-tiet-mien-bac-ret-dam",
    view: 300,
    image: "/images/new-2.jpg",
    author: "Hà Thanh",
    active: true,
    order: 5,
    createdAt: "2025-11-05",
    categoryNewsId: 2,
    sections: [
      { id: 7, newsId: 5, title: "Dự báo", content: "Nhiệt độ giảm 10 độ.", order: 1 }
    ]
  },

  {
    id: 6,
    title: "Meta giới thiệu kính VR VisionX",
    description: "VisionX là đối thủ trực tiếp của Apple Vision Pro.",
    url: "meta-gioi-thieu-kinh-vr-visionx",
    view: 1870,
    image: "/images/new-2.jpg",
    author: "Thanh Long",
    active: true,
    order: 6,
    createdAt: "2025-11-06",
    categoryNewsId: 1,
    sections: [
      { id: 8, newsId: 6, title: "Thiết kế", content: "Mỏng nhẹ hơn 20%.", order: 1 }
    ]
  },

  {
    id: 7,
    title: "Việt Nam lọt top 10 quốc gia du lịch",
    description: "Tổ chức Tourism World xếp Việt Nam vào top 10 điểm đến hấp dẫn.",
    url: "viet-nam-lot-top-10-quoc-gia-du-lich",
    view: 670,
    image: "/images/new-3.jpg",
    author: "Minh Chi",
    active: true,
    order: 7,
    createdAt: "2025-11-06",
    categoryNewsId: 2,
    sections: [
      { id: 9, newsId: 7, title: "Lý do", content: "Thiên nhiên đẹp + đồ ăn ngon.", order: 1 }
    ]
  },

  {
    id: 8,
    title: "VinFast công bố VF8 2025",
    description: "VF8 phiên bản mới có pin dung lượng lớn hơn.",
    url: "vinfast-cong-bo-vf8-2025",
    view: 920,
    image: "/images/new-1.jpg",
    author: "Trọng Đức",
    active: true,
    order: 8,
    createdAt: "2025-11-07",
    categoryNewsId: 1,
    sections: [
      { id: 10, newsId: 8, title: "Pin", content: "550 km một lần sạc.", order: 1 }
    ]
  },

  {
    id: 9,
    title: "Hà Nội khai trương tuyến Metro 3",
    description: "Tuyến Metro 3 giúp giảm tải giao thông nội đô.",
    url: "ha-noi-khai-truong-tuyen-metro-3",
    view: 1250,
    image: "/images/new-3.jpg",
    author: "Hải Nam",
    active: true,
    order: 9,
    createdAt: "2025-11-07",
    categoryNewsId: 2,
    sections: [
      { id: 11, newsId: 9, title: "Lợi ích", content: "Di chuyển nhanh hơn 40%.", order: 1 }
    ]
  },

  {
    id: 10,
    title: "Microsoft phát hành Windows 13",
    description: "Windows 13 tập trung vào AI Workspace.",
    url: "microsoft-phat-hanh-windows-13",
    view: 3300,
    image: "/images/new-2.jpg",
    author: "Quốc Bảo",
    active: true,
    order: 10,
    createdAt: "2025-11-08",
    categoryNewsId: 1,
    sections: [
      { id: 12, newsId: 10, title: "Workspace AI", content: "Tự động hóa công việc.", order: 1 }
    ]
  },

  {
    id: 11,
    title: "Nobel Hòa Bình 2025 được trao",
    description: "Nhân vật đoạt giải Nobel năm nay gây nhiều bất ngờ.",
    url: "nobel-hoa-binh-2025-duoc-trao",
    view: 480,
    image: "/images/new-1.jpg",
    author: "Phương Linh",
    active: true,
    order: 11,
    createdAt: "2025-11-08",
    categoryNewsId: 2,
    sections: [
      { id: 13, newsId: 11, title: "Kết quả", content: "Bất ngờ với người chiến thắng.", order: 1 }
    ]
  },

  {
    id: 12,
    title: "iPhone 17 bản thử nghiệm rò rỉ",
    description: "Thiết kế của iPhone 17 bị rò rỉ từ nhà máy Foxconn.",
    url: "iphone-17-ban-thu-nghiem-ro-ri",
    view: 1940,
    image: "/images/new-1.jpg",
    author: "Minh Tuấn",
    active: true,
    order: 12,
    createdAt: "2025-11-09",
    categoryNewsId: 1,
    sections: [
      { id: 14, newsId: 12, title: "Thiết kế", content: "Cạnh bo tròn hơn.", order: 1 }
    ]
  },

  {
    id: 13,
    title: "TP.HCM phát triển khu đô thị sáng tạo",
    description: "Khu đô thị sáng tạo phía Đông tiếp tục được mở rộng.",
    url: "tphcm-phat-trien-khu-do-thi-sang-tao",
    view: 770,
    image: "/images/new-1.jpg",
    author: "Thanh Tú",
    active: true,
    order: 13,
    createdAt: "2025-11-09",
    categoryNewsId: 2,
    sections: [
      { id: 15, newsId: 13, title: "Quy hoạch", content: "Mở rộng thêm 800ha.", order: 1 }
    ]
  },

  {
    id: 14,
    title: "TikTok thử nghiệm thuật toán mới",
    description: "Thuật toán mới ưu tiên nội dung giáo dục.",
    url: "tiktok-thu-nghiem-thuat-toan-moi",
    view: 2150,
    image: "/images/new-2.jpg",
    author: "Hữu Đạt",
    active: true,
    order: 14,
    createdAt: "2025-11-10",
    categoryNewsId: 1,
    sections: [
      { id: 16, newsId: 14, title: "Thay đổi", content: "Giảm nội dung giải trí thấp.", order: 1 }
    ]
  },

  {
    id: 15,
    title: "Lạm phát toàn cầu giảm nhẹ",
    description: "Các thị trường lớn ghi nhận tín hiệu tích cực.",
    url: "lam-phat-toan-cau-giam-nhe",
    view: 640,
    image: "/images/new-3.jpg",
    author: "Hoàng Anh",
    active: true,
    order: 15,
    createdAt: "2025-11-10",
    categoryNewsId: 2,
    sections: [
      { id: 17, newsId: 15, title: "Thị trường", content: "CPI giảm 0.4%.", order: 1 }
    ]
  },

  {
    id: 16,
    title: "OpenAI công bố GPT-6",
    description: "GPT-6 có khả năng suy luận ngữ cảnh sâu hơn.",
    url: "openai-cong-bo-gpt-6",
    view: 4120,
    image: "/images/new-2.jpg",
    author: "Việt Hoàng",
    active: true,
    order: 16,
    createdAt: "2025-11-11",
    categoryNewsId: 1,
    sections: [
      { id: 18, newsId: 16, title: "Tính năng", content: "Suy luận nâng cao.", order: 1 }
    ]
  },

  {
    id: 17,
    title: "Xuất khẩu Việt Nam tăng trưởng mạnh",
    description: "Xuất khẩu tăng 12% so với cùng kỳ.",
    url: "xuat-khau-viet-nam-tang-truong-manh",
    view: 820,
    image: "/images/new-2.jpg",
    author: "Ngọc Hà",
    active: true,
    order: 17,
    createdAt: "2025-11-11",
    categoryNewsId: 2,
    sections: [
      { id: 19, newsId: 17, title: "Báo cáo", content: "Tăng mạnh ở ngành điện tử.", order: 1 }
    ]
  },

  {
    id: 18,
    title: "Sony giới thiệu PlayStation 6",
    description: "PS6 tập trung vào 8K gaming.",
    url: "sony-gioi-thieu-playstation-6",
    view: 2980,
    image: "/images/new-3.jpg",
    author: "Tuấn Kiệt",
    active: true,
    order: 18,
    createdAt: "2025-11-12",
    categoryNewsId: 1,
    sections: [
      { id: 20, newsId: 18, title: "Hiệu năng", content: "Gấp đôi PS5.", order: 1 }
    ]
  },

  {
    id: 19,
    title: "Thị trường bất động sản phục hồi",
    description: "Lượng giao dịch tăng trở lại ở nhiều phân khúc.",
    url: "thi-truong-bat-dong-san-phuc-hoi",
    view: 512,
    image: "/images/new-1.jpg",
    author: "Hải Đường",
    active: true,
    order: 19,
    createdAt: "2025-11-12",
    categoryNewsId: 2,
    sections: [
      { id: 21, newsId: 19, title: "Tín hiệu", content: "Giá tăng nhẹ 2%.", order: 1 }
    ]
  },

  {
    id: 20,
    title: "Tesla ra mắt xe điện Model Z",
    description: "Model Z là mẫu xe điện hiệu suất cao nhất của Tesla.",
    url: "tesla-ra-mat-xe-dien-model-z",
    view: 3650,
    image: "/images/new-2.jpg",
    author: "Đoàn Phúc",
    active: true,
    order: 20,
    createdAt: "2025-11-13",
    categoryNewsId: 1,
    sections: [
      { id: 22, newsId: 20, title: "Công suất", content: "0-100 km/h trong 1.8s.", order: 1 }
    ]
  }
];




export default async function getNewsBySlug(slug: string) {
  return news.find((x) => x.url === slug) || null;
}