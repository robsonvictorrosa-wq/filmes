/* Diário do Robson — edite só este arquivo para incluir um filme.
 *
 * Copie um bloco { ... } e preencha:
 *   titulo   nome em português
 *   ano      ano do filme
 *   nota     de 0 a 10, com ponto (7.5). Não use a estrela do Letterboxd.
 *   data     AAAA-MM-DD, dia em que assistiu
 *   genero   um só. Hoje: "Animação" ou "Marvel"
 *   opiniao  o texto original, sem o prefixo "Nota: X/10."
 *
 * O site lê este array ao abrir o index.html. Não precisa de servidor.
 */
const FILMES = [
  {
    "titulo": "Carros",
    "ano": 2006,
    "nota": 10,
    "data": "2026-07-17",
    "genero": "Animação",
    "opiniao": "É um filme completamente diferente quando você vê ele mais velho, você entende o que filme transmite, ele começa com o protagonista McQueen sendo o carro de corrida mais promissor do momento, em sua primeira temporada fica muito próximo ser campeão da desejada copa Pistão, porém devido a sua própria arrogância e não ouvir seus colegas de equipe ele não troca os pneus e acaba a corrida em um empate triplo, depois disso ele tem que viajar até Califórnia para o desempate e ele acabou de perdendo no caminho e encontrando uma cidade bem \"da roça\" no início ele não gostava de estar ali, e não gostava de ninguém e com o tempo ela convivência ele aprendeu muitas coisas e se tornou uma pessoa melhor, após tudo que aconteceu ele acabou voltando e disputando a corrida, com ajuda de seus novos amigos ele iria ganhar com tranquilidade, porém ele percebeu que tem coisas mais importantes que a vitória, o filme deixa uma lição muito importante e ensina sobre humildade."
  },
  {
    "titulo": "Carros 2",
    "ano": 2011,
    "nota": 7.5,
    "data": "2026-07-19",
    "genero": "Animação",
    "opiniao": "Carros 2 é uma aposta completamente diferente da calmaria que foi o primeiro filme, eles mudam o protagonista colocando Mate para ser o personagem principal do filme, é algo extremamente corajoso,e o filme ensina algumas lições muito importantes como acreditar em si mesmo e que brigas entre amigos acontecem e é importante superar elas,mas o filme saiu muito do que é esperado da franquia, deixou a corrida como segundo plano e também tirou completamente o foi ensinado no primeiro filme, da calmaria e que nem tudo é sobre fama e glória, achei um filme bom, mas perde pontos por falta de continuidade, se fosse um filme isolado minha nota seria 9 pois gostei muito, mas tudo que falei perdeu muitos pontos."
  },
  {
    "titulo": "Gato de Botas",
    "ano": 2011,
    "nota": 5,
    "data": "2026-07-25",
    "genero": "Animação",
    "opiniao": "Gato de botas trás a origem de um dos melhores personagens de Shurek, mostra quando ele era novo e seu primeiro amigo, como ganhou suas notas e sua família e também como se tornou um procurado, achei um bom filme, porém um pouco clichê completamente diferente dos filmes do Shrek, a gente vendo o filme já imaginava boa parte dos acontecimentos, achei que faltou ousadia para fazer o filme e poderia ter feito algo bem melhor, com plot mais surpreendente, não algo que foi mais do mesmo. Bem abaixo da minhas expectativas"
  },
  {
    "titulo": "Toy Story",
    "ano": 1995,
    "nota": 9,
    "data": "2026-07-25",
    "genero": "Animação",
    "opiniao": "Toy Story é um clássico que revolucionou o cinema, com a história dos brinquedos que ganham vida e achei incrível como deram personalidades incríveis para cada um deles, desde de um dinossauro com baixa autoestima até um cowboy que era o dono do pedaço, até que viu alguém novo chegar e pensou que perdeu seu lugar no coração do seu dono, e Buzz também é uma baita construção de história, ele que pensava ser um realmente um alienígena até que finalmente entendeu o que realmente era importante, ele nasceu para fazer uma criança feliz, também vemos que apesar do Woody pensar que não faria falta o Andy sentiu a falta dele enquanto estava longe , a forma que desenvolveu o ciúmes para amizade de aprendizado mútuo foi muito bonito, gostei muito do filme"
  },
  {
    "titulo": "Toy Story 2",
    "ano": 1999,
    "nota": 10,
    "data": "2026-07-27",
    "genero": "Animação",
    "opiniao": "Toy Story 2 para mim é uma continuação perfeita do que foi o primeiro filme, mostrando um Buzz mais maduro, e mais uma vez mostrando um pouco de insegurança do Woody após ele ter um rasgado, e então ele acaba sendo roubado e conhece quem ele é, quem é o Cowboy Woody e apresenta novos personagens muito bem, dando uma profundidade muito boa para a história deles, e também ensinando uma importante lição que o Woody conseguiu aprender aproveitar o momento, que algum dia as coisas vão mudar, não vão ser mais as mesmas mas ele entendeu que ali ele precisa aproveitar enquanto pode, Buzz mostrou mais maturidade e um ótimo amigo, enquanto Woody foi mais \"Buzz\" esse filme com um ego um pouco maior, foi tudo bem construído uma continuação perfeita."
  },
  {
    "titulo": "Carros 3",
    "ano": 2017,
    "nota": 6.5,
    "data": "2026-07-26",
    "genero": "Animação",
    "opiniao": "Carros 3 foi um encerramento diferente da saga do McQueen, após um segundo filme que ele não foi sequer protagonista, esse filme ele já foi destaque absoluto, deixando um pouco de lado os personagens de Radiator Springs e focando muito no McQueen que era alguém absoluto nas copas pistão, porém ele viu que tempo pesou e algo natural na vida de qualquer um, mas ele não queria que acontecesse o mesmo que aconteceu com seu mentor que foi forçado a parar e ele queira um destino diferente e começou a treinar para dar a volta por cima e conheceu a treinadora Cruz Ramires, e ele entende que ela é como maioria das pessoas sonhou com algo e não conseguiu conquistar, juntos eles vão até o treinador do treinador dele e aprende algumas coisas que ele não sabia e o Ramires também, mas no final ele não conseguiu superar ela, mas lá ele aprendeu que existe outras coisas além de apenas correr, mas achei um desenvolvimento meio forçado, e poderia ter sido bem melhor, acho que poderia ter desenvolvimento de outra forma essa passagem de bastão"
  },
  {
    "titulo": "Toy Story 3",
    "ano": 2010,
    "nota": 10,
    "data": "2026-09-28",
    "genero": "Animação",
    "opiniao": "Toy Story 3 é definitivamente uma obra de arte em forma de animação, não tenho muitas palavras para descrever o quão bom o \"final\" perfeito, história muito bem fechada terminando de forma incrível, foi uma grande mistura de sentimentos em todos os momentos, desde o começo com o Andy indo pra faculdade e eles jogados no caixa, e todo conflito Interno o Woody sobre ficar com seus amigos ou com o Andy e o final Andy fazendo a melhor escolha possível, foi realmente um roteiro perfeito terminado essa saga com chave de ouro, cada detalhe muito bem, um ótimo fechamento e mostrou que Andy ainda se importa com cada um deles."
  },
  {
    "titulo": "Toy Story 4",
    "ano": 2019,
    "nota": 5,
    "data": "2026-07-29",
    "genero": "Animação",
    "opiniao": "Toy Story 4 é um filme que definitivamente não deveria existir, é um pouco pesado de falar isso, mas é quase um consenso pois o terceiro filme teve o final perto, e esse filme destrói tudo aquilo que foi construído nos 3 primeiros filmes, foi um erro narrativo , mas analisando se fosse um filme separado é um bom filme, mas pesa muito os erros de continuidade da história, foi bom ver novamente a Bet, mas o próprio Filme deixou de lado os outros brinquedos até o garfinho estava lá e não foi bem trabalhado , funciona como filme isolado, mas não funciona como continuação de Toy Story"
  },
  {
    "titulo": "Homem-Aranha: Um Novo Dia",
    "ano": 2026,
    "nota": 10,
    "data": "2026-07-30",
    "genero": "Marvel",
    "opiniao": "Homem Aranha um novo dia é a perfeita continuação de sem volta pra casa, mostrando todo peso de tudo aquilo que aconteceu, o filme mais sério entre os filmes de homem aranha do UCM, e é mais sério com um peso maior em cada ação e os outros filmes que tiveram muito mais um Peter Parker esse filme foi muito mais homem aranha, roteiro atuações história perfeita, ótimo filme"
  },
  {
    "titulo": "Capitão América: O Primeiro Vingador",
    "ano": 2011,
    "nota": 8,
    "data": "2026-07-31",
    "genero": "Marvel",
    "opiniao": "O filme de capitão América é uma baita introdução de um dos maiores símbolos de heroísmo da Marvel, Steve é um cara que sonha em conseguir entrar no exército para defender o seu país, ele acredita que não tem direito de ficar parado enquanto todos lutam na guerra, mas tem um físico muito fraco o que faz com que quase ninguém o aceite no exército, inclusive vê seu melhor amigo ser escolhido, depois Dr. Abraham Erskine que era o responsável por um dos maiores projetos do exército criar vários super soldados, e pelo que o Steve é ele foi escolhido, o filme desenvolve muito bem ele deixando de ser um ator praticamente e se tornando um herói,."
  },
  {
    "titulo": "Homem de Ferro",
    "ano": 2008,
    "nota": 9,
    "data": "2026-08-01",
    "genero": "Marvel",
    "opiniao": "Homem de ferro é o início perfeito do Universo Cinematográfico da Marvel, a aposta feita pela Marvel em Robert de Robert Downey Jr. Foi uma grande aposta de um cara que vivia em reabilitação e foi um dos maiores acertos, ator é até hoje o rosto da Marvel. Mostrando como se tornar um vendedor de armas afetou todo o mundo, e quase foi morto por uma arma que ele mesmo criou, o romance dele com Peper começa a desenvolver e também a amizade com Roads, filme é muito bem desenvolvido porém um final clique, mas para filme de 2008 foi incrível."
  },
  {
    "titulo": "Valente",
    "ano": 2012,
    "nota": 8,
    "data": "2026-08-01",
    "genero": "Animação",
    "opiniao": "Valente é uma animação surpreendente, mostra um pouco sobre a era medieval aonde Merida não é uma princesa como as outras, ele gosta de usar arco e flecha, tem os seus cabelos ruivos um pouco mais desarrumados e tem uma personalidade muito forte, isso faz com que ela rejeite a ideia completamente de se casar quando sua mãe fala que ela teria que se casar ela se revolta e faz um desafio de arco e flecha e vence todos seus pretendes, depois foge encontra uma bruxa e pede para sua mãe mudar, ela virando um urso e elas fogem e criam um laço no qual não tiveram antes, acho uma interação muito boa, mas acho o filme curto acho que elas poderiam ter passado mais algumas coisas juntas, mas história muito boa."
  },
  {
    "titulo": "Homem de Ferro 2",
    "ano": 2010,
    "nota": 9,
    "data": "2026-08-04",
    "genero": "Marvel",
    "opiniao": "Homem de Ferro 2 é assim continuação perfeita do que foi o primeiro filme, Robert Downey Jr faz mais uma atuação impecável mostrando mais uma vez pq é o rosto da Marvel, o filme ainda ainda mostra muito a relação de Stark com seu pai que vai ser muito importante em futuros filmes da Marvel, e tem temos ali surgindo o Máquina de combate, filme tem uma dinâmica muito boa, as interações com Shild, Nick Fury, e a introdução da Viúva Negra são muito boas"
  },
  {
    "titulo": "O Incrível Hulk",
    "ano": 2008,
    "nota": 5,
    "data": "2026-08-15",
    "genero": "Marvel",
    "opiniao": "O Incrível Hulk não é exatamente um filme de origem, parede uma continuação um pouco perdida, acredito que devido a grande quantidade de filmes anteriores do Hulk não quiseram deixar repetitivo, mas achei que ficou muito vago, o filme em si e muito sobre tentarem capturar o Hulk, aí ele fica bravo e bate em todo mundo e vai embora, Emil Blonsky como abominável acho que poderia desenvolver algo melhor para vilão, acredito que faltou a motivação melhor para vilão, já o General Ross achei bom vilão um cara que está por aí é vai dar muitos problemas ainda, acho que o grande ponto do filme é realmente mostrar que existe uma parte boa no Hulk ,"
  },
  {
    "titulo": "Thor",
    "ano": 2011,
    "nota": 8,
    "data": "2026-08-16",
    "genero": "Marvel",
    "opiniao": "Thor é a introdução de um ar mais mitológico no universo com os deuses, os 9 reinos, e junto dois pilares do universo Marvel, Loki e Thor. Thor desde novo foi criado para ser o Deus do trovão sucessor do trono de Asgard, enquanto Loki sempre soube que era diferente, mas nunca soube o motivo, o filme todo o começo é desenvolvido pelas tramas do Loki trazendo os gigantes de gelo para Asgard, conhecendo seu irmão sabia que ele iria atrás deles e fez com que Thor fosse banido, e acho incrível o conceito de ser digno de levantar o martelo, torna o Thor um personagem muito especial, e durante o filme juntos da Jane Foster e os outros cientistas ele aprendeu tudo que seu pai desejou, sobre amor, lealdade e também o que é mais importante, e em um momento aonde ele poderia morrer ele finalmente se torna digno, e num final sacrificando a chance de ver seu amor ele impede os planos de Loki e ganha respeito de seu pai"
  },
  {
    "titulo": "Os Vingadores",
    "ano": 2012,
    "nota": 10,
    "data": "2026-08-17",
    "genero": "Marvel",
    "opiniao": "os vingadores conclui perfeitamente a fase 1 do universo da Marvel juntando todos os personagens anteriormentemente apresentados nos filmes anteriores, e no começo nada da certo, Loki volta como vilão principal, mas deixam claro que tem algo ali por trás, que só é revelado na cena pós créditos, Loki deixar todos muito bravos com ele, e o estopim foi morte do agente Colson que já estava aí desde o primeiro filme da Marvel, foi o gatilho para unir todos eles, e quando juntou a força de todos esses super humanos, Deuses, cara normal super inteligente e dois espiões normais, todos travaram de forma épica a batalha de nova York é assim se tornaram os vingadores."
  },
  {
    "titulo": "Homem de Ferro 3",
    "ano": 2013,
    "nota": 7.5,
    "data": "2026-08-22",
    "genero": "Marvel",
    "opiniao": "O filme mostra o peso da sequência do filme dos vingadores de como um cara normal que enfrentou deuses e aliens na sua frente reagiu, o filme aprofundou muito como Tony Stark queria colocar uma armadura em todos a sua volta, tema é importante na sequência da história, o vilão é horrível, mas a história de desenvolvimento é muito boa, as cenas icônicas e o desenvolvimento da principal cara do universo, achei interessante a introdução do mlk, e também ver o Tony se virar sem armadura, filme tem muitos pontos positivos e alguns negativos, mas no geral é bom."
  },
  {
    "titulo": "Thor: O Mundo Sombrio",
    "ano": 2013,
    "nota": 6,
    "data": "2026-08-23",
    "genero": "Marvel",
    "opiniao": "Thor 2 tem uma dinâmica muito importante pro desenvolvimento do universo da Marvel, com o introdução do Éter, a morte da Frigga e o desenvolvimento de Thor foram muito importante para o futuro do UCm, mais um grande destaque para atuação do ator do Loki que brilhou, mas o vilão foi completamente sem sal, Odin do nada ficou burro, algumas coisas nesse filme me incomodaram muito mas tem seus pontos positivos"
  },
  {
    "titulo": "Capitão América: O Soldado Invernal",
    "ano": 2014,
    "nota": 10,
    "data": "2026-08-24",
    "genero": "Marvel",
    "opiniao": "Capitão América 2 é um dos filmes mais incríveis de heróis que existem, um filme bem mais pés no chão, lutas corpo a corpo, espionagem e um lado sombrio da organização que deveria proteger o mundo está completamente corrompida, e o capitão América fica no meio de tudo isso, e além disso a introdução de Sam Wilson como Falcão, E mais uma baita atuação do Viúva Negra, e todo peso emocional da volta de Buch faz esse filme ser incrível."
  },
  {
    "titulo": "Guardiões da Galáxia",
    "ano": 2014,
    "nota": 10,
    "data": "2026-08-28",
    "genero": "Marvel",
    "opiniao": "Guardiões da galáxia é uma obra prima, em história, desenvolvimento, universo, vilão tudo muito bom , escrita Incrível e cada personagem com sua história desenvolvida e juntos criaram algo mais, a cena final de todos juntos com as jóias do infinito Incrível, sinergia incrível de todos, filme perfeito."
  },
  {
    "titulo": "Guardiões da Galáxia Vol. 2",
    "ano": 2017,
    "nota": 10,
    "data": "2026-08-29",
    "genero": "Marvel",
    "opiniao": "Guardiões da galáxia 2 é a continuação perfeita do primeiro filme, e dessa vez com um pouco mais de profundidade em cada personagem e um vilão mais carismático, a apresentação das jóias do infinito, é a primeira grande aparição de Thanos de UCm, é um baita filme importantíssimo para o futuro."
  },
  {
    "titulo": "Vingadores: Era de Ultron",
    "ano": 2015,
    "nota": 9,
    "data": "2026-08-29",
    "genero": "Marvel",
    "opiniao": "Vingadores a era de Ultron é muito melhor que eu lembrava, o filme toca muito na parte emocional e o início de conflitos individuais nos vingadores e desentendimentos, pesados, é um filme com muitas questões, escolhas difíceis e consequências muito pesadas, o que aconteceu em Socovia terá consequências por muito tempo no universo e um filme completo e bem desenvolvido em diversas formas."
  },
  {
    "titulo": "Homem-Formiga",
    "ano": 2015,
    "nota": 6.5,
    "data": "2026-09-03",
    "genero": "Marvel",
    "opiniao": "Homem Formiga é o filme mais ok, entre vários absurdos dessa fase do universo, filme mais pés no chão introduzido um personagem vital pro prós universo Marvel, Scott Lang definitivamente não é um exemplo de pessoa a se seguir, mas tem um bom filme, história ok, nada muito bom, mas nem muito ruim, filme ok"
  },
  {
    "titulo": "Capitão América: Guerra Civil",
    "ano": 2016,
    "nota": 10,
    "data": "2026-09-04",
    "genero": "Marvel",
    "opiniao": "capitao America guerra Civil é um filme dos vingadores basicamente, roteiro do filme é perfeito com reviravoltas e desentendimentos, pontos de vistas diferentes que se chocaram, os acontecimentos de vingadores 1 e 2 são muito importantes no que aconteceu aqui, e acho que tiraram Thor e o Hulk pq saberemos em qual lado eles ficariam e não teríamos equilíbrio, as introduções do pantera Negra e Homem Aranha foram muito boas filme muito bom."
  },
  {
    "titulo": "Pantera Negra",
    "ano": 2018,
    "nota": 10,
    "data": "2026-09-05",
    "genero": "Marvel",
    "opiniao": "o filme tem uma carga psicológica muito grande, tem muito sobre a cultura, preconceito e injustiça que nos negros sofremos, e o vilão é incrível cara, um cara que quer defender os negros e as injustiças que sofremos, uma pena que ele quer lugar da forma errada, é um dos melhores filmes solos de herói apresentando umas cultura incrível e muito bem desenvolvida"
  },
  {
    "titulo": "Homem-Aranha: De Volta ao Lar",
    "ano": 2017,
    "nota": 8,
    "data": "2026-09-05",
    "genero": "Marvel",
    "opiniao": "Homem aranha de volta é o primeiro filme de uma nova saga do cabeça de teia, seus filmes são muito críticados pela dependência dele Ao Tony Stark que muitas vezes ele mostra ele é assim, mas o filme desenvolve o herói dentro dele, e no fim ganha o respeito de todos e se torna naquele momento mais maduro do que a gente espera de um muleque de 15 anos."
  },
  {
    "titulo": "Doutor Estranho",
    "ano": 2016,
    "nota": 8.5,
    "data": "2026-09-05",
    "genero": "Marvel",
    "opiniao": "Doutor Estranhho mostra o quando Strange é um doutor um ótimo médico mas isso deixou muito arrogante, quando ele perde tudo e ele se desespera e busca de todas as formas de curar, e acaba conhecendo as artes místicas, dps tanto negar ele vê o quanto tem talento para aquilo, e no meio daquela situação veco quanto tem talento e acaba se tornando o sucessor da Anciã."
  },
  {
    "titulo": "Vingadores: Guerra Infinita",
    "ano": 2018,
    "nota": 10,
    "data": "2026-09-06",
    "genero": "Marvel",
    "opiniao": "É o início da conclusão da saga do infinito do universo Marvel, e pra mim um dos melhores filmes que existem , o devolvendo do vilão, cada cena, cada momento é tudo pensado até chegar nesse momento, o ápice dos filmes de herói, o melhor filme dos vingadores, Thanos como o grande protagonista de algo que vem sendo criado a 10 anos, o filme é a perfeita junção de todo universo"
  }
];
