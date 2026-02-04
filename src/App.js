import React from 'react';
import './App.css';
import { KeyboardConfigProvider, useKeyboardConfig } from './context/KeyboardConfigContext';
import ImagePreview from './components/ImagePreview/ImagePreview';
import CustomizationPanel from './components/CustomizationPanel/CustomizationPanel';

function AppContent() {
  const { config } = useKeyboardConfig();

  return (
    <div className="App">
      <header className="App-header">
        <h1>KeebLab</h1>
        <p>Keyboard Configurator</p>
      </header>
      <main className="App-main">
        <div className="preview-area">
          <ImagePreview
            base={config.base}
            caseColor={config.case}
            switches={config.switches}
            keycaps={config.keycaps}
          />
        </div>
        <div className="customization-panel-wrapper">
          <CustomizationPanel />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <KeyboardConfigProvider>
      <AppContent />
    </KeyboardConfigProvider>
  );
}

export default App;
