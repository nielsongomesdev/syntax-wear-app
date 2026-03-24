# TechStation E-commerce

Projeto de e-commerce com foco em produtos de tecnologia, desenvolvido com React, TypeScript e Tailwind CSS.

## Sobre o projeto

A TechStation é uma vitrine de produtos para setup e produtividade, com fluxo completo de navegação entre home, categorias, listagem, detalhe e carrinho.

Principais recursos:
- Catálogo de produtos por categoria.
- Página de detalhe com cálculo de frete por CEP.
- Carrinho com incremento/decremento de quantidade.
- Persistência do carrinho no navegador com localStorage.
- Páginas de autenticação (login e cadastro) com validação de formulário.

## Stack

- React 19
- TypeScript
- Vite
- TanStack Router (file-based routes)
- Tailwind CSS v4
- React Hook Form
- Zod
- React Icons

## Estrutura do projeto

```text
src/
	assets/        # Fontes e imagens
	components/    # Componentes reutilizáveis de UI
	contexts/      # Estado global do carrinho
	interfaces/    # Tipagens TypeScript
	mocks/         # Dados mockados de produtos e categorias
	pages/         # Rotas e páginas da aplicação
	router/        # Árvore de rotas gerada
	styles/        # Estilos globais
	utils/         # Utilitários (formatação, validações)
```

## Rotas principais

- `/` Home
- `/products` Lista de produtos
- `/products/category/$category` Lista por categoria
- `/products/$productId` Detalhe do produto
- `/about` Sobre
- `/our-stores` Nossas lojas
- `/sign-in` Login
- `/sign-up` Cadastro

## Como executar

Pré-requisitos:
- Node.js 18+
- npm 9+

Instalação:

```bash
git clone https://github.com/nielsongomesdev/techstation-ecommerce.git
cd techstation-ecommerce
npm install
```

Ambiente de desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Preview local do build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Sobe preview do build |
| `npm run lint` | Executa ESLint |

