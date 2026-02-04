# KeebLab - Documentação Completa do Projeto

## 📋 Visão Geral

**KeebLab** é um configurador visual interativo de teclados mecânicos customizados. O site permite que usuários selecionem layouts de teclado (inicialmente Avalanche e Sofle) e personalizem visualmente suas características em tempo real, vendo o resultado imediatamente na tela.

### Inspiração
- Site de referência: https://jhelvy.github.io/splitKbCompare/
- Layouts suportados inicialmente:
  - **Avalanche**: https://github.com/vlkv/avalanche/
  - **Sofle**: https://github.com/josefadamcik/SofleKeyboard

---

## 🎯 Funcionalidades Principais

### Fase 1 - MVP (Minimum Viable Product)
1. **Seleção de Layout**
   - Menu lateral direito com opções: Avalanche e Sofle
   - Preview visual atualiza ao trocar de layout

2. **Customização de Keycaps**
   - Seletor de cor global para todas as teclas
   - Seletor individual de cor por tecla (clicando na tecla)
   - Preview em tempo real das mudanças

3. **Features Básicas**
   - Toggle: Furos para Tenting (sim/não)
   - Toggle: Rotary Encoder (com seletor de posição)
   - Toggle: Com fio / Wireless
   - Toggle: LED Display (OLED)
   - Toggle: RGB por tecla

### Fase 2 - Melhorias (Futuro)
- Seletor de switches (diferentes tipos)
- Exportação de configuração (JSON)
- Exportação de imagem do teclado
- Compartilhamento de links com presets
- Mais layouts de teclado

---

## 🛠️ Stack Tecnológico

### Core
- **React** (v18+)
- **Create React App** ou **Vite** (para build)
- **React Router** (se necessário para rotas futuras)

### Visualização
- **SVG** ou **Canvas** para renderização 2D (mais simples inicialmente)
- **Three.js** (opcional, para renderização 3D futura)

### Estilização
- **CSS Modules** ou **Styled Components**
- **Tailwind CSS** (opcional, para desenvolvimento rápido)

### Deploy
- **gh-pages** package para deploy no GitHub Pages
- **GitHub Actions** (opcional, para CI/CD)

### Gerenciamento de Estado
- **React Hooks** (useState, useContext, useReducer)
- **Zustand** ou **Jotai** (opcional, para state management mais complexo)

---

## 📁 Estrutura de Pastas

```
keebLab/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── LayoutSelector/
│   │   │   ├── LayoutSelector.jsx
│   │   │   └── LayoutSelector.module.css
│   │   ├── KeyboardPreview/
│   │   │   ├── KeyboardPreview.jsx
│   │   │   ├── KeyboardRenderer.jsx
│   │   │   └── KeyboardPreview.module.css
│   │   ├── CustomizationPanel/
│   │   │   ├── CustomizationPanel.jsx
│   │   │   ├── ColorPicker.jsx
│   │   │   ├── OptionToggle.jsx
│   │   │   ├── RotarySelector.jsx
│   │   │   └── CustomizationPanel.module.css
│   │   └── Keycap/
│   │       ├── Keycap.jsx
│   │       └── Keycap.module.css
│   ├── data/
│   │   ├── layouts/
│   │   │   ├── avalanche.json
│   │   │   └── sofle.json
│   │   └── keyboardFeatures.js
│   ├── hooks/
│   │   ├── useKeyboardConfig.js
│   │   └── useKeyboardLayout.js
│   ├── utils/
│   │   ├── keyboardCalculations.js
│   │   └── colorUtils.js
│   ├── context/
│   │   └── KeyboardConfigContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── PROJECT_DOCUMENTATION.md
```

---

## 📊 Estrutura de Dados

### Layout JSON (avalanche.json / sofle.json)
```json
{
  "name": "Avalanche",
  "description": "Ergonomic split keyboard with 4x6 column staggered keys",
  "keys": [
    {
      "id": "left_0_0",
      "row": 0,
      "col": 0,
      "x": 0,
      "y": 0,
      "width": 1,
      "height": 1,
      "side": "left",
      "isThumb": false
    }
  ],
  "rotaryPositions": [
    {
      "id": "top_left",
      "x": 100,
      "y": 50,
      "side": "left"
    }
  ],
  "tentingHoles": [
    {
      "x": 50,
      "y": 200,
      "side": "left"
    }
  ],
  "dimensions": {
    "width": 300,
    "height": 200
  },
  "features": {
    "supportsRotary": true,
    "supportsTenting": true,
    "supportsOLED": true,
    "supportsRGB": true,
    "supportsWireless": true
  }
}
```

### Configuração do Usuário (Estado)
```javascript
{
  layout: "avalanche", // ou "sofle"
  keycaps: {
    // Cor padrão para todas as teclas
    defaultColor: "#FFFFFF",
    // Cores customizadas por tecla
    custom: {
      "left_0_0": "#FF0000",
      "right_0_0": "#0000FF"
    }
  },
  features: {
    tenting: false,
    rotary: {
      enabled: true,
      positions: ["top_left", "top_right"] // IDs das posições
    },
    wireless: false,
    ledDisplay: true,
    rgbPerKey: false
  }
}
```

---

## ✅ Roadmap de Implementação Detalhado

### **FASE 1: Setup e Configuração Inicial** ⏱️ ~2-3 horas

#### 1.1 Inicialização do Projeto
- [ ] Criar repositório no GitHub (se ainda não existe)
- [ ] Inicializar projeto React com `npx create-react-app keebLab`
- [ ] Configurar `.gitignore`
- [ ] Criar estrutura de pastas conforme documentação

#### 1.2 Configuração GitHub Pages
- [ ] Instalar `gh-pages`: `npm install --save-dev gh-pages`
- [ ] Adicionar no `package.json`:
  ```json
  {
    "homepage": "https://seuusername.github.io/keebLab",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
  }
  ```
- [ ] Testar build local: `npm run build`
- [ ] Fazer primeiro deploy: `npm run deploy`

#### 1.3 Dependências Básicas
- [ ] Instalar bibliotecas necessárias (se houver)
- [ ] Configurar ESLint/Prettier (opcional)

---

### **FASE 2: Coleta e Estruturação de Dados** ⏱️ ~4-6 horas

#### 2.1 Pesquisa e Criação de Layouts
- [ ] Analisar repositório Avalanche (https://github.com/vlkv/avalanche/)
  - [ ] Identificar número de teclas e posições
  - [ ] Identificar posições de rotary encoders
  - [ ] Identificar posições de furos para tenting
  - [ ] Obter dimensões e proporções
- [ ] Analisar repositório Sofle (https://github.com/josefadamcik/SofleKeyboard)
  - [ ] Identificar número de teclas e posições
  - [ ] Identificar posições de rotary encoders
  - [ ] Identificar posições de furos para tenting
  - [ ] Obter dimensões e proporções

#### 2.2 Criação de Arquivos JSON
- [ ] Criar `src/data/layouts/avalanche.json` com estrutura completa
- [ ] Criar `src/data/layouts/sofle.json` com estrutura completa
- [ ] Validar JSONs (sintaxe e estrutura)
- [ ] Adicionar metadados (descrição, features suportadas)
- [ ] Usar Keyboard Layout Editor (KLE) ou criar manualmente

#### 2.3 Utilitários de Dados
- [ ] Criar `src/utils/keyboardCalculations.js` para cálculos de posicionamento
- [ ] Criar funções helper para carregar layouts
- [ ] Criar funções para validar configurações

---

### **FASE 3: Componentes Base e Layout** ⏱️ ~6-8 horas

#### 3.1 Layout Principal
- [ ] Criar estrutura principal do App (`App.jsx`)
  - [ ] Layout com menu lateral direito
  - [ ] Área de preview central
  - [ ] Responsivo (mobile-friendly)
- [ ] Criar estilos globais (`index.css`)
- [ ] Criar estilos do App (`App.css`)

#### 3.2 Context API para Estado Global
- [ ] Criar `KeyboardConfigContext.jsx`
- [ ] Implementar provider com estado inicial
- [ ] Criar hooks customizados (`useKeyboardConfig`)
- [ ] Testar contexto em componentes

#### 3.3 Componente LayoutSelector
- [ ] Criar componente `LayoutSelector`
- [ ] Implementar UI para seleção (botões/cards)
- [ ] Adicionar descrição de cada layout
- [ ] Conectar com contexto para atualizar layout selecionado
- [ ] Adicionar estilos

---

### **FASE 4: Visualização do Teclado** ⏱️ ~10-12 horas

#### 4.1 Componente KeyboardPreview
- [ ] Criar componente base `KeyboardPreview`
- [ ] Implementar renderização SVG ou Canvas
- [ ] Adicionar zoom e pan (opcional, mas recomendado)
- [ ] Adicionar estilos básicos

#### 4.2 Componente Keycap
- [ ] Criar componente `Keycap` individual
- [ ] Implementar renderização de tecla (retângulo arredondado)
- [ ] Adicionar suporte a cores customizadas
- [ ] Implementar interatividade (hover, click)
- [ ] Adicionar feedback visual

#### 4.3 Renderização de Layout
- [ ] Implementar função para renderizar layout completo
- [ ] Renderizar teclas baseado em dados do JSON
- [ ] Renderizar teclas do lado esquerdo
- [ ] Renderizar teclas do lado direito
- [ ] Adicionar espaçamento e proporções corretas

#### 4.4 Features Visuais
- [ ] Renderizar furos de tenting (quando habilitado)
- [ ] Renderizar rotary encoders (quando habilitado)
- [ ] Renderizar indicadores de LED/RGB (quando habilitado)
- [ ] Adicionar labels/legendas (opcional)

---

### **FASE 5: Painel de Customização** ⏱️ ~8-10 horas

#### 5.1 Componente CustomizationPanel
- [ ] Criar componente base `CustomizationPanel`
- [ ] Implementar layout do painel (menu lateral)
- [ ] Adicionar seções organizadas
- [ ] Adicionar estilos

#### 5.2 Seletor de Cor Global
- [ ] Criar componente `ColorPicker`
- [ ] Implementar input de cor (HTML5 color picker ou biblioteca)
- [ ] Conectar com contexto para atualizar cor padrão
- [ ] Adicionar preview da cor selecionada

#### 5.3 Seleção Individual de Teclas
- [ ] Implementar modo de seleção (clicar na tecla)
- [ ] Mostrar color picker quando tecla é selecionada
- [ ] Atualizar cor da tecla específica
- [ ] Adicionar indicador visual de tecla selecionada
- [ ] Implementar reset de cor individual

#### 5.4 Toggles de Features
- [ ] Criar componente `OptionToggle` reutilizável
- [ ] Implementar toggle para Tenting
- [ ] Implementar toggle para Wireless
- [ ] Implementar toggle para LED Display
- [ ] Implementar toggle para RGB por tecla
- [ ] Conectar todos com contexto

#### 5.5 Seletor de Rotary
- [ ] Criar componente `RotarySelector`
- [ ] Mostrar opções de posições disponíveis (baseado no layout)
- [ ] Permitir seleção múltipla (checkbox)
- [ ] Atualizar preview quando posições mudam
- [ ] Desabilitar toggle se nenhuma posição disponível

---

### **FASE 6: Integração e Sincronização** ⏱️ ~4-6 horas

#### 6.1 Sincronização Estado ↔ Preview
- [ ] Garantir que mudanças no painel atualizam preview
- [ ] Garantir que mudanças no preview atualizam estado
- [ ] Implementar debounce para performance (se necessário)
- [ ] Testar todas as interações

#### 6.2 Validações
- [ ] Validar configurações antes de aplicar
- [ ] Mostrar mensagens de erro (se necessário)
- [ ] Prevenir estados inválidos

#### 6.3 Reset e Presets
- [ ] Implementar botão "Reset" para voltar ao padrão
- [ ] Implementar presets (opcional)
- [ ] Salvar configuração no localStorage (opcional)

---

### **FASE 7: Polimento e Refinamento** ⏱️ ~6-8 horas

#### 7.1 UI/UX
- [ ] Melhorar estilos visuais
- [ ] Adicionar animações suaves (transições)
- [ ] Melhorar feedback visual de interações
- [ ] Adicionar tooltips/explicações
- [ ] Implementar modo escuro (opcional)

#### 7.2 Responsividade
- [ ] Testar em diferentes tamanhos de tela
- [ ] Ajustar layout para mobile
- [ ] Ajustar tamanho de componentes
- [ ] Testar touch interactions

#### 7.3 Performance
- [ ] Otimizar re-renders (React.memo, useMemo, useCallback)
- [ ] Lazy loading de componentes (se necessário)
- [ ] Otimizar renderização do preview
- [ ] Testar com diferentes navegadores

#### 7.4 Acessibilidade
- [ ] Adicionar labels ARIA
- [ ] Suporte a navegação por teclado
- [ ] Contraste de cores adequado
- [ ] Screen reader friendly

---

### **FASE 8: Testes e Deploy Final** ⏱️ ~3-4 horas

#### 8.1 Testes
- [ ] Testar todas as funcionalidades
- [ ] Testar em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Testar em diferentes dispositivos
- [ ] Corrigir bugs encontrados

#### 8.2 Documentação
- [ ] Atualizar README.md com instruções
- [ ] Adicionar screenshots
- [ ] Documentar como adicionar novos layouts (futuro)

#### 8.3 Deploy
- [ ] Build final: `npm run build`
- [ ] Testar build localmente
- [ ] Deploy no GitHub Pages: `npm run deploy`
- [ ] Verificar site online
- [ ] Configurar domínio customizado (opcional)

---

## 🎨 Especificações de Design

### Layout da Página
```
┌─────────────────────────────────────────┐
│              Header (opcional)          │
├──────────────┬──────────────────────────┤
│              │                          │
│   Preview    │   Customization Panel    │
│   do         │   (Menu Lateral Direito) │
│   Teclado    │                          │
│              │  - Layout Selector       │
│              │  - Color Picker          │
│              │  - Feature Toggles       │
│              │  - Rotary Selector       │
│              │                          │
└──────────────┴──────────────────────────┘
```

### Cores Sugeridas (Tema Claro)
- Background: #F5F5F5 ou #FFFFFF
- Cards/Painéis: #FFFFFF
- Texto: #333333
- Accent: #007BFF (azul) ou cor personalizada
- Borda: #E0E0E0

### Cores Sugeridas (Tema Escuro - Futuro)
- Background: #1A1A1A
- Cards/Painéis: #2D2D2D
- Texto: #FFFFFF
- Accent: #4A9EFF
- Borda: #404040

---

## 📝 Notas de Implementação

### Sobre os Layouts

#### Avalanche
- **Teclas**: 64 total (32 por lado)
  - 4x6 (ou 3x6 se remover row de números) column staggered
  - 5 thumb keys
  - 1 key adicional para pinky (removível)
  - 2 keys adicionais para index finger
- **Rotary**: Suportado (posições a definir)
- **Tenting**: Suportado (furos a definir)
- **OLED**: Suportado
- **RGB**: Suportado
- **Wireless**: Suportado

#### Sofle
- **Teclas**: 6×4+5 keys column-staggered split
- **Rotary**: Suportado (2 encoders, um em cada lado)
- **Tenting**: Suportado
- **OLED**: Suportado
- **RGB**: Suportado (Sofle RGB variant)
- **Wireless**: Suportado

### Considerações Técnicas

1. **Renderização**: Começar com SVG para simplicidade, considerar Three.js no futuro para 3D
2. **Performance**: Usar React.memo e useMemo para evitar re-renders desnecessários
3. **Estado**: Context API é suficiente inicialmente, considerar Zustand se ficar complexo
4. **Responsividade**: Mobile-first approach, mas desktop é prioridade inicial

---

## 🔗 Referências e Recursos

### Documentação
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [gh-pages package](https://github.com/tschaub/gh-pages)

### Layouts
- [Avalanche Keyboard](https://github.com/vlkv/avalanche/)
- [Sofle Keyboard](https://github.com/josefadamcik/SofleKeyboard)
- [Split Keyboard Compare (Inspiração)](https://jhelvy.github.io/splitKbCompare/)

### Ferramentas Úteis
- [SVG Editor](https://boxy-svg.com/) - Para criar/editar SVGs
- [Color Picker Libraries](https://github.com/omgovich/react-color) - Para color picker
- [React Icons](https://react-icons.github.io/react-icons/) - Para ícones

---

## 🚀 Próximos Passos Imediatos

1. **Agora**: Criar estrutura básica do projeto React
2. **Depois**: Extrair dados dos layouts Avalanche e Sofle
3. **Em seguida**: Implementar visualização básica do teclado
4. **Depois**: Implementar painel de customização
5. **Por fim**: Polir, testar e fazer deploy

---

## 📌 Checklist de Início Rápido

Para começar a trabalhar no projeto:

- [ ] Clonar/criar repositório
- [ ] `npx create-react-app keebLab`
- [ ] `cd keebLab`
- [ ] `npm install --save-dev gh-pages`
- [ ] Configurar `package.json` com homepage e scripts
- [ ] Criar estrutura de pastas
- [ ] Ler este documento completamente
- [ ] Começar pela Fase 1!

---

**Última atualização**: Data de criação do documento
**Versão**: 1.0.0
