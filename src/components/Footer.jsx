import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-black relative overflow-hidden border-t border-purple-600/30 py-12">

            {/* AURA BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* CLAN NAME */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-purple-600 mb-4"
                >
                    Uchiha Clan
                </motion.h3>

                {/* UCHIHA LOGO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(128,0,255,0.6)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex justify-center my-4"
                >
                    <img 
                        src="/uchiha.png" // ganti sesuai nama file kamu
                        alt="Uchiha Logo"
                        className="w-16 h-16 object-contain border-2 border-purple-600 rounded-full p-1"
                    />
                </motion.div>

                {/* QUOTE */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-300 text-sm italic max-w-xl mx-auto"
                >
                    "I walk my own path. Power is born from determination."
                </motion.p>

                {/* LINE */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-24 h-[1px] bg-purple-600 mx-auto my-6 opacity-60 origin-left"
                ></motion.div>

                {/* COPYRIGHT */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xs text-gray-400"
                >
                    © {new Date().getFullYear()} — Jayy inspired by Sasuke Uchiha
                </motion.p>

            </div>
        </footer>
    );
}
