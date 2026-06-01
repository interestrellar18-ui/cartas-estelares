"use client";

import { useEffect, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

export default function CartaIndividual() {
  const params = useParams();

  // SOM DOS SELOS ✨
  const seloSound = useRef<HTMLAudioElement | null>(null);

  // PLAYER DA MÚSICA 🎵
  const musicaPlayer = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    seloSound.current = new Audio("/estrela.mp3");
    seloSound.current.volume = 0.4;

    // PARAR MÚSICA AO SAIR DA PÁGINA
    return () => {
      musicaPlayer.current?.pause();
    };
  }, []);

  const tocarSom = () => {
    if (seloSound.current) {
      seloSound.current.currentTime = 0;

      seloSound.current.play().catch(() => {});
    }
  };

  // CARTAS ✨
  const cartas = [
    {
      titulo: "Estrelas para Você",
      destinatario: "Felipe",

      // MÚSICA ✨
      musica: "Interestelar",
      artista: "Mulamba",

      // ARQUIVO DA MÚSICA 🎵
      arquivoMusica: "/interestelar.mp3",

      texto:
        "Eu sei que existiram histórias antes de mim.\nHistórias longas, intensas, daquelas que mudam o jeito de alguém enxergar o amor.\nE às vezes eu penso no peso disso tudo.\n\nPenso em como deve ser difícil chegar depois de dez anos.\nDepois de alguém que te atravessou tão fundo que até hoje mora em partes suas que talvez você nem perceba.\n\nE eu tenho medo.\nNão medo dela.\nNão medo do passado.\n\nTenho medo de ser pequena demais diante de tudo isso.\n\nPorque eu sei que eu não sou esse amor de uma década.\nNão sou a paixão que apertava teu peito até faltar ar.\nNão sou a pessoa que escreveu capítulos inteiros da tua vida.\n\nMas, meu Deus… como eu queria importar também.\n\nQueria ser mais do que uma fase tranquila depois do caos.\nMais do que alguém passageira enquanto você tenta reorganizar os sentimentos.\nQueria ser lembrança bonita, abrigo, permanência.\n\nQueria que quando você pensasse no futuro, meu rosto aparecesse sem esforço.\n\nE talvez a pior parte seja que você nunca me deu motivos concretos pra sentir isso.\nÉ só o jeito que o passado dos outros às vezes faz a gente se sentir atrasada numa corrida que nem deveria existir.\n\nMas eu queria que você soubesse:\neu não quero apagar ninguém da tua história.\nNão quero ocupar lugar nenhum à força.\n\nSó queria descobrir se existe espaço pra mim aí dentro…\nde um jeito verdadeiro.\nDe um jeito que fique.",

      frase:
        "Eu olho para você Felipe. Eu olho tanto para você que, às vezes, deveria ser mais discreta. Porque adoro o que vejo e nem acredito que, no meio de tantas estrelas, você brilhou para mim.",

      selo1: "",
      selo2: "✧",

      foto1: "/usfoto1.jpg",
      foto2: "",
    },

    {
      titulo: "Saudade",
      destinatario: "para você",

      musica: "From The Start",
      artista: "Laufey",

      arquivoMusica: "/laufey.mp3",

      texto:
        "Saudade tua parece constelação.\nMesmo longe, continua brilhando em mim.",

      frase:
        "Algumas pessoas vão embora sem sair totalmente da alma.",

      selo1: "☾",
      selo2: "★",

      foto1: "",
      foto2: "",
    },

    {
      titulo: "Fim do Mundo",
      destinatario: "para você",

      musica: "Apocalypse",
      artista: "Cigarettes After Sex",

      arquivoMusica: "/apocalypse.mp3",

      texto:
        "Eu ainda escolheria passar meus últimos minutos ouvindo tua voz.",

      frase:
        "Mesmo no fim do universo, ainda escolheria você.",

      selo1: "∞",
      selo2: "☁",

      foto1: "",
      foto2: "",
    },

    {
      titulo: "Entre Estrelas",
      destinatario: "para você",

      musica: "Space Song",
      artista: "Beach House",

      arquivoMusica: "/spacesong.mp3",

      texto:
        "Tem partes minhas orbitando teu nome até hoje.",

      frase:
        "Certas versões minhas nunca voltaram do instante em que te amaram.",

      selo1: "☄",
      selo2: "✦",

      foto1: "",
      foto2: "",
    },
  ];

  const carta = cartas[Number(params.id)];

  // TOCAR MÚSICA 🎵
  const tocarMusica = () => {
    if (!carta?.arquivoMusica) return;

    // pausa anterior
    musicaPlayer.current?.pause();

    // cria nova música
    musicaPlayer.current = new Audio(carta.arquivoMusica);

    musicaPlayer.current.volume = 0.6;

    // LOOP ✨
    musicaPlayer.current.loop = true;

    musicaPlayer.current.play().catch(() => {});
  };

  // ESTRELAS ✨
  const estrelas = useMemo(() => {
    return [...Array(180)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 2,
    }));
  }, []);

  if (!carta) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        carta não encontrada.
      </main>
    );
  }

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 1.03,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="relative min-h-screen overflow-hidden bg-[#070b17] flex items-center justify-center px-6 py-20"
    >

      {/* ESTRELAS */}
      <div className="absolute inset-0 overflow-hidden">

        {estrelas.map((estrela) => (
          <motion.div
            key={estrela.id}
            className="absolute bg-white rounded-full"
            style={{
              width: estrela.width,
              height: estrela.height,
              top: `${estrela.top}%`,
              left: `${estrela.left}%`,
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

      {/* NEBULOSAS */}
      <div className="absolute w-[700px] h-[700px] bg-pink-400/10 blur-3xl rounded-full top-[-200px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />

      {/* CARTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotate: -1,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 bg-[#f8f4ee] w-full max-w-4xl rounded-[40px] shadow-2xl p-10 md:p-16 border border-[#eadfce] overflow-hidden"
      >

        {/* TEXTURA */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

        {/* TOPO */}
        <div className="relative z-10 text-center mb-12">

          <h1 className="text-5xl md:text-7xl text-[#d45c5c] font-serif tracking-wide">
            Carta Estelar
          </h1>

          <p className="mt-4 italic text-[#d08b8b] text-lg">
            escrita entre constelações e pequenos infinitos
          </p>

        </div>

        {/* INFOS */}
        <div className="relative z-10 flex justify-between items-start flex-wrap gap-8 mb-12">

          <div className="space-y-6 text-[#d45c5c]">

            <div>
              <p className="uppercase text-sm tracking-widest">
                Para:
              </p>

              <div className="border-b border-[#d45c5c] w-52 pb-2 italic text-2xl">
                {carta.destinatario}
              </div>
            </div>

            <div>
              <p className="uppercase text-sm tracking-widest">
                De:
              </p>

              <div className="border-b border-[#d45c5c] w-52 pb-2 italic text-2xl">
                Coisinha
              </div>
            </div>

          </div>

          {/* SELOS */}
          <div className="flex gap-6">

            {/* SELO 1 */}
            <motion.div
              whileHover={{
                rotate: -5,
                scale: 1.12,
              }}
              onMouseEnter={tocarSom}
              className="w-32 h-40 border-4 border-[#d45c5c] rounded-xl bg-white/40 overflow-hidden flex items-center justify-center text-[#d45c5c] text-5xl cursor-pointer shadow-lg"
            >

              {carta.foto1 ? (
                <img
                  src={carta.foto1}
                  alt="foto"
                  className="w-full h-full object-cover"
                />
              ) : (
                carta.selo1
              )}

            </motion.div>

            {/* SELO 2 */}
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.12,
              }}
              onMouseEnter={tocarSom}
              className="w-32 h-40 border-4 border-[#d45c5c] rounded-xl bg-white/40 overflow-hidden flex items-center justify-center text-[#d45c5c] text-5xl cursor-pointer shadow-lg"
            >

              {carta.foto2 ? (
                <img
                  src={carta.foto2}
                  alt="foto"
                  className="w-full h-full object-cover"
                />
              ) : (
                carta.selo2
              )}

            </motion.div>

          </div>

        </div>

        {/* MÚSICA 🎵 */}
        <motion.div
          whileHover={{
            scale: 1.03,
          }}

          onClick={tocarMusica}
          onTouchStart={tocarMusica}

          className="relative z-10 mb-10 bg-[#fff7f2] border border-[#e8cfcf] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm cursor-pointer"
        >

          <div className="bg-[#d45c5c]/10 p-3 rounded-full">
            <Music2 className="text-[#d45c5c]" size={22} />
          </div>

          <div>
            <p className="text-[#d45c5c] text-sm uppercase tracking-[0.2em]">
              trilha sonora
            </p>

            <h3 className="text-[#b94848] text-xl font-serif italic">
              {carta.musica}
            </h3>

            <p className="text-[#c77b7b] italic">
              {carta.artista}
            </p>
          </div>

        </motion.div>

        {/* TÍTULO */}
        <h2 className="relative z-10 text-center text-5xl text-[#d45c5c] italic mb-12 font-serif">
          {carta.titulo}
        </h2>

        {/* TEXTO */}
        <div className="relative z-10 text-[#b94848] text-xl leading-loose whitespace-pre-line italic font-serif">
          {carta.texto}
        </div>

        {/* FRASE FINAL */}
        <div className="relative z-10 mt-16 text-center">

          <p className="text-4xl text-[#d45c5c] mb-6">
            ─────── ⋆⋅☆⋅⋆ ───────
          </p>

          <p className="uppercase tracking-widest text-sm text-[#c77b7b] leading-loose">
            {carta.frase}
          </p>

        </div>

        {/* BOTÃO */}
        <div className="relative z-10 mt-12 flex justify-end">

          <button
            onClick={() => {
              window.location.href = "/cartas";
            }}
            className="text-[#d45c5c] hover:scale-105 transition text-lg italic"
          >
            ← voltar às constelações
          </button>

        </div>

      </motion.div>
    </motion.main>
  );
}