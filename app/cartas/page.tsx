"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function cartas() {
  const [mounted, setMounted] = useState(false);
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);

  // SOM DA ESTRELA 
  const estrelaSound = useRef<HTMLAudioElement | null>(null);

  // MÚSICA DE FUNDO 
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
      titulo: "Sobre sentir saudade",
      previa:
        "Saudade tua parece constelação: mesmo longe, continua brilhando em mim.",
    },

    {
      titulo: "Se o mundo acabasse hoje",
      previa:
        "eu ainda escolheria passar meus últimos minutos ouvindo tua voz.",
    },

    {
      titulo: "Enquanto Você Sorri",
      previa:
        "O mundo pode desabar devagar, desde que teu sorriso continue acendendo o meu.",
    },

    {
      titulo: "Ciúme Bobo",
      previa:
        "Às vezes eu só preciso lembrar que teu sorriso ainda escolhe me procurar no meio da multidão.",
    },

    {
  titulo: "Brilho que importa",
  previa: "Tem pessoas que não apagam nossas inseguranças; elas só seguram nossa mão até a gente parar de acreditar nelas.",
},

  ];

  const estrelas = [
    { top: "17%", left: "19%" },
    { top: "34%", left: "69%" },
    { top: "59%", left: "39%" },
    { top: "75%", left: "80%" },
    { top: "63%", left: "50%" },
    { top: "50%", left: "50%" }
  
  ];

 // ESTRELAS FUNDO
const estrelasFundo = Array.from({ length: 220 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 6 + 4,
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
  opacity: [0.15, 0.9, 0.15],
  scale: [1, 1.8, 1],
}}

transition={{
  repeat: Infinity,
  duration: estrela.duration,
  delay: estrela.delay,
  ease: "easeInOut",
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

            {/* BOTÃO GALERIA */}
<Link
  href="/galeria"
  className="
    absolute
    top-8
    right-8

    z-50

    text-pink-200
    italic

    border
    border-pink-200/20

    px-5
    py-2

    rounded-full

    hover:bg-pink-200/10
    transition
  "
>
  galeria estelar ✦
</Link>

            {/* TÍTULO */}
            <div className="absolute top-10 w-full text-center">

              <h1 className="text-3xl md:text-5xl font-cinzel text-pink-100 italic">
                Nosso universo
              </h1>

              <p className="text-gray-400 italic mt-0 text-sm">
                Cada brilho esconde uma memória.
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
    initial={{
      scale: 0,
      opacity: 0,
    }}
    animate={{
      scale: 1,
      opacity: 1,
    }}
    transition={{
      delay: index * 0.2,
      duration: 0.8,
    }}

    whileHover={{
      scale: 1.18,
    }}

    whileTap={{
      scale: 1.18,
    }}

    onMouseEnter={() => tocarSomEstrela()}
    onClick={() => setCartaSelecionada(index)}

    className="absolute group flex flex-col items-center"
    style={{
      top: estrela.top,
      left: estrela.left,
    }}
  >

    {/* AURA */}
    <div
      className="
        absolute
        w-14
        h-14
        rounded-full
        bg-pink-300/30
        blur-2xl

        opacity-20
        scale-75

        group-hover:opacity-100
        group-hover:scale-150

        transition-all
        duration-500
      "
    />

    {/* ESTRELA */}
    <Star
      size={22}
      className="
        relative
        text-pink-100
        fill-pink-100
        animate-pulse

        transition-all
        duration-500

        group-hover:text-white
        group-hover:fill-white
        group-hover:drop-shadow-[0_0_18px_rgba(255,220,240,1)]
      "
    />

    {/* TÍTULO */}
    <p
      className="
        absolute
        top-10

        text-sm
        text-pink-100
        italic
        text-center

        w-40
        leading-relaxed

        opacity-0
        translate-y-2

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all
        duration-500

        pointer-events-none
      "
    >
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