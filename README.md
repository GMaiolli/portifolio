# Portfólio Pessoal - React + Tailwind CSS

Portfólio pessoal desenvolvido para a atividade MAPA de Programação Front-End.
Tema escuro, minimalista, com detalhes em vermelho escuro.

Site hospedado: https://maiolli.vercel.app/

## Antes de entregar: o que preencher

Este projeto já vem funcional, mas com **dados de exemplo** que precisam ser
substituídos pelos seus dados reais. Você só precisa editar dois arquivos:

1. **`src/data/profile.js`** - nome, e-mail, links do GitHub e do LinkedIn,
   dados do artigo publicado na SODEBRAS (título, ano, link do PDF) e a lista
   de tecnologias exibida na página "Sobre".
2. **`src/data/projects.js`** - seus projetos reais (título, descrição, stack
   utilizada, link do repositório e, opcionalmente, link de demonstração).

Todos os campos que precisam ser alterados estão marcados entre colchetes,
por exemplo: `[SEU NOME COMPLETO]`.

Também vale revisar o `<title>` e as meta tags em `index.html`.

## Como rodar o projeto localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento (http://localhost:5173)
npm run dev

# 3. Gerar a versão de produção (gera a pasta /dist)
npm run build

# 4. Pré-visualizar a versão de produção
npm run preview
```

## Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis (Navbar, Footer, SEO, etc.)
├── data/           # Dados editáveis: profile.js e projects.js
├── hooks/          # Hooks customizados (useScrollReveal)
├── pages/          # Uma página por rota (Home, About, Projects, Contact)
├── App.jsx         # Definição das rotas
├── main.jsx        # Ponto de entrada da aplicação
└── index.css       # Estilos globais e tokens de design
```

## Site hospedado

O projeto está disponível em:

- https://maiolli.vercel.app/

## Tecnologias utilizadas

- [React](https://react.dev/) - biblioteca para construção da interface
- [Vite](https://vitejs.dev/) - build tool e servidor de desenvolvimento
- [React Router](https://reactrouter.com/) - roteamento entre as páginas
- [Tailwind CSS](https://tailwindcss.com/) - estilização utilitária
- [Lucide React](https://lucide.dev/) - ícones
