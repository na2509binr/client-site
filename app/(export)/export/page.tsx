import Image from "next/image"

export default function ExportPage() {
  return (
    <>
      <Image
        className="z-0 dark:invert h-full object-cover"
        src="/images/banner-1.webp"
        alt="Logo"
        width={2000}
        height={20}
        priority
      />

      {/* <div className="p-10 bg-[#837c1f] h-[600px]">
        <h2 className="text-4xl font-bold">Đây là Export Page</h2>
        <p className="mt-4">Nội dung hoàn toàn tách biệt với site chính</p>
      </div> */}
    </>
  );
}
