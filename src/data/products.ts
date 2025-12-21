export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: {
    wheel: string;
    motor: string;
    speed: string;
    range: string;
    weight: string;
    bluetooth: boolean;
    led: boolean;
  };
  imageUrl: string;
  category: string;
  keywords: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hoverboard 8.5 Offroad Skate Elétrico Bluetooth Fogo E Gelo",
    slug: "hoverboard-8-5-offroad-fogo-gelo",
    shortDescription: "O hoverboard offroad mais vendido com design exclusivo Fogo e Gelo, perfeito para todos os terrenos.",
    fullDescription: "O Hoverboard 8.5 Offroad Fogo e Gelo é a combinação perfeita entre estilo e performance. Com rodas de 8.5 polegadas especialmente projetadas para terrenos irregulares, este modelo oferece estabilidade superior e uma experiência de pilotagem emocionante. O design exclusivo Fogo e Gelo com LEDs RGB cria um visual impressionante que destaca você em qualquer lugar.",
    features: [
      "Rodas Offroad de 8.5 polegadas",
      "Bluetooth integrado com caixas de som",
      "LEDs RGB multicoloridos",
      "Design exclusivo Fogo e Gelo",
      "Motor potente de 700W",
      "Suporta até 120kg"
    ],
    specs: {
      wheel: "8.5 polegadas",
      motor: "700W",
      speed: "15 km/h",
      range: "20 km",
      weight: "12 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_901206-MLU74284462382_012024-F.webp",
    category: "Offroad",
    keywords: ["hoverboard offroad", "skate elétrico 8.5", "hoverboard fogo e gelo", "melhores preços", "melhores ofertas"]
  },
  {
    id: "2",
    name: "Hoverboard Original Skate Elétrico 6.5 Roxo Purple Space Led",
    slug: "hoverboard-6-5-roxo-purple-space",
    shortDescription: "Design espacial único com LEDs brilhantes, ideal para jovens e adultos.",
    fullDescription: "O Hoverboard Purple Space é um modelo exclusivo que combina tecnologia de ponta com um design espacial deslumbrante. As luzes LED criam um efeito visual impressionante, especialmente à noite. Perfeito para quem busca estilo e diversão.",
    features: [
      "Design Purple Space exclusivo",
      "LEDs RGB em toda a estrutura",
      "Bluetooth com alto-falantes",
      "Auto-balanceamento avançado",
      "Rodas de 6.5 polegadas",
      "Ideal para iniciantes"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_668308-MLU75571849474_042024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard roxo", "skate elétrico purple", "hoverboard led", "melhores marcas"]
  },
  {
    id: "3",
    name: "Hoverboard Skate Elétrico 8.5 Offroad Led Bluetooth Preto",
    slug: "hoverboard-8-5-offroad-preto",
    shortDescription: "Elegância e potência em um design todo preto para os amantes do estilo clássico.",
    fullDescription: "Este Hoverboard Offroad Preto é a escolha perfeita para quem busca sofisticação e desempenho. Com rodas robustas de 8.5 polegadas, ele enfrenta qualquer terreno com facilidade enquanto mantém um visual elegante e discreto.",
    features: [
      "Design todo preto elegante",
      "Rodas Offroad de 8.5\"",
      "Bluetooth premium",
      "LEDs brancos discretos",
      "Bateria de longa duração",
      "Construção robusta"
    ],
    specs: {
      wheel: "8.5 polegadas",
      motor: "700W",
      speed: "15 km/h",
      range: "18 km",
      weight: "12 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_632961-MLU72547821596_112023-F.webp",
    category: "Offroad",
    keywords: ["hoverboard preto", "skate elétrico offroad", "hoverboard 8.5", "melhores preços"]
  },
  {
    id: "4",
    name: "Hoverboard Masculino Azul Menino Criança Skate Elétrico Bluetooth",
    slug: "hoverboard-azul-crianca",
    shortDescription: "Perfeito para crianças e adolescentes, com LEDs RGB 360° e potência de 500W.",
    fullDescription: "Este Hoverboard Azul foi desenvolvido pensando nos jovens pilotos. Com farol LED RGB que gira 360°, Bluetooth integrado e potência de 500W, ele oferece diversão segura com autonomia de até 15km e velocidade de 14 km/h.",
    features: [
      "LED RGB 360° graus",
      "Farol frontal brilhante",
      "Bluetooth com músicas",
      "Autonomia de 15 km",
      "Velocidade até 14 km/h",
      "Suporta até 120kg"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "14 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_918634-MLU74284454074_012024-F.webp",
    category: "Infantil",
    keywords: ["hoverboard criança", "skate elétrico infantil", "hoverboard azul", "presente natal"]
  },
  {
    id: "5",
    name: "Hoverboard Original Skate Elétrico 8.5 Offroad Led Bluetooth",
    slug: "hoverboard-8-5-offroad-original",
    shortDescription: "O modelo original offroad com qualidade premium e garantia de procedência.",
    fullDescription: "O Hoverboard Original 8.5 Offroad é sinônimo de qualidade e durabilidade. Fabricado com materiais premium e tecnologia de ponta, este modelo oferece a melhor experiência offroad do mercado.",
    features: [
      "Qualidade Original garantida",
      "Rodas Offroad resistentes",
      "Sistema de som Bluetooth",
      "LEDs multicoloridos",
      "Bateria Samsung",
      "Certificação de segurança"
    ],
    specs: {
      wheel: "8.5 polegadas",
      motor: "700W",
      speed: "15 km/h",
      range: "20 km",
      weight: "12 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_974566-MLU72547821638_112023-F.webp",
    category: "Offroad",
    keywords: ["hoverboard original", "skate elétrico offroad", "melhores marcas", "melhores ofertas"]
  },
  {
    id: "6",
    name: "Hoverboard 8.5 Offroad Skate Elétrico Bluetooth Led Preto",
    slug: "hoverboard-8-5-led-preto",
    shortDescription: "Versão especial com LEDs personalizáveis e sistema de som premium.",
    fullDescription: "Este modelo combina a robustez do offroad com um sistema de iluminação LED avançado. Os LEDs podem ser personalizados via app Bluetooth, criando efeitos únicos enquanto você pilota.",
    features: [
      "LEDs personalizáveis via app",
      "Som premium Bluetooth",
      "Rodas todo-terreno",
      "Construção reforçada",
      "Controle por aplicativo",
      "Design moderno preto"
    ],
    specs: {
      wheel: "8.5 polegadas",
      motor: "700W",
      speed: "15 km/h",
      range: "18 km",
      weight: "12 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_632961-MLU72547821596_112023-F.webp",
    category: "Offroad",
    keywords: ["hoverboard preto", "skate elétrico led", "hoverboard bluetooth", "melhores preços"]
  },
  {
    id: "7",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Azul Camuflado",
    slug: "hoverboard-6-5-azul-camuflado",
    shortDescription: "Estilo militar urbano com padrão camuflado azul único.",
    fullDescription: "O Hoverboard Azul Camuflado traz um visual diferenciado inspirado no estilo militar. Perfeito para quem quer se destacar com um design único enquanto aproveita todas as funcionalidades premium.",
    features: [
      "Design Camuflado Azul exclusivo",
      "LEDs em toda estrutura",
      "Bluetooth integrado",
      "Auto-balanceamento",
      "Rodas 6.5 polegadas",
      "Fácil aprendizado"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_604953-MLU74284462258_012024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard camuflado", "skate elétrico azul", "hoverboard urbano", "melhores ofertas"]
  },
  {
    id: "8",
    name: "Hoverboard Elétrico Skate Overboard 6.5 Led Bluetooth Fogo Gelo",
    slug: "hoverboard-6-5-fogo-gelo",
    shortDescription: "O clássico design Fogo e Gelo em versão compacta 6.5 polegadas.",
    fullDescription: "Uma versão mais compacta e ágil do famoso design Fogo e Gelo. Ideal para uso urbano, combina estilo marcante com praticidade para o dia a dia.",
    features: [
      "Design Fogo e Gelo icônico",
      "Tamanho compacto 6.5\"",
      "Bluetooth com caixas de som",
      "LEDs RGB vibrantes",
      "Leve e portátil",
      "Bivolt 110v-220v"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "9 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_901206-MLU74284462382_012024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard fogo gelo", "skate elétrico 6.5", "overboard", "melhores marcas"]
  },
  {
    id: "9",
    name: "Skate Elétrico Hoverboard 6.5 Polegadas Vermelho Fogo Brinovar",
    slug: "hoverboard-6-5-vermelho-fogo",
    shortDescription: "Design Vermelho Fogo intenso da marca Brinovar com qualidade garantida.",
    fullDescription: "O Hoverboard Vermelho Fogo Brinovar é para quem gosta de se destacar. A cor vibrante combinada com a qualidade Brinovar garante durabilidade e muita diversão.",
    features: [
      "Cor Vermelho Fogo vibrante",
      "Marca Brinovar certificada",
      "LEDs combinando",
      "Bluetooth de qualidade",
      "Estrutura resistente",
      "Garantia do fabricante"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_817553-MLU74920461650_032024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard vermelho", "skate elétrico brinovar", "hoverboard fogo", "melhores preços"]
  },
  {
    id: "10",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Roxo Galáxia",
    slug: "hoverboard-6-5-roxo-galaxia",
    shortDescription: "Visual galáctico deslumbrante com tons de roxo e estrelas.",
    fullDescription: "O Hoverboard Roxo Galáxia transporta você para outra dimensão. Com um design inspirado no cosmos, LEDs que simulam estrelas e qualidade premium, é o modelo perfeito para quem busca algo verdadeiramente único.",
    features: [
      "Design Galáxia exclusivo",
      "LEDs que simulam estrelas",
      "Bluetooth premium",
      "Acabamento brilhante",
      "Rodas de alta qualidade",
      "Visual noturno impressionante"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_668308-MLU75571849474_042024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard roxo", "skate elétrico galáxia", "hoverboard led", "melhores ofertas"]
  },
  {
    id: "11",
    name: "Hoverboard Skate Elétrico 6.5 Bluetooth Led Diversas Cores",
    slug: "hoverboard-6-5-diversas-cores",
    shortDescription: "Modelo versátil disponível em múltiplas cores para todos os gostos.",
    fullDescription: "Este modelo oferece a maior variedade de cores do mercado. Escolha a cor que mais combina com você e aproveite todas as funcionalidades premium de um hoverboard de qualidade.",
    features: [
      "Disponível em várias cores",
      "Bluetooth com som",
      "LEDs RGB",
      "Auto-balanceamento",
      "Fácil de pilotar",
      "Ótimo custo-benefício"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_918634-MLU74284454074_012024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard cores", "skate elétrico colorido", "hoverboard barato", "melhores marcas"]
  },
  {
    id: "12",
    name: "Hoverboard Skate Elétrico 8.5 Com Led E Bluetooth Brinovar",
    slug: "hoverboard-8-5-brinovar",
    shortDescription: "Modelo premium 8.5 da Brinovar com tecnologia de ponta.",
    fullDescription: "A Brinovar apresenta seu modelo 8.5 polegadas com tudo que há de mais avançado em tecnologia de hoverboards. Qualidade, durabilidade e performance em um só produto.",
    features: [
      "Marca Brinovar premium",
      "Rodas 8.5 todo-terreno",
      "Sistema LED avançado",
      "Bluetooth de alta fidelidade",
      "Bateria de longa duração",
      "Suporte técnico nacional"
    ],
    specs: {
      wheel: "8.5 polegadas",
      motor: "700W",
      speed: "15 km/h",
      range: "20 km",
      weight: "12 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_974566-MLU72547821638_112023-F.webp",
    category: "Offroad",
    keywords: ["hoverboard brinovar", "skate elétrico 8.5", "hoverboard premium", "melhores preços"]
  },
  {
    id: "13",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Preto Brinovar",
    slug: "hoverboard-6-5-preto-brinovar",
    shortDescription: "Elegância total em preto com a qualidade Brinovar.",
    fullDescription: "O modelo Preto Brinovar 6.5 é a escolha ideal para quem busca discrição sem abrir mão da qualidade. Design elegante, funcionalidades completas e a garantia Brinovar.",
    features: [
      "Design preto elegante",
      "Qualidade Brinovar",
      "LEDs discretos",
      "Bluetooth integrado",
      "Compacto e leve",
      "Garantia estendida"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_632961-MLU72547821596_112023-F.webp",
    category: "Urbano",
    keywords: ["hoverboard preto", "skate elétrico brinovar", "hoverboard elegante", "melhores ofertas"]
  },
  {
    id: "14",
    name: "Skate Elétrico Hoverboard 6.5 Polegadas Rosa Liso Brinovar",
    slug: "hoverboard-6-5-rosa-brinovar",
    shortDescription: "Rosa elegante para quem quer estilo e feminilidade.",
    fullDescription: "O Hoverboard Rosa Liso Brinovar foi desenvolvido com um design clean e elegante. Perfeito para quem busca um visual feminino sem abrir mão de qualidade e funcionalidades.",
    features: [
      "Cor Rosa elegante",
      "Acabamento liso premium",
      "Marca Brinovar",
      "LEDs combinando",
      "Bluetooth com som",
      "Ideal para presente"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "9 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_604953-MLU74284462258_012024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard rosa", "skate elétrico feminino", "hoverboard brinovar", "melhores marcas"]
  },
  {
    id: "15",
    name: "Hoverboard Led Bluetooth Skate Elétrico 6.5 Fogo E Gelo",
    slug: "hoverboard-led-fogo-gelo",
    shortDescription: "Versão LED intensificada do clássico Fogo e Gelo.",
    fullDescription: "Este modelo destaca-se pelos LEDs ultra brilhantes que realçam ainda mais o icônico design Fogo e Gelo. Uma experiência visual única combinada com excelente performance.",
    features: [
      "LEDs ultra brilhantes",
      "Design Fogo e Gelo",
      "Bluetooth de qualidade",
      "Efeitos de luz únicos",
      "Ótima performance",
      "Destaque garantido"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_901206-MLU74284462382_012024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard fogo gelo", "skate elétrico led", "hoverboard brilhante", "melhores preços"]
  },
  {
    id: "16",
    name: "Hoverboard 6.5 Elétrico Para Crianças Skate Fogo E Água Purple Star",
    slug: "hoverboard-criancas-purple-star",
    shortDescription: "Especialmente desenvolvido para crianças com design Purple Star.",
    fullDescription: "O Purple Star é o hoverboard ideal para os pequenos. Com sistemas de segurança avançados, velocidade controlada e design encantador, proporciona diversão segura para crianças.",
    features: [
      "Desenvolvido para crianças",
      "Sistema de segurança",
      "Velocidade controlada",
      "Design Purple Star",
      "Leve e seguro",
      "Fácil aprendizado"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "400W",
      speed: "10 km/h",
      range: "12 km",
      weight: "8 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_668308-MLU75571849474_042024-F.webp",
    category: "Infantil",
    keywords: ["hoverboard infantil", "skate elétrico criança", "hoverboard seguro", "melhores ofertas"]
  },
  {
    id: "17",
    name: "Hoverboard Roxo Galáxia Skate Elétrico 10'' Bluetooth E Led",
    slug: "hoverboard-10-roxo-galaxia",
    shortDescription: "O maior modelo com rodas de 10 polegadas e design Galáxia.",
    fullDescription: "O gigante da família! Com rodas de 10 polegadas, este Hoverboard Roxo Galáxia oferece máxima estabilidade e conforto. Ideal para adultos que buscam performance superior.",
    features: [
      "Rodas de 10 polegadas",
      "Máxima estabilidade",
      "Design Roxo Galáxia",
      "Bluetooth premium",
      "LEDs impressionantes",
      "Para adultos"
    ],
    specs: {
      wheel: "10 polegadas",
      motor: "800W",
      speed: "18 km/h",
      range: "25 km",
      weight: "14 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_668308-MLU75571849474_042024-F.webp",
    category: "Premium",
    keywords: ["hoverboard 10 polegadas", "skate elétrico grande", "hoverboard premium", "melhores marcas"]
  },
  {
    id: "18",
    name: "Hoverboard Skate Elétrico Original 8.5 Offroad Led Bluetooth",
    slug: "hoverboard-original-8-5-offroad",
    shortDescription: "Modelo Original certificado para aventuras offroad.",
    fullDescription: "Este é o Hoverboard Original 8.5 Offroad, certificado e com garantia de procedência. Enfrente qualquer terreno com confiança e segurança.",
    features: [
      "Certificado Original",
      "Garantia de procedência",
      "Rodas Offroad 8.5\"",
      "Bluetooth integrado",
      "LEDs resistentes",
      "Para todos os terrenos"
    ],
    specs: {
      wheel: "8.5 polegadas",
      motor: "700W",
      speed: "15 km/h",
      range: "20 km",
      weight: "12 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_974566-MLU72547821638_112023-F.webp",
    category: "Offroad",
    keywords: ["hoverboard original", "skate elétrico offroad", "hoverboard certificado", "melhores preços"]
  },
  {
    id: "19",
    name: "Skate Elétrico Hoverboard 6.5 Polegadas Azul Camuflado Brinovar",
    slug: "hoverboard-azul-camuflado-brinovar",
    shortDescription: "Camuflado Azul com a qualidade Brinovar.",
    fullDescription: "A Brinovar apresenta sua versão do popular design Azul Camuflado. Qualidade superior, durabilidade e um visual que se destaca em qualquer lugar.",
    features: [
      "Design Camuflado Azul",
      "Qualidade Brinovar",
      "LEDs azuis",
      "Bluetooth premium",
      "Acabamento resistente",
      "Garantia nacional"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_604953-MLU74284462258_012024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard camuflado", "skate elétrico azul", "hoverboard brinovar", "melhores ofertas"]
  },
  {
    id: "20",
    name: "Skate Elétrico Hoverboard Smart Balance 6.5 Bluetooth Rosa Galáxia",
    slug: "hoverboard-smart-balance-rosa-galaxia",
    shortDescription: "Smart Balance com design Rosa Galáxia encantador.",
    fullDescription: "O Smart Balance Rosa Galáxia combina tecnologia de auto-balanceamento avançada com um design feminino e moderno. Perfeito para quem busca facilidade e estilo.",
    features: [
      "Tecnologia Smart Balance",
      "Design Rosa Galáxia",
      "Auto-balanceamento",
      "Bluetooth com som",
      "LEDs rosa e roxo",
      "Fácil para iniciantes"
    ],
    specs: {
      wheel: "6.5 polegadas",
      motor: "500W",
      speed: "12 km/h",
      range: "15 km",
      weight: "10 kg",
      bluetooth: true,
      led: true
    },
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_668308-MLU75571849474_042024-F.webp",
    category: "Urbano",
    keywords: ["hoverboard rosa", "skate elétrico smart balance", "hoverboard feminino", "melhores marcas"]
  }
];

export const affiliateProducts = [
  {
    id: "inibe-one",
    name: "Inibe One",
    description: "Suplemento em cápsulas para controlar apetite e reduzir compulsão alimentar.",
    url: "https://app.monetizze.com.br/r/APZ25502897"
  },
  {
    id: "kit-restart",
    name: "Kit Restart Intestinal",
    description: "Suplemento detox para limpeza intestinal e digestão.",
    url: "https://app.monetizze.com.br/r/ACN25503403"
  },
  {
    id: "mounja-slim",
    name: "Mounja Slim",
    description: "Suplemento para perda de peso e controle de apetite.",
    url: "https://app.monetizze.com.br/r/AJZ25504136"
  },
  {
    id: "super-green-black",
    name: "Super Green Black",
    description: "Suplemento para perda de peso e saúde geral.",
    url: "https://app.monetizze.com.br/r/ASY18248645"
  },
  {
    id: "clareador-nutralfit",
    name: "Clareador Nutralfit",
    description: "Creme para clarear manchas e uniformizar o tom da pele.",
    url: "https://app.monetizze.com.br/r/AJX25503066"
  },
  {
    id: "donna-detox",
    name: "Donna Detox Black",
    description: "Suplemento detox para limpeza e perda de peso.",
    url: "https://app.monetizze.com.br/r/ACE25513322"
  },
  {
    id: "ghdrol",
    name: "GHDROL",
    description: "Suplemento para queima de gordura e aumento de energia.",
    url: "https://app.monetizze.com.br/r/ANA25505142"
  },
  {
    id: "sb2-black",
    name: "SB2 Black",
    description: "Suplemento para queima de gordura e controle de peso.",
    url: "https://app.monetizze.com.br/r/ASS25503415"
  },
  {
    id: "dtx-black",
    name: "Dtx Black",
    description: "Suplemento detox para limpeza e perda de peso.",
    url: "https://app.monetizze.com.br/r/AZW15606936"
  },
  {
    id: "hidraliso",
    name: "Hidraliso - Alisante de Chuveiro",
    description: "Produto capilar para alisar os fios durante o banho.",
    url: "https://app.monetizze.com.br/r/AWW11504208"
  },
  {
    id: "nutra-vida",
    name: "Nutra Vida",
    description: "Suplemento nutricional para saúde e bem-estar.",
    url: "https://app.monetizze.com.br/r/AXC25503421"
  },
  {
    id: "super-imune",
    name: "Super Imune",
    description: "Suplemento para fortalecer o sistema imunológico.",
    url: "https://app.monetizze.com.br/r/AKS25517419"
  },
  {
    id: "restart-kids",
    name: "Kit Restart Intestinal Kids",
    description: "Suplemento detox para crianças.",
    url: "https://app.monetizze.com.br/r/AAL25518710"
  },
  {
    id: "reduphine",
    name: "ReduPhine Caps",
    description: "Suplemento para queima de gordura e controle de peso.",
    url: "https://app.monetizze.com.br/r/AFX20871337"
  },
  {
    id: "ozenfit",
    name: "OzenFit-Caps",
    description: "Suplemento para perda de peso e controle de apetite.",
    url: "https://app.monetizze.com.br/r/AWX25517410"
  },
  {
    id: "femme-q10",
    name: "Femme Q10 Power",
    description: "Suplemento para saúde da pele, cabelos e unhas.",
    url: "https://app.monetizze.com.br/r/AEK25517455"
  },
  {
    id: "foco-pill",
    name: "Foco Pill",
    description: "Suplemento para concentração e memória.",
    url: "https://app.monetizze.com.br/r/AHQ25517456"
  },
  {
    id: "morosil-colageno",
    name: "Morosil Colágeno",
    description: "Suplemento para emagrecimento e saúde da pele.",
    url: "https://app.monetizze.com.br/r/AAW21258323"
  },
  {
    id: "dermodiet",
    name: "Dermodiet",
    description: "Suplemento para saúde e aparência da pele.",
    url: "https://app.monetizze.com.br/r/ADE25505113"
  }
];

export const AFFILIATE_LINK = "https://mercadolivre.com/sec/28Ru8g8";
