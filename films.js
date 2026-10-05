/* Diário do Robson — edite só este arquivo para incluir um filme.
 *
 * Copie um bloco { ... } e preencha:
 *   titulo   nome em português
 *   ano      ano do filme
 *   nota     de 0 a 10, com ponto (7.5). Não use a estrela do Letterboxd.
 *   data     AAAA-MM-DD, dia em que assistiu
 *   genero   um só. Hoje: "Animação" ou "Marvel"
 *   opiniao  o texto original, sem o prefixo "Nota: X/10."
 *   sinopse  duas ou três frases em português, o enredo, sem repetir a opinião
 *   poster   caminho relativo do pôster, ex. "posters/carros.jpg"
 *
 * O site lê este array ao abrir o index.html. Não precisa de servidor.
 */
const FILMES = [
  {
    "titulo": "Vingadores: Ultimato",
    "ano": 2019,
    "ordem": 1,
    "nota": 10,
    "data": "2026-09-29",
    "genero": "Marvel",
    "opiniao": "",
    "sinopse": "Depois do estalo de Thanos, os Vingadores que restaram tentam viver com a perda de metade dos seres do universo. Surge um plano arriscado de viajar no tempo para reunir de novo as Joias do Infinito. O filme acompanha essa última missão e o preço que cada um aceita pagar.",
    "poster": "posters/vingadores-ultimato.jpg"
  },
  {
    "titulo": "Carros",
    "ano": 2006,
    "ordem": 7,
    "nota": 10,
    "data": "2026-07-17",
    "genero": "Animação",
    "opiniao": "É um filme completamente diferente quando você vê ele mais velho, você entende o que filme transmite, ele começa com o protagonista McQueen sendo o carro de corrida mais promissor do momento, em sua primeira temporada fica muito próximo ser campeão da desejada copa Pistão, porém devido a sua própria arrogância e não ouvir seus colegas de equipe ele não troca os pneus e acaba a corrida em um empate triplo, depois disso ele tem que viajar até Califórnia para o desempate e ele acabou de perdendo no caminho e encontrando uma cidade bem \"da roça\" no início ele não gostava de estar ali, e não gostava de ninguém e com o tempo ela convivência ele aprendeu muitas coisas e se tornou uma pessoa melhor, após tudo que aconteceu ele acabou voltando e disputando a corrida, com ajuda de seus novos amigos ele iria ganhar com tranquilidade, porém ele percebeu que tem coisas mais importantes que a vitória, o filme deixa uma lição muito importante e ensina sobre humildade.",
    "sinopse": "Relâmpago McQueen, novato arrogante da Copa Pistão, empata a temporada e precisa correr de novo na Califórnia. No caminho, se perde e fica retido na pequena Radiator Springs, onde não suporta ninguém no começo. A convivência com os moradores muda o que ele entende por vitória.",
    "poster": "posters/carros.jpg"
  },
  {
    "titulo": "Carros 2",
    "ano": 2011,
    "ordem": 1,
    "nota": 7.5,
    "data": "2026-07-19",
    "genero": "Animação",
    "opiniao": "Carros 2 é uma aposta completamente diferente da calmaria que foi o primeiro filme, eles mudam o protagonista colocando Mate para ser o personagem principal do filme, é algo extremamente corajoso,e o filme ensina algumas lições muito importantes como acreditar em si mesmo e que brigas entre amigos acontecem e é importante superar elas,mas o filme saiu muito do que é esperado da franquia, deixou a corrida como segundo plano e também tirou completamente o foi ensinado no primeiro filme, da calmaria e que nem tudo é sobre fama e glória, achei um filme bom, mas perde pontos por falta de continuidade, se fosse um filme isolado minha nota seria 9 pois gostei muito, mas tudo que falei perdeu muitos pontos.",
    "sinopse": "McQueen entra num campeonato mundial e leva Mate como parte da equipe. O reboque é confundido com um espião americano e acaba no meio de uma trama sobre um combustível alternativo. Enquanto as corridas seguem, a amizade dos dois é posta à prova.",
    "poster": "posters/carros-2.jpg"
  },
  {
    "titulo": "Gato de Botas",
    "ano": 2011,
    "ordem": 2,
    "nota": 5,
    "data": "2026-07-25",
    "genero": "Animação",
    "opiniao": "Gato de botas trás a origem de um dos melhores personagens de Shurek, mostra quando ele era novo e seu primeiro amigo, como ganhou suas notas e sua família e também como se tornou um procurado, achei um bom filme, porém um pouco clichê completamente diferente dos filmes do Shrek, a gente vendo o filme já imaginava boa parte dos acontecimentos, achei que faltou ousadia para fazer o filme e poderia ter feito algo bem melhor, com plot mais surpreendente, não algo que foi mais do mesmo. Bem abaixo da minhas expectativas",
    "sinopse": "Procurado pela lei, o Gato de Botas reencontra Humpty Dumpty, amigo de infância, num plano com feijões mágicos e a gansa dos ovos de ouro. No caminho aparecem a gata Kitty Patas Macias e o casal Jack e Jill. A história conta como ele ganhou as botas, a espada e a fama de fora da lei.",
    "poster": "posters/gato-de-botas.jpg"
  },
  {
    "titulo": "Toy Story",
    "ano": 1995,
    "ordem": 1,
    "nota": 9,
    "data": "2026-07-25",
    "genero": "Animação",
    "opiniao": "Toy Story é um clássico que revolucionou o cinema, com a história dos brinquedos que ganham vida e achei incrível como deram personalidades incríveis para cada um deles, desde de um dinossauro com baixa autoestima até um cowboy que era o dono do pedaço, até que viu alguém novo chegar e pensou que perdeu seu lugar no coração do seu dono, e Buzz também é uma baita construção de história, ele que pensava ser um realmente um alienígena até que finalmente entendeu o que realmente era importante, ele nasceu para fazer uma criança feliz, também vemos que apesar do Woody pensar que não faria falta o Andy sentiu a falta dele enquanto estava longe , a forma que desenvolveu o ciúmes para amizade de aprendizado mútuo foi muito bonito, gostei muito do filme",
    "sinopse": "Quando ninguém está olhando, os brinquedos de Andy ganham vida, e o caubói Woody é o líder do quarto. A chegada de Buzz Lightyear, que acredita ser um patrulheiro espacial de verdade, ameaça o lugar de Woody. Os dois se perdem longe de casa e precisam cooperar para voltar antes da mudança da família.",
    "poster": "posters/toy-story.jpg"
  },
  {
    "titulo": "Toy Story 2",
    "ano": 1999,
    "ordem": 11,
    "nota": 10,
    "data": "2026-07-27",
    "genero": "Animação",
    "opiniao": "Toy Story 2 para mim é uma continuação perfeita do que foi o primeiro filme, mostrando um Buzz mais maduro, e mais uma vez mostrando um pouco de insegurança do Woody após ele ter um rasgado, e então ele acaba sendo roubado e conhece quem ele é, quem é o Cowboy Woody e apresenta novos personagens muito bem, dando uma profundidade muito boa para a história deles, e também ensinando uma importante lição que o Woody conseguiu aprender aproveitar o momento, que algum dia as coisas vão mudar, não vão ser mais as mesmas mas ele entendeu que ali ele precisa aproveitar enquanto pode, Buzz mostrou mais maturidade e um ótimo amigo, enquanto Woody foi mais \"Buzz\" esse filme com um ego um pouco maior, foi tudo bem construído uma continuação perfeita.",
    "sinopse": "Woody é roubado por um colecionador que quer vender o conjunto completo do antigo seriado do caubói. No apartamento, ele conhece Jessie, Bala no Alvo e o Mineiro, e descobre o passado daqueles brinquedos. Buzz sai com o resto do grupo para trazê-lo de volta ao Andy.",
    "poster": "posters/toy-story-2.jpg"
  },
  {
    "titulo": "Carros 3",
    "ano": 2017,
    "ordem": 1,
    "nota": 6.5,
    "data": "2026-07-26",
    "genero": "Animação",
    "opiniao": "Carros 3 foi um encerramento diferente da saga do McQueen, após um segundo filme que ele não foi sequer protagonista, esse filme ele já foi destaque absoluto, deixando um pouco de lado os personagens de Radiator Springs e focando muito no McQueen que era alguém absoluto nas copas pistão, porém ele viu que tempo pesou e algo natural na vida de qualquer um, mas ele não queria que acontecesse o mesmo que aconteceu com seu mentor que foi forçado a parar e ele queira um destino diferente e começou a treinar para dar a volta por cima e conheceu a treinadora Cruz Ramires, e ele entende que ela é como maioria das pessoas sonhou com algo e não conseguiu conquistar, juntos eles vão até o treinador do treinador dele e aprende algumas coisas que ele não sabia e o Ramires também, mas no final ele não conseguiu superar ela, mas lá ele aprendeu que existe outras coisas além de apenas correr, mas achei um desenvolvimento meio forçado, e poderia ter sido bem melhor, acho que poderia ter desenvolvimento de outra forma essa passagem de bastão",
    "sinopse": "Já veterano, McQueen enfrenta uma geração nova de corredores e sofre um acidente grave numa corrida. Para tentar voltar, treina com Cruz Ramirez e vai atrás do método do antigo mentor, Doc Hudson. O filme trata do desgaste do tempo e do que existe além de apenas ser o mais rápido.",
    "poster": "posters/carros-3.jpg"
  },
  {
    "titulo": "Toy Story 3",
    "ano": 2010,
    "ordem": 4,
    "nota": 10,
    "data": "2026-07-28",
    "genero": "Animação",
    "opiniao": "Toy Story 3 é definitivamente uma obra de arte em forma de animação, não tenho muitas palavras para descrever o quão bom o \"final\" perfeito, história muito bem fechada terminando de forma incrível, foi uma grande mistura de sentimentos em todos os momentos, desde o começo com o Andy indo pra faculdade e eles jogados no caixa, e todo conflito Interno o Woody sobre ficar com seus amigos ou com o Andy e o final Andy fazendo a melhor escolha possível, foi realmente um roteiro perfeito terminado essa saga com chave de ouro, cada detalhe muito bem, um ótimo fechamento e mostrou que Andy ainda se importa com cada um deles.",
    "sinopse": "Andy está de partida para a faculdade, e os brinquedos temem ser guardados ou doados. Por um engano, vão parar na creche Sunnyside, onde o urso Lotso impõe regras bem diferentes do quarto de criança. Woody tenta reunir os amigos e achar um lugar para eles nessa nova fase.",
    "poster": "posters/toy-story-3.jpg"
  },
  {
    "titulo": "Toy Story 4",
    "ano": 2019,
    "ordem": 1,
    "nota": 5,
    "data": "2026-07-29",
    "genero": "Animação",
    "opiniao": "Toy Story 4 é um filme que definitivamente não deveria existir, é um pouco pesado de falar isso, mas é quase um consenso pois o terceiro filme teve o final perto, e esse filme destrói tudo aquilo que foi construído nos 3 primeiros filmes, foi um erro narrativo , mas analisando se fosse um filme separado é um bom filme, mas pesa muito os erros de continuidade da história, foi bom ver novamente a Bet, mas o próprio Filme deixou de lado os outros brinquedos até o garfinho estava lá e não foi bem trabalhado , funciona como filme isolado, mas não funciona como continuação de Toy Story",
    "sinopse": "Woody agora é brinquedo de Bonnie, que cria o Garfinho a partir de um garfo de verdade. Numa viagem em família, o grupo reencontra Betty, que passou a viver por conta própria. Woody se divide entre cuidar do brinquedo novo e decidir que papel ainda quer ter.",
    "poster": "posters/toy-story-4.jpg"
  },
  {
    "titulo": "Homem-Aranha: Um Novo Dia",
    "ano": 2026,
    "ordem": 2,
    "nota": 10,
    "data": "2026-07-30",
    "genero": "Marvel",
    "opiniao": "Homem Aranha um novo dia é a perfeita continuação de sem volta pra casa, mostrando todo peso de tudo aquilo que aconteceu, o filme mais sério entre os filmes de homem aranha do UCM, e é mais sério com um peso maior em cada ação e os outros filmes que tiveram muito mais um Peter Parker esse filme foi muito mais homem aranha, roteiro atuações história perfeita, ótimo filme",
    "sinopse": "A sinopse oficial mostra Peter Parker atuando como Homem-Aranha em tempo integral num mundo que não se lembra dele, enquanto a pressão de ver os antigos amigos seguirem em frente provoca uma mudança que ele talvez não controle. Essa transformação é apresentada como a possível forma de deter uma ameaça à cidade e a quem ele ama: um vilão poderoso que ninguém consegue ver. O restante do enredo não está detalhado numa sinopse pública completa, então fica só nisso.",
    "poster": "posters/homem-aranha-um-novo-dia.jpg"
  },
  {
    "titulo": "Capitão América: O Primeiro Vingador",
    "ano": 2011,
    "ordem": 3,
    "nota": 8,
    "data": "2026-07-31",
    "genero": "Marvel",
    "opiniao": "O filme de capitão América é uma baita introdução de um dos maiores símbolos de heroísmo da Marvel, Steve é um cara que sonha em conseguir entrar no exército para defender o seu país, ele acredita que não tem direito de ficar parado enquanto todos lutam na guerra, mas tem um físico muito fraco o que faz com que quase ninguém o aceite no exército, inclusive vê seu melhor amigo ser escolhido, depois Dr. Abraham Erskine que era o responsável por um dos maiores projetos do exército criar vários super soldados, e pelo que o Steve é ele foi escolhido, o filme desenvolve muito bem ele deixando de ser um ator praticamente e se tornando um herói,.",
    "sinopse": "Na Segunda Guerra Mundial, Steve Rogers quer servir, mas é recusado por ser franzino demais. O doutor Abraham Erskine o escolhe para o soro do supersoldado, e Steve vira o Capitão América. Ele deixa o papel de garoto-propaganda para enfrentar a Hidra de Johann Schmidt, o Caveira Vermelha.",
    "poster": "posters/capitao-america-o-primeiro-vingador.jpg"
  },
  {
    "titulo": "Homem de Ferro",
    "ano": 2008,
    "nota": 9,
    "data": "2026-08-01",
    "genero": "Marvel",
    "opiniao": "Homem de ferro é o início perfeito do Universo Cinematográfico da Marvel, a aposta feita pela Marvel em Robert de Robert Downey Jr. Foi uma grande aposta de um cara que vivia em reabilitação e foi um dos maiores acertos, ator é até hoje o rosto da Marvel. Mostrando como se tornar um vendedor de armas afetou todo o mundo, e quase foi morto por uma arma que ele mesmo criou, o romance dele com Peper começa a desenvolver e também a amizade com Roads, filme é muito bem desenvolvido porém um final clique, mas para filme de 2008 foi incrível.",
    "sinopse": "Tony Stark, fabricante de armas, é sequestrado e ferido por um grupo que usa os próprios mísseis dele. No cativeiro, monta uma armadura rudimentar para escapar e, de volta, decide mudar o que a Stark Industries faz. O sócio Obadiah Stane passa a querer essa tecnologia para si.",
    "poster": "posters/homem-de-ferro.jpg"
  },
  {
    "titulo": "Valente",
    "ano": 2012,
    "ordem": 1,
    "nota": 8,
    "data": "2026-08-01",
    "genero": "Animação",
    "opiniao": "Valente é uma animação surpreendente, mostra um pouco sobre a era medieval aonde Merida não é uma princesa como as outras, ele gosta de usar arco e flecha, tem os seus cabelos ruivos um pouco mais desarrumados e tem uma personalidade muito forte, isso faz com que ela rejeite a ideia completamente de se casar quando sua mãe fala que ela teria que se casar ela se revolta e faz um desafio de arco e flecha e vence todos seus pretendes, depois foge encontra uma bruxa e pede para sua mãe mudar, ela virando um urso e elas fogem e criam um laço no qual não tiveram antes, acho uma interação muito boa, mas acho o filme curto acho que elas poderiam ter passado mais algumas coisas juntas, mas história muito boa.",
    "sinopse": "Na Escócia medieval, a princesa Merida recusa o casamento arranjado pela mãe, a rainha Elinor, e ela mesma vence a disputa de arco e flecha. Depois de fugir, pede a uma bruxa que mude a mãe, e o feitiço transforma Elinor num urso. As duas precisam consertar a relação e desfazer a magia a tempo.",
    "poster": "posters/valente.jpg"
  },
  {
    "titulo": "Homem de Ferro 2",
    "ano": 2010,
    "ordem": 3,
    "nota": 9,
    "data": "2026-08-04",
    "genero": "Marvel",
    "opiniao": "Homem de Ferro 2 é assim continuação perfeita do que foi o primeiro filme, Robert Downey Jr faz mais uma atuação impecável mostrando mais uma vez pq é o rosto da Marvel, o filme ainda ainda mostra muito a relação de Stark com seu pai que vai ser muito importante em futuros filmes da Marvel, e tem temos ali surgindo o Máquina de combate, filme tem uma dinâmica muito boa, as interações com Shild, Nick Fury, e a introdução da Viúva Negra são muito boas",
    "sinopse": "Tony Stark recusa entregar a armadura ao governo enquanto o reator no peito envenena o sangue dele. Ivan Vanko, filho de um antigo colega de Howard Stark, constrói um chicote de energia para se vingar da família. No meio da crise aparecem James Rhodes como Máquina de Combate e a agente Natasha Romanoff.",
    "poster": "posters/homem-de-ferro-2.jpg"
  },
  {
    "titulo": "O Incrível Hulk",
    "ano": 2008,
    "ordem": 3,
    "nota": 5,
    "data": "2026-08-15",
    "genero": "Marvel",
    "opiniao": "O Incrível Hulk não é exatamente um filme de origem, parede uma continuação um pouco perdida, acredito que devido a grande quantidade de filmes anteriores do Hulk não quiseram deixar repetitivo, mas achei que ficou muito vago, o filme em si e muito sobre tentarem capturar o Hulk, aí ele fica bravo e bate em todo mundo e vai embora, Emil Blonsky como abominável acho que poderia desenvolver algo melhor para vilão, acredito que faltou a motivação melhor para vilão, já o General Ross achei bom vilão um cara que está por aí é vai dar muitos problemas ainda, acho que o grande ponto do filme é realmente mostrar que existe uma parte boa no Hulk ,",
    "sinopse": "Bruce Banner vive foragido, tentando conter as transformações no Hulk e encontrar uma cura. O general Thaddeus Ross organiza a caçada, e o militar Emil Blonsky se submete a um tratamento para poder enfrentá-lo. A perseguição sai do Brasil e termina num confronto em que Blonsky se torna o Abominável.",
    "poster": "posters/o-incrivel-hulk.jpg"
  },
  {
    "titulo": "Thor",
    "ano": 2011,
    "ordem": 4,
    "nota": 8,
    "data": "2026-08-16",
    "genero": "Marvel",
    "opiniao": "Thor é a introdução de um ar mais mitológico no universo com os deuses, os 9 reinos, e junto dois pilares do universo Marvel, Loki e Thor. Thor desde novo foi criado para ser o Deus do trovão sucessor do trono de Asgard, enquanto Loki sempre soube que era diferente, mas nunca soube o motivo, o filme todo o começo é desenvolvido pelas tramas do Loki trazendo os gigantes de gelo para Asgard, conhecendo seu irmão sabia que ele iria atrás deles e fez com que Thor fosse banido, e acho incrível o conceito de ser digno de levantar o martelo, torna o Thor um personagem muito especial, e durante o filme juntos da Jane Foster e os outros cientistas ele aprendeu tudo que seu pai desejou, sobre amor, lealdade e também o que é mais importante, e em um momento aonde ele poderia morrer ele finalmente se torna digno, e num final sacrificando a chance de ver seu amor ele impede os planos de Loki e ganha respeito de seu pai",
    "sinopse": "Herdeiro de Asgard, Thor provoca os gigantes de gelo e é banido por Odin para a Terra, sem poderes e sem o martelo. Enquanto aprende humildade com a cientista Jane Foster, Loki move as peças pelo trono. Só quem for digno consegue erguer Mjolnir.",
    "poster": "posters/thor.jpg"
  },
  {
    "titulo": "Os Vingadores",
    "ano": 2012,
    "ordem": 5,
    "nota": 10,
    "data": "2026-08-17",
    "genero": "Marvel",
    "opiniao": "os vingadores conclui perfeitamente a fase 1 do universo da Marvel juntando todos os personagens anteriormentemente apresentados nos filmes anteriores, e no começo nada da certo, Loki volta como vilão principal, mas deixam claro que tem algo ali por trás, que só é revelado na cena pós créditos, Loki deixar todos muito bravos com ele, e o estopim foi morte do agente Colson que já estava aí desde o primeiro filme da Marvel, foi o gatilho para unir todos eles, e quando juntou a força de todos esses super humanos, Deuses, cara normal super inteligente e dois espiões normais, todos travaram de forma épica a batalha de nova York é assim se tornaram os vingadores.",
    "sinopse": "Loki chega à Terra com o cetro e um plano de abrir um portal para um exército. Nick Fury junta Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro, heróis que ainda não confiam uns nos outros. A invasão em Nova York força o grupo a lutar como equipe.",
    "poster": "posters/os-vingadores.jpg"
  },
  {
    "titulo": "Homem de Ferro 3",
    "ano": 2013,
    "ordem": 2,
    "nota": 7.5,
    "data": "2026-08-22",
    "genero": "Marvel",
    "opiniao": "O filme mostra o peso da sequência do filme dos vingadores de como um cara normal que enfrentou deuses e aliens na sua frente reagiu, o filme aprofundou muito como Tony Stark queria colocar uma armadura em todos a sua volta, tema é importante na sequência da história, o vilão é horrível, mas a história de desenvolvimento é muito boa, as cenas icônicas e o desenvolvimento da principal cara do universo, achei interessante a introdução do mlk, e também ver o Tony se virar sem armadura, filme tem muitos pontos positivos e alguns negativos, mas no geral é bom.",
    "sinopse": "Abalado pela batalha de Nova York, Tony Stark não dorme e multiplica as armaduras para se sentir seguro. Ataques atribuídos ao Mandarim chegam até a casa dele e o deixam longe do arsenal. Longe do arsenal, ele tenta descobrir quem está por trás da tecnologia Extremis.",
    "poster": "posters/homem-de-ferro-3.jpg"
  },
  {
    "titulo": "Thor: O Mundo Sombrio",
    "ano": 2013,
    "nota": 6,
    "data": "2026-08-23",
    "genero": "Marvel",
    "opiniao": "Thor 2 tem uma dinâmica muito importante pro desenvolvimento do universo da Marvel, com o introdução do Éter, a morte da Frigga e o desenvolvimento de Thor foram muito importante para o futuro do UCm, mais um grande destaque para atuação do ator do Loki que brilhou, mas o vilão foi completamente sem sal, Odin do nada ficou burro, algumas coisas nesse filme me incomodaram muito mas tem seus pontos positivos",
    "sinopse": "Jane Foster é contaminada pelo Éter, uma arma antiga que os elfos negros querem de volta. Malekith pretende usar essa força quando os mundos se alinharem, e Thor busca a ajuda de Loki, preso em Asgard. A história atravessa os reinos enquanto Asgard sofre um ataque direto.",
    "poster": "posters/thor-o-mundo-sombrio.jpg"
  },
  {
    "titulo": "Capitão América: O Soldado Invernal",
    "ano": 2014,
    "ordem": 9,
    "nota": 10,
    "data": "2026-08-24",
    "genero": "Marvel",
    "opiniao": "Capitão América 2 é um dos filmes mais incríveis de heróis que existem, um filme bem mais pés no chão, lutas corpo a corpo, espionagem e um lado sombrio da organização que deveria proteger o mundo está completamente corrompida, e o capitão América fica no meio de tudo isso, e além disso a introdução de Sam Wilson como Falcão, E mais uma baita atuação do Viúva Negra, e todo peso emocional da volta de Buch faz esse filme ser incrível.",
    "sinopse": "Steve Rogers trabalha com a S.H.I.E.L.D. e desconfia de um projeto capaz de vigiar e eliminar ameaças pelo mundo. Um assassino chamado Soldado Invernal entra na história, e Cap, Natasha e Sam Wilson descobrem a Hydra infiltrada na agência. O filme mistura perseguição, espionagem e o passado de Bucky Barnes.",
    "poster": "posters/capitao-america-o-soldado-invernal.jpg"
  },
  {
    "titulo": "Guardiões da Galáxia",
    "ano": 2014,
    "ordem": 8,
    "nota": 10,
    "data": "2026-08-28",
    "genero": "Marvel",
    "opiniao": "Guardiões da galáxia é uma obra prima, em história, desenvolvimento, universo, vilão tudo muito bom , escrita Incrível e cada personagem com sua história desenvolvida e juntos criaram algo mais, a cena final de todos juntos com as jóias do infinito Incrível, sinergia incrível de todos, filme perfeito.",
    "sinopse": "Peter Quill, levado da Terra ainda criança, rouba um orbe que Ronan também procura. Para não ser capturado, se une a Gamora, Drax, Rocket e Groot, um bando de foras da lei sem nada em comum. O objeto esconde uma Joia do Infinito, e o grupo acaba tendo de impedir que Ronan a use.",
    "poster": "posters/guardioes-da-galaxia.jpg"
  },
  {
    "titulo": "Guardiões da Galáxia Vol. 2",
    "ano": 2017,
    "ordem": 6,
    "nota": 10,
    "data": "2026-08-29",
    "genero": "Marvel",
    "opiniao": "Guardiões da galáxia 2 é a continuação perfeita do primeiro filme, e dessa vez com um pouco mais de profundidade em cada personagem e um vilão mais carismático, a apresentação das jóias do infinito, é a primeira grande aparição de Thanos de UCm, é um baita filme importantíssimo para o futuro.",
    "sinopse": "Depois de um trabalho que dá errado, os Guardiões fogem dos Soberanos e cruzam com Ego, que se apresenta como pai de Peter. O reencontro divide a equipe enquanto velhas mágoas, inclusive entre Gamora e Nebulosa, vêm à tona. A origem de Quill e o lugar de Yondu nessa história passam a importar tanto quanto a fuga.",
    "poster": "posters/guardioes-da-galaxia-vol-2.jpg"
  },
  {
    "titulo": "Vingadores: Era de Ultron",
    "ano": 2015,
    "ordem": 2,
    "nota": 9,
    "data": "2026-08-29",
    "genero": "Marvel",
    "opiniao": "Vingadores a era de Ultron é muito melhor que eu lembrava, o filme toca muito na parte emocional e o início de conflitos individuais nos vingadores e desentendimentos, pesados, é um filme com muitas questões, escolhas difíceis e consequências muito pesadas, o que aconteceu em Socovia terá consequências por muito tempo no universo e um filme completo e bem desenvolvido em diversas formas.",
    "sinopse": "Depois de recuperar o cetro de Loki, Tony Stark e Bruce Banner tentam criar uma inteligência capaz de defender a Terra. O programa ganha consciência, se chama Ultron e conclui que a humanidade é a ameaça. Os Vingadores enfrentam o robô, conhecem os gêmeos Wanda e Pietro e veem Sokovia pagar o preço do confronto.",
    "poster": "posters/vingadores-era-de-ultron.jpg"
  },
  {
    "titulo": "Homem-Formiga",
    "ano": 2015,
    "ordem": 2,
    "nota": 6.5,
    "data": "2026-09-03",
    "genero": "Marvel",
    "opiniao": "Homem Formiga é o filme mais ok, entre vários absurdos dessa fase do universo, filme mais pés no chão introduzido um personagem vital pro prós universo Marvel, Scott Lang definitivamente não é um exemplo de pessoa a se seguir, mas tem um bom filme, história ok, nada muito bom, mas nem muito ruim, filme ok",
    "sinopse": "Scott Lang sai da prisão e tenta se reaproximar da filha quando Hank Pym o procura para um roubo. A missão é usar a roupa que encolhe o corpo e impedir que Darren Cross venda a mesma tecnologia como arma. Scott entra no mundo das partículas Pym sem ser exatamente um herói de carteirinha.",
    "poster": "posters/homem-formiga.jpg"
  },
  {
    "titulo": "Capitão América: Guerra Civil",
    "ano": 2016,
    "ordem": 12,
    "nota": 10,
    "data": "2026-09-04",
    "genero": "Marvel",
    "opiniao": "capitao America guerra Civil é um filme dos vingadores basicamente, roteiro do filme é perfeito com reviravoltas e desentendimentos, pontos de vistas diferentes que se chocaram, os acontecimentos de vingadores 1 e 2 são muito importantes no que aconteceu aqui, e acho que tiraram Thor e o Hulk pq saberemos em qual lado eles ficariam e não teríamos equilíbrio, as introduções do pantera Negra e Homem Aranha foram muito boas filme muito bom.",
    "sinopse": "Um estrago com vítimas civis leva os governos a exigirem os Acordos de Sokovia, que colocariam os Vingadores sob controle. Tony Stark aceita a fiscalização; Steve Rogers recusa, ainda mais quando Bucky é acusado de um atentado. A briga reparte o grupo e traz T'Challa e o adolescente Peter Parker para lados opostos.",
    "poster": "posters/capitao-america-guerra-civil.jpg"
  },
  {
    "titulo": "Pantera Negra",
    "ano": 2018,
    "ordem": 10,
    "nota": 10,
    "data": "2026-09-05",
    "genero": "Marvel",
    "opiniao": "o filme tem uma carga psicológica muito grande, tem muito sobre a cultura, preconceito e injustiça que nos negros sofremos, e o vilão é incrível cara, um cara que quer defender os negros e as injustiças que sofremos, uma pena que ele quer lugar da forma errada, é um dos melhores filmes solos de herói apresentando umas cultura incrível e muito bem desenvolvida",
    "sinopse": "Com a morte do pai, T'Challa volta a Wakanda para ser rei e vestir o manto da Pantera Negra. O desafio vem de Erik Killmonger, criado fora do reino, que quer abrir as reservas de vibranium e armar negros oprimidos no resto do mundo. O conflito opõe duas ideias sobre o que Wakanda deve ao mundo.",
    "poster": "posters/pantera-negra.jpg"
  },
  {
    "titulo": "Homem-Aranha: De Volta ao Lar",
    "ano": 2017,
    "ordem": 2,
    "nota": 8,
    "data": "2026-09-05",
    "genero": "Marvel",
    "opiniao": "Homem aranha de volta é o primeiro filme de uma nova saga do cabeça de teia, seus filmes são muito críticados pela dependência dele Ao Tony Stark que muitas vezes ele mostra ele é assim, mas o filme desenvolve o herói dentro dele, e no fim ganha o respeito de todos e se torna naquele momento mais maduro do que a gente espera de um muleque de 15 anos.",
    "sinopse": "Depois de ajudar Tony Stark, Peter Parker volta à escola e quer provar que já pode ser um Vingador. Entre provas e a vida secreta, ele investiga Adrian Toomes, o Abutre, que vende armas feitas com sucata de tecnologia alienígena. Tony tenta limitar o rapaz, e Peter acaba tendo de resolver o caso com bem menos apoio do que imaginava.",
    "poster": "posters/homem-aranha-de-volta-ao-lar.jpg"
  },
  {
    "titulo": "Doutor Estranho",
    "ano": 2016,
    "nota": 8.5,
    "data": "2026-09-05",
    "genero": "Marvel",
    "opiniao": "Doutor Estranhho mostra o quando Strange é um doutor um ótimo médico mas isso deixou muito arrogante, quando ele perde tudo e ele se desespera e busca de todas as formas de curar, e acaba conhecendo as artes místicas, dps tanto negar ele vê o quanto tem talento para aquilo, e no meio daquela situação veco quanto tem talento e acaba se tornando o sucessor da Anciã.",
    "sinopse": "Stephen Strange é um neurocirurgião famoso e arrogante até um acidente destruir a precisão das mãos. Em busca de cura, chega a Kamar-Taj e passa a estudar as artes místicas com a Anciã. Quando o feiticeiro Kaecilius ameaça entregar a Terra a Dormammu, Strange precisa usar esse dom para proteger o mundo, não só a si mesmo.",
    "poster": "posters/doutor-estranho.jpg"
  },
  {
    "titulo": "Vingadores: Guerra Infinita",
    "ano": 2018,
    "ordem": 3,
    "nota": 10,
    "data": "2026-09-06",
    "genero": "Marvel",
    "opiniao": "É o início da conclusão da saga do infinito do universo Marvel, e pra mim um dos melhores filmes que existem , o devolvendo do vilão, cada cena, cada momento é tudo pensado até chegar nesse momento, o ápice dos filmes de herói, o melhor filme dos vingadores, Thanos como o grande protagonista de algo que vem sendo criado a 10 anos, o filme é a perfeita junção de todo universo",
    "sinopse": "Thanos percorre o universo em busca das seis Joias do Infinito, com o plano de apagar metade da vida. Os Vingadores, ainda divididos, cruzam o caminho dos Guardiões da Galáxia e de Wakanda para tentar detê-lo. A caçada se espalha da Terra a Titã, e cada joia cobrada muda o tamanho da luta.",
    "poster": "posters/vingadores-guerra-infinita.jpg"
  },
  {
    "titulo": "Homem-Formiga e a Vespa",
    "ano": 2018,
    "nota": 7,
    "data": "2026-09-08",
    "genero": "Marvel",
    "opiniao": "",
    "sinopse": "Scott Lang sai do regime domiciliar para ajudar Hank Pym e Hope van Dyne a resgatar Janet do reino quântico. No caminho, eles cruzam com a Ava Starr, que atravessa a matéria e quer a mesma tecnologia para sobreviver.",
    "poster": "posters/homem-formiga-e-a-vespa.jpg"
  },
  {
    "titulo": "Thor: Ragnarok",
    "ano": 2017,
    "nota": 9,
    "data": "2026-09-12",
    "genero": "Marvel",
    "opiniao": "",
    "sinopse": "Thor descobre que Hela, sua irmã, voltou para tomar Asgard e acaba preso no planeta Sakaar. Lá ele reencontra Hulk e precisa reunir uma equipe para impedir o Ragnarok.",
    "poster": "posters/thor-ragnarok.jpg"
  },
  {
    "titulo": "Capitã Marvel",
    "ano": 2019,
    "nota": 7,
    "data": "2026-09-18",
    "genero": "Marvel",
    "opiniao": "",
    "sinopse": "Carol Danvers cai na Terra dos anos 1990 sem lembrar quem era. Enquanto a guerra entre Kree e Skrulls chega ao planeta, ela descobre a origem dos próprios poderes.",
    "poster": "posters/capita-marvel.jpg"
  },
  {
    "titulo": "Pokémon 7: Alma Gêmea",
    "ano": 2004,
    "nota": 7.5,
    "data": "2026-09-19",
    "genero": "Animação",
    "opiniao": "",
    "sinopse": "Um Deoxys vindo do espaço chega à cidade e um garoto perde a memória depois de cruzar com ele. Ash tenta ajudar os dois enquanto Rayquaza entra no conflito.",
    "poster": "posters/pokemon-7-alma-gemea.jpg"
  },
  {
    "titulo": "Pokémon 8: Lucario e o Mistério de Mew",
    "ano": 2005,
    "nota": 9,
    "data": "2026-10-04",
    "genero": "Animação",
    "opiniao": "",
    "sinopse": "Ash e os amigos conhecem Lucario, um Pokémon que serviu a um herói antigo e acredita que Mew ainda está por perto. Juntos, eles entram na Árvore do Começo, onde o passado de Lucario e o mistério de Mew se cruzam.",
    "poster": "posters/pokemon-8-lucario.jpg"
  },
  {
    "titulo": "Homem-Aranha",
    "ano": 2002,
    "nota": 8,
    "data": "2026-10-04",
    "genero": "Outros",
    "opiniao": "",
    "sinopse": "Peter Parker, um estudante tímido, é picado por uma aranha geneticamente alterada e ganha força, agilidade e um sentido de perigo. Depois de uma perda na família, ele decide usar os poderes para proteger Nova York, e acaba no caminho do Duende Verde.",
    "poster": "posters/homem-aranha-2002.jpg"
  },,
  {
    "titulo": "Toy Story 5",
    "ano": 2026,
    "nota": 8,
    "data": "2026-10-03",
    "genero": "Animação",
    "opiniao": "",
    "sinopse": "Dois anos depois de Toy Story 4, Jessie, Woody, Buzz e os outros brinquedos lidam com a Lilypad, um tablet que virou o brinquedo preferido da Bonnie.",
    "poster": "posters/toy-story-5.jpg"
  },
];
