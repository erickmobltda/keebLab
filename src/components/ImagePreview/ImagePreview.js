import React, { useState, useEffect, useRef } from 'react';
import './ImagePreview.css';

// Função helper para obter o base path
function getBasePath() {
  // Em desenvolvimento, detectar do window.location
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Se estiver em /keebLab ou subpath, usar /keebLab
    if (pathname.startsWith('/keebLab')) {
      return '/keebLab';
    }
  }
  // Fallback para process.env.PUBLIC_URL (substituído em build time)
  return process.env.PUBLIC_URL || '';
}

function ImagePreview({ base, caseColor, switches, keycaps }) {
  const canvasRef = useRef(null);
  const [baseImageLoaded, setBaseImageLoaded] = useState(false);
  const [error, setError] = useState(null);

  const basePath = getBasePath();
  const baseImagePath = `${basePath}/images/base_${base}_case_${caseColor}.jpeg`;
  const switchPath = `${basePath}/images/switches_${switches}.png`;
  const keycapPath = `${basePath}/images/keycaps_${keycaps}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Não foi possível obter contexto 2D');
      return;
    }

    // Reset states
    setBaseImageLoaded(false);
    setError(null);

    // Carregar e desenhar imagens
    const baseImg = new Image();
    const switchImg = new Image();
    const keycapImg = new Image();

    let baseLoaded = false;
    let switchLoaded = false;
    let keycapLoaded = false;

    const drawImages = () => {
      if (!baseLoaded || !canvas) return;

      try {
        // Limpar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Desenhar base
        ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

        // Desenhar switches se carregado
        if (switchLoaded && switchImg.complete && switchImg.naturalWidth > 0) {
          ctx.drawImage(switchImg, 0, 0, canvas.width, canvas.height);
        }

        // Desenhar keycaps se carregado
        if (keycapLoaded && keycapImg.complete && keycapImg.naturalWidth > 0) {
          ctx.drawImage(keycapImg, 0, 0, canvas.width, canvas.height);
        }
      } catch (err) {
        console.error('Erro ao desenhar imagens:', err);
      }
    };

    // Carregar imagem base
    baseImg.onload = () => {
      if (baseImg.naturalWidth === 0) {
        console.error('Imagem base carregada mas sem dimensões válidas');
        setError('Erro: Imagem inválida');
        return;
      }
      
      canvas.width = baseImg.naturalWidth;
      canvas.height = baseImg.naturalHeight;
      baseLoaded = true;
      setBaseImageLoaded(true);
      drawImages();
    };

    baseImg.onerror = (e) => {
      console.error('Erro ao carregar imagem base:', baseImagePath, e);
      setError(`Erro ao carregar: ${baseImagePath}`);
    };

    // Carregar switches
    switchImg.onload = () => {
      if (switchImg.naturalWidth > 0) {
        switchLoaded = true;
        drawImages();
      }
    };

    switchImg.onerror = () => {
      console.warn('Aviso: Não foi possível carregar switches:', switchPath);
      // Não é erro crítico, continuar sem switches
    };

    // Carregar keycaps
    keycapImg.onload = () => {
      if (keycapImg.naturalWidth > 0) {
        keycapLoaded = true;
        drawImages();
      }
    };

    keycapImg.onerror = () => {
      console.warn('Aviso: Não foi possível carregar keycaps:', keycapPath);
      // Não é erro crítico, continuar sem keycaps
    };

    // Iniciar carregamento
    baseImg.src = baseImagePath;
    switchImg.src = switchPath;
    keycapImg.src = keycapPath;

    // Cleanup
    return () => {
      baseImg.onload = null;
      baseImg.onerror = null;
      switchImg.onload = null;
      switchImg.onerror = null;
      keycapImg.onload = null;
      keycapImg.onerror = null;
    };
  }, [base, caseColor, switches, keycaps, baseImagePath, switchPath, keycapPath]);

  if (error) {
    return (
      <div className="image-preview-container">
        <div className="image-preview-error">
          <p>❌ {error}</p>
          <p style={{ fontSize: '0.85rem', marginTop: '10px', color: '#999' }}>
            Verifique se os arquivos estão em public/images/
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="image-preview-container">
      {!baseImageLoaded && (
        <div className="image-preview-loading">
          <p>Carregando preview...</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="image-preview-canvas"
        style={{ display: baseImageLoaded ? 'block' : 'none' }}
      />
    </div>
  );
}

export default ImagePreview;
