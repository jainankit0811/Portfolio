import { motion } from "framer-motion";
import aboutImg from "../assets/ankitAbout.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            {/* Animated Title */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                About
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-neutral-500"
                >
                    {" "}
                    Me
                </motion.span>
            </motion.h1>

            <div className="flex flex-wrap">
                {/* Animated Image */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="rounded-2xl"
                            src={aboutImg}
                            alt="about"
                        />
                    </div>
                </div>

                {/* Animated Text */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
