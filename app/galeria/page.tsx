"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Galeria() {

  // ✦ GALERIA
  const midias = [

    {
      tipo: "video",
      arquivo: "/30deabril.mp4",
      legenda:
        "-Eu errei uma nota,\n mas aqui meu passatempo.\n 30 de abril de 2026",
      rotacao: "-rotate-1",
    },

    {
      tipo: "video",
      arquivo: "/domquixote.mp4",
      legenda:
        "Por amor as causas perdidas\n 03 de maio de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "video",
      arquivo: "/algoparecido.mp4",
      legenda:
        "Quando tocou a música que eu pedi.\n 03 de maio de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "video",
      arquivo: "/asitwas.mp4",
      legenda:
        "Felipe, you're no good alone \n 03 de maio de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/cantandojunto.jpeg",
      legenda: "Primeiro dueto\n 04 de maio de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/coracao.jpg",
      legenda: "Histologia do dia que te conheci\n 05 de maio de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "video",
      arquivo: "/annajulia.mp4",
      legenda:
        "você leva sorrisos por onde passa.\n 06 de maio de 2026",
      rotacao: "-rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/melao.jpg",
      legenda: "O que vale é o momento\n 22 de maio de 2026",
      rotacao: "rotate-2",
    },

    {
      tipo: "video",
      arquivo: "/detonautas.mp4",
      legenda:
        "Quando o sol se for\n 23 de maio de 2026",
      rotacao: "-rotate-1",
    },

    {
      tipo: "video",
      arquivo: "/camila.mp4",
      legenda:
        "Camila, Camila \n 23 de maio de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "video",
      arquivo: "/carla.mp4",
      legenda:
        "Carla \n 23 de maio de 2026",
      rotacao: "-rotate-1",
    },

    {
      tipo: "video",
      arquivo: "/passarodefogo.mp4",
      legenda:
        "um pedaço do tempo que\n eu quis guardar pra sempre\n 25 de maio de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/tokverde.jpg",
      legenda:
        "Me levou na cafeteria\n porque eu estava triste \n 27 de maio de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/strelinhas.jpg",
      legenda:
        "as pequenas estrelas que nasceram entre nós ✦\n 27 de maio de 2026",
      rotacao: "-rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/usfoto1.jpg",
      legenda:
        "31 de maio de 2026\n Nossa primeira foto juntos.",
      rotacao: "rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/feliz.jpg",
      legenda:
        "Seu sorriso clareia o mais cinza dos dias\n01 de junho de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/casaldepassaro.jpg",
      legenda:
        "Os pássaros veem a gente\n01 de junho de 2026",
      rotacao: "rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/nos1.jpeg",
      legenda:
        "nós dois existindo no mesmo universo\n 02 de junho de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/sorriso.jpeg",
      legenda:
        "o teu sorriso muda a gravidade do mundo\n 02 de junho de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/nosdois.jpeg",
      legenda:
        "e no fim de tudo, ainda era você\n 02 de junho de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "video",
      arquivo: "/zeramalho.mp4",
      legenda:
        "neste dia meu sorriso era\n reconhecível até do espaço\n 05 de junho de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/almoso.jpeg",
      legenda: "05 de junho de 2026",
      rotacao: "rotate-2",
    },

  ];

  return (

    <main className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">

      {/* FUNDO */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-pink-500/10 blur-3xl rounded-full top-[-250px] left-[-150px]" />

        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full bottom-[-200px] right-[-100px]" />

        {/* ESTRELAS */}
        {Array.from({ length: 180 }).map((_, index) => (

          <motion.div
            key={index}

            className="absolute rounded-full bg-white"

            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}

            animate={{
              opacity: [0.2, 1, 0.2],
            }}

            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              delay: Math.random() * 5,
            }}
          />

        ))}

      </div>

      {/* BOTÃO VOLTAR */}
      <Link
        href="/cartas"

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
      <div className="relative z-10 px-4 md:px-8 xl:px-14 pb-28">

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-10
            xl:gap-12

            items-start
          "
        >

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

                bg-[rgba(16,12,30,0.72)]
                backdrop-blur-2xl

                border
                border-pink-200/10

                rounded-[32px]

                p-3

                shadow-[0_0_60px_rgba(255,192,203,0.08)]

                transition-all
                duration-500

                hover:scale-[1.02]

                ${midia.rotacao}
              `}
            >

              {/* BRILHO */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-[32px]

                  bg-gradient-to-b
                  from-white/[0.03]
                  to-transparent

                  pointer-events-none
                "
              />

              {/* MIDIA */}
              <div
                className="
                  relative

                  overflow-hidden

                  rounded-[24px]

                  bg-[#0b0718]

                  flex
                  items-center
                  justify-center
                "
              >

                {midia.tipo === "imagem" ? (

                  <img
                    src={midia.arquivo}
                    alt=""

                    className="
                      w-full

                      h-auto

                      object-cover

                      rounded-[22px]
                    "
                  />

                ) : (

                  <video
                    src={midia.arquivo}

                    controls

                    className="
                      w-full

                      h-auto

                      object-cover

                      rounded-[22px]

                      bg-black
                    "
                  />

                )}

              </div>

              {/* LEGENDA */}
              <p
                className="
                  mt-5

                  text-center

                  text-pink-100/90

                  italic

                  text-sm
                  md:text-base

                  leading-relaxed

                  whitespace-pre-line

                  font-cinzel
                "
              >
                {midia.legenda}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </main>

  );

}