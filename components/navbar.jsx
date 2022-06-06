import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
    const [title, setTitle] = useState("")
    const router = useRouter()

    useEffect(() => {
        setTitle(document.title)
    }, [setTitle, router])

    return (
        <nav className="w-screen flex justify-between px-4 py-8 mx-auto bg-slate-500">
            <div>
                <h3 className="text-2xl font-medium text-white">{title}</h3>
            </div>
            <div className="hidden space-x-8 lg:flex text-white items-center">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
            </div>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-black items-center cursor-pointer fixed right-5 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <div className="flex lg:hidden items-center text-white" onClick={() => setShowSidebar(!showSidebar)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            )}

            <div
                className={`top-0 right-0 w-[60vw] bg-slate-200  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col text-black mt-20 text-xl space-y-3">
                    <Link href="/" passHref >
                        <a onClick={() => setShowSidebar(!showSidebar)}>Home</a>
                    </Link>
                    <Link href="/contact" passHref >
                        <a onClick={() => setShowSidebar(!showSidebar)}>Contact</a>
                    </Link>
                </div>
            </div>

        </nav>
    )
}
export default Navbar