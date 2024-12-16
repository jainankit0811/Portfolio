import { motion } from "framer-motion";
import { AiOutlinePython } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const Technologies = () => {
    // Define motion variants for hover
    const hoverEffect = {
        rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }, // Normal state
        hover: { scale: 1.2, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }, // On hover
    };

    return (
        <div className="border-b border-neutral-800 pb-24">
            {/* Animated Title */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>

            {/* Icons Container */}
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }} // Stagger each child animation
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {/* Python Icon with hover effect */}
                <motion.div
                    variants={hoverEffect}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <AiOutlinePython className="text-7xl" />
                </motion.div>

                {/* MongoDB Icon with hover effect */}
                <motion.div
                    variants={hoverEffect}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>

                {/* Express Icon with hover effect */}
                <motion.div
                    variants={hoverEffect}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiExpress className="text-7xl text-black-400" />
                </motion.div>

                {/* React Icon with hover effect */}
                <motion.div
                    variants={hoverEffect}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                {/* Node.js Icon with hover effect */}
                <motion.div
                    variants={hoverEffect}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaNode className="text-7xl text-green-400" />
                </motion.div>

                {/* Postman Icon with hover effect */}
                <motion.div
                    variants={hoverEffect}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiPostman className="text-7xl text-orange-400" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
