# Syntax Wear

Uma aplicação de e-commerce para venda de vestuário desenvolvida com React, TypeScript e Tailwind CSS. O projeto oferece uma experiência completa de compra com carrinho, autenticação de usuários e catálogo de produtos.

## 🎯 Sobre o Projeto

Syntax Wear é uma loja online moderna que permite aos usuários:
- **Navegar por produtos** organizados por categorias
- **Visualizar detalhes** de cada produto
- **Gerenciar o carrinho** de compras
- **Realizar login e cadastro** de conta
- **Pesquisar endereços** via CEP
- **Validar dados** com formulários seguros

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Linguagem tipada
- **Vite** - Bundler rápido
- **TanStack React Router** - Roteamento de páginas
- **Tailwind CSS** - Estilos CSS utilitários
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados
- **React Icons** - Ícones SVG

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes React reutilizáveis
├── pages/            # Páginas da aplicação
├── contexts/         # Context API para estado global
├── router/           # Configuração de rotas
├── styles/           # Estilos globais
├── utils/            # Funções utilitárias
├── mocks/            # Dados mock para desenvolvimento
├── interfaces/       # Tipagens TypeScript
└── assets/           # Imagens e fontes
```

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** (v18 ou superior)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd syntax-wear-app
```

2. Instale as dependências:
```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:5173`

### Build para Produção

Para gerar o build otimizado:
```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/`

### Preview do Build

Para visualizar o build antes de fazer deploy:
```bash
npm run preview
```

### Linting

Para verificar qualidade do código com ESLint:
```bash
npm lint
```

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Compila a aplicação para produção |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Checa qualidade do código |

## 🎨 Componentes Principais

- **Header** - Cabeçalho com logo e navegação
- **Hero** - Seção principal de destaque
- **ProductList** - Lista de produtos
- **ProductCard** - Card individual do produto
- **CartButton/CartDrawer** - Carrinho de compras
- **LoginForm/RegisterForm** - Autenticação
- **Gallery** - Galeria de imagens
- **Footer** - Rodapé com informações

## 🔐 Recursos de Validação

- Validação de CPF
- Validação de endereço via CEP
- Validação de emails e senhas
- Formatação de valores monetários

## 📝 Licença

Todos os direitos reservados.

---

Desenvolvido com ❤️ usando React e TypeScript