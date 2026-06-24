# Configuração do Sanity CMS

Este documento explica como configurar e usar o Sanity CMS no projeto Dogwarts.

## 🚀 Configuração Inicial

### 1. Criar Projeto no Sanity

1. Acesse [sanity.io](https://sanity.io) e crie uma conta
2. Clique em "Create new project"
3. Escolha um nome para o projeto (ex: "dogwarts-cms")
4. Selecione o dataset "production"
5. Anote o **Project ID** que será gerado

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production

# Sanity Studio (para desenvolvimento)
SANITY_STUDIO_PROJECT_ID=seu_project_id_aqui
SANITY_STUDIO_DATASET=production

# Token para scripts (opcional)
SANITY_API_TOKEN=seu_token_aqui
```

### 3. Instalar Dependências

```bash
pnpm install
```

### 4. Popular com Dados Iniciais

```bash
# Primeiro, obtenha um token de API do Sanity
# Vá para: https://sanity.io/manage
# Selecione seu projeto > API > Tokens
# Crie um token com permissões de escrita

# Adicione o token ao .env.local
echo "SANITY_API_TOKEN=seu_token_aqui" >> .env.local

# Execute o script de seed
node scripts/seed-sanity.js
```

### 5. Iniciar o Projeto

```bash
pnpm dev
```

## 📝 Como Usar

### Acessar o Sanity Studio

- **URL**: `http://localhost:3000/studio`
- **Login**: Use sua conta do Sanity

### Estrutura do Conteúdo

O CMS está organizado nas seguintes seções:

#### 🏠 Página Inicial
- **Hero Section**: Título, descrição, botões CTA
- **Serviços**: Lista de serviços em destaque
- **Testemunhos**: Testemunhos dos clientes
- **CTA**: Seção de call-to-action

#### 🛠️ Serviços
- **Hero**: Título e descrição da página
- **Serviços Principais**: Lista detalhada de serviços
- **Serviços Adicionais**: Serviços complementares
- **Planos de Preços**: Diferentes opções de pacotes

#### 👥 Sobre Nós
- **Hero**: História da empresa
- **História da Fundadora**: Conteúdo sobre a criação
- **Valores**: Valores da empresa
- **Galeria**: Fotos da equipe e cães

#### 💬 Testemunhos
Os testemunhos são agora **avaliações reais do Google**, obtidas via Places API
(ver `lib/google-reviews.ts`). Não são geridos no Sanity — basta configurar
`GOOGLE_PLACES_API_KEY` e o Place ID (`GOOGLE_PLACE_ID` ou
`siteSettings.contact.googlePlaceId`).

#### ⚙️ Configurações do Site
- **Informações Básicas**: Nome, descrição, logo
- **Contacto**: Telefone, email, endereço
- **Redes Sociais**: Links para redes sociais
- **SEO**: Meta tags e configurações
- **Rodapé**: Textos do rodapé
- **Negócio**: Informações da empresa

## 🎨 Personalização

### Cores dos Serviços

Os serviços usam cores específicas:
- **Primary**: Amarelo (#FDCF4D) - Petsitting
- **Accent**: Roxo (#8B5CF6) - Dogwalking
- **Chart 4**: Verde (#10B981) - Daycare
- **Chart 5**: Laranja (#F59E0B) - Estadia

### Ícones

Os ícones disponíveis são:
- `Heart` - Coração
- `MapPin` - Localização
- `Clock` - Relógio
- `Home` - Casa
- `Shield` - Escudo
- `Camera` - Câmera
- `MessageCircle` - Mensagem

## 🔧 Desenvolvimento

### Adicionar Novos Campos

1. Edite o schema correspondente em `sanity/schemas/`
2. Adicione o campo com `defineField()`
3. Atualize as queries em `lib/sanity.ts`
4. Modifique os componentes para usar o novo campo

### Adicionar Novos Tipos de Conteúdo

1. Crie um novo schema em `sanity/schemas/`
2. Adicione ao `index.ts` dos schemas
3. Crie queries no `lib/sanity.ts`
4. Crie componentes para exibir o conteúdo

## 🚀 Deploy

### Vercel

1. Configure as variáveis de ambiente no Vercel
2. Faça o deploy normalmente
3. O Sanity Studio estará disponível em `/studio`

### Outros Provedores

O Sanity funciona com qualquer provedor de hosting que suporte Next.js.

## 📚 Recursos Úteis

- [Documentação do Sanity](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity](https://www.sanity.io/guides/nextjs-app-router)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)

## 🆘 Troubleshooting

### Erro de CORS
- Verifique se o domínio está configurado no Sanity
- Vá para: https://sanity.io/manage > Seu projeto > API > CORS origins

### Erro de Token
- Verifique se o token tem as permissões corretas
- Crie um novo token se necessário

### Erro de Build
- Verifique se todas as variáveis de ambiente estão configuradas
- Execute `pnpm build` localmente para testar

## 📞 Suporte

Para dúvidas sobre o Sanity CMS:
- [Documentação Oficial](https://www.sanity.io/docs)
- [Comunidade](https://www.sanity.io/community)
- [Discord](https://discord.gg/sanity)
