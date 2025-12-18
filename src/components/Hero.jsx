import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function Hero() {
    return (
        <section
            id="Home"
            className="relative min-h-screen pt-32 flex items-center bg-gradient-to-b from-black via-dark to-black overflow-hidden"
        >
            {/* BACKGROUND AURA */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* ===== TEXT ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I’m <span className="text-sharingan">Jajang</span>
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-lg">
                        Frontend Developer crafting sharp, elegant, and battle-ready web experiences.
                        <TypingText />
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="
                                px-8 py-3 rounded-lg
                                bg-sharingan
                                hover:bg-sharinganRed
                                transition
                                shadow-[0_0_25px_rgba(127,29,255,0.6)]
                                text-center
                            "
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="
                                px-8 py-3 rounded-lg
                                border border-sharingan/40
                                hover:bg-sharingan/10
                                transition
                                text-center
                            "
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* ===== VISUAL ===== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 30 }} // tambah y:30 untuk posisi sedikit ke bawah saat start
                    whileInView={{ opacity: 1, scale: 1, y: 0 }} // geser ke posisi normal (lebih naik)
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="flex justify-center mt-10 md:mt-0"
                >
                    <div className="relative -translate-y-6 md:-translate-y-10"> {/* geser ke atas */}
                        <div className="absolute inset-0 rounded-full lightning-border"></div>
                        <div className="absolute inset-2 rounded-full bg-purple-600/30 blur-2xl"></div>
                        <img
                            src="/sasuke2.jpeg"
                            alt="Sasuke"
                            className="relative w-64 sm:w-80 md:w-[320px] rounded-full z-10"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
