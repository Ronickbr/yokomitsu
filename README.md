# Yokomitsu - Website Institucional Oficial (Brasil)

![Yokomitsu Banner](public/images/assets/hero-bg.jpg) 

O site oficial da **Yokomitsu** no Brasil, operado pela **IPS do Brasil**. A Yokomitsu é uma marca global premium de autopeças de suspensão e direção, com presença em 22 países e mais de 40 anos de história.

Este projeto visa fortalecer a presença institucional da marca, transmitindo autoridade, confiança e excelência técnica para distribuidores, lojistas e mecânicos.

## 🚀 Tecnologias

O projeto utiliza o que há de mais moderno no ecossistema web:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) - *Migrado de Middleware para Proxy*
- **Lógica:** [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Banco de Dados & ORM:** [Prisma](https://www.prisma.io/) com SQLite (dev)
- **Internacionalização:** [next-intl](https://next-intl-docs.vercel.app/) (Suporte para pt-BR, en, es)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Processamento de Dados:** [xlsx](https://www.npmjs.com/package/xlsx) (Importação de catálogos)

## ✨ Funcionalidades

### Fase 1 (Atual)
- [x] **Arquitetura Multilíngue:** Suporte completo para Português, Inglês e Espanhol.
- [x] **Migração Next.js 16 (Proxy):** Implementação da nova convenção `proxy.ts` em substituição ao `middleware.ts` para melhor performance e compatibilidade.
- [x] **Design Modern Industrial:** Interface técnica, confiável e premium baseada na logo da marca.
- [x] **Seção Institucional:** História, presença global (22 países) e importador oficial (IPS Brasil).
- [x] **Destaques de Fabricação:** Seção detalhando controle de qualidade e tecnologia.
- [x] **Bento Grid de Produtos:** Apresentação visual das linhas de suspensão e direção.
- [x] **Responsividade Total:** Otimizado para desktop, tablet e mobile.
- [x] **Ajuste Fino de UI:** Mapa mundi com tamanho otimizado para melhor visualização e menos poluição visual.
- [x] **SEO Avançado:** Estrutura semântica e metatags otimizadas.
- [x] **Animações Premium:** Efeitos de contador (Counter Effect) em números de estatísticas e presença global.
- [x] **Mascote Interativo:** Adição do mascote institucional na Hero Section para aumentar o engajamento visual.
- [x] **Catálogo Técnico:** Grid de 4 colunas responsivo e otimizado para navegação rápida.
- [x] **Localização Avançada:** Seletor de idiomas integrado e tradução completa para o padrão industrial Yokomitsu.
- [x] **Seção CTA de Distribuidores:** Novo convite para se tornar um distribuidor com descrição centrada na IPS do Brasil.
- [x] **Cursor Customizado Otimizado:** Implementado com manipulação direta de DOM para latência zero, alinhamento de precisão e visual leve para uma navegação instantânea.
- [x] **Filtros de Busca Avançada:** Implementação de seletores para Ano, Marca e Modelo acima do campo de busca, com lógica de filtragem dinâmica no catálogo.

### Fase 2 (Planejado/Início)
- [ ] **Painel Administrativo:** Gestão de conteúdo e configurações via banco de dados.
- [ ] **Catálogo Completo:** Busca por código, OEM, similar, veículo e montadora.
- [ ] **Importação Automatizada:** Atualização de produtos via planilhas Excel.
- [ ] **Banco de Imagens:** Galeria técnica de produtos.

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 20+
- npm / pnpm / yarn

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/usuario/yokomitsu.git
   cd yokomitsu
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente:**
   Crie um arquivo `.env` baseado no `.env.example` (se disponível) ou configure as URLs de conexão.

4. **Configurar o Banco de Dados (Prisma):**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. **Acessar o projeto:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura de Pastas

- `/messages`: Arquivos JSON de tradução (i18n).
- `/prisma`: Schema do banco de dados e migrações.
- `/public`: Ativos estáticos (imagens, logos, ícones).
- `/src/app`: Rotas e layouts do Next.js (App Router).
- `/src/components`: Componentes React reutilizáveis.
- `/src/lib`: Utilitários e configurações de bibliotecas (Prisma, i18n).
- `/src/proxy.ts`: Lógica de proxy e proteção de rotas (antigo middleware).

## ⚖️ Licença

Este projeto é de uso restrito da **IPS do Brasil** e da marca **Yokomitsu**. Todos os direitos reservados.

---
*Sua direção, seu caminho, seu controle.*
