# Portfólio — Gabriel Maiolli

Portfólio profissional em português, com foco em desenvolvimento Full Stack, automação e IA aplicada. Site estático hospedado na Vercel: https://maiolli.vercel.app/.

## Direção e arquitetura

- Identidade visual: azul-marinho, violeta e acentos verde-água; diagramas em CSS e SVG sem imagens pesadas.
- React + TypeScript + Vite + Tailwind CSS. O projeto existente já usava React/Vite; a migração para TypeScript melhora a manutenção sem exigir um servidor.
- Página inicial com seções ancoradas e estudo de caso em `/projetos/pesquisa-ndvi-cnn`.
- Conteúdo estruturado em `src/data/content.ts`. Componentes reutilizáveis em `src/components/`.
- Contato por links diretos de e-mail, WhatsApp e LinkedIn. Não há coleta ou armazenamento de dados no site.

## Executar

Requer Node.js 20.19 ou superior (ou 22.12+).

```bash
npm install
npm run dev
```

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Atualizar conteúdo

1. Edite perfil, experiências, stack, serviços ou projetos em `src/data/content.ts`.
2. Para um novo projeto, adicione um objeto ao array `projects` com problema, participação, decisões, desafios, resultados verificáveis, imagens, links e status. Crie a página de estudo de caso quando houver conteúdo suficiente.
3. Confirme o endereço do GitHub antes de preencher `profile.github`; enquanto for `null`, o link permanece oculto.
4. Revise datas, descrições e links antes de publicar. Não inclua código ou dados confidenciais de empresas.

## Deploy na Vercel

Conecte este repositório à Vercel com framework **Vite**, comando de build `npm run build` e diretório de saída `dist`. `vercel.json` encaminha rotas internas ao aplicativo para permitir acesso direto ao estudo de caso. Um push na branch configurada na Vercel inicia o deploy conforme as configurações do projeto.

## Etapas futuras

- Adicionar estudos de caso públicos com evidências e imagens reais.
- Confirmar o perfil do GitHub e detalhes ainda não fornecidos do estágio na B5S.
- Avaliar pré-renderização se o tráfego orgânico para páginas internas se tornar prioritário. A página inicial possui metadados no HTML; a página de estudo de caso é renderizada no cliente.

## Fontes públicas

- [Artigo na Revista Sodebras](https://revista.sodebras.com.br/index.php/revista/article/view/147): autoria, resumo, data e DOI.
- [Perfil público no LinkedIn](https://www.linkedin.com/in/gabriel-maiolli-de-oliveira/).
