"use client";

import { motion } from "framer-motion";

interface ProjetoCardProps {
  titulo: string;
  descricao: string;
  link: string;
}

export default function ProjetoCard({
  titulo,
  descricao,
  link,
}: ProjetoCardProps) {
  return (
    <motion.div
      className="bg-[#111827] rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-cyan-500/50 transition-shadow flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-2xl text-white mb-4">{titulo}</h3>

      <p className="text-gray-400 text-center max-w-md mb-6">{descricao}</p>

      <div className="mt-auto flex justify-center">
        <a
          href={link}
          target="_blank"
          className="inline-block bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-black py-2 px-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 no-underline"
        >
          Ver no GitHub
        </a>
      </div>
    </motion.div>
  );
}
