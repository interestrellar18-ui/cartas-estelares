"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function cartas() {
  const [mounted, setMounted] = useState(false);
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);

  // SOM DA ESTRELA ✨
  const estrelaSound = useRef<HTMLAudioElement | null>(null);

  // MÚSICA DE FUNDO ✨
  const musicaFundo = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // SOM DAS ESTRELAS
    estrelaSound.current = new Audio("/estrela.mp3");
    estrelaSound.current.volume = 0.4;

    // MÚSICA DE FUNDO
    musicaFundo.current = new Audio("/constelação.mp3");

    musicaFundo.current.volume = 0.15;

    musicaFundo.current.loop = true;

    musicaFundo.current.play().catch(() => {
      console.log("autoplay bloqueado");
    });

    // PARAR MÚSICA AO SAIR DA PÁGINA
    return () => {
      musicaFundo.current?.pause();
      musicaFundo.current = null;
    };
  }, []);

  if (!mounted) return null;

  const tocarSomEstrela = () => {
    if (estrelaSound.current) {
      estrelaSound.current.currentTime = 0;
      estrelaSound.current.play();
    }
  };

  const cartas = [
    {
      titulo: "Estrelas para você",
      previa:
        "Acho que naquela noite o universo ficou pequeno demais pra os sentimentos que tenho por você.",
    },

    {
      titulo: "sobre sentir saudade",
      previa:
        "saudade tua parece constelação: mesmo longe, continua brilhando em mim.",
    },

    {
      titulo: "se o mundo acabasse hoje",
      previa:
        "eu ainda escolheria passar meus últimos minutos ouvindo tua voz.",
    },

    {
      titulo: "carta perdida entre estrelas",
      previa:
        "tem partes minhas orbitando teu nome até hoje.",
    },

    {
      titulo: "quando teu abraço virou casa",
      previa:
        "acho que foi ali que meu coração desaprendeu a ter medo.",
    },
  ];

  const estrelas = [
    { top: "18%", left: "20%" },
    { top: "35%", left: "70%" },
    { top: "60%", left: "40%" },
    { top: "75%", left: "80%" },
    { top: "54%", left: "5%" },
  ];

  // ESTRELAS FUNDO
  const estrelasFundo = [...Array(220)].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 6 + 3,
    delay: Math.random() * 5,
  }));

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center justify-center"
    >

      {/* ESTRELAS FUNDO */}
      <div className="absolute inset-0 overflow-hidden">

        {estrelasFundo.map((estrela) => (
          <motion.div
            key={estrela.id}
            className="absolute bg-white rounded-full"
            style={{
              width: estrela.size + "px",
              height: estrela.size + "px",
              top: estrela.top + "%",
              left: estrela.left + "%",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: estrela.duration,
              delay: estrela.delay,
            }}
          />
        ))}

      </div>

      {/* NEBULOSAS */}
      <div className="absolute w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full top-[-200px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />

      <AnimatePresence mode="wait">

        {/* CONSTELAÇÕES */}
        {cartaSelecionada === null && (
          <motion.div
            key="constelacoes"
            initial={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 1.2,
            }}
            className="relative z-10 w-full h-screen"
          >

            {/* BOTÃO VOLTAR */}
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="absolute top-8 left-8 flex items-center gap-2 text-gray-300 hover:text-pink-300 transition z-50"
            >
              <ArrowLeft size={18} />
              voltar
            </button>

            {/* TÍTULO */}
            <div className="absolute top-10 w-full text-center">

              <h1 className="text-5xl md:text-7xl font-serif text-pink-100 italic">
                Nosso universo
              </h1>

              <p className="text-gray-400 italic mt-4 text-lg">
                Escolha sua estrela.
              </p>

            </div>

            {/* LINHAS */}
            <svg className="absolute inset-0 w-full h-full">

              <line
                x1="20%"
                y1="19%"
                x2="70%"
                y2="36%"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />

              <line
                x1="70%"
                y1="36%"
                x2="40%"
                y2="61%"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />

              <line
                x1="40%"
                y1="61%"
                x2="80%"
                y2="76%"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />

            </svg>

            {/* ESTRELAS */}
            {estrelas.map((estrela, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.15,
                }}

                onMouseEnter={() => tocarSomEstrela()}

                onClick={() => setCartaSelecionada(index)}
                className="absolute group flex flex-col items-center"
                style={{
                  top: estrela.top,
                  left: estrela.left,
                }}
              >

                {/* BRILHO */}
                <div className="absolute inset-0 rounded-full bg-pink-300 blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

                {/* ESTRELA */}
                <Star
                  size={34}
                  className="relative text-pink-100 fill-pink-100 animate-pulse"
                />

                {/* TÍTULO */}
                <p className="mt-4 text-sm text-pink-100 italic text-center w-40 leading-relaxed">
                  {cartas[index].titulo}
                </p>

              </motion.button>
            ))}

          </motion.div>
        )}

        {/* PREVIEW */}
        {cartaSelecionada !== null && (
          <motion.div
            key="preview"
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6"
          >

            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
                y: 100,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative bg-[#0d1025]/90 border border-pink-200/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl max-w-xl w-full overflow-hidden"
            >

              {/* BRILHO */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-pink-300/20 blur-3xl rounded-full" />

              {/* ESTRELA TOPO */}
              <div className="flex justify-center mb-6">
                <Star
                  className="text-pink-200 fill-pink-200 animate-pulse"
                  size={28}
                />
              </div>

              {/* TÍTULO */}
              <h2 className="text-4xl text-center font-serif text-pink-100 italic mb-8">
                {cartas[cartaSelecionada].titulo}
              </h2>

              {/* LINHA */}
              <div className="w-24 h-[1px] bg-pink-200/30 mx-auto mb-8" />

              {/* TEXTO */}
              <p className="text-center text-gray-300 italic leading-loose text-xl">
                {cartas[cartaSelecionada].previa}
              </p>

              {/* BOTÕES */}
              <div className="flex flex-col gap-4 mt-12">

                <Link
                  href={`/cartas/${cartaSelecionada}`}
                  className="bg-gradient-to-r from-pink-200 to-pink-300 text-black py-4 rounded-full text-center hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,192,203,0.3)]"
                >
                  Ler Estrela ✦
                </Link>

                <button
                  onClick={() => setCartaSelecionada(null)}
                  className="border border-white/10 py-4 rounded-full hover:bg-white/5 transition"
                >
                  Voltar para o universo ✦
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.main>
  );
}