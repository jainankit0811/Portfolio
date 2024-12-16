import { motion } from "framer-motion";
import profilePic from "../assets/ankitDhanawatProfile.jpg";
import { HERO_CONTENT } from "../constants/index.jsx";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                {/* Left Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        {/* Animated Name */}
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Ankit Dhanawat
                        </motion.h1>

                        {/* Animated Subtitle */}
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Software Developer
                        </motion.span>

                        {/* Static Text Content */}
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>

                {/* Right Section - Animated Image */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="rounded-2xl"
                            src={profilePic}
                            alt="Ankit Dhanawat"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
