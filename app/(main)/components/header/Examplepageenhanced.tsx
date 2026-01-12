"use client";

import HeaderEnhanced, { MenuItem } from "./Headerenhanced";

// Menu data matching the image exactly
const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "VỀ CHÚNG TÔI",
    url: "/ve-chung-toi",
    children: [
      { id: 11, title: "GIỚI THIỆU", url: "/ve-chung-toi/gioi-thieu" },
      { id: 12, title: "LỊCH SỬ PHÁT TRIỂN", url: "/ve-chung-toi/lich-su" },
      { id: 13, title: "TẦM NHÌN & SỨ MỆNH", url: "/ve-chung-toi/tam-nhin" },
    ],
  },
  {
    id: 2,
    title: "SẢN PHẨM",
    url: "/san-pham",
    children: [
      { id: 21, title: "GẠO THƠM", url: "/san-pham/gao-thom" },
      { id: 22, title: "GẠO TRẮNG", url: "/san-pham/gao-trang" },
      { id: 23, title: "GẠO NẾP", url: "/san-pham/gao-nep" },
    ],
  },
  {
    id: 3,
    title: "EXPORT",
    url: "/export",
  },
  // === LOGO POSITION ===
  {
    id: 4,
    title: "MÓN NGON",
    url: "/mon-ngon",
  },
  {
    id: 5,
    title: "TIN TỨC",
    url: "/tin-tuc",
  },
  {
    id: 6,
    title: "TUYỂN DỤNG",
    url: "/tuyen-dung",
    highlighted: true, // This creates the bordered style
    children: [
      { id: 61, title: "LÝ DO CHỌN CHÚNG TÔI", url: "/tuyen-dung/ly-do-chon-chung-toi" },
      { id: 62, title: "CƠ HỘI VIỆC LÀM", url: "/tuyen-dung/co-hoi-viec-lam" },
    ],
  },
  {
    id: 7,
    title: "LIÊN HỆ",
    url: "/lien-he",
    highlighted: true, // This creates the bordered style
  },
];

export default function ExamplePageEnhanced() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderEnhanced
        menuItems={menuItems}
        logo={{
          src: "/logo.png",
          alt: "Vinh Phát",
          subtitle: "CÔNG TY TNHH GẠO VINH PHÁT WILMAR",
        }}
      />

      {/* Hero section with sunset gradient like in the image */}
      <div
        className="h-80 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 30%, #f59e0b 50%, #ea580c 70%, #c2410c 100%)",
        }}
      >
        {/* Clouds overlay effect */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.5' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Demo content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#006838] mb-6">
            Header Component Demo
          </h1>
          
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Tính năng:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hover effect:</strong> Khi hover vào menu, gạch chân màu xanh sẽ chạy từ trái sang phải
              </li>
              <li>
                <strong>Dropdown menu:</strong> Menu có children sẽ hiển thị dropdown khi hover
              </li>
              <li>
                <strong>Active state:</strong> Menu đang active sẽ luôn có gạch chân
              </li>
              <li>
                <strong>Highlighted items:</strong> Menu "TUYỂN DỤNG" và "LIÊN HỆ" có border xanh
              </li>
              <li>
                <strong>Responsive logo:</strong> Logo ở giữa với text VINH PHÁT
              </li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Cấu hình MenuItem:</h3>
            <pre className="text-sm text-gray-600 overflow-x-auto">
{`interface MenuItem {
  id: number;
  title: string;
  url?: string;
  children?: MenuItem[];
  highlighted?: boolean; // Tạo style viền xanh
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}