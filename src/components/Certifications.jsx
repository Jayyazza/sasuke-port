import { motion } from "framer-motion";

const certs = [
    {
        title: "Frontend Web Development",
        org: "Dicoding",
        year: "2025",
    },
    {
        title: "React Fundamentals",
        org: "FreeCodeCamp",
        year: "2025",
    },
    {
        title: "JavaScript Algorithms",
        org: "Coursera",
        year: "2025",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-28 bg-black relative overflow-hidden">

            {/* AURA BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center text-purple-600 mb-16 tracking-wide"
                >
                    Certifications
                </motion.h2>

                {/* CERT CARDS */}
                <div className="grid md:grid-cols-3 gap-8">
                    {certs.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(128,0,255,0.6)" }}
                            className="relative bg-dark/80 backdrop-blur-sm border border-purple-600/30 rounded-xl p-6 hover:border-purple-600 transition-all"
                        >
                            {/* MANGEKYOU / SHARINGAN ICON */}
                            <img
                                src="/sharingan.png"
                                alt="Mangekyou Sharingan"
                                className="w-6 h-6 absolute top-4 right-4"
                            />

                            {/* CERT INFO */}
                            <h3 className="text-lg font-bold mb-2 text-white tracking-wide">
                                {c.title}
                            </h3>
                            <p className="text-gray-200 text-sm mb-4">{c.org}</p>
                            <span className="inline-block px-3 py-1 text-xs bg-purple-600/20 text-purple-600 rounded-full">
                                Certified {c.year}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
