import { ChevronsRight, Link } from "lucide-react";
import Image from "next/image"
import CustomDashedBorder from "./product-border";
import CertificateSection from "./certificate";


export default function ExportPage() {
  return (
    <>

      <Image
        className="z-0 dark:invert h-[800px] object-cover "
        src="/images/export-banner.webp"
        alt="Logo"
        width={2000}
        height={600}
        priority
      />



      <div className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-[#ff281c]">
        <div className="col-start-2 p-2 flex items-center text-white text-[17px] gap-4">
          <span>Trang chủ</span>
          <ChevronsRight />
          <span className="font-semibold">Xuất khẩu</span>
        </div>
      </div>

      <div className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-16 bg-[#f8f2e4]">
        <div className="col-start-2">
          <div className="grid grid-cols-5 gap-25 items-stretch">
            <div className="flex flex-col group">
              <Image
                className="z-0 dark:invert h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="/images/rice-export.png"
                alt="Logo"
                width={2000}
                height={20}
                priority
              />
              <div className="flex-1">
                <CustomDashedBorder
                  dash={30}
                  gap={35}
                  thickness={3}
                  color="#0b7c38"
                >
                  <div className="flex flex-col items-center text-center gap-y-5">

                    <h3 className="text-xl font-bold text-[#ff281c]">Tên sản phẩm</h3>
                    <p className="text-md">
                      Border nét đứt tùy chỉnh theo ý bạn!
                      Các tên sản phẩm
                    </p>
                  </div>
                </CustomDashedBorder>
              </div>
            </div>
            
            <div className="flex flex-col group">
              <Image
                className="z-0 dark:invert h-auto object-cover
                transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="/images/rice-export.png"
                alt="Logo"
                width={2000}
                height={20}
                priority
              />
              <div className="flex-1">
                <CustomDashedBorder
                  dash={30}
                  gap={35}
                  thickness={3}
                  color="#0b7c38"
                >
                  <div className="flex flex-col items-center text-center gap-y-5">

                    <h3 className="text-xl font-bold text-[#ff281c]">Tên sản phẩm</h3>
                    <p className="text-md">
                      Border nét đứt tùy chỉnh theo ý bạn!
                      Các tên sản phẩm
                    </p>
                  </div>
                </CustomDashedBorder>
              </div>
            </div>

            <div className="flex flex-col group">
              <Image
                className="z-0 dark:invert h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="/images/rice-export.png"
                alt="Logo"
                width={2000}
                height={20}
                priority
              />
              <div className="flex-1">
                <CustomDashedBorder
                  dash={30}
                  gap={35}
                  thickness={3}
                  color="#0b7c38"
                >
                  <div className="flex flex-col items-center text-center gap-y-5">

                    <h3 className="text-xl font-bold text-[#ff281c]">Tên sản phẩm</h3>
                    <p className="text-md">
                      Border nét đứt tùy chỉnh theo ý bạn!
                      Các tên sản phẩm
                    </p>
                  </div>
                </CustomDashedBorder>
              </div>
            </div>

            <div className="flex flex-col group">
              <Image
                className="z-0 dark:invert h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="/images/rice-export.png"
                alt="Logo"
                width={2000}
                height={20}
                priority
              />
              <div className="flex-1">
                <CustomDashedBorder
                  dash={30}
                  gap={35}
                  thickness={3}
                  color="#0b7c38"
                >
                  <div className="flex flex-col items-center text-center gap-y-5">

                    <h3 className="text-xl font-bold text-[#ff281c]">Tên sản phẩm</h3>
                    <p className="text-md">
                      Border nét đứt tùy chỉnh theo ý bạn!
                      Các tên sản phẩm
                    </p>
                  </div>
                </CustomDashedBorder>
              </div>
            </div>

            <div className="flex flex-col group">
              <Image
                className="z-0 dark:invert h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="/images/rice-export.png"
                alt="Logo"
                width={2000}
                height={20}
                priority
              />
              <div className="flex-1">
                <CustomDashedBorder
                  dash={30}
                  gap={35}
                  thickness={3}
                  color="#0b7c38"
                >
                  <div className="flex flex-col items-center text-center gap-y-5">

                    <h3 className="text-xl font-bold text-[#ff281c]">Tên sản phẩm</h3>
                    <span className="text-md">
                      Border nét đứt tùy chỉnh theo ý bạn!
                      Các tên sản phẩm ádasdasd

                    </span>
                  </div>
                </CustomDashedBorder>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-[#f8f2e4] border-t border-[#c2c2c2] pb-40">
        <div className="col-start-2 ">
          <div className="px-5 py-3 grid grid-cols-[1fr_5fr] justify-between items-center gap-x-5 
          bg-white rounded-b-3xl shadow-2xl">
            <h2 className="text-center font-bold text-[30px] text-[#ff281c]">About Us</h2>
            <p>We don't just export rice, we carry with us the pride of our nation, bringing the Vietnamese rice civilizations closer to our international friends. Born from the fertile Mekong Delta, each grain of our rice is the result of continuous efforts to improve product quality, always striving from good to great. With over 30 years of exceptional growth, we are now confident to be a trusted and high-quality rice exporter, meeting all the requirements you need.</p>
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



            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-5">
                  <Image
                    className="z-0 dark:invert object-cover"
                    src="/images/svg-rice.svg"
                    alt="Logo"
                    width={57}
                    height={57}
                    priority
                  />
                  <h2 className="text-[#008c5a] text-[38px] font-bold">
                    THỊ TRƯỜNG XUẤT KHẨU
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h3 className="font-bold mt-3">Bên cạnh việc phát triển thị trường trong nước, VWRC còn tự hào mang thương hiệu gạo Việt Nam ra thị trường quốc tế:</h3>
                <ul className="space-y-3 py-3 pl-5">
                  <li>Châu Âu: Tây Ban Nha, Lithuania, Nga, Georgia, Belarus, Bồ Đào Nha, Serbia.</li>
                  <li>Châu Á: Singapore, Philippines, Malaysia, Mông Cổ, Hồng Kông, Macau, Ả Rập Saudi, Trung Quốc, UAE, Indonesia.</li>
                  <li>Châu Phi: Algeria, Ghana, Togo, Nam Phi, Bờ Biển Ngà, Tanzania, Bénin, Mozambique, Cộng hòa Mauritius, Gabon, Mayotte.</li>
                  <li>Châu Mỹ: Chile, Trinidad, Tobago, Mỹ.</li>
                  <li>Châu Đại Dương: Úc, New Zealand, Papua New Guinea, Polynesia thuộc Pháp, Fiji, Solomon, Tuvalu, Vanuatu.</li>
                </ul>


                <h3 className="font-bold mt-3">Về bao bì đóng gói, VWRC có dây chuyền đóng gói đa dạng cho nhiều quy cách kích cỡ và chất liệu khác nhau:</h3>
                <ul className="space-y-3 py-3 pl-5">
                  <li>Chất liệu bao bì: PP, BOPP, PAPE,...</li>
                  <li>Quy cách: 0,5 kg, 1 kg, 2 kg, 5 kg, 10kg, 20 kg, 25 kg, 50 kg,...</li>
                  <li>Hút chân không: Hút chân không 6 mặt, 2 mặt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-[#f8f2e4] border-t border-[#c2c2c2] ">
        <div className="col-start-2 bg-white border border-[#d1d5dc] rounded-2xl -mt-25">
          <div className="flex justify-around px-20 -mt-15">

            <div className="bg-white text-[14px] text-center border border-[#d1d5dc] rounded-2xl px-10 py-5 group hover:border-[#16A44D] hover:bg-[#16A44D]  transition-all duration-300 ease-in-out">
              <h3 className="font-bold text-[32px] text-[#16A44D] group-hover:text-white">30+</h3>
              <p className="group-hover:text-white ">Years of Experience</p>
            </div>
            <div className="bg-white text-[14px] text-center border border-[#d1d5dc] rounded-2xl px-10 py-5 group hover:border-[#16A44D] hover:bg-[#16A44D]  transition-all duration-300 ease-in-out">
              <h3 className="font-bold text-[32px] text-[#16A44D] group-hover:text-white">30+</h3>
              <p className="group-hover:text-white ">Years of Experience</p>
            </div>
            <div className="bg-white text-[14px] text-center border border-[#d1d5dc] rounded-2xl px-10 py-5 group hover:border-[#16A44D] hover:bg-[#16A44D]  transition-all duration-300 ease-in-out">
              <h3 className="font-bold text-[32px] text-[#16A44D] group-hover:text-white">30+</h3>
              <p className="group-hover:text-white ">Years of Experience</p>
            </div>

          </div>
          <div className="flex justify-between items-center px-5 py-8">
            <h2 className="text-[#16a44d] font-bold">TRU NGUYEN <br /><span className="text-[40px]">BY NUMBERS</span></h2>
            <p className="text-[#966b6b] text-right">
              Numbers can say a million things about us.<br />
              And they’re growing as we’re growing.
            </p>
          </div>
        </div>
      </div>



      <div className="py-10 bg-[#f8f2e4] ">
        <Image
          className="z-0 dark:invert h-full object-cover pointer-events-none select-none"
          src="/images/MAP TRU NGUYEN.png"
          alt="Logo"
          width={2000}
          height={57}
          priority
        />
      </div>


<CertificateSection />
      {/* <div className="p-10 bg-[#837c1f] h-[600px]">
        <h2 className="text-4xl font-bold">Đây là Export Page</h2>
        <p className="mt-4">Nội dung hoàn toàn tách biệt với site chính</p>
      </div> */}
    </>
  );
}
