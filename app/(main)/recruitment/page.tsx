"use client";

import React from "react";

export default function RecruitmentPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gray-900 z-0">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRi3H8DaTvFufcy2-pfl62au2wMMtRsLZAYBeE1ixG4YBcoSWBl6tdd_B1FDumraOailFkzGKA8or7KGnfSrmCBcvRqEN4pGtuF4zpiiMIMhvYQ4Rx_XHnuJ4ptxgtla1_IMce67m9xlws_VWhEV2GN2CrUEy_nJ2K7RKWb4ghw4R891kX7HIgzi52DIk0UCCKhdDfLQL1WNKMJfxOtx1Nx30hbboysYaF-Or6wUqlH_Hw8D4rFugEpzok5HoEQT1hZNUkVpv2fR0"
            alt=""
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-56 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Gia nhập đội ngũ tiên phong – nơi tài năng được nuôi dưỡng và tỏa sáng.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-10">
            Khám phá cơ hội để kiến tạo sự nghiệp, định hình tương lai và trở thành một phần của hành trình thành công đột phá.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#opportunities"
              className="w-full sm:w-auto inline-block bg-primary border-2 border-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90"
            >
              Cơ hội nghề nghiệp
            </a>

            <a
              href="#why-us"
              className="w-full sm:w-auto inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white/10"
            >
              Tìm hiểu văn hóa
            </a>
          </div>
        </div>

        {/* SVG WAVE */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-40">
          <svg className="w-full h-full" fill="#F5F5F5" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,96 C240,160 480,160 720,128 C960,96 1200,64 1440,96 L1440,160 L0,160 Z"></path>
          </svg>

          <svg className="w-full h-full absolute inset-0 dark:opacity-100 opacity-0" fill="#111111" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,96 C240,160 480,160 720,128 C960,96 1200,64 1440,96 L1440,160 L0,160 Z"></path>
          </svg>
        </div>
      </section>

      {/* ========== WHY US SECTION ========== */}
      <section id="why-us" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Tại sao chọn chúng tôi?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Môi trường làm việc chuyên nghiệp – sáng tạo – cởi mở. Tập trung phát triển con người là ưu tiên hàng đầu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* ITEM 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl">
                💡
              </div>
              <h3 className="text-xl font-bold mb-3">Sáng tạo không giới hạn</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Khuyến khích đổi mới — mọi ý tưởng đều được lắng nghe và trân trọng.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3">Cơ hội thăng tiến rõ ràng</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lộ trình phát triển nghề nghiệp minh bạch, định hướng theo năng lực.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3">Đồng đội thân thiện</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Môi trường hợp tác – hỗ trợ – tôn trọng lẫn nhau.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* ========== OPPORTUNITIES SECTION ========== */}
      <section id="opportunities" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Cơ hội nghề nghiệp</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Trở thành một phần trong đội ngũ chuyên nghiệp và đầy nhiệt huyết của chúng tôi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* JOB ITEM */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                React · NextJS · TailwindCSS
              </p>
              <a
                href="#apply"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90"
              >
                Ứng tuyển ngay
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">Backend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                .NET · SQL Server · Microservices
              </p>
              <a
                href="#apply"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90"
              >
                Ứng tuyển ngay
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">UI/UX Designer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Figma · Prototype · Wireframe
              </p>
              <a
                href="#apply"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90"
              >
                Ứng tuyển ngay
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========== RECRUITMENT PROCESS ========== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Quy trình tuyển dụng</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Rõ ràng – nhanh chóng – chuyên nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">

            {/* STEP ITEM */}
            <div className="text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                01
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-3">Nộp hồ sơ</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gửi CV và thông tin cá nhân của bạn cho chúng tôi.
                </p>
              </div>
            </div>

            <div className="text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                02
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-3">Phỏng vấn</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gặp gỡ trực tiếp với đội ngũ tuyển dụng và chuyên môn.
                </p>
              </div>
            </div>

            <div className="text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                03
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-3">Nhận kết quả</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thông báo kết quả trong 3–5 ngày làm việc.
                </p>
              </div>
            </div>

            <div className="text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                04
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-3">Gia nhập đội ngũ</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Hoàn tất thủ tục và trở thành đồng đội của chúng tôi.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========== APPLY FORM ========== */}
      <section id="apply" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
              Ứng tuyển ngay
            </h2>

            <form className="bg-gray-50 dark:bg-gray-900 p-10 rounded-xl shadow space-y-6">

              <div>
                <label className="block mb-2 font-semibold">Họ và tên *</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                  placeholder="Nhập họ tên"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Vị trí ứng tuyển *</label>
                <select
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                  required
                >
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>UI/UX Designer</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Tải CV *</label>
                <input type="file" className="w-full p-3 rounded-lg bg-white dark:bg-gray-800" required />
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-primary/90">
                Gửi hồ sơ
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
