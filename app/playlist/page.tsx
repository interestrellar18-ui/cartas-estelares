"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Heart,
} from "lucide-react";

export default function PlaylistPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [tocando, setTocando] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [progresso, setProgresso] = useState(0);

 const playlist = [
   {
  nome: "Se Tiver Que Ser Na Bala, Vai",
  artista: "Vanguart",
  arquivo: "vanguart.mp3",
  frase:
    "Não te opõe ao curso do rio, Prestidigitar a frustração, Tem dias que a vida é um ato de coragem.",
  icone: "✧",
  cor: "from-orange-200/20 to-amber-300/10",
},

{
  nome: "Linha Do Equador",
  artista: "Djavan",
  arquivo: "/linhadoequador.mp3",
  frase:
    "Esse imenso, desmedido amor, vai além de seja o que for vai além de onde eu vou, do que sou, minha dor, minha linha do Equador.",
  icone: "∿",
  cor: "from-cyan-200/20 to-blue-400/10",
},

{
  nome: "Lilás",
  artista: "Djavan",
  arquivo: "/lilas.mp3",
  frase:
    "Raio se libertou, clareou muito mais, Se encantou pela cor lilás, Prata na luz do amor, Céu azul!",
  icone: "❀",
  cor: "from-purple-200/20 to-pink-300/10",
},

{
  nome: "Oceano",
  artista: "Djavan",
  arquivo: "/oceano.mp3",
  frase:
    "Amar é um deserto e seus temores, Vida que vai na sela dessas dores, Não sabe voltar, me dá teu calor",
  icone: "⋆",
  cor: "from-sky-200/20 to-cyan-400/10",
},

{
  nome: "3x4",
  artista: "Engenheiros Do Hawaii",
  arquivo: "/3x4.mp3",
  frase:
    "E eu perdi as chaves mas que cabeça a minha, Agora vai ter que ser para toda a vida",
  icone: "◌",
  cor: "from-zinc-300/20 to-stone-400/10",
},

{
  nome: "Alinhamento Milenar",
  artista: "Jão",
  arquivo: "/alinhamentomilenar.mp3",
  frase:
    "A gente tem um charme especial, Todo mundo quer parar pra ver, Cada festa, cada praia, Os rolês na madrugada a alma sempre sou eu e você",
  icone: "☄",
  cor: "from-indigo-300/20 to-violet-400/10",
},

{
  nome: "Lábia",
  artista: "Jão",
  arquivo: "/labia.mp3",
  frase:
    "A gente tem um charme especial, Todo mundo quer parar pra ver, Cada festa, cada praia, Os rolês na madrugada a alma sempre sou eu e você",
  icone: "✶",
  cor: "from-red-200/20 to-rose-400/10",
},

{
  nome: "Me Lambe",
  artista: "Jão",
  arquivo: "/melambe.mp3",
  frase:
    "Então pode me lamber, Me enrolar, me apertar, Pode me acender.",
  icone: "⟡",
  cor: "from-pink-300/20 to-fuchsia-400/10",
},

{
  nome: "Eu Te Amo",
  artista: "Lagum",
  arquivo: "/euteamo.mp3",
  frase:
    "Você diz que me ama e eu te odeio, De um jeito esquisito, Porque nada é mais estranho que amar",
  icone: "♥",
  cor: "from-rose-200/20 to-red-300/10",
},

{
  nome: "Fingi Na Hora De Rir",
  artista: "Los Hermanos",
  arquivo: "/finginahoraderir.mp3",
  frase:
    "Pois eu, eu só penso em você, Já não sei mais por que, Em ti eu consigo encontrar um caminho, um motivo, um lugar pra eu poder repousar meu amor",
  icone: "✩",
  cor: "from-slate-300/20 to-gray-500/10",
},

{
  nome: "Retrato Para Iaiá",
  artista: "Los Hermanos",
  arquivo: "/iaia.mp3",
  frase:
    "Deixa ser como será, Eu vou sem me preocupar e crer pra ver o quanto eu posso adivinhar",
  icone: "✎",
  cor: "from-amber-100/20 to-yellow-300/10",
},

{
  nome: "Sentimental",
  artista: "Los Hermanos",
  arquivo: "/sentimental.mp3",
  frase:
    "Eu só aceito a condição de ter você só pra mim, eu sei, não é assim, mas deixa eu fingir e rir",
  icone: "☾",
  cor: "from-slate-400/20 to-zinc-500/10",
},

{
  nome: "Último Romance",
  artista: "Los Hermanos",
  arquivo: "/ultimoromance.mp3",
  frase:
    "E até quem me vê lendo o jornal na fila do pão, sabe que eu te encontrei",
  icone: "☆",
  cor: "from-yellow-200/20 to-orange-300/10",
},

{
  nome: "Interestelar",
  artista: "Mulamba",
  arquivo: "/interestelar.mp3",
  frase:
    "Interestelar é codinome que eu vou te dar, caso eu resolva lhe dedicar uma canção",
  icone: "✷",
  cor: "from-violet-300/20 to-fuchsia-400/10",
},

{
  nome: "Pensando Em Ti",
  artista: "Nelson Gonçalves",
  arquivo: "/pensandoemti.mp3",
  frase:
    "Nos cigarros que eu fumo te vejo nas espirais, Nos livros que eu tento ler, em cada frase tu estás",
  icone: "☽",
  cor: "from-blue-200/20 to-indigo-400/10",
},

{
  nome: "Meu Amor",
  artista: "O Grilo",
  arquivo: "/meuamor.mp3",
  frase:
    "Meu Deus do céu se tu existe, eu rezo, eu pago, eu me alisto, eu sei lá",
  icone: "♡",
  cor: "from-rose-200/20 to-pink-300/10",
},

{
  nome: "Pelo Gosto Que As Notas Deixam Na Boca",
  artista: "O Grilo",
  arquivo: "/pelogostoqueasnotasdeixamnaboca.mp3",
  frase:
    "Do castanho dos seus olhos, a castanha do caju, vou te levar onde o sonho faz brotar",
  icone: "♪",
  cor: "from-emerald-200/20 to-teal-400/10",
},

{
  nome: "Pra Você Gostar De Mim",
  artista: "O Grilo",
  arquivo: "/pravocegostardemim.mp3",
  frase:
    "Quando você tá perto, eu não sei ser discreto, peito aberto, eu começo a cantar aquele",
  icone: "✺",
  cor: "from-pink-200/20 to-rose-300/10",
},

{
  nome: "Serenata Existencialista",
  artista: "O Grilo",
  arquivo: "/serenataexistencialista.mp3",
  frase:
    "Porque se a gente se conheceu, Não foi obra do destino, nem desejo de Deus, Até porque esse cara aí já morreu",
  icone: "✴",
  cor: "from-emerald-300/20 to-green-400/10",
},

{
  nome: "Sombra No Sol",
  artista: "O Grilo",
  arquivo: "/sombranosol.mp3",
  frase:
    "Eu hei de ser no teu lençol, O amanhecer, Brilhar a ponto de fazer, Uma sombra no Sol",
  icone: "☀",
  cor: "from-yellow-100/20 to-amber-200/10",
},

{
  nome: "1932",
  artista: "Pullovers",
  arquivo: "/pullovers.mp3",
  frase:
    "Quando você sorriu, Me repartiu em antes e depois, Hoje eu me rendo, Rio, Mil novecentos e trinta e dois",
  icone: "⊹",
  cor: "from-stone-200/20 to-neutral-400/10",
},

{
  nome: "Todas As Canções São De Amor",
  artista: "Pullovers",
  arquivo: "/todasascancoessaodeamor.mp3",
  frase:
    "Chuva, Sol, frio ou calor, Tudo se iguala, Virando fundo pro amor e eu me lembrando de você",
  icone: "♫",
  cor: "from-red-100/20 to-pink-200/10",
},

{
  nome: "Enquanto Eu Passar Na Sua Rua",
  artista: "Selvagens À Procura De Lei",
  arquivo: "/enquantoeupassarnasuarua.mp3",
  frase:
    "Eu gostei dos corais da sua praia, Colei os dedos na sua sandália, Entrei no seu deserto de concreto, Concreto do Saara",
  icone: "➶",
  cor: "from-lime-200/20 to-green-400/10",
},

{
  nome: "Gostar Só Dela",
  artista: "Selvagens À Procura De Lei",
  arquivo: "/gostarsodela.mp3",
  frase:
    "Não há motivos pra fugir, Se com ela eu sou mais eu, Se ela tem razão quando me diz, Só dela, Diz pra eu gostar somente só dela",
  icone: "❋",
  cor: "from-rose-300/20 to-red-400/10",
},

{
  nome: "Algo Parecido",
  artista: "Skank",
  arquivo: "/algoparecido.mp3",
  frase:
    "Você bem que podia vir comigo para além do final dessa rua, o outro lado da cidade, A gente é parecido",
  icone: "★",
  cor: "from-violet-200/20 to-purple-400/10",
},

{
  nome: "BB (Garupa De Moto Amarela)",
  artista: "Tim Bernardes",
  arquivo: "/bebe.mp3",
  frase:
    "Você muda tudo e tudo fica tão bem, Mil cores, melhores amigos, Nós não vamos mais ser tão sozinhos, bebê, Conto com você, pode contar comigo",
  icone: "➳",
  cor: "from-yellow-100/20 to-orange-200/10",
},

{
  nome: "Só Nós Dois",
  artista: "Tim Bernardes",
  arquivo: "/sonosdois.mp3",
  frase:
    "Ninguém te imaginaria, Ninguém sonharia, Alguém como você, Se hoje a realidade, É bem maior que o sonho, Eu já sei porque",
  icone: "∞",
  cor: "from-pink-200/20 to-purple-300/10",
},

{
  nome: "Ciúmes",
  artista: "Venere Vai Vênus",
  arquivo: "/ciume.mp3",
  frase:
    "Eu sinto ciúmes, mesmo que eu não possa te mudar, E dói demais, queima minha pele e não é bonito, eu choro, eu grito",
  icone: "✦",
  cor: "from-fuchsia-200/20 to-rose-300/10",
},
  ];

  const musicaAtual = playlist[indiceAtual];

  useEffect(() => {
    const audio = new Audio(musicaAtual.arquivo);

    audio.volume = 0.4;

    audioRef.current = audio;

    if (tocando) {
      audio.play().catch(() => {});
    }

    const atualizar = () => {
      if (!audio.duration) return;

      setProgresso(
        (audio.currentTime / audio.duration) * 100
      );
    };

    audio.addEventListener("timeupdate", atualizar);

    audio.onended = () => {
      proximaMusica();
    };

    return () => {
      audio.pause();

      audio.removeEventListener(
        "timeupdate",
        atualizar
      );
    };
  }, [indiceAtual]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (tocando) {
      audioRef.current.pause();
      setTocando(false);
    } else {
      audioRef.current.play().catch(() => {});
      setTocando(true);
    }
  };

  const proximaMusica = () => {
    setIndiceAtual((prev) =>
      prev === playlist.length - 1 ? 0 : prev + 1
    );

    setTocando(true);
  };

  const musicaAnterior = () => {
    setIndiceAtual((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );

    setTocando(true);
  };

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        relative

        bg-gradient-to-br
        from-[#050816]
        via-[#0e1330]
        to-[#170d2d]

        px-4
        sm:px-6
        py-6
        sm:py-10

        text-white
      "
    >
      {/* ESTRELAS */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 180 }).map((_, i) => {
          const size = (i % 3) + 1;

          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${(i * 7) % 100}%`,
                left: `${(i * 13) % 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* NEBULOSAS */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-3xl rounded-full top-[-150px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full bottom-[-150px] right-[-100px]" />

      {/* CARD */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-6xl

          mx-auto

          rounded-[28px]

          bg-[#161938]/75
          backdrop-blur-2xl

          border
          border-pink-200/10

          px-5
          py-6

          sm:p-8
          lg:p-10
        "
      >
        {/* TOPO */}
        <div
          className="
            flex
            items-center
            justify-between

            gap-4

            mb-8
            md:mb-10
          "
        >
          <Link
            href="/cartas"
            className="
              flex
              items-center
              gap-2

              px-5
              py-3

              rounded-full

              bg-white/10

              text-pink-100
              italic

              hover:bg-white/20
              transition-all

              text-sm
              md:text-base
            "
          >
            <ArrowLeft size={18} />
            voltar
          </Link>

          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl

              italic
              text-pink-100
              font-serif
            "
          >
            nossos sons!
          </h1>
        </div>

        {/* PLAYER */}
        <div
          className="
            flex
            flex-col
            lg:flex-row

            gap-8
            lg:gap-12

            items-center

            mb-12
          "
        >
          {/* PLANETA */}
          <div className="relative flex items-center justify-center shrink-0">
            {/* GLOW */}
            <div
              className="
                absolute

                w-[220px]
                h-[220px]

                sm:w-[280px]
                sm:h-[280px]

                rounded-full

                bg-purple-400/10
                blur-3xl

                animate-pulse
              "
            />

            {/* ANEL */}
            <div
              className="
                absolute

                w-[220px]
                h-[70px]

                sm:w-[280px]
                sm:h-[90px]

                rounded-full

                border
                border-pink-100/20

                rotate-[-18deg]
              "
            />

            {/* PLANETA */}
            <div
              className={`
                relative

                w-[180px]
                h-[180px]

                sm:w-[240px]
                sm:h-[240px]

                rounded-full
                overflow-hidden

                bg-gradient-to-br
                from-[#93a1ff]
                via-[#2d3360]
                to-[#080914]

                shadow-[0_0_60px_rgba(180,160,255,0.18)]

                flex
                items-center
                justify-center

                ${
                  tocando
                    ? "animate-[spin_40s_linear_infinite]"
                    : ""
                }
              `}
            >
              {/* BRILHO */}
              <div
                className="
                  absolute
                  top-6
                  left-6

                  w-20
                  h-20

                  rounded-full

                  bg-white/10
                  blur-3xl
                "
              />

              {/* ÍCONE */}
              <span
                className="
                  text-[60px]
                  sm:text-[75px]

                  z-10
                "
              >
                {musicaAtual.icone}
              </span>
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1 w-full">
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                italic
                font-serif

                leading-tight

                text-pink-100
              "
            >
              {musicaAtual.nome}
            </h2>

            <p
              className="
                mt-3

                uppercase

                tracking-[4px]

                text-gray-400

                text-sm
              "
            >
              {musicaAtual.artista}
            </p>

            <p
              className="
                mt-6

                italic

                text-gray-200

                text-base
                md:text-xl

                leading-relaxed
              "
            >
              “{musicaAtual.frase}”
            </p>

            {/* BARRA */}
            <div
              className="
                mt-7

                w-full
                h-2

                rounded-full

                bg-white/10
                overflow-hidden
              "
            >
              <div
                className="
                  h-full
                  rounded-full

                  bg-pink-200

                  transition-all
                "
                style={{
                  width: `${progresso}%`,
                }}
              />
            </div>

            {/* CONTROLES */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start

                gap-5

                mt-7
              "
            >
              <button
                onClick={musicaAnterior}
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-white/10

                  flex
                  items-center
                  justify-center

                  hover:scale-110

                  transition
                "
              >
                <SkipBack size={20} />
              </button>

              <button
                onClick={togglePlay}
                className="
                  w-16
                  h-16

                  rounded-full

                  bg-pink-200/10

                  border
                  border-pink-200/20

                  flex
                  items-center
                  justify-center

                  hover:scale-110

                  transition
                "
              >
                {tocando ? (
                  <Pause size={30} />
                ) : (
                  <Play size={30} />
                )}
              </button>

              <button
                onClick={proximaMusica}
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-white/10

                  flex
                  items-center
                  justify-center

                  hover:scale-110

                  transition
                "
              >
                <SkipForward size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* LISTA */}
        <div className="grid lg:grid-cols-2 gap-4">
          {playlist.map((musica, index) => (
            <button
              key={index}
              onClick={() => {
                setIndiceAtual(index);
                setTocando(true);
              }}
              className={`
                flex
                items-start

                gap-4

                p-4

                rounded-[24px]

                border

                transition-all

                text-left

                ${
                  indiceAtual === index
                    ? "bg-pink-200/10 border-pink-200/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }
              `}
            >
              {/* ÍCONE */}
              <div
                className={`
                  w-14
                  h-14

                  sm:w-16
                  sm:h-16

                  rounded-full

                  flex
                  items-center
                  justify-center

                  bg-gradient-to-br
                  ${musica.cor}

                  shrink-0
                `}
              >
                <span className="text-2xl sm:text-3xl">
                  {musica.icone}
                </span>
              </div>

              {/* TEXTO */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="
                      text-xl
                      sm:text-2xl

                      italic
                      font-serif

                      text-pink-100

                      leading-tight
                    "
                  >
                    {musica.nome}
                  </h3>

                  <Heart
                    size={16}
                    className="text-pink-200 shrink-0"
                  />
                </div>

                <p
                  className="
                    text-gray-400
                    mt-1

                    text-xs

                    uppercase

                    tracking-[2px]
                  "
                >
                  {musica.artista}
                </p>

                <p
                  className="
                    italic

                    text-gray-300

                    text-sm

                    mt-3

                    leading-relaxed
                  "
                >
                  “{musica.frase}”
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}