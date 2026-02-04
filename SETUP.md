# 🚀 Setup e Execução do KeebLab

## ✅ Status

- ✅ `npm install` - **Funcionando**
- ✅ `npm run build` - **Funcionando**
- ✅ `npm start` - **Pronto para uso**

## 📋 Comandos

### Instalação (primeira vez ou após mudanças no package.json)

```bash
# Certifique-se de estar no diretório raiz do projeto
cd /Users/erickmob/Documents/code/keebLab

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm start
```

O site abrirá automaticamente em `http://localhost:3000`

### Build para Produção

```bash
# Criar build otimizado
npm run build
```

### Deploy no GitHub Pages

```bash
# Fazer deploy
npm run deploy
```

## ⚠️ Problemas Comuns

### Erro: "ENOENT: no such file or directory, uv_cwd"

**Causa:** Você está tentando executar npm em um diretório que não existe mais.

**Solução:**
```bash
# Certifique-se de estar no diretório correto
cd /Users/erickmob/Documents/code/keebLab

# Verifique se está no lugar certo
pwd
# Deve mostrar: /Users/erickmob/Documents/code/keebLab

# Agora execute npm install ou npm start
npm install
npm start
```

### Erro: "Cannot find module"

**Solução:**
```bash
# Remover node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já está em uso

**Solução:**
```bash
# O React perguntará se você quer usar outra porta
# Ou você pode especificar uma porta diferente:
PORT=3001 npm start
```

## 📁 Estrutura do Projeto

```
keebLab/
├── public/
│   ├── images/          # Imagens PNG/JPEG
│   └── models/          # Modelos 3D GLB
├── src/
│   ├── components/      # Componentes React
│   ├── context/         # Context API
│   └── App.js          # Componente principal
├── package.json
└── README.md
```

## 🎯 Próximos Passos

1. Execute `npm start` para ver o projeto funcionando
2. Teste as opções de customização no painel lateral
3. Veja o preview atualizar em tempo real

---

**Nota:** Sempre execute os comandos npm do diretório raiz do projeto (`/Users/erickmob/Documents/code/keebLab`), não de subpastas.
