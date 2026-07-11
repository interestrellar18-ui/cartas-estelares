"use client";

import { useEffect, useRef } from "react";
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
musica: "Interestelar", 
artista: "Mulamba", 
// ARQUIVO DA MÚSICA 
arquivoMusica: "/mulamba.mp3", 

texto: "Eu sei que existiram histórias antes de mim.\nHistórias longas, intensas, daquelas que mudam o jeito de alguém enxergar o amor.\nE às vezes eu penso no peso disso tudo.\n\nPenso em como deve ser difícil chegar depois de dez anos.\nDepois de alguém que te atravessou tão fundo que até hoje mora em partes suas que talvez você nem perceba.\n\nE eu tenho medo.\nNão medo dela.\nNão medo do passado.\n\nTenho medo de ser pequena demais diante de tudo isso.\n\nPorque eu sei que eu não sou esse amor de uma década.\nNão sou a paixão que apertava teu peito até faltar ar.\nNão sou a pessoa que escreveu capítulos inteiros da tua vida.\n\nMas, meu Deus… como eu queria importar assim.\n\nQueria ser mais do que uma fase tranquila depois do caos.\nMais do que alguém passageira enquanto você tenta reorganizar os sentimentos.\nQueria ser lembrança bonita, abrigo, permanência.\n\nQueria que quando você pensasse no futuro, meu rosto aparecesse sem esforço.\n\nE talvez a pior parte seja que você nunca me deu motivos concretos pra sentir isso.\nÉ só o jeito que o passado dos outros às vezes faz a gente se sentir atrasada numa corrida que nem deveria existir.\n\nMas eu queria que você soubesse:\neu não quero apagar ninguém da tua história.\nNão quero ocupar lugar nenhum à força.\n\nSó queria descobrir se existe espaço pra mim aí dentro…\nde um jeito verdadeiro.\nDe um jeito que fique.",

frase: "Eu olho para você Felipe. Eu olho tanto para você que, às vezes, deveria ser mais discreta. Porque adoro o que vejo e nem acredito que, no meio de tantas estrelas, você brilhou para mim.",
 
selo1: "", 
selo2: "✧", 

foto1: "/nos1.jpeg", 
foto2: "",

 }, 

{ 
titulo: "Saudade", 
destinatario: "Felipe", 

musica: "Algo parecido.", 
artista: "Skank", 

arquivoMusica: "/algoparecido.mp3", 

texto: "Eu acho bonito o jeito que sinto saudade de você.\n\nPorque não é uma saudade de abandono.\nNão é dor.\nNão é medo de você não voltar.\n\nÉ só… carinho transbordando do instante.\n\nVocê tá aqui,\nrindo comigo,\nencostando no meu braço,\nfazendo o mundo parecer mais leve,\ne mesmo assim,\nalguma parte minha já quer guardar tudo.\n\nComo quem sabe que momentos felizes também passam,\nmesmo quando continuam inteiros dentro da gente.\n\nE quando você vai embora,\neu não sinto vazio.\n\nSinto continuação.\n\nPorque eu sei que você volta.\nSei que amanhã tua voz ainda vai existir nos meus dias.\nSei que vou te encontrar outra vez,\ne ouvir de novo as coisas pequenas que só você sabe dizer.\n\nMas talvez eu goste tanto de ti\nque meu coração tenha desaprendido a esperar o fim das coisas\npra começar a sentir falta.\n\nEntão eu sinto saudade enquanto acontece.\n\nSaudade do teu sorriso\nno mesmo instante em que você sorri.\nSaudade do calor da tua mão\nmesmo enquanto ela ainda segura a minha.\n\nE isso deveria ser triste,\nmas de algum jeito,\nparece só a forma mais bonita de estar com alguém.\n\nPorque significa que cada segundo teu comigo\nimporta tanto,\nque meu peito tenta eternizar antes mesmo que acabe. ", 

frase: "Algumas pessoas são a constelação da nossa alma.",

selo1: "", 
selo2: "★", 

foto1: "/sorriso.jpeg", 
foto2: "",

 }, 

{ titulo: "Fim do Mundo", 

destinatario: "Felipe",
 
musica: "Só nós dois.", 
artista: "Tim Bernardes",
 
arquivoMusica: "/timbernardes.mp3",

texto: "Se o mundo acabasse agora,\neu acho que nem iria perceber direito.\n\nPorque você tá sorrindo.\nE teu sorriso tem esse jeito absurdo\nde fazer o caos parecer distante.\n\nAs coisas poderiam estar desmoronando,\nos prédios caindo,\no céu rachando ao meio,\ne ainda assim,\ncom tua mão na minha,\neu continuaria achando a vida bonita.\n\nTalvez gostar seja isso:\nencontrar alguém que silencie o fim do mundo\nsó por existir perto.\n\nEntão, se tudo tiver mesmo prestes a acabar,\nnão me promete eternidade.\n\nSó sorri pra mim mais uma vez.\nPorque tem um tipo de paz\nque eu só conheço\nquando teus olhos encontram os meus.", 

frase: "Mesmo no fim do universo, ainda escolheria você.", 

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

texto: "Ninguém percebe direito\nO jeito que você ilumina o lugar\nToda vez que sorri distraído\nSem nem tentar\n\nE eu fico olhando em silêncio\nGuardando cada detalhe teu\nComo quem encontrou no mundo\nAlgo raro demais pra perder\n\nSe eu soubesse escrever estrelas\nTalvez eu conseguisse explicar\nO brilho que nasce nos teus olhos\nToda vez que você começa a falar\n\nMas por que é tão difícil dizer?\n\nVocê não vê\nO quanto teu riso muda tudo em mim\nComo teu brilho encosta no meu\nE faz meu mundo florir assim\n\nVocê não vê\nQue até teu jeito de existir\nMe faz querer ficar\nMesmo quando o mundo manda partir\n\nSentada mais uma noite\nTentando organizar o coração\nPorque toda vez que você chega\nEu desaprendo a solidão\n\nE eu queria te contar\nQue tem galáxias no teu olhar\nPequenas estrelas vivas\nQue me fazem me apaixonar\n\nMas por que é tão difícil dizer?\n\nVocê não vê\nO quanto eu gosto de te escutar\nComo as coisas mais simples tuas\nConseguem me iluminar\n\nVocê não vê\nQue quando teu brilho bate em mim\nEu também começo a brilhar\nComo se finalmente existisse\nUm lugar seguro pra ficar\n\nQuando você me olha\nEu esqueço o que ensaiei falar\nPorque gostar de você\nTem sido bonito demais pra explicar\n\nE talvez seja tarde\nPra esconder tudo isso de você\nPorque toda vez que eu sorrio\nTem um pouco do teu brilho em mim também.", 

frase: "Certas versões minhas nunca voltaram do instante em que me apaixonei.",

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

texto: "É engraçado o jeito que eu sinto ciúme de você\n\nNão é raiva\nNem desconfiança\n\nÉ só aquele instante pequeno\nQuando alguém consegue te fazer rir\nE eu penso:\n“droga… eu amo esse sorriso.”\n\nMas aí você olha pra mim logo depois\nComo quem volta pra casa sem perceber\nE tudo fica tranquilo outra vez\n\nPorque no fundo\nEu sei\n\nA gente sempre acaba se escolhendo no final da noite\n\nE talvez meu ciúme seja só isso:\nO medo leve e passageiro\nDe dividir com o mundo\nAs partes tuas que eu acho mais bonitas\n\nTeu brilho\nTeu riso distraído\nTeu jeito de falar meu nome\nComo se ele fosse importante\n\nMas não é um ciúme triste\n\nÉ quase carinho\n\nTipo querer guardar no bolso\nUma estrela bonita demais\nMesmo sabendo que ela nasceu pra iluminar o céu inteiro.", 

frase: "Às vezes eu só preciso lembrar que teu sorriso ainda escolhe me procurar no meio da multidão.", 

selo1: "☄", 
selo2: "✦", 

foto1: "",
foto2: "", 

},

{
 titulo: "Lugar que brilha", 
destinatario: "Felipe",

musica: "Último Romance",
artista: "Los Hermanos",

arquivoMusica: "/ultimoromance.mp3",

 texto: "Às vezes eu olho pra você\nE penso em todas as histórias que vieram antes de mim\nTodas as pessoas que passaram pelo teu coração\nTodos os amores que já fizeram teu peito acelerar\n\nE então a insegurança sussurra\nQue talvez eu seja só mais uma sensação bonita\nEntre tantas outras que você já viveu\n\nComo se nada em mim pudesse ser novo\n\nMas aí você me olha daquele jeito calmo\nComo quem tenta juntar minhas partes trêmulas sem pressa\nE me faz perceber\nQue sentimentos não precisam ser inédita tempestade\nPra ser verdadeiro\n\nPorque você não tentou comparar sentimentos\nNão tentou medir o que viveu antes\n\nVocê só me escolheu\n\nE de algum jeito\nIsso silenciou o caos dentro de mim\n\nQuando você disse que era meu\nNão como posse\nMas como presença\nComo alguém que decidiu ficar\nEu senti meu coração respirar diferente\n\nPela primeira vez\nEu não queria competir com o passado de ninguém\n\nPorque você fez eu entender\nQue existir na tua vida\nJá é uma forma bonita de eternidade\n\nE talvez eu ainda tenha medo às vezes\nTalvez eu ainda duvide da luz que carrego\n\nMas então você segura minha mão\nE tudo em mim acredita outra vez", 

frase: "E assim, quando mais tarde me procure, quem sabe a morte, angústia de quem vive, quem sabe a solidão, fim de quem ama, eu possa me dizer do amor que tive, que não seja imortal, posto que é chama, mas que seja infinito enquanto dure", 

selo1: "☄", 
selo2: "", 

foto1: "", 
foto2: "/nosdois.jpeg",
 }, 

 {
  titulo: "Paixão ardente como supernova",
  destinatario: "Felipe Alves",

  musica: "Alinhamento Milenar",
  artista: "Jão",

  arquivoMusica: "/alinhamentomilenar.mp3",

  texto:
    "Você é minha pessoa favorita, e hoje eu queria tirar um tempinho para te lembrar o quanto você é especial para mim e o quanto sou feliz por ter encontrado você.\n\nÉ engraçado pensar que eu te vi pela primeira vez em 21 de julho de 2025, sem imaginar que, algum tempo depois, você se tornaria alguém tão importante na minha vida. Mas foi a partir do dia 30 de abril de 2026 que eu tive a oportunidade de conhecer de verdade quem você é, e desde então eu só consigo admirar cada vez mais o seu coração.\n\nEu acho lindo o jeito que você cuida das pessoas, a forma como você tenta ajudar, mesmo quando você também precisa de cuidado. Na forma como você espera eu ficar bem antes de tentar resolver qualquer coisa. Na forma como você se importa de verdade.\n\nVocê tem um coração muito raro. Mesmo depois de se machucar, você continua escolhendo ser uma pessoa boa. Mesmo quando seria mais fácil se fechar, você continua oferecendo carinho, apoio e gentileza. E eu admiro muito isso em você.\n\nDesde aquele primeiro dia em que te vi acolhendo as pessoas, com aquele sorriso bonito que fazia todo mundo se sentir menos perdido, eu já tinha uma admiração por você. Com o tempo, ela só cresceu, porque eu fui descobrindo que por trás daquele sorriso existe alguém extremamente gentil, prestativo, empático e cheio de amor para oferecer.\n\nEu lembro de tantas vezes em que você esteve comigo. Das horas que você passou me ajudando sem precisar, dos momentos em que você me ouviu, das vezes em que você conseguiu transformar dias difíceis em dias mais leves. Você tem um jeito muito bonito de fazer as pessoas se sentirem cuidadas, e eu sou muito grata por sentir isso vindo de você.\n\nVocê foi, sem dúvida, uma das melhores coisas que me aconteceram esse ano. Você chegou de um jeito inesperado e trouxe uma felicidade que eu não sabia que estava precisando. Você me faz sorrir, me faz sentir acolhida, me faz sentir importante e, principalmente, me faz sentir muito bem sendo quem eu sou, faz eu sentir que nenhum problema é grande demais se eu estiver segurando sua mão.\n\nEu também quero que você saiba que eu respeito a sua história, tudo que você viveu, tudo que te trouxe até aqui e todas as coisas que fazem você ser quem é hoje. Eu nunca quero apressar seus sentimentos ou ignorar o seu tempo, porque eu sei que cada pessoa carrega suas próprias cicatrizes e seus próprios processos.\n\nMas quero que você saiba uma coisa: por você, vale a pena esperar. Vale a pena ter paciência, vale a pena construir aos poucos, vale a pena deixar as coisas acontecerem da forma mais bonita e verdadeira possível. Eu vou estar aqui, respeitando o seu tempo, torcendo por você e querendo ver você feliz, porque antes de qualquer coisa eu admiro a pessoa que você é.\n\nEu quero que você saiba que esse cuidado é recíproco. Que eu também quero ser esse lugar seguro para você. Quero estar aqui para comemorar suas conquistas, ouvir seus medos, dividir seus dias difíceis e lembrar você, sempre, da pessoa incrível que você é.\n\nEu espero que você nunca duvide do quanto eu gosto de você, do quanto você é admirado por mim e do quanto a sua existência faz diferença na vida das pessoas que têm a sorte de conhecer você. Obrigada por ser você. Obrigada por me tratar com tanto carinho, por me fazer tão feliz e por deixar eu conhecer esse coração lindo que existe aí dentro.\n\nEu gosto muito de fazer parte da sua vida, e espero poder continuar fazendo isso por muito, muito tempo.",

  frase:
    "O humano coração com mais verdade...Amo-te como amigo e como amante, Numa sempre diversa realidade.",

  selo1: "",
  selo2: "",

  foto1: "/amor.jpg",
  foto2: "/curacao.jpg",
},

{
  titulo: "Encanto",
  destinatario: "Felipe Alves",

  musica: "Can't help falling in love",
  artista: "Elvis Presley",

  arquivoMusica: "/canthelpfallinginlove.mp3",

  texto:
    "Teu olhar me hipnotiza,\n tua presença me acolhe,\n tem um jeito no teu corpo\n que em silêncio me encanta.\n\nOlha assim pra mim de novo,\n me desmonta sem aviso,\nme leva pra um lugar\n que nem cabe no juízo.\n\nEu sei bem o que eu sinto,\n é certeza e sem pressão,\n não existe língua no mundo\n que traduza essa emoção.\n\nNão há luz mais que teu brilho,\n nem descanso igual teu calor,\n e eu nem tento mais fugir…\n nada impede esse querer, esse amor.\n\nTem alguma coisa em teus olhos\nque me faz desacreditar\nque o acaso tenha sido acaso\nquando resolveu te mostrar.\n\nÉ estranho, porque teu silêncio\nfala mais do que eu sei dizer,\ne no espaço entre duas palavras\njá encontro motivos pra viver.\n\nTeu sorriso acende caminhos\nonde a noite quis morar,\ne transforma meus medos antigos\nem vontade de sonhar.\n\nEu me perco nos teus detalhes,\nna curva leve da tua voz,\ncomo quem encontra um abrigo\ne esquece de ficar a sós.\n\nSe isso tudo é loucura,\nnão desejo me curar,\nporque a parte mais bonita de mim\nestá aprendendo teu jeito de amar.\n\nE quando o tempo passar correndo,\ncomo sempre faz correr,\nquero guardar cada instante\nque eu tiver pra te viver.",
  frase:
    "Ó meu amado, Que olhos os teus, Se Deus houvera, Fizera-os Deus,Pois não os fizera, Quem não soubera,Que há muitas eras, Nos olhos teus.",
  selo1: "𐙚",
  selo2: "✎𓂃",

  foto1: "",
  foto2: "",
},

{
  titulo: "Antes de eu transbordar",
  destinatario: "Felipe",

  musica: "Carinhoso",
  artista: "Marisa Monte",

  arquivoMusica: "/carinhoso.mp3",

  texto:
"24/07/2026\n\n eu estava planejando te falar\n\n\n Eu tenho uma palavra guardada no peito,\n uma palavra pequena na forma,\n mas imensa no significado.\n\n Ela mora na ponta da minha língua,\n mas eu seguro um pouco mais,\n não porque ela seja menos verdadeira,\n mas porque eu sei o tamanho que ela carrega.\n\n Eu tenho medo de entregar meu amor\n como quem entrega uma tempestade,\n quando tudo que eu quero ser\n é uma chuva tranquila depois de um dia difícil.\n\n Eu não quero ser mais uma responsabilidade,\n mais uma promessa para você cumprir,\n mais um peso colocado sobre os ombros\n de alguém que já carregou tanto.\n\n Eu não quero que você me ame\n porque eu declamei amor.\n\n Eu quero que você me escolha\n porque, ao meu lado,\n o seu coração encontra descanso.\n\n Porque eu quero consertar suas feridas,\n eu não quero ser a cura das suas dores.\n Eu só quero sentar ao seu lado e cuidar de ti\n enquanto você aprende a cuidar de si.\n\n Quero ser a mão que segura a sua,\n a mão que te ajuda juntar seus pedaços.\n\n Eu sei que você tem histórias antes de mim,\n amores que deixaram marcas,\n caminhos que terminaram diferente do que você sonhou.\n\n E eu não quero apagar nada disso.\n\n Eu respeito quem você foi,\n porque foi essa pessoa que chegou até mim.\n Mas eu espero, com carinho,\n que exista espaço para quem você está se tornando.\n\n Porque eu não quero ser um capítulo para esquecer,\n nem uma pausa bonita entre duas histórias.\n\n Eu quero ser o presente que você escolhe viver.\n\n E se um dia essa palavra escapar dos meus lábios,\n se um dia eu conseguir dizer “eu te amo”,\n eu quero que ela chegue até você leve.\n\n Como uma flor, não como uma dívida.\n Como um abraço, não como uma cobrança.\n\n Porque amar você, para mim,\n nunca foi sobre prender.\n\n É sobre olhar para você\n e pensar:\n\n “Eu espero que você seja feliz.\n E se puder ser comigo,\n eu vou agradecer todos os dias.” \n\n e eu não quero que você seja perfeito,\n nem que esconda as marcas dos dias difíceis.\n Eu gosto de você inteiro:\n com os pedaços que você mostra\n e até com aqueles que ainda está tentando juntar.\n\n Porque eu vi em você uma coisa rara:\n alguém que, mesmo cansado,\n mesmo carregando tempestades dentro do peito,\n ainda encontra um jeito de ser abrigo.\n\n E talvez você nem perceba, Felipe,\n mas você virou um daqueles lugares\n onde o coração descansa.\n Você me faz querer permanecer\n até nos dias em que eu penso em desaparecer,\n porque a sua presença transforma caminhos difíceis\n em lugares que eu consigo atravessar.\n\n Eu quero te dar minha melhor versão,\n não porque a versão de agora não seja suficiente,\n mas porque alguém que cuida tanto de mim\n merece receber todo o amor que eu tenho para oferecer.\n\n Quero aprender a ser casa para você\n como você, mesmo sem perceber,\n tem sido lar para mim.\n\n E eu sei que você diz que está quebrado,\n mas eu vejo diferente:\n eu vejo alguém se reconstruindo.\n Vejo alguém que todos os dias recolhe seus pedaços\n e tenta, mesmo com medo,\n ser alguém capaz de ficar.\n\n E talvez seja isso que mais me encanta:\n você não promete ser alguém sem cicatrizes,\n você promete continuar tentando.\n\n Eu não quero uma versão perfeita sua.\n Eu quero essa versão que luta,\n que sente,\n que se importa,\n que segura minha mão mesmo enquanto aprende a segurar a própria.\n\n Porque, no meio de tanta coisa incerta,\n existe uma certeza silenciosa em mim:\n\n você se tornou minha pessoa favorita.\n\n E se amar também é escolher,\n eu escolho caminhar ao seu lado enquanto você se encontra,\n enquanto eu me encontro,\n enquanto nós aprendemos, devagarinho,\n a ser o melhor lugar um para o outro.",
  frase:
    "Daqui eu já consigo imaginar, Que essa é a nossa história, Tudo tem a sua hora, EU SEI QUE AS COISAS BOAS VÃO CHEGAR SE EU ESPERAR.",
  selo1: "𖹭",
  selo2: "",

  foto1: "",
  foto2: "/junho.jpeg",
},

{
  titulo: "Demais",
  destinatario: "Felipe",

  musica: "Hiperbole",
  artista: "Sofi Frozza",

  arquivoMusica: "/exagero.mp3",

  texto:
    "Tenho medo de amar alto demais.\n\nDe encher teu celular de palavras,\nde fazer do meu carinho\num barulho maior do que o teu silêncio consegue abraçar.\n\nTenho medo de que minhas declarações\ncheguem até você\ncomo quem pede mais do que deveria.\n\nMas a verdade...\n\né que eu não sei te gostar pela metade.\n\nVocê me aconteceu\ne, desde então,\nmeu coração desaprendeu a economizar afeto.\n\nEu penso em você\ncomo quem lembra de respirar,\ncomo quem procura o céu\nsem perceber que levantou os olhos.\n\nE, ainda assim,\no meu maior desejo\nnão é que você carregue esse amor.\n\nÉ que ele seja leve.\n\nLeve como o teu\n'tá tudo bem',\nque sempre encontra meu medo\nantes mesmo de mim.\n\nLeve como quando você diz\nque gosta do meu jeito,\nenquanto eu ainda tento pedir desculpas\npor ser exatamente quem sou.\n\nTalvez eu nunca deixe de ter medo\nde ser intensa demais.\n\nMas, se existe uma coragem\nque o meu coração me deu,\né a de continuar escolhendo você\nmesmo tremendo.\n\nPorque eu não quero ser\na tempestade da tua vida.\n\nQuero ser o lugar\nonde você volta para descansar.\n\nE, se um dia eu parecer demais,\n\nme lembra, mais uma vez,\n\nque sentir também pode ser leve.",
  frase:
    "Se existem infinitos universos, em cada um deles eu ainda escolheria ficar. Não existe nenhum onde desistir de você faça sentido.",
  selo1: "𖦹",
  selo2: "𖹭",

  foto1: "",
  foto2: "",

},

];

  const carta = cartas[Number(params.id)];

  // TOCAR MÚSICA
  const tocarMusica = () => {

    if (!carta?.arquivoMusica) return;

    musicaPlayer.current?.pause();

    musicaPlayer.current = new Audio(
      carta.arquivoMusica
    );

    musicaPlayer.current.volume = 0.6;

    musicaPlayer.current.loop = true;

    musicaPlayer.current.play().catch(() => {});

  };

  // ESTRELAS
  const estrelas = Array.from(
    { length: 180 },
    (_, i) => ({

      id: i,

      width: 2,

      height: 2,

      top: (i * 7) % 100,

      left: (i * 13) % 100,

      duration: 4,

    })
  );

  if (!carta) {

    return (

      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-black
          text-white
        "
      >
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

      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070b17]

        flex
        items-center
        justify-center

        px-3
        sm:px-6

        py-8
        sm:py-16
      "
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
      <div
        className="
          absolute
          w-[500px]
          h-[500px]

          bg-pink-400/10
          blur-3xl
          rounded-full

          top-[-150px]
          left-[-80px]
        "
      />

      <div
        className="
          absolute
          w-[420px]
          h-[420px]

          bg-purple-500/10
          blur-3xl
          rounded-full

          bottom-[-120px]
          right-[-80px]
        "
      />

      {/* CARTA */}
      <motion.div

        initial={{
          opacity: 0,
          y: 80,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className="
          relative
          z-10

          bg-[#f8f4ee]

          w-full
          max-w-5xl

          rounded-[32px]

          shadow-2xl

          px-5
          sm:px-10
          lg:px-14

          py-8
          sm:py-12

          border
          border-[#eadfce]

          overflow-hidden
        "
      >

        {/* TEXTURA */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

        {/* TOPO */}
        <div className="relative z-10 text-center mb-10">

          <h1
            className="
              text-4xl
              sm:text-6xl

              text-[#d45c5c]
              font-cinzel
            "
          >
            Carta Estelar
          </h1>

          <p
            className="
              mt-3

              italic
              text-[#d08b8b]

              text-[11px]
              sm:text-sm
            "
          >
            escrita entre constelações e pequenos infinitos
          </p>

        </div>

        {/* INFOS */}
        <div
          className="
            relative
            z-10

            flex
            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-8

            mb-10
          "
        >

          {/* DE / PARA */}
          <div
            className="
              flex
              flex-col

              items-center
              lg:items-start

              gap-5
            "
          >

            {/* PARA */}
            <div className="text-center lg:text-left">

              <p
                className="
                  uppercase

                  tracking-[0.35em]

                  text-[#d08b8b]

                  text-[11px]
                  sm:text-xs

                  font-cinzel
                "
              >
                Para:
              </p>

              <h2
                className="
                  text-[#d45c5c]

                  italic

                  font-cinzel

                  text-3xl
                  sm:text-4xl

                  border-b
                  border-[#d45c5c]

                  pb-2
                  mt-2

                  min-w-[220px]
                "
              >
                {carta.destinatario}
              </h2>

            </div>

            {/* DE */}
            <div className="text-center lg:text-left">

              <p
                className="
                  uppercase

                  tracking-[0.35em]

                  text-[#d08b8b]

                  text-[11px]
                  sm:text-xs

                  font-cinzel
                "
              >
                De:
              </p>

              <h2
                className="
                  text-[#d45c5c]

                  italic

                  font-cinzel

                  text-3xl
                  sm:text-4xl

                  border-b
                  border-[#d45c5c]

                  pb-2
                  mt-2

                  min-w-[220px]
                "
              >
                Coisinha
              </h2>

            </div>

          </div>

          {/* SELOS */}
          <div className="flex gap-4 sm:gap-6">

            {/* SELO 1 */}
            <motion.div

              whileHover={{
                rotate: -4,
                scale: 1.05,
              }}

              onMouseEnter={tocarSom}

              className="
                w-[110px]
                h-[145px]

                sm:w-[135px]
                sm:h-[180px]

                border-[3px]
                border-[#d45c5c]

                rounded-2xl

                bg-white/40

                overflow-hidden

                flex
                items-center
                justify-center

                text-[#d45c5c]

                text-4xl

                cursor-pointer
                shadow-lg
              "
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
                rotate: 4,
                scale: 1.05,
              }}

              onMouseEnter={tocarSom}

              className="
                w-[110px]
                h-[145px]

                sm:w-[135px]
                sm:h-[180px]

                border-[3px]
                border-[#d45c5c]

                rounded-2xl

                bg-white/40

                overflow-hidden

                flex
                items-center
                justify-center

                text-[#d45c5c]

                text-4xl

                cursor-pointer
                shadow-lg
              "
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

        {/* MÚSICA */}
        <motion.div

          whileHover={{
            scale: 1.02,
          }}

          onClick={tocarMusica}

          onTouchStart={tocarMusica}

          className="
            relative
            z-10

            mb-10

            bg-[#fff7f2]

            border
            border-[#e8cfcf]

            rounded-2xl

            px-4
            sm:px-6

            py-4

            flex
            items-center

            gap-4

            shadow-sm
            cursor-pointer
          "
        >

          <div className="bg-[#d45c5c]/10 p-3 rounded-full">

            <Music2
              className="text-[#d45c5c]"
              size={20}
            />

          </div>

          <div>

            <p
              className="
                text-[#d45c5c]

                text-[10px]
                sm:text-sm

                uppercase
                tracking-[0.2em]
              "
            >
              trilha sonora
            </p>

            <h3
              className="
                text-[#b94848]

                text-base
                sm:text-xl

                font-cinzel
                italic
              "
            >
              {carta.musica}
            </h3>

            <p
              className="
                text-[#c77b7b]
                italic

                text-xs
                sm:text-sm
              "
            >
              {carta.artista}
            </p>

          </div>

        </motion.div>

        {/* TÍTULO */}
        <h2
          className="
            relative
            z-10

            text-center

            text-4xl
            sm:text-6xl

            text-[#d45c5c]

            italic

            mb-8

            font-cinzel
          "
        >
          {carta.titulo}
        </h2>

        {/* TEXTO */}
        <div
          className="
            relative
            z-10

            text-[#b94848]

            text-[15px]
            sm:text-xl

            leading-loose

            whitespace-pre-line

            bold
            font-cinzel
          "
        >
          {carta.texto}
        </div>

       {/* FRASE FINAL */}
<div className="relative z-10 mt-16">

  <div
    className="
      flex
      items-center
      justify-center

      gap-4

      mb-8
    "
  >

    <div className="h-[1px] w-20 sm:w-40 bg-[#d45c5c]" />

    <p
      className="
        text-[#d45c5c]

        text-xl
        sm:text-2xl
      "
    >
      ✦ ⋆ ☆ ⋆ ✦
    </p>

    <div className="h-[1px] w-20 sm:w-40 bg-[#d45c5c]" />

  </div>

  <p
  className="
    w-full

    text-center

    text-[#bb4f4f]

    text-[13px]
    sm:text-[15px]
    md:text-[17px]

    leading-8
    sm:leading-9

    font-cinzel

    px-2
    sm:px-6

    tracking-[0.05em]

    font-semibold
  "
>
  {carta.frase}
</p>

</div>

{/* BOTÃO */}
<div
  className="
    relative
    z-10

    mt-14

    flex
    justify-center
    sm:justify-end
  "
>

  <button

    onClick={() => {

      window.location.href = "/cartas";

    }}

    className="
      text-[#d45c5c]

      hover:scale-105

      transition

      text-sm
      sm:text-xl

      font-cinzel
      italic
    "
  >
    ← voltar às constelações
  </button>

</div>
      </motion.div>

    </motion.main>
  );
}