import React, { createContext, useContext, useState } from 'react';

const KeyboardConfigContext = createContext();

export const useKeyboardConfig = () => {
  const context = useContext(KeyboardConfigContext);
  if (!context) {
    throw new Error('useKeyboardConfig must be used within KeyboardConfigProvider');
  }
  return context;
};

export const KeyboardConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    layout: 'avalanche', // 'avalanche' or 'sofle'
    base: 'white', // 'white' (only option for now)
    case: 'black', // 'black' or 'white'
    switches: 'green', // 'green' or 'red'
    keycaps: 'none', // 'black' or 'yellow'
    features: {
      tenting: false,
      rotary: {
        enabled: false,
        positions: []
      },
      wireless: false,
      ledDisplay: false,
      rgbPerKey: false
    }
  });

  const updateLayout = (layout) => {
    setConfig(prev => ({
      ...prev,
      layout,
      // Reset features when changing layout
      features: {
        ...prev.features,
        rotary: {
          enabled: false,
          positions: []
        }
      }
    }));
  };

  const updateKeycapColor = (keyId, color) => {
    setConfig(prev => ({
      ...prev,
      keycaps: {
        ...prev.keycaps,
        custom: {
          ...prev.keycaps.custom,
          [keyId]: color
        }
      }
    }));
  };

  const updateDefaultKeycapColor = (color) => {
    setConfig(prev => ({
      ...prev,
      keycaps: {
        ...prev.keycaps,
        defaultColor: color
      }
    }));
  };

  const updateFeature = (featureName, value) => {
    setConfig(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [featureName]: value
      }
    }));
  };

  const updateRotaryPositions = (positions) => {
    setConfig(prev => ({
      ...prev,
      features: {
        ...prev.features,
        rotary: {
          enabled: positions.length > 0,
          positions
        }
      }
    }));
  };

  const updateBase = (base) => {
    setConfig(prev => ({ ...prev, base }));
  };

  const updateCase = (caseColor) => {
    setConfig(prev => ({ ...prev, case: caseColor }));
  };

  const updateSwitches = (switchColor) => {
    setConfig(prev => ({ ...prev, switches: switchColor }));
  };

  const updateKeycaps = (keycapColor) => {
    setConfig(prev => ({ ...prev, keycaps: keycapColor }));
  };

  const resetConfig = () => {
    setConfig({
      layout: config.layout, // Keep current layout
      base: 'white',
      case: 'black',
      switches: 'green',
      keycaps: 'none',
      features: {
        tenting: false,
        rotary: {
          enabled: false,
          positions: []
        },
        wireless: false,
        ledDisplay: false,
        rgbPerKey: false
      }
    });
  };

  return (
    <KeyboardConfigContext.Provider
      value={{
        config,
        updateLayout,
        updateKeycapColor,
        updateDefaultKeycapColor,
        updateFeature,
        updateRotaryPositions,
        updateBase,
        updateCase,
        updateSwitches,
        updateKeycaps,
        resetConfig
      }}
    >
      {children}
    </KeyboardConfigContext.Provider>
  );
};
