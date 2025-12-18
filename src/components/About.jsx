import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32 bg-black overflow-hidden"
        >
            {/* BACKGROUND AURA */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* ===== TEXT + GIF ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-sharingan">Me</span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        Like an Uchiha, I value focus and precision.
                        As a frontend developer, I craft interfaces that are calm on the surface,
                        yet powerful underneath.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I believe good UI is not loud — it is confident, intentional,
                        and always battle-ready.
                    </p>

                    {/* GIF + QUOTE */}
                    <div className="mt-8 flex items-center gap-6">
                        <motion.img
                            src="/sasukegif.gif"
                            alt="Sasuke animation"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.9 }}
                            className="
                                w-[200px]
                                rounded-lg
                                border border-sharingan/30
                                shadow-[0_0_35px_rgba(127,29,255,0.4)]
                            "
                        />

                        <motion.blockquote
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="
                                max-w-xs
                                text-gray-300 italic
                                border-l-4 border-sharingan/60
                                pl-4
                                text-sm
                                leading-relaxed
                                relative
                            "
                        >
                            " I have absolutely no reason to love her "
                            <span className="block mt-2 text-sharingan text-xs not-italic">
                                — Sasuke Uchiha
                            </span>
                        </motion.blockquote>
                    </div>
                </motion.div>

                {/* ===== HIGHLIGHTS (POLES) ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="grid gap-6"
                >
                    {[
                        {
                            title: "Precision UI",
                            desc: "Pixel-perfect layouts with smooth animations.",
                        },
                        {
                            title: "Calm Execution",
                            desc: "Clean code structure, easy to maintain.",
                        },
                        {
                            title: "Battle Ready",
                            desc: "Performance-focused, responsive, and scalable.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="
                                relative
                                p-6 rounded-xl
                                bg-white/5 backdrop-blur
                                border border-white/10
                                overflow-hidden
                                group
                            "
                        >
                            {/* ACCENT LINE */}
                            <div
                                className="
                                    absolute top-0 left-0 h-[2px] w-0
                                    bg-gradient-to-r from-transparent via-sharingan to-transparent
                                    group-hover:w-full
                                    transition-all duration-500
                                "
                            />

                            {/* CONTENT */}
                            <h3
                                className="
                                    font-semibold text-lg mb-2
                                    text-sharingan
                                    group-hover:tracking-wide
                                    transition-all duration-300
                                "
                            >
                                {item.title}
                            </h3>

                            <p
                                className="
                                    text-gray-400 text-sm
                                    group-hover:text-gray-300
                                    transition-colors duration-300
                                "
                            >
                                {item.desc}
                            </p>

                            {/* GLOW */}
                            <div
                                className="
                                    absolute -bottom-10 -right-10
                                    w-40 h-40
                                    bg-sharingan/10
                                    rounded-full blur-3xl
                                    opacity-0
                                    group-hover:opacity-100
                                    transition
                                "
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
