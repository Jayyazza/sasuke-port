import { motion } from "framer-motion";

const projects = [
    {
        title: "Sasuke Portfolio",
        desc: "Cinematic personal portfolio inspired by Sasuke Uchiha with Sharingan aura.",
        tech: ["React", "Tailwind", "Framer Motion"],
        img: "/Sasuke3.jpeg",
        link: "#",
    },
    {
        title: "Sharingan Dashboard",
        desc: "Dark UI dashboard with chakra-driven visualization and smooth micro-interactions.",
        tech: ["React", "UI/UX"],
        img: "/sasuke4.jpeg",
        link: "#",
    },
    {
        title: "Chakra Task Manager",
        desc: "Focus-first task manager with calm UI and battle-ready performance.",
        tech: ["React", "LocalStorage"],
        img: "/sasuke5.jpeg",
        link: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-32 bg-black overflow-hidden"
        >
            {/* BACKGROUND AURA */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold">
                        Projects <span className="text-sharingan">Jayy</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Each project is forged with control, focus, and intent.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            whileHover={{ y: -14 }}
                            className="
                                    group relative
                                    rounded-2xl overflow-hidden
                                    bg-gradient-to-b from-white/10 to-white/5
                                    border border-white/10
                                    hover:border-sharingan/60
                                    shadow-lg
                                    transition
                                "
                        >
                            {/* IMAGE */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="
                                        w-full h-full object-cover
                                        scale-105
                                        group-hover:scale-125
                                        transition-transform duration-700
                                    "
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                {/* LIGHTNING SWEEP */}
                                <div
                                    className="
                                        absolute inset-0
                                        opacity-0
                                        group-hover:opacity-100
                                        transition
                                        bg-[linear-gradient(120deg,transparent,rgba(127,29,255,0.35),transparent)]
                                        animate-[scan_1.2s_linear_infinite]
                                    "
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-7 relative z-10">
                                <h3
                                    className="
                                        text-xl font-semibold text-sharingan
                                        relative z-10
                                        group-hover:opacity-30
                                        transition
                                    "
                                >
                                    {p.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                                    {p.desc}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="
                                                text-xs px-3 py-1
                                                rounded-full
                                                bg-sharingan/10
                                                text-sharingan
                                                border border-sharingan/30
                                            "
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* BUTTON */}
                                <a
                                    href={p.link}
                                    className="
                                        inline-flex items-center gap-2
                                        text-sm font-medium
                                        text-sharingan
                                        hover:text-white
                                        transition
                                    "
                                >
                                    View Project
                                    <span className="text-lg">→</span>
                                </a>
                            </div>

                            {/* GLOW ORB */}
                            <div
                                className="
                                    absolute -bottom-24 -right-24
                                    w-64 h-64
                                    bg-sharingan/30
                                    rounded-full blur-3xl
                                    opacity-0
                                    group-hover:opacity-100
                                    transition
                                "
                            />
                            {/* SHARINGAN CORNER */}
                            <img
                                src="/sharingan.png"
                                alt="Sharingan"
                                className="
                                    absolute bottom-4 right-4
                                    w-10 h-10
                                    opacity-0
                                    scale-75
                                    group-hover:opacity-80
                                    group-hover:scale-100
                                    group-hover:rotate-180
                                    transition-all duration-500
                                    drop-shadow-[0_0_20px_rgba(127,29,255,0.7)]
                                    pointer-events-none
                                "
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
