# KeebLab - Guia Rápido de Início

## 🚀 Começando Agora

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm start
```

O site abrirá automaticamente em `http://localhost:3000`

### 3. Estrutura do Projeto

```
keebLab/
├── src/
│   ├── components/          # Componentes React (a criar)
│   ├── context/             # Context API (já criado)
│   ├── data/                # Dados dos layouts (estrutura criada)
│   ├── hooks/               # Custom hooks (a criar)
│   └── utils/               # Funções utilitárias (a criar)
├── public/                  # Arquivos públicos
└── PROJECT_DOCUMENTATION.md # Documentação completa
```

## 📋 Próximas Tarefas Prioritárias

### Tarefa 1: Criar Dados dos Layouts
**Prioridade: ALTA**

Precisa criar os arquivos JSON com as posições das teclas:
- [Avalanche](https://github.com/vlkv/avalanche/)
- [Sofle](https://github.com/josefadamcik/SofleKeyboard)

**Como fazer:**
1. Use ferramentas como [Keyboard Layout Editor](http://www.keyboard-layout-editor.com/) para criar layouts visualmente
2. Ou crie manualmente os arquivos JSON no formato esperado (ver `src/data/layouts/avalanche.json`)
3. Adicione as coordenadas de cada tecla baseado em imagens ou documentação dos repositórios

**Formato esperado para cada tecla:**
```json
{
  "id": "left_0_0",
  "row": 0,
  "col": 0,
  "x": 0,
  "y": 0,
  "width": 1,
  "height": 1,
  "side": "left"
}
```

### Tarefa 2: Criar Componente LayoutSelector
**Prioridade: ALTA**

Criar componente que permite escolher entre Avalanche e Sofle.

**Arquivo:** `src/components/LayoutSelector/LayoutSelector.js`

**Funcionalidades:**
- Botões/cards para cada layout
- Descrição de cada layout
- Atualizar contexto ao selecionar

### Tarefa 3: Criar Componente KeyboardPreview
**Prioridade: ALTA**

Criar componente que renderiza o teclado visualmente.

**Arquivo:** `src/components/KeyboardPreview/KeyboardPreview.js`

**Funcionalidades:**
- Renderizar teclas usando SVG
- Mostrar cores das keycaps
- Mostrar features (rotary, tenting, etc.)

### Tarefa 4: Criar Componente CustomizationPanel
**Prioridade: MÉDIA**

Criar painel de customização completo.

**Arquivos:**
- `src/components/CustomizationPanel/CustomizationPanel.js`
- `src/components/CustomizationPanel/ColorPicker.js`
- `src/components/CustomizationPanel/OptionToggle.js`
- `src/components/CustomizationPanel/RotarySelector.js`

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Deploy no GitHub Pages
npm run deploy

# Testar build localmente (após build)
npx serve -s build
```

## 📚 Recursos para Criar Dados dos Layouts

### Keyboard Layout Editor (KLE)
- Site: http://www.keyboard-layout-editor.com/
- Permite criar layouts visualmente
- Exporta JSON que pode ser adaptado

### QMK Configurator
- Site: https://config.qmk.fm/
- Tem layouts de muitos teclados
- Pode ajudar a entender posições

### Repositórios Originais
- [Avalanche](https://github.com/vlkv/avalanche/)
- [Sofle](https://github.com/josefadamcik/SofleKeyboard)
- Verificar imagens e documentação para referência

## 🎯 Checklist de Progresso

- [x] Estrutura básica do projeto criada
- [x] Context API configurado
- [x] Estrutura de dados criada (placeholders)
- [ ] Dados completos dos layouts extraídos
- [ ] Componente LayoutSelector criado
- [ ] Componente KeyboardPreview criado
- [ ] Componente CustomizationPanel criado
- [ ] Integração completa funcionando
- [ ] Deploy no GitHub Pages

## 💡 Dicas

1. **Comece simples**: Primeiro faça renderizar as teclas básicas, depois adicione features
2. **Use SVG**: Mais simples que Canvas para começar, fácil de estilizar
3. **Teste incrementalmente**: Teste cada componente isoladamente antes de integrar
4. **Consulte a documentação**: Veja `PROJECT_DOCUMENTATION.md` para detalhes completos

## 🐛 Problemas Comuns

### Erro ao fazer deploy
- Verifique se o `homepage` no `package.json` está correto
- Certifique-se de ter feito `npm run build` antes

### Componentes não aparecem
- Verifique se importou corretamente
- Verifique se o Context Provider está envolvendo o App

### Layout não carrega
- Verifique se os arquivos JSON estão no formato correto
- Verifique se o caminho de importação está correto

---

**Última atualização**: Data de criação
**Status**: Estrutura inicial criada, pronto para desenvolvimento
