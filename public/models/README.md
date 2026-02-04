# Models Directory

Coloque seus arquivos de modelo 3D (.glb) nesta pasta.

## Formato Suportado

- **GLB** (recomendado): Formato binário do glTF, mais eficiente
- **GLTF**: Também suportado, mas GLB é preferido

## Como Usar

1. Coloque seu arquivo `.glb` nesta pasta
   - Exemplo: `avalanche.glb`
   - Exemplo: `sofle.glb`

2. O arquivo será acessível em: `/models/nome-do-arquivo.glb`

3. Adicione o modelo à lista em `src/App.js`:
   ```javascript
   const availableModels = [
     { name: 'Avalanche Keyboard', path: '/models/avalanche.glb' },
     { name: 'Sofle Keyboard', path: '/models/sofle.glb' },
   ];
   ```

## Onde Obter Modelos 3D

- Exporte do Blender, Fusion 360, ou outras ferramentas CAD
- Converta de outros formatos (OBJ, STL) para GLB usando:
  - [Blender](https://www.blender.org/)
  - [glTF-Pipeline](https://github.com/CesiumGS/gltf-pipeline)
  - [Online converters](https://products.aspose.app/3d/conversion)

## Dicas

- Mantenha os arquivos pequenos (< 10MB) para melhor performance
- Use compressão de texturas quando possível
- Teste o modelo no visualizador antes de adicionar à lista
