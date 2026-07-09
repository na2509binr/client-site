import Footer from "./components/footer";
import Header from "./components/header";
import HeaderMobile from "./components/header-mobile";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="hidden lg:block">
                <Header />

            </header>
            <header className="lg:hidden">
                <HeaderMobile />
            </header>
            {children}
            <Footer />
        </>
    );
}
