import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-28 bg-black relative overflow-hidden">

            {/* AURA BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-xl mx-auto px-6 text-center">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-purple-600 mb-6 tracking-wide"
                >
                    Contact Me
                </motion.h2>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-300 mb-10"
                >
                    Interested in working together? Let’s connect.
                </motion.p>

                {/* FORM */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 bg-dark/80 border border-purple-600/50 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 bg-dark/80 border border-purple-600/50 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 bg-dark/80 border border-purple-600/50 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow-md hover:shadow-lg transition-all"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
