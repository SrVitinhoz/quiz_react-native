const QUESTIONS = [
  {
    id: 1,
    question: "O que é JSX em React/React Native?",
    options: [
      "Uma linguagem separada que substitui JavaScript",
      "Uma sintaxe que permite escrever HTML-like dentro do JavaScript",
      "Um framework para estilização",
      "Um gerenciador de estado"
    ],
    answerIndex: 1
  },
  {
    id: 2,
    question: "Qual hook é usado para gerenciar estado em um componente funcional?",
    options: [
      "useEffect",
      "useContext",
      "useState",
      "useReducer"
    ],
    answerIndex: 2
  },
  {
    id: 3,
    question: "Para navegar entre telas em React Native, costuma-se usar:",
    options: [
      "React Navigation",
      "Redux",
      "Expo CLI apenas",
      "Node.js"
    ],
    answerIndex: 0
  },
  {
    id: 4,
    question: "Qual componente React Native é usado para agrupar elementos com estilo?",
    options: [
      "<Text>",
      "<View>",
      "<ScrollView>",
      "<Image>"
    ],
    answerIndex: 1
  },
  {
    id: 5,
    question: "Props em React são:",
    options: [
      "Dados imutáveis passados para componentes",
      "Funções internas apenas",
      "Métodos do ciclo de vida",
      "Tipos de variáveis globais"
    ],
    answerIndex: 0
  },
  {
    id: 6,
    question: "Qual arquivo ajuda a manter perguntas separadas do restante da UI?",
    options: [
      "App.js",
      "questions.js",
      "package.json",
      "index.js"
    ],
    answerIndex: 1
  },
  {
    id: 7,
    question: "Qual comando cria um novo projeto com Expo (template blank)?",
    options: [
      "npx create-react-app meu-app",
      "expo init meu-app --template blank",
      "npx create-expo-app meu-app --template blank",
      "npm init expo-app"
    ],
    answerIndex: 2
  },
  {
    id: 8,
    question: "useEffect serve para:",
    options: [
      "Gerenciar estado local",
      "Executar efeitos colaterais (side-effects) em pontos do ciclo",
      "Substituir todos os props",
      "Criar rotas de navegação"
    ],
    answerIndex: 1
  },
  {
    id: 9,
    question: "Qual a maneira recomendada de estilizar componentes no React Native?",
    options: [
      "StyleSheet.create e objetos JS",
      "CSS comum (.css) importado",
      "Somente inline styles em string",
      "HTML <style> tags"
    ],
    answerIndex: 0
  },
  {
    id: 10,
    question: "APIs nativas (ex.: câmera, geolocalização) no Expo geralmente são acessadas por:",
    options: [
      "Bibliotecas web padrão",
      "APIs do Windows",
      "Módulos Expo / módulos nativos (expo-camera, expo-location)",
      "Apenas via React Navigation"
    ],
    answerIndex: 2
  }
];

export default QUESTIONS;
