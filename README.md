

<h1 align="center">
  Weather Now
</h1>

<h3 align="center">
  Weather Now é uma aplicação com intuito de exibir as condições climáticas de três cidades: Nuuk/GL, Urubici/BR e Nairobi/KE
</h3>


## 💻 Detalhes da aplicação
Weather Now exibe as condições climáticas usando a API [OpenWeather](https://openweathermap.org/), com as seguintes características:

- Temperatura é exibida em graus Celsius;
- Umidade é exibida em percentual;
- Pressão é exibida em hectoPascal (hPa);
- As temperaturas são exibidas em cores diferentes:
  - Igual ou abaixo de 5 graus, são exibidas em azul;
  - Acima de 5 graus e igual ou abaixo de 25 graus, são exibidas em laranja;
  - Acima de 25 graus, são exibidas em vermelho.
- As condições climáticas são guardadas em cache no front-end por 10 minutos;
- A aplicação atualiza as condições climáticas automaticamente a cada 10 minutos.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a aplicação

```bash

# Clone o repositório
$ git clone git@github.com:reginaldoboeke/weather-now.git

# Acesse a pasta do projeto no terminal
$ cd weather-now

# Instale as dependências
$ yarn install
# ou
$ npm install

# Execute a aplicação
$ yarn start
# ou 
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

#### 🎲 Rodando os testes
```bash
# Na pasta raíz do projeto, execute
$ yarn test
# ou
$ npm run test
```
---

## 🛠 Principais tecnologias

-   **[React](https://reactjs.org/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Sass](https://github.com/sass/dart-sass)**
-   **[Craco](https://github.com/gsoft-inc/craco)**
-   **[Jest](https://jestjs.io/)** (para testes)

> Veja o arquivo  [package.json](https://github.com/reginaldoboeke/weather-now/blob/main/package.json)

---

## O que melhorar?
Os componentes de UI poderiam ter sido desenvolvidos em um projeto separado usando Stencil.js por exemplo, onde seriam exportados como WebComponents, sendo possível usa-los com qualquer *framework* de front-end, ou até mesmo com *Vanilla Js*.