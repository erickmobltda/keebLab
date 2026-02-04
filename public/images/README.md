# Images Directory

Coloque seus arquivos de imagem PNG nesta pasta.

## 📁 Como Usar

1. **Adicione seus arquivos PNG aqui:**
   ```
   public/images/
   ├── keyboard-layout.png
   ├── avalanche-preview.png
   └── sofle-preview.png
   ```

2. **Acesse as imagens no código:**
   ```jsx
   // Em componentes React
   <img src="/images/keyboard-layout.png" alt="Keyboard Layout" />
   ```

   Ou usando import:
   ```jsx
   import keyboardImage from '../images/keyboard-layout.png';
   
   <img src={keyboardImage} alt="Keyboard Layout" />
   ```

## 📝 Formatos Suportados

- **PNG** (recomendado para imagens com transparência)
- **JPG/JPEG** (também suportado)
- **SVG** (para ícones e gráficos vetoriais)
- **GIF** (para animações simples)

## 💡 Dicas

- Mantenha os arquivos otimizados para web (< 1MB quando possível)
- Use nomes descritivos e consistentes
- Considere criar subpastas para organizar:
  ```
  images/
  ├── layouts/
  ├── previews/
  └── icons/
  ```

## 🎨 Otimização

Para otimizar imagens PNG:
- Use ferramentas como [TinyPNG](https://tinypng.com/)
- Ou [ImageOptim](https://imageoptim.com/) (Mac)
- Ou [Squoosh](https://squoosh.app/) (online)
