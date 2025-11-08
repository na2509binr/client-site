import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Input1 from "../components/input-modern-component";
import Textarea1 from "../components/textarea-modern-component";
import StaticMap from "../components/map";


export default function ContactPage() {
    return (
        <div>
            <div className="relative h-[380px]">
                <Image
                    className="z-0 dark:invert h-full object-cover"
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/75"></div>

                <div className="absolute h-full w-full top-0 grid grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] items-center justify-center text-white">
                    <div className="col-start-2 ">
                        <h1 className="text-[60px] font-extrabold text-center">
                            {/* <span className="block text-[40px] font-extralight">CHIA SẺ</span> */}
                            <span className="">LIÊN HỆ</span>
                        </h1>
                        {/* <p className="my-6 ">
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p> */}
                        <div className="text-[15px] font-semibold flex justify-center items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Liên hệ</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-16">
                <div className="col-start-2 grid grid-cols-3 gap-8 items-stretch">
                    {/* <NewsList data={news} /> */}

                    <div className="p-10 rounded-2xl space-y-6 bg-[#f5f3f0] border border-[#f5f3f0] hover:bg-white hover:border-[#ff281c] transition-all duration-300 ease-in-out group h-full grid grid-rows-[auto_auto_1fr] gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-at text-[#8b9271]" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"></path><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path></svg>
                        <div>
                            <h2 className="text-[32px] text-[#181818] font-bold">Mail Us:</h2>
                            <p className="text-[22px] text-[#4e4e4e]">example@gmail.com</p>
                        </div>
                        <Link href="/" className="self-end">
                            <div className="py-4 rounded-2xl text-center font-bold bg-[#8b9271] text-white group-hover:text-[#664141] group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out">
                                <span>Send an Email</span>
                            </div>
                        </Link>
                    </div>
                    <div className="p-10 rounded-2xl space-y-6 bg-[#f5f3f0] border border-[#f5f3f0] hover:bg-white hover:border-[#ff281c] transition-all duration-300 ease-in-out group h-full grid grid-rows-[auto_auto_1fr] gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-inbound text-[#8b9271]" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
                        <div>
                            <h2 className="text-[32px] text-[#181818] font-bold">Call Us:</h2>
                            <p className="text-[22px] text-[#4e4e4e] tabular-nums">0333666073</p>
                        </div>
                        <Link href="/" className="self-end">

                            <div className="py-4 rounded-2xl text-center font-bold bg-[#8b9271] text-white group-hover:text-[#664141] group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out">
                                <span>Call us daily</span>
                            </div>
                        </Link>
                    </div>
                    <div className="p-10 rounded-2xl space-y-6 bg-[#f5f3f0] border border-[#f5f3f0] hover:bg-white hover:border-[#ff281c] transition-all duration-300 ease-in-out group h-full grid grid-rows-[auto_auto_1fr] gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt text-[#8b9271]" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path></svg>
                        <div>
                            <h2 className="text-[32px] text-[#181818] font-bold">Visit Us:</h2>
                            <p className="text-[22px] text-[#4e4e4e] tabular-nums">Số 39A phố Pháo Đài Láng, TT Phụ nữ TW, Phường Láng , Thành phố Hà Nội, Việt Nam</p>
                        </div>
                        <Link href="/" className="self-end">
                            <div className="py-4 rounded-2xl text-center font-bold bg-[#8b9271] text-white group-hover:text-[#664141] group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out">
                                <span>Send an Email</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-start-2 grid grid-cols-2 gap-x-8 mt-25">
                    <div className="flex flex-col items-start justify-center">
                        <h2 className="text-[48px] font-bold">Let’s Start Working Together. Get in Touch</h2>
                        <p className="text-[13px] text-[#4e4e4e] my-3">Your email address will not be published. Required fields are marked *</p>

                        <div className="flex flex-col gap-y-3 w-full my-3">

                            <Input1 label="Your Name" />
                            <Input1 label="Your Email" />
                            <Input1 label="Website" />
                            <Textarea1 label="Your comment" rows={2} />
                        </div>

                        <button className="mt-5 text-white hover:text-[#ff281d] bg-[#ff281d] hover:bg-white border-2 border-[#ff281d] rounded-full px-8 py-3.75 text-[18px] font-bold transition-all duration-300 ease-in-out">
                            Gửi thông tin
                        </button>
                    </div>
                    <div>
                        <StaticMap height="0"/>
                    </div>
                </div>
            </div>




        </div>
    );
}