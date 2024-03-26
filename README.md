# App Badaró (Desafio Pratico Sênior)



https://github.com/caiogasparino/badaro/assets/42823693/dafd0852-f629-4e28-aa44-f5caaa5c7a36


https://github.com/caiogasparino/badaro/assets/42823693/e675727a-a931-4b4b-a8b6-f8bf215f7436


## Pré-Requisitos

Para configurar e executar o Badaró, você precisará dos seguintes pré-requisitos instalados em sua máquina:

- [Node.js](https://nodejs.org/) (Versão 16 ou superior)
- [Yarn](https://yarnpkg.com/) (Versão 1.22.22 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) ou [Xcode](https://developer.apple.com/xcode/) (para simulação)

## Configuração do Ambiente

1. Instale o Expo CLI globalmente (se ainda não estiver instalado):

   ```bash
   npm install -g expo-cli
   ```

2. Clone o repositório do projeto:

   ```bash
    git clone
    cd badaro
   ```

3. Instale as dependências do projeto usando Yarn:
   ```bash
    yarn install
   ```

## Executando o Aplicativo

Após configurar seu ambiente, você pode iniciar o aplicativo usando um dos seguintes comandos, dependendo da plataforma de sua escolha:

### Android

```bash
yarn android
```

### Android

```bash
yarn ios
```

## Tecnologicas utilizadas:

- [Expo](https://expo.dev/) - Utilizado o expo bare workflow
- [TypeScript](https://www.typescriptlang.org/)
- [@gorhom/bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) - Uma biblioteca performática e totalmente configurável para criar Bottom Sheets no React Native.
  RESTFUL
- [Axios](https://axios-http.com/) - Cliente para realizar as request HTTP
- [styled-components](https://styled-components.com/) - Biblioteca para adicionar estilização e gerenciar
  o design system do aplicativo
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) e [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - Bibliotecas para animações e gestos no React Native.

## Recursos

## Arquitetura Utilizada

No desenvolvimento deste aplicativo, adotei diversos conceitos e padrões de desenvolvimento, além de seguir as boas práticas.

### Padrões de Desenvolvimento

Implementei vários padrões de design, incluindo:

- **Clean Code**: Empreguei princípios de Clean Code para tornar o código mais legível, simples e compreensível. Isso inclui nomeação clara de variáveis e funções, redução de complexidade das funções e hooks.
- **DDD (Domain-Driven Design)**: Estruturei e separei o projeto em módulos seguindo conceitos do DDD. Cada módulo mantém seus próprios componentes, serviços, estados, páginas e regras específicas.
- **SOLID**: Princípios de design orientado a objetos adotados para melhorar a manutenção e extensão do código.
- **Composition Pattern**: Adotado para permitir uma composição de componentes mais flexível e clara, facilitando a reutilização e a manutenção do código.

### Estrutura do Módulo Home

O módulo Home é um exemplo da separação detalhada dentro do aplicativo:

- **Componentes**: Componentes específicos do módulo e não compartilhados com outros módulos.

- **Models**: Definem as tipagens utilizadas no módulo.

- **Services e Stores**: `Services` gerenciam lógicas e requests complexas. `Stores` mantêm as configurações e estados globais do módulo usando Zustand.

- **Utils**: Funções auxiliares usadas dentro do módulo.

### Shared: Componentes e Configurações Globais

O diretório `Shared` contém elementos usados em todo o aplicativo:

- **Design System**: Centralizado usando `styled-components`, permite um acesso uniforme e centralizado ao design system.

- **Config**: Configurações gerais do aplicativo, como mapeamento de tab bars, lista pré-selecionada de criptomoedas e suas cores.

- **Hooks**: Hooks personalizados para chamadas de serviços via protocolos HTTP e WebSocket.

- **Libs**: Configurações de bibliotecas externas, como `react-query` e `axios` para requests HTTP, e `react-native-responsive-font-size` para auxiliar na responsividade.

- **Providers**: Centraliza serviços e bibliotecas que funcionam como provedores no contexto do React.

- **Routes**: Configurações das rotas globais do aplicativo.
