import Image from "next/image"

export default function ExportHeader() {
    return (
        <>
            <header className="w-full fixed">
                <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] py-12">

                    <div className="col-start-2 flex justify-between bg-white py-5 px-12 rounded-full shadow-2xl">
                        <Image
                            className="z-0 dark:invert h-full object-cover"
                            src="/images/Logo_LOGO MÀU CHUẨN.jpg"
                            alt="Logo"
                            width={100}
                            height={20}
                            priority
                        />
                    </div>
                </div>
            </header>
        </>
    );
}