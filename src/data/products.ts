import hoverboardOffroadFogoGelo from '@/assets/products/hoverboard-offroad-fogo-gelo.jpg';
import hoverboardPurpleSpace from '@/assets/products/hoverboard-purple-space.jpg';
import hoverboardOffroadPreto from '@/assets/products/hoverboard-offroad-preto.jpg';
import hoverboardAzulCrianca from '@/assets/products/hoverboard-azul-crianca.jpg';
import hoverboardOriginalPremium from '@/assets/products/hoverboard-original-premium.jpg';
import hoverboardAzulCamuflado from '@/assets/products/hoverboard-azul-camuflado.jpg';
import hoverboardVermelhoFogo from '@/assets/products/hoverboard-vermelho-fogo.jpg';
import hoverboardRoxoGalaxia from '@/assets/products/hoverboard-roxo-galaxia.jpg';
import hoverboard10Polegadas from '@/assets/products/hoverboard-10-polegadas.jpg';
import hoverboardRosaFeminino from '@/assets/products/hoverboard-rosa-feminino.jpg';
import hoverboardDiversasCores from '@/assets/products/hoverboard-diversas-cores.jpg';
import hoverboardBrinovar85 from '@/assets/products/hoverboard-brinovar-8-5.jpg';
import hoverboardPretoBrinovar from '@/assets/products/hoverboard-preto-brinovar.jpg';
import hoverboardRosaBrinovar from '@/assets/products/hoverboard-rosa-brinovar.jpg';
import hoverboardLedFogoGelo from '@/assets/products/hoverboard-led-fogo-gelo.jpg';
import hoverboardPurpleStarKids from '@/assets/products/hoverboard-purple-star-kids.jpg';
import hoverboardRosaGalaxia from '@/assets/products/hoverboard-rosa-galaxia.jpg';
import hoverboardRosaCamuflado from '@/assets/products/hoverboard-rosa-camuflado.jpg';
import hoverboardGalaxiaKids from '@/assets/products/hoverboard-galaxia-kids.jpg';
import hoverboardSmartBalance from '@/assets/products/hoverboard-smart-balance.jpg';

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
    imageUrl: hoverboardOffroadFogoGelo,
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
    imageUrl: hoverboardPurpleSpace,
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
    imageUrl: hoverboardOffroadPreto,
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
    imageUrl: hoverboardAzulCrianca,
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
    imageUrl: hoverboardOriginalPremium,
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
    imageUrl: hoverboardPretoBrinovar,
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
    imageUrl: hoverboardAzulCamuflado,
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
    imageUrl: hoverboardLedFogoGelo,
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
    imageUrl: hoverboardVermelhoFogo,
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
    imageUrl: hoverboardRoxoGalaxia,
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
    imageUrl: hoverboardDiversasCores,
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
    imageUrl: hoverboardBrinovar85,
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
    imageUrl: hoverboardPretoBrinovar,
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
    imageUrl: hoverboardRosaBrinovar,
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
    imageUrl: hoverboardLedFogoGelo,
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
    imageUrl: hoverboardPurpleStarKids,
    category: "Infantil",
    keywords: ["hoverboard infantil", "skate elétrico criança", "hoverboard seguro", "melhores ofertas"]
  },
  {
    id: "17",
    name: "Hoverboard Roxo Galáxia Skate Elétrico 10'' Bluetooth E Led",
    slug: "hoverboard-10-roxo-galaxia",
    shortDescription: "O maior modelo com rodas de 10 polegadas e design Galáxia.",
    fullDescription: "O modelo de 10 polegadas Roxo Galáxia é para quem busca o máximo em estabilidade e presença. Rodas maiores significam mais conforto e capacidade de enfrentar qualquer superfície.",
    features: [
      "Rodas de 10 polegadas",
      "Design Roxo Galáxia",
      "Máxima estabilidade",
      "Bluetooth premium",
      "LEDs impressionantes",
      "Para todos os terrenos"
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
    imageUrl: hoverboard10Polegadas,
    category: "Premium",
    keywords: ["hoverboard 10 polegadas", "skate elétrico grande", "hoverboard premium", "melhores marcas"]
  },
  {
    id: "18",
    name: "Hoverboard Skate Elétrico Original 8.5 Offroad Led Bluetooth",
    slug: "hoverboard-original-8-5-offroad",
    shortDescription: "Versão original certificada do popular modelo 8.5 Offroad.",
    fullDescription: "A versão Original do 8.5 Offroad vem com certificação de qualidade e todos os recursos esperados de um hoverboard premium. Ideal para quem não abre mão da autenticidade.",
    features: [
      "Certificação Original",
      "Rodas Offroad 8.5\"",
      "Bluetooth certificado",
      "LEDs de qualidade",
      "Bateria de longa duração",
      "Suporte técnico"
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
    imageUrl: hoverboardOriginalPremium,
    category: "Offroad",
    keywords: ["hoverboard original", "skate elétrico offroad", "hoverboard certificado", "melhores preços"]
  },
  {
    id: "19",
    name: "Skate Elétrico Hoverboard 6.5 Polegadas Azul Camuflado Brinovar",
    slug: "hoverboard-6-5-azul-camuflado-brinovar",
    shortDescription: "A versão Brinovar do popular design Azul Camuflado.",
    fullDescription: "Combinando o visual urbano do padrão camuflado com a qualidade Brinovar, este modelo oferece durabilidade e estilo para quem gosta de se destacar.",
    features: [
      "Design Azul Camuflado",
      "Marca Brinovar",
      "LEDs azuis",
      "Bluetooth de qualidade",
      "Estrutura resistente",
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
    imageUrl: hoverboardAzulCamuflado,
    category: "Urbano",
    keywords: ["hoverboard camuflado", "skate elétrico brinovar", "hoverboard azul", "melhores ofertas"]
  },
  {
    id: "20",
    name: "Hoverboard Smart Balance 6.5 Bluetooth Rosa Galáxia",
    slug: "hoverboard-smart-balance-rosa-galaxia",
    shortDescription: "Tecnologia Smart Balance com visual Rosa Galáxia encantador.",
    fullDescription: "O Smart Balance Rosa Galáxia combina a tecnologia de auto-balanceamento mais avançada com um visual feminino e moderno. Perfeito para quem busca tecnologia e estilo.",
    features: [
      "Tecnologia Smart Balance",
      "Design Rosa Galáxia",
      "Auto-balanceamento avançado",
      "Bluetooth integrado",
      "LEDs rosa",
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
    imageUrl: hoverboardRosaGalaxia,
    category: "Urbano",
    keywords: ["hoverboard smart balance", "skate elétrico rosa", "hoverboard galáxia", "melhores marcas"]
  },
  {
    id: "21",
    name: "Hoverboard Skate Elétrico Música Bluetooth Rosa Galáxia Smart Balance",
    slug: "hoverboard-musica-rosa-galaxia",
    shortDescription: "Sistema de som premium com visual Rosa Galáxia deslumbrante.",
    fullDescription: "Este modelo foca na experiência musical, com alto-falantes de alta qualidade integrados ao design Rosa Galáxia. Ouça suas músicas favoritas enquanto pilota com estilo.",
    features: [
      "Alto-falantes premium",
      "Design Rosa Galáxia",
      "Qualidade de som superior",
      "Bluetooth de alta fidelidade",
      "LEDs sincronizados",
      "Visual encantador"
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
    imageUrl: hoverboardRosaGalaxia,
    category: "Urbano",
    keywords: ["hoverboard música", "skate elétrico bluetooth", "hoverboard rosa", "melhores preços"]
  },
  {
    id: "22",
    name: "Hoverboard Smart Balance 6.5 Bluetooth Roxo Galáxia",
    slug: "hoverboard-smart-balance-roxo-galaxia",
    shortDescription: "Smart Balance na cor Roxo Galáxia para os amantes do cosmos.",
    fullDescription: "A tecnologia Smart Balance encontra o visual cósmico do Roxo Galáxia neste modelo especial. Pilotagem suave e estilo único garantidos.",
    features: [
      "Smart Balance avançado",
      "Design Roxo Galáxia",
      "Bluetooth premium",
      "LEDs cósmicos",
      "Estabilidade superior",
      "Visual impressionante"
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
    imageUrl: hoverboardSmartBalance,
    category: "Urbano",
    keywords: ["hoverboard smart balance", "skate elétrico roxo", "hoverboard galáxia", "melhores ofertas"]
  },
  {
    id: "23",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Rosa Camuflado",
    slug: "hoverboard-6-5-rosa-camuflado",
    shortDescription: "Visual camuflado em tons de rosa para quem busca originalidade.",
    fullDescription: "O Hoverboard Rosa Camuflado oferece um visual único que combina o padrão militar com tons femininos. Destaque-se com estilo e personalidade.",
    features: [
      "Design Rosa Camuflado único",
      "LEDs rosa",
      "Bluetooth com som",
      "Auto-balanceamento",
      "Estrutura resistente",
      "Visual exclusivo"
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
    imageUrl: hoverboardRosaCamuflado,
    category: "Urbano",
    keywords: ["hoverboard rosa", "skate elétrico camuflado", "hoverboard feminino", "melhores marcas"]
  },
  {
    id: "24",
    name: "Hoverboard Skate Elétrico 6.5 Polegadas Roxo Galáxia Brinovar",
    slug: "hoverboard-6-5-roxo-galaxia-brinovar",
    shortDescription: "Qualidade Brinovar no icônico design Roxo Galáxia.",
    fullDescription: "A Brinovar apresenta sua versão do popular Roxo Galáxia. Qualidade certificada, garantia nacional e o visual cósmico que todos amam.",
    features: [
      "Marca Brinovar",
      "Design Roxo Galáxia",
      "Qualidade certificada",
      "Bluetooth premium",
      "LEDs galácticos",
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
    imageUrl: hoverboardRoxoGalaxia,
    category: "Urbano",
    keywords: ["hoverboard brinovar", "skate elétrico roxo", "hoverboard galáxia", "melhores preços"]
  },
  {
    id: "25",
    name: "Hoverboard Elétrico Para Crianças Lurs HB65 Galáxia",
    slug: "hoverboard-lurs-hb65-galaxia",
    shortDescription: "Modelo Lurs HB65 especialmente desenvolvido para crianças.",
    fullDescription: "O Lurs HB65 Galáxia foi projetado pensando na segurança e diversão dos pequenos. Com velocidade controlada e sistemas de proteção, é a escolha perfeita para presentear crianças.",
    features: [
      "Desenvolvido para crianças",
      "Marca Lurs certificada",
      "Design Galáxia",
      "Velocidade controlada",
      "Sistema de segurança",
      "Ideal para presentes"
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
    imageUrl: hoverboardGalaxiaKids,
    category: "Infantil",
    keywords: ["hoverboard infantil", "skate elétrico criança", "hoverboard lurs", "presente criança"]
  }
];

export const AFFILIATE_LINK = "https://mercadolivre.com/sec/28Ru8g8";

export const affiliateProducts = [
  { id: "a1", name: "Inibe One", url: "https://app.monetizze.com.br/r/APZ25502897" },
  { id: "a2", name: "Kit Restart Intestinal", url: "https://app.monetizze.com.br/r/ACN25503403" },
  { id: "a3", name: "Mounja Slim", url: "https://app.monetizze.com.br/r/AJZ25504136" },
  { id: "a4", name: "Super Green Black", url: "https://app.monetizze.com.br/r/ASY18248645" },
  { id: "a5", name: "Clareador Nutralfit", url: "https://app.monetizze.com.br/r/AJX25503066" },
  { id: "a6", name: "Donna Detox Black", url: "https://app.monetizze.com.br/r/ACE25513322" },
  { id: "a7", name: "GHDROL", url: "https://app.monetizze.com.br/r/ANA25505142" },
  { id: "a8", name: "SB2 Black", url: "https://app.monetizze.com.br/r/ASS25503415" },
  { id: "a9", name: "Dtx Black", url: "https://app.monetizze.com.br/r/AZW15606936" },
  { id: "a10", name: "Hidraliso", url: "https://app.monetizze.com.br/r/AWW11504208" },
  { id: "a11", name: "Nutra Vida", url: "https://app.monetizze.com.br/r/AXC25503421" },
  { id: "a12", name: "Super Imune", url: "https://app.monetizze.com.br/r/AKS25517419" },
  { id: "a13", name: "Kit Restart Kids", url: "https://app.monetizze.com.br/r/AAL25518710" },
  { id: "a14", name: "ReduPhine Caps", url: "https://app.monetizze.com.br/r/AFX20871337" },
  { id: "a15", name: "OzenFit-Caps", url: "https://app.monetizze.com.br/r/AWX25517410" },
  { id: "a16", name: "Super Green Black 30", url: "https://app.monetizze.com.br/r/ATD25517641" },
  { id: "a17", name: "Femme Q10 Power", url: "https://app.monetizze.com.br/r/AEK25517455" },
  { id: "a18", name: "Foco Pill", url: "https://app.monetizze.com.br/r/AHQ25517456" },
  { id: "a19", name: "Morosil Colágeno", url: "https://app.monetizze.com.br/r/AAW21258323" },
  { id: "a20", name: "Dermodiet", url: "https://app.monetizze.com.br/r/ADE25505113" }
];
