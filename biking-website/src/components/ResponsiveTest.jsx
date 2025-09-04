import React, { useState, useEffect } from 'react';

const ResponsiveTest = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = () => {
    if (screenSize.width < 480) return 'Mobile (Small)';
    if (screenSize.width < 768) return 'Mobile (Large)';
    if (screenSize.width < 1024) return 'Tablet';
    if (screenSize.width < 1200) return 'Desktop';
    return 'Large Desktop';
  };

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <div>Width: {screenSize.width}px</div>
      <div>Height: {screenSize.height}px</div>
      <div>Breakpoint: {getBreakpoint()}</div>
    </div>
  );
};

export default ResponsiveTest;
