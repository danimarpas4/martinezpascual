import React, { useEffect, useRef } from 'react';

const Radar = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.width = canvas.parentElement.offsetWidth;
    let h = canvas.height = canvas.parentElement.offsetHeight;
    
    let angle = 0;

    const draw = () => {
      // Clear canvas with slight trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, w, h);
      
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.4;
      
      // Draw grid/circles
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)'; // emerald-500 with low opacity
      ctx.lineWidth = 1;
      
      // Concentric circles
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * (i/4), 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.stroke();

      // Radar Sweep
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      
      const gradient = ctx.createLinearGradient(0, 0, radius, 0);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, 0, 0.2); // width of the beam
      ctx.lineTo(0, 0);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Leading edge line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radius, 0);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
      
      // Draw random "threats" (dots) that fade
      // In a more complex version, these would have x, y, and age
      // For simplicity, we just leave the trail to handle it
      
      angle += 0.02;
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none opacity-20"
    />
  );
};

export default Radar;
