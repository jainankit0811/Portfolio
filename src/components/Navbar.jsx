import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/ankitDhanawat.png";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20 h-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ankit-dhanawat/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/jainankit0811/" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://x.com/DhanawatAn99877/" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/ankit_jain__002/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
