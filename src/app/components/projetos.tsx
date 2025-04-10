"use client";

import ProjetoCard from "./projetoCard";
import { motion } from "framer-motion";

export default function Projetos() {
  return (
    <motion.section
      id="projetos"
      className="projetos py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[##0D1117] rounded-xl  p-8 container mx-auto">
        <h2 className="text-3xl text-white text-center mb-10">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjetoCard
            titulo="Sistema CRUD PHP"
            descricao="Um sistema completo de cadastro e gerenciamento de informações usando PHP, MySQL e Bootstrap."
            link="https://github.com/seuusuario/projeto1"
          />
          <ProjetoCard
            titulo="Consumo de API com C#"
            descricao="Projeto desenvolvido para consumir APIs públicas utilizando C#, com visualização dos dados em frontend responsivo."
            link="https://github.com/seuusuario/projeto2"
          />
          <ProjetoCard
            titulo="Blog Do Santa"
            descricao="O Blog do Santa é um projeto completo que integra operações CRUD com um frontend moderno e responsivo."
            link="https://github.com/seuusuario/projeto3"
          />
        </div>
      </div>
    </motion.section>
  );
}
