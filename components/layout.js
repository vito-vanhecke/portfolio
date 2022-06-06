import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-slate-200">
                {children}
            </main>
            <Footer />
        </div>
    )
}