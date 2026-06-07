"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Music2, X } from "lucide-react";

export default function Galeria() {

  const [menuMusica, setMenuMusica] = useState(false);

  const musicaPlayer = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {

    return () => {

      if (musicaPlayer.current) {

        musicaPlayer.current.pause();

        musicaPlayer.current.currentTime = 0;

      }

    };

  }, []);

  // ✨ GALERIA COM FOTO + LEGENDA + VÍDEO
  const midias = [

    {
      tipo: "imagem",
      arquivo: "/strelinhas.jpg",
      legenda: "as pequenas estrelas que nasceram entre nós ✦",
      rotacao: "-rotate-3",
    },

    {
      tipo: "imagem",
      arquivo: "/usfoto1.jpg",
      legenda: "te olhar sempre parece a primeira vez",
      rotacao: "rotate-2",
    },

    {
      tipo: "video",
      arquivo: "/passarodefogo.mp4",
      legenda: "um pedaço do tempo que eu quis guardar pra sempre",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/nos1.jpeg",
      legenda: "nós dois existindo no mesmo universo",
      rotacao: "rotate-3",
    },

    {
      tipo: "imagem",
      arquivo: "/sorriso.jpeg",
      legenda: "o teu sorriso muda a gravidade do mundo",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/nosdois.jpeg",
      legenda: "e no fim de tudo, ainda era você",
      rotacao: "rotate-2",
    },

  ];

  const playlist = [

    {
      nome: "Se tiver que ser na bala, vai - Vanguart",
      arquivo: "/vanguart.mp3",
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

    {
      nome: "1932 - Pullovers",
      arquivo: "/pullovers.mp3",
    },

    {
      nome: "Último Romance - Los Hermanos",
      arquivo: "/ultimoromance.mp3",
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

    <main className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">

      {/* FUNDO */}
      <div className="absolute inset-0">

        <div className="absolute w-[700px] h-[700px] bg-pink-500/10 blur-3xl rounded-full top-[-250px] left-[-150px]" />

        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full bottom-[-200px] right-[-100px]" />

      </div>

      {/* VOLTAR */}
      <Link
        href="/cartas"

        onClick={() => {

          if (musicaPlayer.current) {

            musicaPlayer.current.pause();

            musicaPlayer.current.currentTime = 0;

          }

        }}

        className="
          fixed
          top-5
          left-5
          z-50

          text-pink-200
          italic

          border
          border-pink-200/20

          px-4
          py-2

          rounded-full

          bg-[#090d1f]/40
          backdrop-blur-xl

          hover:bg-pink-200/10

          transition
        "
      >
        voltar ✦
      </Link>

      {/* BOTÃO MÚSICA */}
      <button
        onClick={() => setMenuMusica(true)}

        className="
          fixed
          top-5
          right-5

          z-50

          flex
          items-center
          gap-2

          px-4
          py-2

          rounded-full

          border
          border-pink-200/20

          bg-[#090d1f]/40
          backdrop-blur-xl

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
      <div className="relative z-10 text-center pt-24 mb-14">

        <h1 className="text-4xl md:text-6xl font-cinzel text-pink-100 italic">
          Galeria Estelar
        </h1>

        <p className="text-gray-400 italic mt-4 text-sm md:text-lg">
          fragmentos das nossas órbitas
        </p>

      </div>

      {/* GALERIA */}
      <div className="relative z-10 px-4 md:px-10 pb-28">

        <div className="flex flex-col gap-16 items-center">

          {midias.map((midia, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
              }}

              viewport={{
                once: true,
              }}

              className={`
                relative

                w-full
                max-w-[650px]

                bg-white/5
                backdrop-blur-xl

                border
                border-pink-200/10

                rounded-[35px]

                p-4

                shadow-[0_0_80px_rgba(255,192,203,0.08)]

                ${midia.rotacao}
              `}
            >

              {/* POLAROID */}
              <div className="bg-[#120f1f] rounded-[25px] overflow-hidden">

                {midia.tipo === "imagem" ? (

                  <img
                    src={midia.arquivo}
                    alt=""

                    className="
                      w-full

                      h-[340px]
                      md:h-[520px]

                      object-cover
                    "
                  />

                ) : (

                  <video
                    src={midia.arquivo}

                    controls

                    className="
                      w-full

                      h-[340px]
                      md:h-[520px]

                      object-cover
                    "
                  />

                )}

              </div>

              {/* LEGENDA */}
              <p
                className="
                  text-center

                  text-pink-100/90
                  italic

                  mt-5

                  text-base
                  md:text-xl

                  font-cinzel
                "
              >
                {midia.legenda}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MENU MÚSICA */}
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

            {/* PLAYLIST */}
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

              {/* SILÊNCIO */}
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
                silêncio cósmico ✦
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>

  );

}