export interface Store {
    id: number;
    name: string;
    address: string;
    phone: string;
    city: string;
    ward: string;
    image: string;
    note: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "Cửa hàng TruNguyen - Hà Nội",
    address: "12 Láng Hạ, Đống Đa",
    phone: "0901 234 567",
    city: "Hà Nội",
    ward: "Đống Đa",
    image: "/images/store/store-1.jpg",
    note: "Mở cửa từ 8:00 - 21:00"
  },
  {
    id: 2,
    name: "Cửa hàng TruNguyen - Cầu Giấy",
    address: "89 Cầu Giấy",
    phone: "0907 888 222",
    city: "Hà Nội",
    ward: "Cầu Giấy",
    image: "/images/store/store-2.jpg",
    note: "Có chỗ đỗ xe ô tô"
  },
  {
    id: 3,
    name: "Cửa hàng TruNguyen - Hồ Chí Minh",
    address: "55 Lê Văn Sỹ, Q.3",
    phone: "0912 345 678",
    city: "Hồ Chí Minh",
    ward: "Quận 3",
    image: "/images/store/store-3.jpg",
    note: "Ship nhanh trong nội thành"
  },
  {
    id: 4,
    name: "Cửa hàng TruNguyen - Bình Thạnh",
    address: "102 Phan Đăng Lưu",
    phone: "0938 999 333",
    city: "Hồ Chí Minh",
    ward: "Bình Thạnh",
    image: "/images/store/store-4.jpg",
    note: "Mở cửa tất cả các ngày"
  },
  {
    id: 5,
    name: "Cửa hàng TruNguyen - Đà Nẵng",
    address: "40 Nguyễn Văn Linh",
    phone: "0937 224 456",
    city: "Đà Nẵng",
    ward: "Hải Châu",
    image: "/images/store/store-5.jpg",
    note: "Có phục vụ giao hàng tận nơi"
  },
  {
    id: 6,
    name: "Cửa hàng TruNguyen - Hải Phòng",
    address: "27 Cát Dài",
    phone: "0963 888 123",
    city: "Hải Phòng",
    ward: "Lê Chân",
    image: "/images/store/store-6.jpg",
    note: "Miễn phí parking xe máy"
  },
  {
    id: 7,
    name: "Cửa hàng TruNguyen - Cần Thơ",
    address: "88 Mậu Thân",
    phone: "0978 442 668",
    city: "Cần Thơ",
    ward: "Ninh Kiều",
    image: "/images/store/store-7.jpg",
    note: "Có khu thử sản phẩm"
  },
  {
    id: 8,
    name: "Cửa hàng TruNguyen - Huế",
    address: "24 Bến Nghé",
    phone: "0944 333 112",
    city: "Huế",
    ward: "Phú Hội",
    image: "/images/store/store-8.jpg",
    note: "Giảm giá 10% khi mua đơn trên 500k"
  },
  {
    id: 9,
    name: "Cửa hàng TruNguyen - Nha Trang",
    address: "109 Trần Phú",
    phone: "0987 123 444",
    city: "Nha Trang",
    ward: "Vĩnh Trường",
    image: "/images/store/store-9.jpg",
    note: "View biển rất đẹp"
  },
  {
    id: 10,
    name: "Cửa hàng TruNguyen - Vũng Tàu",
    address: "70 Lê Hồng Phong",
    phone: "0911 558 998",
    city: "Vũng Tàu",
    ward: "Thắng Tam",
    image: "/images/store/store-10.jpg",
    note: "Giao hàng nhanh trong 2 giờ"
  }
];
