export interface MenuItem {
    id: number;
    title: string;
    url?: string;
    children?: MenuItem[];
}

// export const menuData: MenuItem[] = [
//   {
//     id:1,
//     title: "Trang chủ",
//     url: "/",
//   },
//   {
//     id:2,
//     title: "Giới thiệu",
//     url: "/about",
//     children: [
//       { id:21, title: "Câu chuyện thương hiệu", url: "/product/gao" },
//       { id:22, title: "Tầm nhìn sứ mệnh", url: "/product/bot-mi" },
//       { id:23, title: "Giá trị cốt lỗi", url: "/product/ngu-coc" },
//       { id:24, title: "Qui Trình sản xuất", url: "/product/ngu-coc" },
//       { id:25, title: "Chứng nhận", url: "/product/ngu-coc" },
//     ],
//   },
//   {
//     id:3,
//     title: "Sản phẩm",
//     url: "/product",
//     // children: [
//     //   { id:31, title: "Gạo", url: "/product/gao" },
//     //   { id:32, title: "Bột mì", url: "/product/bot-mi" },
//     //   { id:33, title: "Ngũ cốc", url: "/product/ngu-coc" },
//     // ],
//   },
//   {
//     id:4,
//     title: "Phân phối",
//     url: "/store",
//   },
//   {
//     id:5,
//     title: "Tin tức",
//     url: "/blog",
//   },
//   {
//     id:6,
//     title: "Xuất khẩu",
//     url: "/export",
//   },
//   {
//     // id:6,
//     id:7,
//     title: "Liên hệ",
//     url: "/contact",
//   }
// ];
