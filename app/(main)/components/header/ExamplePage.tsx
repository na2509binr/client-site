// "use client";

// import Header, { MenuItem } from "@/app/(main)/components/header";

// // Sample menu data matching the image
// const menuItems: MenuItem[] = [
//   {
//     id: 1,
//     title: "VỀ CHÚNG TÔI",
//     url: "/ve-chung-toi",
//     children: [
//       { id: 11, title: "GIỚI THIỆU", url: "/ve-chung-toi/gioi-thieu" },
//       { id: 12, title: "LỊCH SỬ PHÁT TRIỂN", url: "/ve-chung-toi/lich-su" },
//       { id: 13, title: "TẦM NHÌN & SỨ MỆNH", url: "/ve-chung-toi/tam-nhin" },
//     ],
//   },
//   {
//     id: 2,
//     title: "SẢN PHẨM",
//     url: "/san-pham",
//     children: [
//       { id: 21, title: "GẠO THƠM", url: "/san-pham/gao-thom" },
//       { id: 22, title: "GẠO TRẮNG", url: "/san-pham/gao-trang" },
//       { id: 23, title: "GẠO NẾP", url: "/san-pham/gao-nep" },
//     ],
//   },
//   {
//     id: 3,
//     title: "EXPORT",
//     url: "/export",
//   },
//   // Logo will be inserted here (middle position)
//   {
//     id: 4,
//     title: "MÓN NGON",
//     url: "/mon-ngon",
//   },
//   {
//     id: 5,
//     title: "TIN TỨC",
//     url: "/tin-tuc",
//   },
//   {
//     id: 6,
//     title: "TUYỂN DỤNG",
//     url: "/tuyen-dung",
//     children: [
//       { id: 61, title: "LÝ DO CHỌN CHÚNG TÔI", url: "/tuyen-dung/ly-do-chon-chung-toi" },
//       { id: 62, title: "CƠ HỘI VIỆC LÀM", url: "/tuyen-dung/co-hoi-viec-lam" },
//     ],
//   },
//   {
//     id: 7,
//     title: "LIÊN HỆ",
//     url: "/lien-he",
//   },
// ];

// export default function ExamplePage() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header
//         menuItems={menuItems}
//         logo={{
//           src: "/logo.png",
//           alt: "Vinh Phát",
//           subtitle: "CÔNG TY TNHH GẠO VINH PHÁT WILMAR",
//         }}
//       />

//       {/* Hero section with gradient background like in the image */}
//       <div
//         className="h-64 bg-linear-to-r from-yellow-200 via-yellow-300 to-orange-300"
//         style={{
//           backgroundImage: "linear-gradient(to right, #fef3c7, #fcd34d, #fb923c)",
//         }}
//       />

//       {/* Content area */}
//       <div className="max-w-7xl mx-auto p-8">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">
//           Header Component Demo
//         </h1>
//         <p className="text-gray-600">
//           Hover vào các menu để xem hiệu ứng gạch chân và dropdown menu.
//         </p>
//       </div>
//     </div>
//   );
// }