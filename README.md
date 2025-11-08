# 🎮 H3iisk Links

Uma página moderna e responsiva para centralizar todos os links úteis do streamer **H3iisk**.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para criar uma página de links centralizada do streamer H3iisk, facilitando o acesso dos fãs a todas as suas redes sociais e canais de conteúdo. A página apresenta um design limpo e moderno, com foco na experiência do usuário.

### 🌟 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Links para todas as redes sociais do H3iisk
- ✅ Interface intuitiva e clean
- ✅ Efeitos de hover e transições suaves
- ✅ Otimizada para dispositivos móveis e desktop

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server extremamente rápido
- **Tailwind CSS 4** - Framework CSS utility-first
- **ESLint** - Linter para manter a qualidade do código

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd h3iisk-links
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Outros Comandos Disponíveis

```bash
# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Executar linter
npm run lint
```

## 📱 Links Incluídos

A página centraliza os seguintes links do H3iisk:

- 🎮 **Twitch** - Canal principal de lives
- 📺 **YouTube** - Conteúdo gravado e highlights
- 📸 **Instagram** - Fotos e stories
- 🏢 **PhantomLab** - Empresa/Organização
- 📧 **Email** - Contato direto

## 🎨 Design

O design foi pensado para ser:

- **Minimalista**: Layout clean e fácil de navegar
- **Responsivo**: Funciona perfeitamente em mobile e desktop
- **Acessível**: Cores contrastantes e boa legibilidade
- **Moderno**: Uso de sombras, bordas arredondadas e transições suaves

## � SEO e Otimizações

O projeto implementa diversas práticas de SEO para melhor indexação:

### Meta Tags Implementadas

- ✅ **Open Graph** (Facebook, LinkedIn) - Preview rico ao compartilhar
- ✅ **Twitter Cards** - Cartões otimizados para Twitter/X
- ✅ **Meta Description** - Descrição otimizada para buscadores
- ✅ **Meta Keywords** - Palavras-chave relevantes
- ✅ **Canonical URL** - Evita conteúdo duplicado
- ✅ **Structured Data (JSON-LD)** - Schema.org para melhor compreensão dos buscadores

### Arquivos de SEO

- 📄 `robots.txt` - Instruções para crawlers
- 🗺️ `sitemap.xml` - Mapa do site para indexação

### Próximos Passos de SEO (Recomendado)

1. **Criar imagens otimizadas para redes sociais:**

   - `public/og-image.jpg` (1200x630px) - Para Open Graph
   - `public/twitter-image.jpg` (1200x600px) - Para Twitter Card
   - `public/h3iisk-profile.jpg` - Foto de perfil do H3iisk

2. **Atualizar URLs no `index.html`:**
   - Substituir `https://h3iisk.com/` pela URL real do projeto
3. **Adicionar Google Analytics ou similar:**

   - Para monitorar acessos e comportamento dos usuários

4. **Implementar Performance:**

   - Lazy loading de imagens
   - Minificação e compressão de assets
   - CDN para servir conteúdo estático

5. **Criar um favicon personalizado:**
   - Substituir o `vite.svg` por um favicon do H3iisk

## �📄 Estrutura do Projeto

```
src/
├── assets/
│   ├── h3iisk-img.jpg    # Foto do streamer
│   └── icons/            # Ícones personalizados das redes sociais
│       ├── instagram.tsx
│       ├── mail.tsx
│       ├── twitch.tsx
│       └── youtube.tsx
├── App.tsx              # Componente principal
├── App.css              # Estilos específicos
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com o projeto! Abra uma issue ou envie um pull request.

## 📝 Licença

Este projeto é de uso pessoal para o streamer H3iisk.
