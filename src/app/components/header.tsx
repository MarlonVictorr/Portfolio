"use client";

import { motion } from "framer-motion";
import { Home, FileText, Star, Send } from "lucide-react";

export default function Header() {
  return (
    <>
      {}
      <motion.header
        className="hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="backdrop-blur-md bg-zinc-800/70 rounded-full px-6 py-3 shadow-lg max-w-[95%] sm:max-w-max">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <a
                  href="#sobre"
                  className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/curriculum/curriculum.pdf"
                  target="_blank"
                  className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Currículo
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-white px-5 py-2 rounded-full hover:bg-white/15 transition"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {}
      <motion.footer
        className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="backdrop-blur-md bg-zinc-800/70 rounded-full px-6 py-2 shadow-lg">
          <nav>
            <ul className="flex justify-center items-center gap-8">
              <li>
                <a
                  href="#sobre"
                  className="text-white p-2 rounded-full hover:bg-white/10 transition"
                >
                  <Home size={28} />
                </a>
              </li>
              <li>
                <a
                  href="/curriculum/curriculum.pdf"
                  target="_blank"
                  className="text-white p-2 rounded-full hover:bg-white/10 transition"
                >
                  <FileText size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-white p-2 rounded-full hover:bg-white/10 transition"
                >
                  <Star size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white p-2 rounded-full hover:bg-white/10 transition"
                >
                  <Send size={28} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.footer>
    </>
  );
}
