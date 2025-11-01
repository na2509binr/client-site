// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import Link from "next/link";
// import AboutSubComponent from "./about-component";
// import { partners } from "../../types/partner"
// import SwiperPartner from "./swiper-partner";
// import { members } from "../../types/member";
// import SwiperMember from "./swiper-member";

// export default function AboutPage() {
//     return (
//         <div>
//             <div className="relative lg:h-[780px]">
//                 <Image
//                     className="z-0 dark:invert h-full object-cover "
//                     src="/images/about-bg.jpg"
//                     alt="Logo"
//                     width={1900}
//                     height={20}
//                     priority
//                 />
//                 <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

//                 <div className="absolute h-full top-0  px-2 flex flex-col justify-center lg:grid lg:grid-cols-[1fr_2fr_3fr] items-center text-white">
//                     <div className="col-start-2 ">
//                         <h1 className="text-[40px] lg:text-[60px] font-extrabold">
//                             <span className="block text-[30px] lg:text-[40px] font-extralight">GIỚI THIỆU</span>
//                             <span className="">CÔNG TY</span>
//                         </h1>
//                         <p className="my-6 text-[13px] lg:text-[16px]">
//                             The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
//                         </p>
//                         <div className="text-[13px] font-semibold flex items-center space-x-0.75">
//                             <Link href="/" className="text-[#b3e53f]">
//                                 <span>Trang chủ</span>
//                             </Link>
//                             <FontAwesomeIcon icon={faAngleRight} />
//                             <span>Giới thiệu</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <AboutSubComponent />

//             <div className="px-2 block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-12">
//                 <div className="col-start-2 text-center">
//                     <div>
//                         {/* <div className="flex flex-col"> */}

//                         <h1 className="text-[30px] lg:text-[40px] font-thin text-center">
//                             ĐỘI NGŨ
//                             <span className="font-black pl-2">TRONG MƠ</span>
//                         </h1>
//                         <p className="text-[18px] text-[#b3b3b3] my-6.25 px-3 lg:px-60">
//                             Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
//                         </p>
//                         {/* </div> */}

//                         <div className="w-full max-w-6xl 2xl:max-w-7xl mb-8">
//                             <SwiperMember members={members} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-12 bg-[#f5deb3]/30">
//                 <div className="col-start-2 text-center">
//                     <h1 className="text-[30px] lg:text-[40px] font-black  text-center">
//                         ĐỐI TÁC
//                     </h1>
//                     <p className="text-[18px] text-[#b3b3b3] my-6.25 px-3 lg:px-60">
//                         Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
//                     </p>

//                     <div className="w-full max-w-6xl 2xl:max-w-7xl mb-8">
//                         <SwiperPartner partner={partners} />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }







// pages/about.tsx (hoặc app/about/page.tsx nếu dùng App Router)
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import Link from "next/link";
// import AboutSubComponent from "./about-component";
// import CertificateSection from "../components/certificate";

// export default function About() {
//   return (
//     <div className="text-gray-900">
//       {/* Hero */}
//       <div className="relative lg:h-[580px]">
//         <Image
//           className="z-0 dark:invert h-full object-cover "
//           src="/images/about-bg.jpg"
//           alt="Logo"
//           width={1900}
//           height={20}
//           priority
//         />
//         <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

//         <div className="absolute h-full top-0  px-2 flex flex-col justify-center lg:grid lg:grid-cols-[1fr_2fr_3fr] items-center text-white">
//           <div className="col-start-2 ">
//             <h1 className="text-[40px] lg:text-[60px] font-extrabold">
//               <span className="block text-[30px] lg:text-[40px] font-extralight">GIỚI THIỆU</span>
//               <span className="">CÔNG TY</span>
//             </h1>
//             <p className="my-6 text-[13px] lg:text-[16px]">
//               The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
//             </p>
//             <div className="text-[13px] font-semibold flex items-center space-x-0.75">
//               <Link href="/" className="text-[#b3e53f]">
//                 <span>Trang chủ</span>
//               </Link>
//               <FontAwesomeIcon icon={faAngleRight} />
//               <span>Giới thiệu</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mx-auto px-4 py-16 lg:p-0 gap-y-16">
//         {/* Câu chuyện thương hiệu */}
//         <AboutSubComponent />

//         <section
//           className="px-4 pb-12 pt-6 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-cover bg-center bg-no-repeat bg-[url('/images/about_bg.jpg')]"
//           id="vision"
//         >
//           <div className="col-start-2">
//             <div>
//               <div className="flex items-end justify-start pb-6">
//                 <h2 className="text-3xl font-semibold my-3 relative">
//                   <span className="relative z-10">Tầm nhìn &amp; Sứ mệnh</span>
//                   <span className="absolute left-0 -bottom-1 h-1 bg-red-600 w-1/2 rounded-sm"></span>
//                 </h2>
//               </div>


//               <div className="grid grid-cols-1 xl:grid-col-[7fr_3fr] ">
//                 <div className="bg-white/90 p-6 md:p-12">
//                   <h3 className="text-xl font-semibold mb-4">Tầm nhìn</h3>
//                   <p className="mb-6 text-gray-700">
//                     Trở thành công ty hàng đầu trong lĩnh vực cung cấp các sản phẩm nông nghiệp chất lượng cao, được khách hàng và đối tác tin tưởng trên toàn quốc.
//                   </p>
//                   <h3 className="text-xl font-semibold mb-4">Sứ mệnh</h3>
//                   <p className="mb-6 text-gray-700">
//                     Cung cấp các sản phẩm nông nghiệp an toàn, bền vững và thân thiện với môi trường, đồng thời hỗ trợ cộng đồng nông dân phát triển kinh tế thông qua các chương trình hợp tác và đào tạo.
//                   </p>

//                 </div>
//                 <div className="hidden lg:block"></div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* GIÁ TRỊ CỐT LÕI */}
//         <section
//           className="px-4 pb-12 pt-6 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]"
//           id="vision"
//         >
//           <div className="col-start-2">
//             <div>
//               <div className="flex items-end justify-start pb-6">
//                 <h2 className="text-3xl font-semibold my-3 relative">
//                   <span className="relative z-10">Giá trị cốt lõi</span>
//                   <span className="absolute left-0 -bottom-1 h-1 bg-red-600 w-1/2 rounded-sm"></span>
//                 </h2>
//               </div>

//               <p className="mb-4 text-gray-700 max-w-3xl">
//                 Giá trị cốt lõi là kim chỉ nam cho mọi hành động của chúng tôi — từ thiết kế sản phẩm, chọn nhà cung cấp, tới phục vụ khách hàng. Những giá trị này giúp doanh nghiệp giữ vững phương hướng khi mở rộng, đổi mới và đối mặt thử thách.
//               </p>

//               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                 <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
//                   <h4 className="font-medium mb-2">Chất lượng</h4>
//                   <p className="text-sm text-gray-600">Luôn ưu tiên tiêu chuẩn cao nhất trong mọi khâu để đảm bảo hiệu quả và độ bền của sản phẩm.</p>
//                 </div>

//                 <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
//                   <h4 className="font-medium mb-2">Uy tín &amp; Minh bạch</h4>
//                   <p className="text-sm text-gray-600">Thông tin minh bạch, cam kết rõ ràng, và trách nhiệm với khách hàng xuyên suốt vòng đời sản phẩm.</p>
//                 </div>

//                 <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
//                   <h4 className="font-medium mb-2">Đổi mới</h4>
//                   <p className="text-sm text-gray-600">Luôn tìm kiếm giải pháp tốt hơn — sử dụng dữ liệu, công nghệ và sáng tạo để cải tiến liên tục.</p>
//                 </div>

//                 <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
//                   <h4 className="font-medium mb-2">Khách hàng</h4>
//                   <p className="text-sm text-gray-600">Mọi quyết định lấy khách hàng làm trung tâm — hiểu rõ nhu cầu, đảm bảo trải nghiệm vượt kỳ vọng.</p>
//                 </div>

//                 <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
//                   <h4 className="font-medium mb-2">Phát triển bền vững</h4>
//                   <p className="text-sm text-gray-600">Quyết định lâu dài hướng đến lợi ích môi trường và cộng đồng.</p>
//                 </div>

//                 <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
//                   <h4 className="font-medium mb-2">Đạo đức nghề nghiệp</h4>
//                   <p className="text-sm text-gray-600">Hành xử công bằng, tôn trọng đồng nghiệp và đối tác, xây dựng văn hoá doanh nghiệp đáng tin cậy.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* QUY TRÌNH SẢN XUẤT */}
//         <section
//           className="px-4 pb-12 pt-6  lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-gray-50"
//           id="vision"
//         >
//           <div className="col-start-2">
//             <div>
//               <div className="flex items-end justify-start pb-6">
//                 <h2 className="text-3xl font-semibold my-3 relative">
//                   <span className="relative z-10">Quy trình sản xuất</span>
//                   <span className="absolute left-0 -bottom-1 h-1 bg-red-600 w-1/2 rounded-sm"></span>
//                 </h2>
//               </div>

//               <div className="grid gap-8 md:grid-cols-2 items-start">
//                 <div className="space-y-4 text-gray-700">
//                   <p>
//                     Quy trình sản xuất của chúng tôi được kiểm soát chặt chẽ theo từng giai đoạn: lựa chọn nguyên liệu, xử lý, chế biến, kiểm định và đóng gói. Mỗi bước đều tuân thủ tiêu chuẩn quốc tế nhằm đảm bảo sản phẩm đạt chất lượng cao nhất trước khi đến tay khách hàng.
//                   </p>

//                   <p>
//                     Chúng tôi áp dụng hệ thống kiểm soát chất lượng 3 lớp: kiểm tra đầu vào, giám sát quy trình và kiểm tra cuối cùng trước khi xuất xưởng. Dữ liệu kiểm nghiệm được lưu trữ để truy xuất nguồn gốc và phục vụ cho các chương trình cải tiến liên tục.
//                   </p>

//                   <p>
//                     Đội ngũ kỹ thuật liên tục rà soát quy trình để tối ưu năng suất, giảm lãng phí và đảm bảo tiêu chuẩn an toàn. Ngoài ra, chúng tôi hợp tác với các trung tâm kiểm định độc lập để có đánh giá khách quan về chất lượng sản phẩm.
//                   </p>

//                   <div className="mt-3">
//                     <a
//                       href="#contact"
//                       className="inline-block rounded-lg bg-red-600 text-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-red-700"
//                     >
//                       Tìm hiểu chi tiết quy trình
//                     </a>
//                   </div>
//                 </div>

//                 <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
//                   <img
//                     src="https://via.placeholder.com/800x480"
//                     alt="Quy trình sản xuất"
//                     width={800}
//                     height={480}
//                     className="object-cover w-full h-64 md:h-full"
//                   />
//                   <div className="p-5">
//                     <h4 className="font-medium mb-2">Mỗi bước — một tiêu chuẩn</h4>
//                     <p className="text-sm text-gray-600">Từ khâu chọn nguyên liệu đến đóng gói, mỗi công đoạn đều có chỉ tiêu rõ ràng, người phụ trách và biện pháp khắc phục khi phát hiện sai sót.</p>

//                     <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-1">
//                       <li>Chọn nguyên liệu: Kiểm định mẫu đầu vào</li>
//                       <li>Xử lý &amp; chế biến: Kiểm soát tham số sản xuất</li>
//                       <li>Kiểm định cuối: Phân tích mẫu ngẫu nhiên</li>
//                       <li>Đóng gói &amp; kiểm tra nhãn: Đảm bảo thông tin rõ ràng</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Extra long paragraph để trang không bị trống */}
//               <div className="mt-8 text-gray-700 bg-white border border-gray-100 rounded-xl shadow-sm p-6 prose">
//                 <p>
//                   Chúng tôi hiểu rằng minh bạch quy trình chính là nền tảng của niềm tin. Vì vậy ngoài việc duy trì các tiêu chuẩn nội bộ, công ty còn công khai một phần kết quả kiểm nghiệm và chính sách thu hồi sản phẩm nếu phát hiện sai lệch.
//                   Việc này không chỉ bảo vệ quyền lợi người tiêu dùng mà còn là động lực để đội ngũ liên tục hoàn thiện quy trình, nâng cao năng lực sản xuất và giảm thiểu tác động lên môi trường.
//                 </p>

//                 <p>
//                   Song hành với sản xuất, chúng tôi đầu tư vào các chương trình đào tạo nhân sự, áp dụng hệ thống quản lý chất lượng số và tự động hoá một số khâu nhạy cảm để hạn chế lỗi do con người. Mục tiêu cuối cùng là đạt được sự cân bằng giữa hiệu suất, chất lượng và trách nhiệm xã hội.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* Tầm nhìn & Sứ mệnh */}
//         {/* <section className="px-2 pb-10 pt-3 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-gray-100" id="vision">
//                     <div className="col-start-2">
//                         <div className="flex justify-start pb-8">
//                             <h2 className="text-3xl font-semibold my-5 inline-block relative ">
//                                 <span className="relative z-10">Tầm nhìn & Sứ mệnh</span>
//                                 <span className="absolute left-0 -bottom-1 h-0.75 bg-red-600 w-1/2"></span>
//                             </h2>
//                         </div>

//                         <p><strong>Tầm nhìn:</strong> Trở thành đơn vị dẫn đầu trong lĩnh vực với những giải pháp sáng tạo và bền vững.</p>
//                         <p><strong>Sứ mệnh:</strong> Mang đến các sản phẩm chất lượng vượt trội, đóng góp tích cực vào sự phát triển của cộng đồng và môi trường.</p>
//                     </div>
//                 </section>




//                 <section className="px-2 pb-3 xl:pb-0 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] " id="vision">
//                     <div className="col-start-2">
//                         <div className="flex justify-start">
//                             <h2 className="text-3xl font-semibold my-5 inline-block relative ">
//                                 <span className="relative z-10">Giá trị cốt lõi</span>
//                                 <span className="absolute left-0 -bottom-1 h-0.75 bg-red-600 w-1/2"></span>
//                             </h2>
//                         </div>

//                         <ul className="list-disc list-inside space-y-2">
//                             <li>Chất lượng là ưu tiên hàng đầu</li>
//                             <li>Uy tín và minh bạch</li>
//                             <li>Đổi mới và sáng tạo</li>
//                             <li>Lấy khách hàng làm trung tâm</li>
//                             <li>Phát triển bền vững</li>
//                         </ul>
//                     </div>
//                 </section>



//                 <section className="px-2 pb-3 xl:pb-0 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] " id="vision">
//                     <div className="col-start-2">
//                         <div className="flex justify-start">
//                             <h2 className="text-3xl font-semibold my-5 inline-block relative ">
//                                 <span className="relative z-10">Quy trình sản xuất</span>
//                                 <span className="absolute left-0 -bottom-1 h-0.75 bg-red-600 w-1/2"></span>
//                             </h2>
//                         </div>

//                         <div className="flex flex-col md:flex-row gap-8">
//                             <div>
//                                 <p>
//                                     Quy trình sản xuất của chúng tôi được kiểm soát chặt chẽ theo từng
//                                     giai đoạn: lựa chọn nguyên liệu, xử lý, chế biến, kiểm định và đóng
//                                     gói. Mỗi bước đều tuân thủ tiêu chuẩn quốc tế nhằm đảm bảo sản phẩm
//                                     đạt chất lượng cao nhất trước khi đến tay khách hàng.
//                                 </p>
//                             </div>
//                             <div>
//                                 <img
//                                     src="https://via.placeholder.com/500x300"
//                                     alt="Production Process"
//                                     width={500}
//                                     height={300}
//                                     className="object-cover w-full h-full"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}

//         {/* Chứng nhận */}
//         {/* <section className="px-2 pb-3 xl:pb-0 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] " id="vision">
//                     <div className="col-start-2">
//                         <div className="flex justify-start">
//                             <h2 className="text-3xl font-semibold my-5 inline-block relative ">
//                                 <span className="relative z-10">Chứng nhận</span>
//                                 <span className="absolute left-0 -bottom-1 h-0.75 bg-red-600 w-1/2"></span>
//                             </h2>
//                         </div>

//                         <p>Chúng tôi tự hào đạt được các chứng nhận uy tín trong và ngoài nước:</p>
//                         <div className="flex flex-wrap gap-4">
//                             <img src="https://via.placeholder.com/120" alt="Certification 1" width={120} height={120} />
//                             <img src="https://via.placeholder.com/120" alt="Certification 2" width={120} height={120} />
//                             <img src="https://via.placeholder.com/120" alt="Certification 3" width={120} height={120} />
//                         </div>
//                     </div>
//                 </section> */}
//         <CertificateSection />
//       </div>
//     </div>
//   );
// }






// pages/index.tsx
import { faCircle, faCircleCheck, faHandshake, faPeopleRoof, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CertificateSection from "../components/certificate";
import { JSX } from "react";

export default function Home(): JSX.Element {




  return (
    <>


      <div id="section0" className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark scroll-smooth">
        <section className="relative bg-linear-to-r from-red-800 via-primary to-gray-900 dark:from-red-900 dark:via-primary dark:to-black overflow-hidden">
          <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Nâng tầm giá trị hạt gạo Việt Nam
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                  Mang những hạt gạo chất lượng nhất từ đồng bằng sông Cửu Long đến với thế giới, khẳng định vị
                  thế và uy tín của nông sản Việt.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* <a
                      className="bg-primary text-white text-center font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
                      href="#"
                    >
                      Khám phá sản phẩm
                    </a> */}
                  <a
                    className="bg-transparent text-white text-center font-semibold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-primary transition-colors"
                    href="/product"
                  >
                    Khám phá sản phẩm
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  alt="Rice paddy field at sunset"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 md:opacity-100 md:static md:rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1jaYolRQGFk_zudkx_Zxm65IX7EWF5wsAmV0hHsJIKSNhpKtWqjBfFjiJdjICE7aCiTRWxLpjnSEPF4rwGDwkQtrpUrrfv8MCddV_0IHKEvBMZyWBAux-Tb-4UlUs66SO59QQAyuJ3vpzn93KDSZe-EhQKn8Ntfa3WgyGDY9uUK79BIThZjWMhYGu1eLDMor5el084z1yLXWCXSAp92PxnJcd61WqQNQcj6xgePCU-A0p3fPRk1_CgwgjMy6K6linLzU2AdMplHs"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Inline style for .soft-shadow - giữ giống file gốc */}
      <style>{`.soft-shadow { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); }`}</style>
      <div id="section1" className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-16">
        <div className="col-start-2 ">
          <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark scroll-smooth">
            <main>
              {/* <section className="relative bg-linear-to-r from-red-800 via-primary to-gray-900 dark:from-red-900 dark:via-primary dark:to-black overflow-hidden">
            <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white z-10">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Nâng tầm giá trị hạt gạo Việt Nam
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                    Mang những hạt gạo chất lượng nhất từ đồng bằng sông Cửu Long đến với thế giới, khẳng định vị
                    thế và uy tín của nông sản Việt.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                    <a
                      className="bg-transparent text-white text-center font-semibold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-primary transition-colors"
                      href="/product"
                    >
                      Khám phá sản phẩm
                    </a>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    alt="Rice paddy field at sunset"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 md:opacity-100 md:static md:rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1jaYolRQGFk_zudkx_Zxm65IX7EWF5wsAmV0hHsJIKSNhpKtWqjBfFjiJdjICE7aCiTRWxLpjnSEPF4rwGDwkQtrpUrrfv8MCddV_0IHKEvBMZyWBAux-Tb-4UlUs66SO59QQAyuJ3vpzn93KDSZe-EhQKn8Ntfa3WgyGDY9uUK79BIThZjWMhYGu1eLDMor5el084z1yLXWCXSAp92PxnJcd61WqQNQcj6xgePCU-A0p3fPRk1_CgwgjMy6K6linLzU2AdMplHs"
                  />
                </div>
              </div>
            </div>
            </section> */}
              <section className="py-20 md:py-28">
                <div className="container mx-auto px-6">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Câu chuyện thương hiệu</h2>
                    <p className="mt-2 text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                      Hành trình từ đồng ruộng đến bàn ăn toàn cầu
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-subtle-light dark:text-subtle-dark">
                      <p>
                        Bắt đầu từ niềm đam mê và khát vọng nâng cao giá trị nông sản Việt, chúng tôi đã khởi đầu một hành
                        trình đầy thử thách nhưng cũng thật tự hào. Từ những ngày đầu tiên làm việc trực tiếp với người
                        nông dân, chọn lọc từng giống lúa tốt nhất, chúng tôi luôn tâm niệm rằng mỗi hạt gạo không chỉ là
                        lương thực, mà còn là tinh hoa của đất trời, là công sức và mồ hôi của biết bao con người.
                      </p>
                      <p>
                        Trải qua nhiều năm phát triển, chúng tôi đã xây dựng một hệ thống sản xuất và chế biến hiện đại, đạt
                        các tiêu chuẩn quốc tế khắt khe nhất. Chúng tôi tự hào mang đến những sản phẩm gạo sạch, an toàn và
                        dinh dưỡng, không chỉ phục vụ thị trường trong nước mà còn chinh phục các thị trường khó tính trên
                        thế giới.
                      </p>
                      {/* <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-xl italic font-medium text-text-light dark:text-text-dark">
                      “Chất lượng là danh dự, uy tín là sự sống còn.”
                    </p>
                  </div> */}
                      <div className="border-l-4 border-[#e7c27b] bg-[#fcf2f2] dark:bg-gold/10 p-6 rounded-lg italic">
                        <p className="text-lg font-medium text-gray-800 dark:text-white">"Chất lượng là danh dự, uy tín là sự sống còn. Chúng tôi cam kết mang đến những hạt vàng tinh túy nhất của đất Việt."</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[400px]">
                      <div className="col-span-1 row-span-2">
                        <img
                          alt="A farmer working in a rice field"
                          className="w-full h-full object-cover rounded-lg"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhkqfsizCJ93Mu3simDSiUXepVDD6n0Em50TYXc-5rQsqDluV0Qgl2s-XHagjkdeOoipSU3XKWy2CGp7TszUsqIo3xOfz7fqanyU0EKG6FSWwO9ccbgLBwEpAsigY0G7pxUgutNtx-U9FtFRQ9Na8_Vj-viFKndxqjvKUF8YZDd7cWWCDeNTAvS8MR20Xi_OprdTA1lnzxnlZDLC7e1EoK5FyAwGt2BI2Iiwugv2-IG-ER1cnV-ayG6U1dhDDNb-wSN63jCX1N_t4"
                        />
                      </div>
                      <div className="col-span-1 row-span-1">
                        <img
                          alt="Close-up of rice grains in a bowl"
                          className="w-full h-full object-cover rounded-lg"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRvVjg52OZ3OYVRs2AEf3RP324xSp3uti9yxG19fITAP2FRG2oT5_NJenz6XfDkQ5_3KbRVfZj2xxeSIPfI3LEV0C-vGkXMq_A7qgnGNtuYP_e_2rL1R7GIjD4bSMicLBpH22hzSGJl3jom3Tf27sjJPFEfoygrvYVRJNrgStzdiSgV9-9Bf0M5o0ljnYjVqYyXhHkSiQwiffwzd_h_cghouNULoD8Bl3d_iOPuTGiRjjR3f84ZX_iJcVdWxxvZ1LcR0ZD210R6wc"
                        />
                      </div>
                      <div className="col-span-1 row-span-1">
                        <img
                          alt="Modern rice processing factory"
                          className="w-full h-full object-cover rounded-lg"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuASfkOP2VPvxeKcDIp5XkHjC9fy9NVSKzSABh9YWZJnR2MvM17xx1P4DHKyAATRQerMWfWo0MzOrFlyAByvX2WIP4IfK7is3BadV-oJM-5cEJ26C9ysGloZQgLkbrVBc55LtFAqRn3ETBxJs9sfP3zGZdTFjEauCuoksCu28E2YaS-yST0dcqk3aXlfNcOUdLeNvxhByoz3FZzOxr4NFDu6bi-QfMSG61HfQHVG02BlA0jTlqw_bBV_JZoxbWdfTfNY8xXoYrqo52I"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>


      <div id="section2" className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-8 bg-[#f2f3e8]">
        <div className="col-start-2">
          <section className="bg-surface-light dark:bg-surface-dark">
            {/* <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-background-light dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="material-icons-outlined text-primary text-5xl mb-4">visibility</span>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">Tầm nhìn</h3>
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Trở thành công ty xuất khẩu gạo hàng đầu Việt Nam, là biểu tượng của chất lượng và uy tín trên
                    thị trường quốc tế.
                  </p>
                </div>
                <div className="p-8 bg-background-light dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="material-icons-outlined text-primary text-5xl mb-4">track_changes</span>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">Sứ mệnh</h3>
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Cung cấp sản phẩm gạo Việt Nam chất lượng cao, an toàn và bền vững, góp phần nâng cao đời sống người
                    nông dân và quảng bá văn hóa ẩm thực Việt.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Tầm nhìn & Sứ mệnh</h2>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
                Định hướng phát triển bền vững
              </h2>
            </div>
            <div className="grid grid-cols-[4fr_5fr] gap-10 my-10">

              <div className="min-h-full  flex items-center justify-center p-8">
                <div className="relative w-full max-w-lg">
                  {/* Yellow border frame */}
                  <div className="absolute inset-0 border-8 border-[#f9a825] translate-x-4 translate-y-4 rounded-sm"></div>

                  {/* Main card with green border */}
                  <div className="relative border-8 border-[#2e7d32] rounded-sm overflow-hidden bg-white shadow-2xl group">
                    {/* Image container */}
                    <div className="relative h-[600px]">
                      <img
                        src="/images/about.png"
                        alt="Rice product"
                        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />

                      {/* Gradient overlay for better logo visibility */}
                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20"></div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex flex-col gap-y-10 text-lg text-subtle-light dark:text-subtle-dark">
                  <div>
                    <h3 className="text-[38px] text-[#ff281c] font-bold text-text-light dark:text-text-dark mb-3">Tầm nhìn</h3>
                    <p>
                      Trở thành công ty xuất khẩu gạo hàng đầu Việt Nam, là biểu tượng của chất lượng và uy tín trên
                      thị trường quốc tế.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[38px] text-[#ff281c] font-bold text-text-light dark:text-text-dark mb-3">Sứ mệnh</h3>
                    <p>
                      Cung cấp sản phẩm gạo Việt Nam chất lượng cao, an toàn và bền vững, góp phần nâng cao đời sống người
                      nông dân và quảng bá văn hóa ẩm thực Việt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>


      <div id="section3" className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
        <div className="col-start-2 ">
          <section className="relative py-12 md:py-15 overflow-hidden">
            <div className="container mx-auto px-6 relative">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Nền tảng phát triển</h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Giá trị cốt lõi</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[#fbf5e8]/50 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-lg soft-shadow text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                    {/* <span className="material-icons-outlined text-primary text-3xl">verified</span> */}
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#ff281c] text-4xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">Chất lượng</h4>
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Cam kết chất lượng sản phẩm là ưu tiên hàng đầu trong mọi hoạt động.
                  </p>
                </div>

                <div className="bg-[#fbf5e8]/50 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-lg soft-shadow text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                    {/* <span className="material-icons-outlined text-primary text-3xl">handshake</span> */}
                    <FontAwesomeIcon icon={faHandshake} className="text-[#ff281c] text-4xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">Uy tín</h4>
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Xây dựng mối quan hệ bền vững với khách hàng và đối tác dựa trên sự tin cậy.
                  </p>
                </div>

                <div className="bg-[#fbf5e8]/50 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-lg soft-shadow text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                    {/* <span className="material-icons-outlined text-primary text-3xl">groups</span> */}
                    <FontAwesomeIcon icon={faPeopleRoof} className="text-[#ff281c] text-4xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">Trách nhiệm</h4>
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Hành động có trách nhiệm với cộng đồng, xã hội và môi trường.
                  </p>
                </div>

                <div className="bg-[#fbf5e8]/50 dark:bg-background-dark/80 backdrop-blur-sm p-6 rounded-lg soft-shadow text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                    {/* <span className="material-icons-outlined text-primary text-3xl">autorenew</span> */}
                    <FontAwesomeIcon icon={faRotate} className="text-[#ff281c] text-4xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">Đổi mới</h4>
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Không ngừng cải tiến và ứng dụng công nghệ để tạo ra giá trị vượt trội.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>



      <div id="section4" className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-[#f2f3e8]">
        <div className="col-start-2 ">
          <section className="py-20 md:py-28 bg-surface-light dark:bg-surface-dark">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Minh bạch &amp; chuyên nghiệp</h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Quy trình sản xuất</p>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                <div className="absolute hidden lg:block top-1/2 left-0 w-full h-px bg-gray-300 dark:bg-gray-600 -translate-y-1/2" />
                <div className="relative text-center">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-16 h-16 flex items-center justify-center 
                      rounded-full bg-primary text-gray-500 font-bold text-md z-10"
                  >
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <div className="absolute lg:relative -top-12 lg:top-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary text-[#ff281c] font-bold text-xl mb-4 z-10">
                    01
                  </div>
                  <h4 className="text-lg font-bold mt-2 text-text-light dark:text-text-dark">Tuyển chọn giống</h4>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">Chọn lọc những giống lúa tốt nhất.</p>
                </div>

                <div className="relative text-center">
                                    <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-16 h-16 flex items-center justify-center 
                      rounded-full bg-primary text-gray-500 font-bold text-md z-10"
                  >
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <div className="absolute lg:relative -top-12 lg:top-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary text-[#ff281c] font-bold text-xl mb-4 z-10">
                    02
                  </div>
                  <h4 className="text-lg font-bold mt-2 text-text-light dark:text-text-dark">Gieo trồng &amp; Chăm sóc</h4>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">Canh tác theo tiêu chuẩn hữu cơ.</p>
                </div>

                <div className="relative text-center">
                                    <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-16 h-16 flex items-center justify-center 
                      rounded-full bg-primary text-gray-500 font-bold text-md z-10"
                  >
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <div className="absolute lg:relative -top-12 lg:top-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary text-[#ff281c] font-bold text-xl mb-4 z-10">
                    03
                  </div>
                  <h4 className="text-lg font-bold mt-2 text-text-light dark:text-text-dark">Thu hoạch &amp; Sấy khô</h4>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">Đảm bảo độ ẩm tiêu chuẩn.</p>
                </div>

                <div className="relative text-center">
                                    <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-16 h-16 flex items-center justify-center 
                      rounded-full bg-primary text-gray-500 font-bold text-md z-10"
                  >
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <div className="absolute lg:relative -top-12 lg:top-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary text-[#ff281c] font-bold text-xl mb-4 z-10">
                    04
                  </div>
                  <h4 className="text-lg font-bold mt-2 text-text-light dark:text-text-dark">Xay xát &amp; Đóng gói</h4>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">Hệ thống máy móc hiện đại.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div id="section5">

        <CertificateSection />
      </div>

      {/* <div className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
        <div className="col-start-2 ">

          <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Tiêu chuẩn quốc tế</h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Chứng nhận &amp; Giải
                  thưởng</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="h-28 bg-surface-light dark:bg-surface-dark rounded-lg flex items-center justify-center p-4">
                  <img alt="ISO Certification Logo" className="max-h-10 w-auto filter grayscale opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTheB5DHoNm04BQyCVhbWAsygzyExxDbEO_P2H__QC1KY-Mpdfga8JlpDzPhu2zxPABH7FNbgWXNrm7WTGVy_9EHmEDh1OWHWoI9OO8f-NDcg9PXJucdIIr6Fg3oRfij068Wz0i6PMKj_LjjVRZPv5e14Vv35qzTbjU4c1jfiSdcmhWQ5MbpyTSGBT2gOmvWaDSes1zFYSxoviVWQBB1zB8cOg2olWR9MlakwkMUUJrdIzuF68vipJYuqsvN-n_JpLKL-PNvA1ZQU" />
                </div>
                <div className="h-28 bg-surface-light dark:bg-surface-dark rounded-lg flex items-center justify-center p-4">
                  <img alt="HACCP Certification Logo" className="max-h-10 w-auto filter grayscale opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGVaapu1ANzItqlVNuDJxyHPTYJo8sEjErNw-GiR0W71J0myIrFrNtAXPPUukZUkx2xZi0ZWizmMoQscAVZhQnMRDQR8rKzDpc3cQuqA48-Mpn8xvu29zu5mtYQspoDXD-u73W1qLyf_LEb4qaAO8A_nQb6OqnkyOAO_IbUaJYG9jiC17g5uWBVUrdzril6OeiH1NNuBPsNGrrFGSN1bKR6CJvFGBamzhRmpK9URt5pxIKm-FfjWNJA7Zov1R39EWXlI583oth8U" />
                </div>
                <div className="h-28 bg-surface-light dark:bg-surface-dark rounded-lg flex items-center justify-center p-4">
                  <img alt="FDA Certification Logo" className="max-h-10 w-auto filter grayscale opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzCIBk0g0bXRLErq1Ugnw_QvMDvr8zhjZAs2aaLMAZNue-f7t4pw51ed7I5i47tb6jjWvku68XJUofoGwWcDs5KXSYgz6i_OU_xlz6_KoOdDzQH_uuMtklS5cBFG-v6vVd0CjHxx3_7WxZKJUseX4yW00V7HTVef9c6Dl04FEaMmWDQg5__oklXzWJiKnY4aAAp-j-y3fD0KRTXlHq-G7-x-_ceoPnuPmdelKXWQMT0RaZRkarsttJSpQOOAgkIaIdvQwIQdzBAeo" />
                </div>
                <div className="h-28 bg-surface-light dark:bg-surface-dark rounded-lg flex items-center justify-center p-4">
                  <img alt="HALAL Certification Logo" className="max-h-10 w-auto filter grayscale opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4r_SvP5Js-24yy8eQYFLc8DszQXtzHvfzTioEOKYyhjOT5kQsyltQmZy8zKBO4-wkO0lEsHsLhtdWMJ_kEmtiaOSys6WC-7n8nZ1YD-t_y0XYaRMe_sWgbCaoEOwEGEKbnP6p3LLabtm0GpsTucOFiJOevtXv8AOAW0KPKEUCgjP0Y-ja386KyR-7F0JknyuqETePK8PbIlZHXnXs7ncwUifJni5LaQYeY2NMpMFcvcBDov2sjTLOHO82RdlREv2v4PDBuHNqETHc" />
                </div>
                <div className="h-28 bg-surface-light dark:bg-surface-dark rounded-lg flex items-center justify-center p-4">
                  <img alt="GLOBALG.A.P. Certification Logo" className="max-h-10 w-auto filter grayscale opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCveAPy0NyMPzOJ3TntgFoN8K_NhWCZokIl5Q81C3uA9wTlL30ZjA7mg02qJWjjkpo_QD512UjtXYhHhEQ7dHtcRn1TqLBm6CSsDiFJMNgIgnQZd5u2aF2-KjfDWaDE0YKC6q0jxlKZfRu0CJ3X0T-I349R-a-WmtFwXEvi7Tqd1Ng7crCEryUeAAX0izCmBoptgJKEmwogL1nroeXUCXURV0QqiXt3BliXHdovhz-v3irv5ATtMvy69SGriDqcVcn_6VSEVWKiPac" />
                </div>
                <div className="h-28 bg-surface-light dark:bg-surface-dark rounded-lg flex items-center justify-center p-4">
                  <img alt="BRC Certification Logo" className="max-h-10 w-auto filter grayscale opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-fy4QfLSUPHcH1mukoYRv-XGj36MCIOhPoOzby_aZVN9xF4k9qt8f3JOOJ2-3HM3W5yO9fYwF6DP0u2cKu7WFg0uC4b3KQEChIvc9XinkAgbAAMMIuATPIZQWDcpHd9nk0QHTzVgii6vGY8pzqYFHNZAIUPX02gXvK2JpIyayENnDzgeaQzBjbst2B5e97EXQj7LE5esT53d63qgi153B1M009mRWgoWkUmlr7FNFOXFnKDjP6rsYjkf45O0RmqcKyQUlKf3Tg5E" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-linear-to-r from-red-800 via-primary to-red-900 dark:from-red-900 dark:via-primary dark:to-black">
            <div className="container mx-auto px-6 py-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sẵn sàng hợp tác cùng chúng tôi?</h2>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                  Hãy liên hệ ngay để nhận được tư vấn và báo giá tốt nhất cho các sản phẩm gạo chất lượng cao.
                </p>
                <a
                  className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
                  href="#"
                >
                  Bắt đầu ngay
                </a>
              </div>
            </div>
          </section>

        </div >
      </div > */}

    </>
  );
}
