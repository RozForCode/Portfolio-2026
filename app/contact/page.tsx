"use client";

import { motion } from "framer-motion";
import { JellyButton } from "@/components/ui/JellyButton";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
            <motion.div
                className="max-w-2xl w-full"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-center mb-8 text-white"
                    variants={slideUp}
                >
                    Let's Connect
                </motion.h1>

                <motion.p
                    className="text-center text-gray-400 mb-12 text-lg"
                    variants={slideUp}
                >
                    Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
                </motion.p>

                <motion.form className="space-y-6" variants={fadeIn}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-orchid focus:ring-1 focus:ring-orchid outline-none transition-all text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-orchid focus:ring-1 focus:ring-orchid outline-none transition-all text-white"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-orchid focus:ring-1 focus:ring-orchid outline-none transition-all text-white resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <JellyButton type="submit" className="w-full md:w-auto min-w-[200px]">
                            Send Message
                        </JellyButton>
                    </div>
                </motion.form>

                <motion.div
                    className="mt-16 flex justify-center gap-8 text-gray-400"
                    variants={fadeIn}
                >
                    <a href="#" className="hover:text-cyan transition-colors">GitHub</a>
                    <a href="#" className="hover:text-cyan transition-colors">Twitter</a>
                    <a href="#" className="hover:text-cyan transition-colors">LinkedIn</a>
                </motion.div>
            </motion.div>
        </main>
    );
}
