import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["About", "Projects", "Skills", "Certifications", "Contact"];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-purple-600/40">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <a href="#Home" className="relative group cursor-pointer">
                    <span className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 blur-2xl animate-ping"></span>
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 border border-blue-400 animate-pulse"></span>
                    <img
                        src="/sharingan.png"
                        alt="Sharingan Logo"
                        className="relative w-10 h-10 spin-slow drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-transform duration-300 group-hover:scale-110"
                    />
                </a>

                {/* MENU DESKTOP */}
                <div className="hidden md:flex gap-8 text-sm text-gray-300">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative transition hover:text-purple-600
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* HAMBURGER MOBILE */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col w-6 h-6 justify-between items-center group"
                    >
                        <span className={`h-0.5 w-full bg-purple-600 rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`h-0.5 w-full bg-purple-600 rounded transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`h-0.5 w-full bg-purple-600 rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur shadow-lg"
                    >
                        <div className="flex flex-col gap-6 px-6 py-4 text-gray-300">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-purple-600 transition"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
