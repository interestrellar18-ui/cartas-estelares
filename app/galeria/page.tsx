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
      legenda: "um pedaço do tempo que\n eu quis guardar pra sempre\n 25 de maio de 2026",
      rotacao: "-rotate-2",
    }, 
    
    {
      tipo: "imagem",
      arquivo: "/tokverde.jpg",
      legenda: "Me levou na cafeteria\n porque eu estava triste \n 27 de maio de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/strelinhas.jpg",
      legenda: "as pequenas estrelas que nasceram entre nós ✦\n 27 de maio de 2026",
      rotacao: "-rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/usfoto1.jpg",
      legenda: "31 de maio de 2026\n Nossa primeira foto juntos.",
      rotacao: "rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/feliz.jpg",
      legenda: "Seu sorriso clareia o mais cinza dos dias\n01 de junho de 2026",
      rotacao: "rotate-1",
    },

     {
      tipo: "imagem",
      arquivo: "/casaldepassaro.jpg",
      legenda: "Os pássaros veem a gente\n01 de junho de 2026",
      rotacao: "rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/nos1.jpeg",
      legenda: "nós dois existindo no mesmo universo\n 02 de junho de 2026",
      rotacao: "rotate-1",
    },

    {
      tipo: "imagem",
      arquivo: "/sorriso.jpeg",
      legenda: "o teu sorriso muda a gravidade do mundo\n 02 de junho de 2026",
      rotacao: "-rotate-2",
    },

    {
      tipo: "imagem",
      arquivo: "/nosdois.jpeg",
      legenda: "e no fim de tudo, ainda era você\n 02 de junho de 2026",
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

  const playlist = [

    {
  nome: "Se Tiver Que Ser Na Bala, Vai - Vanguart",
  arquivo: "/vanguart.mp3",
},

{
  nome: "Algo Parecido - Skank",
  arquivo: "/algoparecido.mp3",
},

{
  nome: "Só Nós Dois - Tim Bernardes",
  arquivo: "/timbernardes.mp3",
},

{
  nome: "Sentimental - Los Hermanos",
  arquivo: "/sentimental.mp3",
},

{
  nome: "Fingi Na Hora De Rir - Los Hermanos",
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

{
  nome: "Linha Do Equador - Djavan",
  arquivo: "/linhadoequador.mp3",
},

{
  nome: "Lilás - Djavan",
  arquivo: "/lilas.mp3",
},

{
  nome: "Oceano - Djavan",
  arquivo: "/oceano.mp3",
},

{
  nome: "3x4 - Engenheiros Do Hawaii",
  arquivo: "/3x4.mp3",
},

{
  nome: "Todas As Canções São De Amor - Pullovers",
  arquivo: "/todasascancoessaodeamor.mp3",
},

{
  nome: "Meu Amor - O Grilo",
  arquivo: "/meuamor.mp3",
},

{
  nome: "Pra Você Gostar De Mim - O Grilo",
  arquivo: "/pravocegostardemim.mp3",
},

{
  nome: "Gostar Só Dela - Selvagens À Procura De Lei",
  arquivo: "/gostarsodela.mp3",
},

{
  nome: "Enquanto Eu Passar Na Sua Rua - Selvagens À Procura De Lei",
  arquivo: "/enquantoeupassarnasuarua.mp3",
},

{
  nome: "Retrato Para Iaiá - Los Hermanos",
  arquivo: "/iaia.mp3",
},

{
  nome: "Lábia - Jão",
  arquivo: "/labia.mp3",
},

{
  nome: "Alinhamento Milenar - Jão",
  arquivo: "/alinhamentomilenar.mp3",
},

{
  nome: "Pensando Em Ti - Nelson Gonçalves",
  arquivo: "/pensandoemti.mp3",
},

{
  nome: "Me Lambe - Jão",
  arquivo: "/melambe.mp3",
},

{
  nome: "Serenata Existencialista - O Grilo",
  arquivo: "/serenataexistencialista.mp3",
},

{
  nome: "Eu Te Amo - Lagum",
  arquivo: "/euteamo.mp3",
},

{
  nome: "Sombra No Sol - O Grilo",
  arquivo: "/sombranosol.mp3",
},

{
  nome: "Pelo Gosto Que As Notas Deixam Na Boca - O Grilo",
  arquivo: "/pelogostoqueasnotasdeixamnaboca.mp3",
},

{
  nome: "BB (Garupa De Moto Amarela) - Tim Bernardes",
  arquivo: "/bebe.mp3",
},

{
  nome: "Interestelar - Mulamba",
  arquivo: "/mulamba.mp3",
},

{
  nome: "Ciúmes - Venere Vai Venus",
  arquivo: "/ciume.mp3",
},

{
  nome: "A Vida Tem Dessas Coisas - Ritche",
  arquivo: "/avidatemdessascoisas.mp3",
},

{
  nome: "Anjos - Venere Vai Vênus",
  arquivo: "/anjos.mp3",
},

{
  nome: "Arriadin Por Tu - João Gomes",
  arquivo: "/arriadinportu.mp3",
},

{
  nome: "Avatar - Bê Vieira",
  arquivo: "/avatar.mp3",
},

{
  nome: "Enchanted - Taylor Swift",
  arquivo: "/enchanted.mp3",
},

{
  nome: "Entre Nós Dois - NX Zero",
  arquivo: "/entrenosdois.mp3",
},

{
  nome: "Entupir de Borboletas - Scatolove",
  arquivo: "/entupirdeborboletas.mp3",
},

{
  nome: "Inbox - Scatolove",
  arquivo: "/inbox.mp3",
},

{
  nome: "Line Without a Hook - Ricky Montgomery",
  arquivo: "/linewithoutahook.mp3",
},

{
  nome: "Onde Mora Deus - Rodrigo Alarcon",
  arquivo: "/ondemoradeus.mp3",
},

{
  nome: "Outro Lugar - Detonautas",
  arquivo: "/outrolugar.mp3",
},

{
  nome: "Quando o Sol Se For - Detonautas",
  arquivo: "/detonautas.mp3",
},

{
  nome: "Sparks Fly - Taylor Swift",
  arquivo: "/sparksfly.mp3",
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

  <div className="flex flex-col gap-20 items-center">

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

          inline-flex
          flex-col
          items-center

          bg-[rgba(16,12,30,0.72)]
          backdrop-blur-2xl

          border
          border-pink-200/10

          rounded-[38px]

          p-4
          md:p-5

          shadow-[0_0_80px_rgba(255,192,203,0.08)]

          ${midia.rotacao}
        `}
      >

        {/* BRILHO */}
        <div
          className="
            absolute
            inset-0

            rounded-[38px]

            bg-gradient-to-b
            from-white/[0.03]
            to-transparent

            pointer-events-none
          "
        />

        {/* MÍDIA */}
        <div
          className="
            relative

            overflow-hidden

            rounded-[28px]

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
                block

                w-auto
                h-auto

                max-w-[88vw]
                md:max-w-[720px]

                max-h-[78vh]

                object-contain

                rounded-[24px]
              "
            />

          ) : (

            <video
              src={midia.arquivo}

              controls

              className="
                block

                w-auto
                h-auto

                max-w-[88vw]
                md:max-w-[720px]

                max-h-[78vh]

                object-contain

                rounded-[24px]

                bg-black
              "
            />

          )}

        </div>

        {/* LEGENDA */}
        <p
          className="
            mt-6

            max-w-[85vw]
            md:max-w-[650px]

            text-center

            text-pink-100/90

            italic

            text-sm
            md:text-xl

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