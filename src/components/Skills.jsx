import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "PHP", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "UI/UX Design", level: "Advanced" },
        { name: "Github", level: "Advanced" },
    ];

    return (
        <section
            id="skills"
            className="relative py-32 bg-black overflow-hidden"
        >
            {/* RED MANGEKYOU AURA */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold">
                        Mangekyō <span className="text-red-500">Skills</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Abilities sharpened through focus, discipline, and countless battles.
                    </p>
                </motion.div>

                {/* SKILL GRID */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="
                                group relative
                                p-6 rounded-xl
                                bg-white/5 backdrop-blur
                                border border-white/10
                                hover:border-red-500/60
                                transition
                                overflow-hidden
                            "
                        >
                            {/* RED GLOW */}
                            <div className="
                                absolute inset-0
                                bg-red-600/10
                                opacity-0
                                group-hover:opacity-100
                                transition
                            " />

                            {/* SHARINGAN EYE */}
                            <div className="
                                absolute top-4 right-4
                                w-10 h-10
                                rounded-full
                                border border-red-500/40
                                flex items-center justify-center
                                text-red-500
                                opacity-40
                                group-hover:opacity-100
                                group-hover:rotate-180
                                transition-all duration-500
                            ">
                                <img src="Mangekyou.png" ></img>
                            </div>

                            <h3 className="relative z-10 text-lg font-semibold text-red-400">
                                {skill.name}
                            </h3>

                            <p className="relative z-10 mt-2 text-sm text-gray-400">
                                {skill.level}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
