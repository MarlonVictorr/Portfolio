"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contato() {
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSendWhatsApp = () => {
    const nome = (
      document.getElementById("nome") as HTMLInputElement
    )?.value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    )?.value.trim();
    const mensagem = (
      document.getElementById("mensagem") as HTMLTextAreaElement
    )?.value.trim();

    if (!nome || !email || !mensagem) {
      setErro(true);
      setTimeout(() => setErro(false), 4000);
      return;
    }

    setCarregando(true);

    const texto = `Olá, meu nome é ${nome}.\nMeu e-mail é: ${email}.\nMensagem:\n${mensagem}`;
    const numeroWhatsApp = "5567996000022";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;

    setTimeout(() => {
      window.open(url, "_blank");

      setSucesso(true);
      setCarregando(false);

      (document.getElementById("nome") as HTMLInputElement).value = "";
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("mensagem") as HTMLTextAreaElement).value = "";

      setTimeout(() => setSucesso(false), 5000);
    }, 1000);
  };

  return (
    <motion.section
      id="contato"
      className="contato py-16 border-t border-gray-700 bg-[#0e1117]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl mb-8 text-white text-center">Contato</h2>
      {}
      <div className="space-y-4 max-w-md mx-auto">
        <input
          id="nome"
          type="text"
          placeholder="Seu nome"
          className="w-full p-3 rounded bg-[#1F2937] text-white cursor"
          autoComplete="off"
        />
        <input
          id="email"
          type="email"
          placeholder="Seu e-mail"
          className="w-full p-3 rounded bg-[#1F2937] text-white cursor"
          autoComplete="off"
        />
        <textarea
          id="mensagem"
          placeholder="Sua mensagem"
          className="w-full p-3 rounded bg-[#1F2937] text-white cursor"
          autoComplete="off"
        />
        <button
          onClick={handleSendWhatsApp}
          disabled={carregando}
          className="bg-[#008080] cursor hover:scale-102 hover:shadow-lg transition-all p-3 w-full rounded text-white"
        >
          {carregando ? "Enviando..." : "Enviar Mensagem"}
        </button>
        {sucesso && (
          <p className="text-green-400 mt-2 text-center">
            Mensagem enviada com sucesso!
          </p>
        )}
        {erro && (
          <p className="text-red-400 mt-2 text-center">
            Preencha todos os campos!
          </p>
        )}
      </div>
    </motion.section>
  );
}
