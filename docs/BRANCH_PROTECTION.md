# Branch Protection Setup

Este documento explica como configurar a proteção da branch `main` no GitHub.

## 🎯 Objetivo

Proteger a branch `main` para garantir que:
- Apenas Pull Requests possam fazer merge na main
- Todos os testes devem passar antes do merge
- Pelo menos 1 aprovação é necessária
- Apenas branches que vêm do `dev` podem fazer merge

## 🔧 Configuração Automática

### Pré-requisitos

1. **GitHub CLI instalado**:
   ```bash
   brew install gh
   ```

2. **Autenticação no GitHub**:
   ```bash
   gh auth login
   ```
   - Escolha "GitHub.com"
   - Escolha "HTTPS"
   - Escolha "Login with a web browser"
   - Siga as instruções no navegador

### Executar o Script

```bash
./scripts/setup-branch-protection.sh
```

## 🔧 Configuração Manual

Se preferir configurar manualmente via interface do GitHub:

### 1. Acesse as Configurações do Repositório

1. Vá para: https://github.com/danielafgsilva/dogwarts-website
2. Clique em **Settings**
3. No menu lateral, clique em **Branches**

### 2. Adicione Regra de Proteção

1. Clique em **Add rule**
2. Em **Branch name pattern**, digite: `main`
3. Configure as seguintes opções:

#### ✅ Required Status Checks
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- Selecione os checks:
  - `ci/cd`
  - `test`

#### ✅ Required Pull Request Reviews
- ✅ **Require a pull request before merging**
- **Required number of reviewers**: `1`
- ✅ **Dismiss stale PR approvals when new commits are pushed**
- ✅ **Require review from code owners** (opcional)

#### ✅ Restrictions
- ✅ **Restrict pushes that create files**
- Deixe vazio (sem usuários/teams específicos)

#### ✅ Additional Rules
- ❌ **Allow force pushes**
- ❌ **Allow deletions**
- ✅ **Require conversation resolution before merging**
- ❌ **Lock branch**

### 3. Salvar

Clique em **Create** para salvar as regras.

## 📋 Regras Configuradas

Após a configuração, a branch `main` terá as seguintes proteções:

| Regra | Status | Descrição |
|-------|--------|-----------|
| **Direct pushes** | ❌ Bloqueado | Não é possível fazer push direto |
| **Force pushes** | ❌ Bloqueado | Não é possível forçar push |
| **Branch deletion** | ❌ Bloqueado | Não é possível deletar a branch |
| **Status checks** | ✅ Obrigatório | CI/CD deve passar |
| **PR reviews** | ✅ Obrigatório | Pelo menos 1 aprovação |
| **Up-to-date** | ✅ Obrigatório | Branch deve estar atualizada |
| **Conversation resolution** | ✅ Obrigatório | Discussões devem ser resolvidas |

## 🔄 Workflow de Desenvolvimento

### Para fazer mudanças na main:

1. **Criar branch a partir do dev**:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/nova-funcionalidade
   ```

2. **Fazer as mudanças**:
   ```bash
   # Fazer commits das mudanças
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Push da branch**:
   ```bash
   git push origin feature/nova-funcionalidade
   ```

4. **Criar Pull Request**:
   - Vá para: https://github.com/danielafgsilva/dogwarts-website
   - Clique em **New Pull Request**
   - Base: `main` ← Compare: `feature/nova-funcionalidade`
   - Preencha o título e descrição
   - Clique em **Create Pull Request**

5. **Aguardar aprovação**:
   - Os testes CI/CD rodarão automaticamente
   - Aguarde a aprovação de pelo menos 1 revisor
   - Resolva qualquer discussão se necessário

6. **Merge**:
   - Após aprovação e testes passarem, clique em **Merge Pull Request**

## 🚨 Troubleshooting

### Erro: "Required status check is not set"

Se aparecer este erro, verifique se:
1. O workflow CI/CD está configurado corretamente
2. O nome do job no workflow corresponde ao nome no branch protection
3. O workflow está rodando na branch correta

### Erro: "Branch is not up to date"

Se aparecer este erro:
1. Atualize sua branch com a main:
   ```bash
   git checkout feature/sua-branch
   git merge main
   git push origin feature/sua-branch
   ```

### Erro: "No reviews required"

Se aparecer este erro:
1. Verifique se a branch protection está configurada corretamente
2. Certifique-se de que há pelo menos 1 revisor disponível
3. Verifique se você não está tentando fazer merge de uma branch para ela mesma

## 📚 Referências

- [GitHub Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [GitHub CLI Documentation](https://cli.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
