import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram ,FaFileDownload,FaDownload , FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="Logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
      <a href="https://wa.me/7208639630" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/pratham-chintrate-9a9a0b227/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Pratham-101" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitterSquare />
        </a> */}
        <a href="https://www.instagram.com/pratham.__.0/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
