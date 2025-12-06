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
  },
  
  {

    id: 11,
    question: "O que são componentes em React Native?",
    options: [
      "Arquivos obrigatórios do sistema Android",
      "Blocos reutilizáveis que compõem a interface",
      "Funções apenas para criar navegação",
      "APIs nativas para sensores"
    ],
    answerIndex: 1
  },
  {
    id: 12,
    question: "Qual a principal finalidade do JSX?",
    options: [
      "Ler arquivos JSON automaticamente",
      "Criar componentes usando HTML puro",
      "Permitir escrever estrutura visual dentro do JavaScript",
      "Compilar o app para Android"
    ],
    answerIndex: 2
  },
  {
    id: 13,
    question: "Qual hook é usado para executar efeitos colaterais?",
    options: [
      "useState",
      "useEffect",
      "useMemo",
      "useRef"
    ],
    answerIndex: 1
  },
  {
    id: 14,
    question: "Qual das opções NÃO é um exemplo de efeito colateral (side-effect)?",
    options: [
      "Buscar dados de uma API",
      "Atualizar o título da tela",
      "Renderização inicial automática de um componente",
      "Configurar listeners de eventos"
    ],
    answerIndex: 2
  },
  {
    id: 15,
    question: "Qual tipo de navegador do React Navigation exibe telas empilhadas?",
    options: [
      "Tab Navigator",
      "Drawer Navigator",
      "Stack Navigator",
      "Context Navigator"
    ],
    answerIndex: 2
  },
  {
    id: 16,
    question: "Como acessar a câmera usando Expo?",
    options: [
      "import { Camera } from 'react-native'",
      "import { Camera } from 'expo-camera'",
      "import Camera from 'expo-navigation'",
      "React Native fornece nativamente sem bibliotecas"
    ],
    answerIndex: 1
  },
  {
    id: 17,
    question: "Qual a forma correta de criar estilos reutilizáveis em React Native?",
    options: [
      "Criar variáveis CSS no arquivo index.html",
      "Usar StyleSheet.create()",
      "Escrever estilos em strings HTML",
      "Usar o comando expo-style"
    ],
    answerIndex: 1
  },
  {
    id: 18,
    question: "Props são:",
    options: [
      "Valores imutáveis enviados de um componente pai para um filho",
      "Estados locais do componente",
      "Funções internas do React Navigation",
      "Bibliotecas externas"
    ],
    answerIndex: 0
  },
  {
    id: 19,
    question: "useState retorna:",
    options: [
      "Um objeto com propriedades fixas",
      "Um valor e uma função para atualizá-lo",
      "Somente uma função",
      "Somente o valor inicial"
    ],
    answerIndex: 1
  },
  {
    id: 20,
    question: "Qual das opções representa um componente funcional válido?",
    options: [
      "function App() { return <View></View>; }",
      "component App { render() { return <View></View> }}",
      "new Component(App)",
      "App.create(<View />)"
    ],
    answerIndex: 0
  },
  {
    id: 21,
    question: "JSX é convertido em chamadas de qual linguagem?",
    options: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript, exclusivamente"
    ],
    answerIndex: 2
  },
  {
    id: 22,
    question: "Para rolar conteúdo na interface, qual componente deve ser usado?",
    options: [
      "<ScrollView>",
      "<Scroll>",
      "<View.Scroll>",
      "<ListViewModern>"
    ],
    answerIndex: 0
  },
  {
    id: 23,
    question: "O que é necessário para usar navegação no app?",
    options: [
      "Instalar a biblioteca react-navigation",
      "Apenas importar o componente NavigationController",
      "Ativar navegação no Android Studio",
      "Nada — já vem nativo no React Native"
    ],
    answerIndex: 0
  },
  {
    id: 24,
    question: "useEffect pode ser configurado para rodar apenas uma vez ao montar o componente usando:",
    options: [
      "Nenhum parâmetro",
      "Um array vazio []",
      "Um objeto {}",
      "Uma string 'init'"
    ],
    answerIndex: 1
  }
];

export default QUESTIONS;
