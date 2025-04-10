"use client";

import { useEffect } from "react";
import Swal from "sweetalert2";
import Header from "./components/header";
import SobreMim from "./components/sobreMim";
import Projetos from "./components/projetos";
import Contato from "./components/contato";

export default function Home() {
  useEffect(() => {
    const bloquearTeclas = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey &&
          (e.key.toLowerCase() === "s" || e.key.toLowerCase() === "u")) ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        e.key === "F12"
      ) {
        e.preventDefault();
        e.stopPropagation();
        mostrarAlerta(
          "Acesso Restrito 🚫",
          "Essa função foi desabilitada para proteger o conteúdo."
        );
      }
    };

    const bloquearContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      mostrarAlerta(
        "Ação Bloqueada 🚫",
        "Por motivos de segurança, esta ação não é permitida!"
      );
    };

    const monitorarDevTools = () => {
      let aberto = false;
      const threshold = 160;
      setInterval(() => {
        const largura = window.outerWidth - window.innerWidth > threshold;
        const altura = window.outerHeight - window.innerHeight > threshold;
        if ((largura || altura) && !aberto) {
          aberto = true;
          Swal.fire({
            icon: "error",
            title: "🚨 Alerta de Segurança",
            text: "Detectamos uma tentativa de inspeção!",
            confirmButtonColor: "#008080",
            background: "#0D1117",
            color: "#ffffff",
          });
        }
      }, 1000);
    };

    const mostrarAlerta = (titulo: string, mensagem: string) => {
      Swal.fire({
        icon: "warning",
        title: titulo,
        text: mensagem,
        confirmButtonColor: "#008080",
        background: "#0D1117",
        color: "#ffffff",
      });
    };

    document.addEventListener("keydown", bloquearTeclas);
    document.addEventListener("contextmenu", bloquearContextMenu);
    monitorarDevTools();

    return () => {
      document.removeEventListener("keydown", bloquearTeclas);
      document.removeEventListener("contextmenu", bloquearContextMenu);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117] text-white font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-6 pt-24">
        <SobreMim />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
}
