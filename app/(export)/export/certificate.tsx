"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type CertificateTab = {
  id: string;
  label: string;           // text ở cột trái (HALAL, HVNCLC,...)
  title: string;           // tiêu đề lớn ở panel xanh bên phải
  paragraphs: string[];    // nội dung mô tả bên phải
  certificateImage: string;// đường dẫn ảnh chứng nhận ở giữa
};

const TABS: CertificateTab[] = [
  {
    id: "hvnclc",
    label: "HVNCLC",
    title: "Hàng Việt Nam chất\nlượng cao 2022",
    certificateImage: "/images/certify.webp",
    paragraphs: [
      "Chất lượng sản phẩm của VWRC được khẳng định bằng các chứng nhận trong nước và quốc tế như: HALAL, HVNCLC.",
      "Với mong muốn và quyết tâm luôn mang đến những sản phẩm gạo có chất lượng tốt nhất đến tay người tiêu dùng, VWRC đã không ngừng cải tiến hệ thống sản xuất và kiểm soát chất lượng sản phẩm một cách nghiêm ngặt. Qua đó ngày càng khẳng định được vị thế của VWRC tại thị trường trong nước và quốc tế."
    ]
  },
  {
    id: "halal",
    label: "HALAL",
    title: "Chứng nhận HALAL\ncho sản phẩm gạo",
    certificateImage: "/images/certify.webp",
    paragraphs: [
      "Sản phẩm gạo của VWRC đáp ứng nghiêm ngặt các tiêu chuẩn HALAL từ khâu nguyên liệu, sản xuất đến bảo quản.",
      "Chứng nhận HALAL giúp sản phẩm dễ dàng tiếp cận người tiêu dùng Hồi giáo trong và ngoài nước, mở rộng thị trường xuất khẩu và nâng cao uy tín thương hiệu gạo Việt Nam."
    ]
  }
  // bạn có thể thêm các tab khác ở đây
];

const CertificateSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId)!;

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/mountain.webp"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Heading */}
      <div className="relative z-10 flex justify-center pt-10 md:pt-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[0.25em] uppercase text-center">
          GIẤY CHỨNG NHẬN
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-14 pt-10 md:pt-14">
        <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-16">
          {/* LEFT: Accordion / Tabs */}
          <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6">
            {TABS.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  className={`text-left uppercase transition-all duration-300
                    ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                  `}
                >
                  {/* Label nhỏ phía trên (HALAL text nhỏ trong hình bạn có thể tuỳ biến) */}
                  {!isActive && (
                    <p className="tracking-[0.25em] text-[10px] md:text-xs mb-1">
                      {tab.id === "hvnclc" ? "Chứng nhận" : "Chứng nhận"}
                    </p>
                  )}
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-2xl md:text-3xl font-semibold tracking-wide ${
                        isActive ? "" : "opacity-90"
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`h-0.5 w-16 md:w-20 bg-white transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* CENTER: Certificate image with animated switch */}
          <div className="flex-[1.1] flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                {/* Outer border (vàng) */}
                {/* <div className="pointer-events-none absolute top-10 -right-8 bottom-18 left-8 border-10 border-[#f6a623]" /> */}
                {/* Inner border (xanh dương) */}
                {/* <div className="pointer-events-none absolute -top-3 -right-4 -bottom-3 -left-1 border-10 border-[#0066ff]" /> */}
                {/* Certificate image */}
                <div className="relative bg-white shadow-2xl max-w-[260px] md:max-w-[320px] lg:max-w-[360px]">
                  <Image
                    src={active.certificateImage}
                    alt={active.title}
                    width={420}
                    height={600}
                    className="w-full h-auto block"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Green content panel with animated switch */}
          <div className="flex-[1.1] self-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-text"}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-[#008848]/95 px-5 py-6 md:px-7 md:py-8 lg:px-9 lg:py-10"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-snug whitespace-pre-line">
                  {active.title}
                </h2>
                {active.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={`text-sm md:text-base leading-relaxed ${
                      idx < active.paragraphs.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
