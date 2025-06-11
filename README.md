# 🚀 Iniciando um Projeto React com Vite

Este guia explica como configurar um novo projeto React utilizando o **Vite**, uma ferramenta de build extremamente rápida e moderna. Também mostra como continuar trabalhando em um projeto existente, como quando você clona um repositório do GitHub.

---

## 🧰 Requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes que já vem com o Node.js)
- [Git](https://git-scm.com/) (para clonar repositórios, opcional para novo projeto)

---

## 🆕 Criar um novo projeto React com Vite

### 1. Crie o projeto

```bash
npm create vite@latest nome-do-projeto -- --template react
````

### 2. Acesse a pasta do projeto

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O terminal mostrará um link como `http://localhost:5173`, onde você pode acessar o projeto no navegador.

---

## 🔄 Clonando e rodando um projeto existente

Se você já clonou um repositório que contém um projeto React + Vite, siga os passos abaixo:

### 1. Clone o repositório (caso ainda não tenha feito isso)

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Acesse a pasta do projeto

```bash
cd nome-do-repositorio
```

### 3. Instale as dependências do projeto

```bash
npm install
```

### 4. Rode o projeto

```bash
npm run dev
```

---

## 🧼 Dicas úteis

* Para abrir o projeto no VS Code:

```bash
code .
```

* Caso tenha erros relacionados a pacotes, tente remover a pasta `node_modules` e o arquivo `package-lock.json` e instalar novamente:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📦 Scripts disponíveis

* `npm run dev` — inicia o servidor de desenvolvimento
* `npm run build` — cria a versão de produção do projeto
* `npm run preview` — pré-visualiza a build de produção localmente

---

## 📁 Estrutura básica do projeto criado com Vite

```
nome-do-projeto/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ✨ Recursos úteis

* Documentação do Vite: [https://vitejs.dev/](https://vitejs.dev/)
* Documentação do React: [https://react.dev/](https://react.dev/)

---

## ⚛️ Conceitos Básicos do React com Exemplos

### 🧠 `useState`

O `useState` é um Hook do React usado para criar e gerenciar o estado em componentes funcionais.

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}
```

---

### 🖱️ `onClick`

A propriedade `onClick` permite adicionar eventos de clique a elementos, como botões.

```jsx
function Alerta() {
  function mostrarMensagem() {
    alert('Você clicou no botão!');
  }

  return <button onClick={mostrarMensagem}>Clique aqui</button>;
}
```

---

### 📦 `props`

As **props** (propriedades) permitem passar dados de um componente pai para um componente filho.

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

function App() {
  return <Saudacao nome="Maria" />;
}
```

---

### 👶 `children`

A **prop especial** `children` representa o conteúdo passado entre as tags de um componente.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Bem-vindo</h2>
      <p>Este é um conteúdo dentro do Card.</p>
    </Card>
  );
}
```

---

### 🔁 `map` e arrays

Você pode usar o método `map()` para renderizar listas de elementos a partir de arrays.

```jsx
function ListaDeTarefas() {
  const tarefas = ['Estudar', 'Lavar roupa', 'Fazer exercícios'];

  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}
```

> **Dica:** Sempre use a prop `key` ao renderizar listas, para otimizar a performance do React.

---

### 🔍 `filter` e arrays

O método `filter()` permite **filtrar elementos de um array** com base em uma condição.

```jsx
function ListaFiltrada() {
  const nomes = ['Ana', 'Bruno', 'Carlos', 'Amanda', 'Beatriz'];
  const nomesComA = nomes.filter(nome => nome.startsWith('A'));

  return (
    <ul>
      {nomesComA.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}
```

> Nesse exemplo, apenas os nomes que começam com a letra **A** serão exibidos.

---
