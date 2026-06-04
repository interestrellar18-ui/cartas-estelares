"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // SOM DO BOTÃO ✨
  const entrarSound = useRef<HTMLAudioElement | null>(null);

  // MÚSICA DE FUNDO ✨
  const musicaFundo = useRef<HTMLAudioElement | null>(null);

 useEffect(() => {
  setMounted(true);

  // SOM DO BOTÃO
  entrarSound.current = new Audio("/heartbeat.mp3");
  entrarSound.current.volume = 0.5;

  // MÚSICA DE FUNDO
  musicaFundo.current = new Audio("/fundo.mp3");

  musicaFundo.current.volume = 0.15;
  musicaFundo.current.loop = true;

  setTimeout(() => {
    musicaFundo.current?.play().catch(() => {});
  }, 500);

  // LIMPA OS ÁUDIOS AO SAIR ✨
  return () => {

    // música
    if (musicaFundo.current) {
      musicaFundo.current.pause();
      musicaFundo.current.currentTime = 0;
    }

    // botão
    if (entrarSound.current) {
      entrarSound.current.pause();
      entrarSound.current.currentTime = 0;
    }

  };

}, []);



  const tocarSom = () => {
    if (entrarSound.current) {
      entrarSound.current.currentTime = 0;

      entrarSound.current.play().catch(() => {});
    }
  };

  const estrelas = mounted
    ? [...Array(220)].map((_, i) => ({
        id: i,
       size: (i % 3) + 1,
top: (i * 7) % 100,
left: (i * 13) % 100,
duration: (i % 4) + 2,
      }))
    : [];

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.8,
      }}
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >

      {/* estrelas */}
      <div className="absolute inset-0 overflow-hidden">

        {estrelas.map((estrela) => (
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
            }}
            transition={{
              duration: estrela.duration,
              repeat: Infinity,
            }}
          />
        ))}

      </div>

      {/* nebulosas */}
      <div className="absolute w-[700px] h-[700px] bg-pink-500/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />

      <div className="absolute w-[700px] h-[700px] bg-purple-500/10 blur-3xl rounded-full bottom-[-250px] right-[-250px]" />

      {/* conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* coração */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="bg-white/10 border border-white/10 p-6 rounded-full backdrop-blur-md mb-10"
        >
          <Heart className="w-10 h-10 text-pink-300" />
        </motion.div>

        {/* título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-7xl md:text-8xl font-cinzel text-[#ffd6f2]"
        >
          Cartas Estelares
        </motion.h1>

        {/* descrição */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-300 italic text-xl max-w-2xl leading-relaxed"
        >
          Um universo feito de estrelas,
          memórias e palavras que orbitam você.
        </motion.p>

        {/* botão */}
        <Link href="/cartas">

          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 40px rgba(255,192,203,0.4)",
            }}
            whileTap={{
              scale: 0.96,
            }}

            // SOM ✨
            onMouseEnter={tocarSom}
            onClick={tocarSom}

            className="mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 text-black text-lg shadow-2xl"
          >
            Ler nosso universo ✦
          </motion.button>

        </Link>

      </div>

    </motion.main>
  );
}