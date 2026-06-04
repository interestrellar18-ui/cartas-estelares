"use client";

import { useEffect, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

export default function CartaIndividual() {
  const params = useParams();

  // SOM DOS SELOS 
  const seloSound = useRef<HTMLAudioElement | null>(null);

  // PLAYER DA MÚSICA 
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

  // CARTAS 
  const cartas = [
    {
      titulo: "Estrelas para Você",
      destinatario: "Felipe",

      // MÚSICA 
      musica: "Interestelar.",
      artista: "Mulamba",

      // ARQUIVO DA MÚSICA 
      arquivoMusica: "/interestelar.mp3",

      texto:
        "Eu sei que existiram histórias antes de mim.\nHistórias longas, intensas, daquelas que mudam o jeito de alguém enxergar o amor.\nE às vezes eu penso no peso disso tudo.\n\nPenso em como deve ser difícil chegar depois de dez anos.\nDepois de alguém que te atravessou tão fundo que até hoje mora em partes suas que talvez você nem perceba.\n\nE eu tenho medo.\nNão medo dela.\nNão medo do passado.\n\nTenho medo de ser pequena demais diante de tudo isso.\n\nPorque eu sei que eu não sou esse amor de uma década.\nNão sou a paixão que apertava teu peito até faltar ar.\nNão sou a pessoa que escreveu capítulos inteiros da tua vida.\n\nMas, meu Deus… como eu queria importar assim.\n\nQueria ser mais do que uma fase tranquila depois do caos.\nMais do que alguém passageira enquanto você tenta reorganizar os sentimentos.\nQueria ser lembrança bonita, abrigo, permanência.\n\nQueria que quando você pensasse no futuro, meu rosto aparecesse sem esforço.\n\nE talvez a pior parte seja que você nunca me deu motivos concretos pra sentir isso.\nÉ só o jeito que o passado dos outros às vezes faz a gente se sentir atrasada numa corrida que nem deveria existir.\n\nMas eu queria que você soubesse:\neu não quero apagar ninguém da tua história.\nNão quero ocupar lugar nenhum à força.\n\nSó queria descobrir se existe espaço pra mim aí dentro…\nde um jeito verdadeiro.\nDe um jeito que fique.",

      frase:
        "Eu olho para você Felipe. Eu olho tanto para você que, às vezes, deveria ser mais discreta. Porque adoro o que vejo e nem acredito que, no meio de tantas estrelas, você brilhou para mim.",

      selo1: "",
      selo2: "✧",

      foto1: "/nos.jpg",
      foto2: "",
    },

    {
      titulo: "Saudade",
      destinatario: "Felipe",

      musica: "Algo parecido.",
      artista: "Skank",

      arquivoMusica: "/algoparecido.mp3",

      texto:
        "Eu acho bonito o jeito que sinto saudade de você.\n\nPorque não é uma saudade de abandono.\nNão é dor.\nNão é medo de você não voltar.\n\nÉ só… carinho transbordando do instante.\n\nVocê tá aqui,\nrindo comigo,\nencostando no meu braço,\nfazendo o mundo parecer mais leve,\ne mesmo assim,\nalguma parte minha já quer guardar tudo.\n\nComo quem sabe que momentos felizes também passam,\nmesmo quando continuam inteiros dentro da gente.\n\nE quando você vai embora,\neu não sinto vazio.\n\nSinto continuação.\n\nPorque eu sei que você volta.\nSei que amanhã tua voz ainda vai existir nos meus dias.\nSei que vou te encontrar outra vez,\ne ouvir de novo as coisas pequenas que só você sabe dizer.\n\nMas talvez eu goste tanto de ti\nque meu coração tenha desaprendido a esperar o fim das coisas\npra começar a sentir falta.\n\nEntão eu sinto saudade enquanto acontece.\n\nSaudade do teu sorriso\nno mesmo instante em que você sorri.\nSaudade do calor da tua mão\nmesmo enquanto ela ainda segura a minha.\n\nE isso deveria ser triste,\nmas de algum jeito,\nparece só a forma mais bonita de estar com alguém.\n\nPorque significa que cada segundo teu comigo\nimporta tanto,\nque meu peito tenta eternizar antes mesmo que acabe. ",

      frase:
        "Algumas pessoas são a constelação da nossa alma.",

      selo1: "",
      selo2: "★",

      foto1: "/sorriso.jpg",
      foto2: "",
    },

    {
      titulo: "Fim do Mundo",
      destinatario: "Felipe",

      musica: "Só nós dois.",
      artista: "Tim Bernardes",

      arquivoMusica: "/sonosdois.mp3",

      texto:
        "Se o mundo acabasse agora,\neu acho que nem iria perceber direito.\n\nPorque você tá sorrindo.\nE teu sorriso tem esse jeito absurdo\nde fazer o caos parecer distante.\n\nAs coisas poderiam estar desmoronando,\nos prédios caindo,\no céu rachando ao meio,\ne ainda assim,\ncom tua mão na minha,\neu continuaria achando a vida bonita.\n\nTalvez gostar seja isso:\nencontrar alguém que silencie o fim do mundo\nsó por existir perto.\n\nEntão, se tudo tiver mesmo prestes a acabar,\nnão me promete eternidade.\n\nSó sorri pra mim mais uma vez.\nPorque tem um tipo de paz\nque eu só conheço\nquando teus olhos encontram os meus.",

      frase:
        "Mesmo no fim do universo, ainda escolheria você.",

      selo1: "",
      selo2: "∞",

      foto1: "/usfoto1.jpg",
      foto2: "",
    },

    {
      titulo: "Enquanto Você Sorri",
      destinatario: "Felipe",

      musica: "Sentimental",
      artista: "Los Hermanos",

      arquivoMusica: "/sentimental.mp3",

      texto:
        "Ninguém percebe direito\nO jeito que você ilumina o lugar\nToda vez que sorri distraído\nSem nem tentar\n\nE eu fico olhando em silêncio\nGuardando cada detalhe teu\nComo quem encontrou no mundo\nAlgo raro demais pra perder\n\nSe eu soubesse escrever estrelas\nTalvez eu conseguisse explicar\nO brilho que nasce nos teus olhos\nToda vez que você começa a falar\n\nMas por que é tão difícil dizer?\n\nVocê não vê\nO quanto teu riso muda tudo em mim\nComo teu brilho encosta no meu\nE faz meu mundo florir assim\n\nVocê não vê\nQue até teu jeito de existir\nMe faz querer ficar\nMesmo quando o mundo manda partir\n\nSentada mais uma noite\nTentando organizar o coração\nPorque toda vez que você chega\nEu desaprendo a solidão\n\nE eu queria te contar\nQue tem galáxias no teu olhar\nPequenas estrelas vivas\nQue me fazem me apaixonar\n\nMas por que é tão difícil dizer?\n\nVocê não vê\nO quanto eu gosto de te escutar\nComo as coisas mais simples tuas\nConseguem me iluminar\n\nVocê não vê\nQue quando teu brilho bate em mim\nEu também começo a brilhar\nComo se finalmente existisse\nUm lugar seguro pra ficar\n\nQuando você me olha\nEu esqueço o que ensaiei falar\nPorque gostar de você\nTem sido bonito demais pra explicar\n\nE talvez seja tarde\nPra esconder tudo isso de você\nPorque toda vez que eu sorrio\nTem um pouco do teu brilho em mim também.",

      frase:
        "Certas versões minhas nunca voltaram do instante em que me apaixonei.",

      selo1: "☄",
      selo2: "",

      foto1: "",
      foto2: "/strelinhas.jpg",

      
    },

    {
  titulo: "Ciúme Bobo",
  destinatario: "Felipe",

  musica: "Ciúmes",
  artista: "Venere Vai Venus",

  arquivoMusica: "/ciume.mp3",

  texto:
    "É engraçado o jeito que eu sinto ciúme de você\n\nNão é raiva\nNem desconfiança\n\nÉ só aquele instante pequeno\nQuando alguém consegue te fazer rir\nE eu penso:\n“droga… eu amo esse sorriso.”\n\nMas aí você olha pra mim logo depois\nComo quem volta pra casa sem perceber\nE tudo fica tranquilo outra vez\n\nPorque no fundo\nEu sei\n\nA gente sempre acaba se escolhendo no final da noite\n\nE talvez meu ciúme seja só isso:\nO medo leve e passageiro\nDe dividir com o mundo\nAs partes tuas que eu acho mais bonitas\n\nTeu brilho\nTeu riso distraído\nTeu jeito de falar meu nome\nComo se ele fosse importante\n\nMas não é um ciúme triste\n\nÉ quase carinho\n\nTipo querer guardar no bolso\nUma estrela bonita demais\nMesmo sabendo que ela nasceu pra iluminar o céu inteiro.",

  frase:
    "Às vezes eu só preciso lembrar que teu sorriso ainda escolhe me procurar no meio da multidão.",

  selo1: "☄",
  selo2: "✦",

  foto1: "",
  foto2: "",
},

{
  titulo: "Nova estrela",
  destinatario: "para você",

  musica: "x",
  artista: "x",

  arquivoMusica: "",

  texto:
    "",

  frase:
    "",

  selo1: "",
  selo2: "",

  foto1: "",
  foto2: "",
},

  ];

  const carta = cartas[Number(params.id)];
  console.log(params.id);

  // TOCAR MÚSICA 
  const tocarMusica = () => {
    if (!carta?.arquivoMusica) return;

    // pausa anterior
    musicaPlayer.current?.pause();

    // cria nova música
    musicaPlayer.current = new Audio(carta.arquivoMusica);

    musicaPlayer.current.volume = 0.6;

    // LOOP 
    musicaPlayer.current.loop = true;

    musicaPlayer.current.play().catch(() => {});
  };

  // ESTRELAS 
  const estrelas = Array.from({ length: 180 }, (_, i) => ({
  id: i,
  width: 2,
  height: 2,
  top: (i * 7) % 100,
  left: (i * 13) % 100,
  duration: 4,
}));

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

          <h1 className="text-5xl md:text-7xl text-[#d45c5c] font-cinzel tracking-wide">
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