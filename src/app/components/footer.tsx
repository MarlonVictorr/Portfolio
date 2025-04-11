"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.section
      id="footer"
      className="w-full border-t border-gray-700 bg-[#0e1117] py-6 px-4 mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 ">
        <p className="text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/marlonv1ctor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors cursor"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com/MarlonVictorr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F0F6FC] transition-colors cursor"
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
