import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 py-8">
      <div className="container mx-auto flex items-center justify-end">
        <div className="flex items-center gap-6">
          <a 
            href="https://wa.me/7208639630" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link group"
          >
            <div className="transform transition-all duration-300 hover:scale-110">
              <div className="rounded-full bg-neutral-800/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-green-500/20">
                <FaWhatsapp className="text-3xl text-neutral-300 transition-all duration-300 group-hover:text-green-500" />
              </div>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/pratham-chintrate-9a9a0b227/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link group"
          >
            <div className="transform transition-all duration-300 hover:scale-110">
              <div className="rounded-full bg-neutral-800/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-500/20">
                <FaLinkedin className="text-3xl text-neutral-300 transition-all duration-300 group-hover:text-blue-500" />
              </div>
            </div>
          </a>

          <a 
            href="https://github.com/Pratham-101" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link group"
          >
            <div className="transform transition-all duration-300 hover:scale-110">
              <div className="rounded-full bg-neutral-800/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-purple-500/20">
                <FaGithub className="text-3xl text-neutral-300 transition-all duration-300 group-hover:text-purple-500" />
              </div>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/pratham.__.0/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link group"
          >
            <div className="transform transition-all duration-300 hover:scale-110">
              <div className="rounded-full bg-neutral-800/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-pink-500/20">
                <FaInstagram className="text-3xl text-neutral-300 transition-all duration-300 group-hover:text-pink-500" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
