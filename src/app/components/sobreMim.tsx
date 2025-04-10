"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreMim() {
  const fullText =
    "Transformando tecnologia em soluções digitais que impulsionam o seu futuro.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(
        () => {
          setText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        },
        fullText[index] === "." ? 500 : 50
      );

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <motion.section
      id="sobre"
      className="sobre-mim py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="image">
        <Image
          src="/images/imgPerfil.jpg"
          alt="Marlon Victor - Desenvolvedor Full Stack"
          width={400}
          height={400}
          className="foto-perfil"
        />
      </div>
      <div className="text">
        <h1 className="nomeApresentacao">
          Olá, eu sou <span>Marlon Victor</span> 👋
        </h1>
        <h2 className="nomeProfissao">Desenvolvedor Full Stack</h2>
        <p className="taglineApresentacao">{text}</p>
      </div>
    </motion.section>
  );
}
