import React, { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MouseLightProps {
  color?: string;
  size?: number;
  opacity?: number;
}

const MouseLight: React.FC<MouseLightProps> = ({
  color = '0, 255, 0', // Default green color
  size = 300,
  opacity = 0.3
}) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div
        className="absolute rounded-full mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: `${size}px`,
          height: `${size}px`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, rgba(${color}, ${opacity}) 0%, rgba(${color}, 0) 70%)`,
        }}
      />
    </div>
  );
};

export default MouseLight;