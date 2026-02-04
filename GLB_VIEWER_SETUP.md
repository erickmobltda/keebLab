# 🎨 Visualizador GLB - Guia de Configuração

## ✅ O que foi implementado

- ✅ Componente `GLBViewer` para visualizar modelos 3D
- ✅ Integração com Three.js e React Three Fiber
- ✅ Controles de câmera (zoom, pan, rotate)
- ✅ Seletor de modelos na UI
- ✅ Pasta `public/models/` para arquivos GLB

## 📦 Instalação das Dependências

Execute o seguinte comando para instalar as bibliotecas necessárias:

```bash
npm install
```

Isso instalará:
- `@react-three/fiber` - React renderer para Three.js
- `@react-three/drei` - Helpers e componentes úteis
- `three` - Biblioteca 3D

## 📁 Onde Colocar Arquivos GLB

**Coloque seus arquivos `.glb` na pasta:**

```
public/models/
```

**Exemplo:**
```
public/models/
├── avalanche.glb
├── sofle.glb
└── outro-teclado.glb
```

## 🚀 Como Usar

### 1. Adicionar um Modelo

1. Coloque o arquivo `.glb` em `public/models/`
2. Abra `src/App.js`
3. Adicione o modelo à lista `availableModels`:

```javascript
const availableModels = [
  { name: 'Avalanche Keyboard', path: '/models/avalanche.glb' },
  { name: 'Sofle Keyboard', path: '/models/sofle.glb' },
  { name: 'Seu Novo Modelo', path: '/models/seu-modelo.glb' }, // ← Adicione aqui
];
```

### 2. Visualizar o Modelo

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

2. No navegador, use o dropdown "Select 3D Model" para escolher um modelo

3. Interaja com o modelo:
   - **Rotate**: Arraste com o mouse
   - **Zoom**: Scroll do mouse
   - **Pan**: Arraste com botão direito (ou Shift + arraste)

## 🎨 Personalização

### Ajustar Iluminação

Edite `src/components/GLBViewer/GLBViewer.js`:

```javascript
<ambientLight intensity={0.5} />  // Luz ambiente
<directionalLight position={[10, 10, 5]} intensity={1} />  // Luz direcional
<pointLight position={[-10, -10, -5]} intensity={0.5} />  // Luz pontual
```

### Ajustar Posição da Câmera

```javascript
<Canvas
  camera={{ position: [0, 0, 5], fov: 50 }}  // Ajuste position e fov
  ...
>
```

### Ajustar Escala do Modelo

No componente `Model`, ajuste a linha:

```javascript
const scale = 2 / maxDim;  // Aumente ou diminua o valor 2
```

### Habilitar Rotação Automática

Descomente no componente `Model`:

```javascript
useFrame((state, delta) => {
  if (meshRef.current) {
    meshRef.current.rotation.y += delta * 0.1;  // Velocidade de rotação
  }
});
```

## 🔧 Conversão de Formatos

Se você tem modelos em outros formatos (OBJ, STL, FBX), converta para GLB:

### Usando Blender (Gratuito)

1. Abra Blender
2. File → Import → Selecione seu formato
3. File → Export → glTF 2.0
4. Escolha formato **GLB** (binário)
5. Salve em `public/models/`

### Usando Ferramentas Online

- [glTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [Aspose 3D Converter](https://products.aspose.app/3d/conversion)

## 📝 Estrutura de Arquivos

```
keebLab/
├── public/
│   └── models/              # ← Coloque arquivos GLB aqui
│       ├── avalanche.glb
│       └── sofle.glb
├── src/
│   ├── components/
│   │   └── GLBViewer/
│   │       ├── GLBViewer.js
│   │       └── GLBViewer.css
│   └── App.js               # ← Adicione modelos aqui
```

## ⚠️ Troubleshooting

### Modelo não aparece

- Verifique se o arquivo está em `public/models/`
- Verifique se o caminho em `availableModels` está correto: `/models/nome.glb`
- Abra o console do navegador (F12) para ver erros
- Verifique se o arquivo GLB não está corrompido

### Modelo muito grande/pequeno

- Ajuste a escala no componente `Model` (linha com `const scale = 2 / maxDim`)
- Ajuste a posição da câmera no `Canvas`

### Performance ruim

- Reduza o tamanho do arquivo GLB
- Use compressão de texturas
- Simplifique a geometria do modelo

### Erro ao carregar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

## 🎯 Próximos Passos

- [ ] Adicionar mais modelos de teclado
- [ ] Integrar com o sistema de customização (cores, features)
- [ ] Adicionar animações
- [ ] Suporte para múltiplos modelos simultâneos
- [ ] Exportar imagem do modelo

---

**Dica**: Mantenha os arquivos GLB pequenos (< 10MB) para melhor performance no navegador!
