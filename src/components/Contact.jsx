import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: 50 }} // Start off-screen and hidden
                whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }} // Add delay and spring transition
            >
                Get in touch
            </motion.h1>

            <motion.div
                className="text-center tracking-tighter"
                initial={{ opacity: 0, y: 50 }} // Start off-screen and hidden
                whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }} // Add delay and spring transition
            >
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="border-b">{CONTACT.email}</a>
            </motion.div>
        </div>
    );
}

export default Contact;
