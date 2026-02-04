import React from 'react';
import { useKeyboardConfig } from '../../context/KeyboardConfigContext';
import './CustomizationPanel.css';

function CustomizationPanel() {
  const { config, updateBase, updateCase, updateSwitches, updateKeycaps, resetConfig } = useKeyboardConfig();

  return (
    <div className="customization-panel">
      <h2 className="panel-title">Customization</h2>

      {/* Base Selection */}
      <div className="option-group">
        <label className="option-label">Base</label>
        <div className="option-buttons">
          <button
            className={`option-button ${config.base === 'white' ? 'active' : ''}`}
            onClick={() => updateBase('white')}
            disabled={true} // Only white available for now
          >
            White
          </button>
        </div>
      </div>

      {/* Case Selection */}
      <div className="option-group">
        <label className="option-label">Case</label>
        <div className="option-buttons">
          <button
            className={`option-button ${config.case === 'black' ? 'active' : ''}`}
            onClick={() => updateCase('black')}
          >
            Black
          </button>
          <button
            className={`option-button ${config.case === 'white' ? 'active' : ''}`}
            onClick={() => updateCase('white')}
          >
            White
          </button>
        </div>
      </div>

      {/* Switches Selection */}
      <div className="option-group">
        <label className="option-label">Switches</label>
        <div className="option-buttons">
          <button
            className={`option-button ${config.switches === 'none' ? 'active' : ''}`}
            onClick={() => updateSwitches('none')}
          >
            None
          </button>
          <button
            className={`option-button ${config.switches === 'green' ? 'active' : ''}`}
            onClick={() => updateSwitches('green')}
          >
            Green
          </button>
          <button
            className={`option-button ${config.switches === 'purple' ? 'active' : ''}`}
            onClick={() => updateSwitches('purple')}
          >
            Purple
          </button>
        </div>
      </div>

      {/* Keycaps Selection */}
      <div className="option-group">
        <label className="option-label">Keycaps</label>
        <div className="option-buttons">
          <button
            className={`option-button ${config.keycaps === 'none' ? 'active' : ''}`}
            onClick={() => updateKeycaps('none')}
          >
            None
          </button>
          <button
            className={`option-button ${config.keycaps === 'black' ? 'active' : ''}`}
            onClick={() => updateKeycaps('black')}
          >
            Black
          </button>
          <button
            className={`option-button ${config.keycaps === 'yellow' ? 'active' : ''}`}
            onClick={() => updateKeycaps('yellow')}
          >
            Yellow
          </button>
        </div>
      </div>

      {/* Reset Button */}
      <div className="option-group">
        <button className="reset-button" onClick={resetConfig}>
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default CustomizationPanel;
