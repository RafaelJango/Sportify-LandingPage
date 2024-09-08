# Sportify - Loja Fictícia de Artigos Esportivos

Este projeto foi desenvolvido como parte do curso de Engenharia de Software na FIAP, utilizando **React** para criar a página de uma loja fictícia de artigos esportivos chamada *Sportify*. O foco do projeto é aplicar conceitos de desenvolvimento web e React, construindo uma interface moderna e funcional.

## Visão Geral

O **Sportify** é uma loja virtual fictícia onde os usuários podem encontrar equipamentos esportivos de alta qualidade para diversas modalidades. A página principal apresenta um design responsivo, chamativo e acessível para os clientes, com o objetivo de oferecer uma ótima experiência de compra online.

## Funcionalidades

- **Página Inicial**: Uma página de boas-vindas que destaca a missão da loja, oferecendo uma navegação simples e intuitiva.
- **Navegação**: Links de navegação para as seções *Home*, *Produtos*, *Sobre* e *Contato*.
- **Design Responsivo**: A página se adapta bem a diferentes tamanhos de tela, incluindo dispositivos móveis.
- **Botão de Chamada para Ação**: Um botão "Comprar Agora" que simula o redirecionamento para uma página de compras.

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção da interface de usuário.
- **HTML5 & CSS3**: Estruturação e estilização das páginas.
- **JavaScript (ES6+)**: Funcionalidades interativas.
- **Git**: Controle de versão.
- **Vercel** (ou outra plataforma de deploy, se aplicável): Hospedagem e deploy do projeto (se houver).

## Como Executar o Projeto Local

1. Clone este repositório:

   ```bash
   git clone https://github.com/RafaelJango/Sportify.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Sportify
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:

   ```
   http://localhost:3000
   ```

## Estrutura de Pastas

```
Sportify/
│
├── node_modules/            # Dependências do projeto
├── public/                  # Arquivos públicos e estáticos
├── src/                     # Arquivos de código-fonte
│   ├── assets/              # Arquivos de mídia (imagens, logos, etc.)
│   │   └── imgs/            # Imagens usadas no projeto
│   ├── components/          # Componentes React reutilizáveis
│   ├── pages/               # Páginas principais
│   │   ├── Contato/         # Página de Contato
│   │   ├── Error/           # Página de Erro
│   │   ├── Home/            # Página Inicial
│   │   ├── Produtos/        # Página de Produtos
│   │   └── Sobre/           # Página Sobre a loja
│   ├── routes/              # Configuração das rotas de navegação
│   ├── styles/              # Arquivos de estilo CSS
│   ├── App.jsx              # Componente principal da aplicação
│   ├── Layout.jsx           # Layout principal do site
│   └── main.jsx             # Ponto de entrada do React
│
├── index.html               # Arquivo HTML principal
├── package.json             # Configurações e dependências do projeto
├── vite.config.js           # Configurações do Vite
├── .gitignore               # Arquivos ignorados pelo Git
├── eslint.config.js         # Configuração do ESLint para linting do código
└── README.md                # Documentação do projeto
```

## Autor

- **Nome do Aluno**: Rafael Jango
- **Instituição**: FIAP
- **Curso**: Engenharia de Software
