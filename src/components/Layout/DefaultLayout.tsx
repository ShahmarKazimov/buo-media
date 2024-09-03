import "./DefaultLayout.scss";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import HamburgerMenuPage from "../Header/HamburgerMenu/HamburgerMenuPage";

export default function LayoutComponent(props: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <div className="deflay">
                    <div className="lg:hidden fixed right-0 left-0 z-20 ">
                        <HamburgerMenuPage />
                    </div>
                    <div className="myContainer">
                        <Navbar />
                    </div>
                </div>

                <div>
                    {props.children}
                </div>
            </div>
            <div className="flex flex-col min-h-screen">
                <Footer />
            </div>
        </>
    );
}