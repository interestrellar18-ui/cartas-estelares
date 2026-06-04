"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { Music2, X } from "lucide-react";
import { useRef, useState } from "react";

export default function Galeria() {

const [menuMusica, setMenuMusica] = useState(false);

const musicaPlayer = useRef<HTMLAudioElement | null>(null);


  const fotos = [
    
    "/strelinhas.jpg",
    "/usfoto1.jpg",
    "/nos.jpg",
    "/sorriso.jpg",
    "/nosdois.jpg",
  ];

const playlist = [

  {
    nome: "Interestelar - Mulamba",
    arquivo: "/interestelar.mp3",
  },

  {
    nome: "Algo Parecido - Skank",
    arquivo: "/algoparecido.mp3",
  },

  {
    nome: "Só nós dois - Tim Bernardes",
    arquivo: "/sonosdois.mp3",
  },

  {
    nome: "cíume - Venere Vai Vênus",
    arquivo: "/ciume.mp3",
  },

  {
    nome: "Sentimental - Los Hermanos",
    arquivo: "/sentimental.mp3",
  },

  {
    nome: "Fingi na hora de rir - Los Hermanos",
    arquivo: "/finginahoraderir.mp3",
  },

];

const tocarMusica = (arquivo: string) => {

  musicaPlayer.current?.pause();

  musicaPlayer.current = new Audio(arquivo);

  musicaPlayer.current.volume = 0.2;

  musicaPlayer.current.loop = true;

  musicaPlayer.current.play().catch(() => {});
};


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* FUNDO */}
      <div className="absolute inset-0">

        <div className="absolute w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full top-[-200px] left-[-100px]" />

        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />

      </div>

      {/* BOTÃO VOLTAR */}
      <Link
        href="/cartas"
        className="
          absolute
          top-8
          left-8
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
        voltar ✦
      </Link>

<button
  onClick={() => setMenuMusica(true)}

  className="
    absolute
    top-8
    right-8

    z-50

    flex
    items-center
    gap-2

    px-5
    py-2

    rounded-full

    border
    border-pink-200/20

    text-pink-100
    italic

    hover:bg-pink-200/10

    transition
  "
>

  <Music2 size={18} />

  trilha sonora

</button>

      {/* TÍTULO */}
      <div className="relative z-10 text-center pt-20 mb-16">

        <h1 className="text-5xl md:text-7xl font-cinzel text-pink-100 italic">
          Galeria Estelar
        </h1>

        <p className="text-gray-400 italic mt-4">
          fragmentos do nosso universo
        </p>

      </div>

      {/* GALERIA */}
      <div
        className="
          relative
          z-10

          flex
          gap-10

          overflow-x-auto

          px-10
          pb-20

          snap-x
          snap-mandatory
        "
      >

        {fotos.map((foto, index) => (

          <motion.div
            key={index}

            whileHover={{
              scale: 1.03,
            }}

            className="
              min-w-[320px]
              md:min-w-[500px]

              h-[500px]

              rounded-[35px]
              overflow-hidden

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              shadow-2xl

              snap-center

              flex-shrink-0
            "
          >

            <img
              src={foto}
              alt=""
              className="w-full h-full object-cover"
            />

          </motion.div>

        ))}

      </div>

<AnimatePresence>

  {menuMusica && (

    <motion.div

      initial={{
        x: 400,
      }}

      animate={{
        x: 0,
      }}

      exit={{
        x: 400,
      }}

      transition={{
        duration: 0.5,
      }}

     className="
  fixed
  top-0
  right-0

  w-[320px]
  h-screen

  overflow-y-auto

  bg-[#090d1f]/95
  backdrop-blur-2xl

  border-l
  border-pink-200/10

  z-[999]

  p-8
"
    >

      {/* FECHAR */}
      <button
        onClick={() => setMenuMusica(false)}
        className="text-pink-100 mb-10"
      >
        <X />
      </button>

      {/* TÍTULO */}
      <h2 className="text-3xl font-cinzel text-pink-100 italic mb-8">
        Trilha Sonora
      </h2>

      {/* MÚSICAS */}
      <div className="flex flex-col gap-4">

        {playlist.map((musica, index) => (

          <button
            key={index}

            onClick={() => tocarMusica(musica.arquivo)}

            className="
              text-left

              px-5
              py-4

              rounded-2xl

              bg-white/5

              hover:bg-pink-200/10

              transition

              text-pink-100
              italic
            "
          >

            {musica.nome}

          </button>

        ))}

        {/* SEM MÚSICA */}
        <button
  onClick={() => {

    if (musicaPlayer.current) {

      musicaPlayer.current.pause();

      musicaPlayer.current.currentTime = 0;

      musicaPlayer.current = null;

    }

  }}

  className="
    mt-6

    px-5
    py-4

    rounded-2xl

    border
    border-pink-200/10

    text-gray-300
    italic

    hover:bg-white/5

    transition
  "
>
  Silêncio cósmico 
</button>
      </div>

    </motion.div>

  )}

</AnimatePresence>

    </main>
  );
}
