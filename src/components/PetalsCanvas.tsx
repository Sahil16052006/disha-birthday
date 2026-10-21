import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayOffset: number;
  color: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export const PetalsCanvas: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || !active) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle romantic petal colors: blush, dusty rose, delicate wine
    const petalColors = [
      'rgba(242, 214, 215, 0.45)', // blush
      'rgba(214, 160, 166, 0.40)', // dusty rose
      'rgba(229, 186, 192, 0.35)', // soft petal
      'rgba(200, 164, 107, 0.25)', // champagne gold glow
    ];

    const petalCount = Math.min(24, Math.floor(width / 50));
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedX: Math.random() * 0.4 - 0.2,
      speedY: Math.random() * 0.7 + 0.35,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.015,
      opacity: Math.random() * 0.4 + 0.3,
      swaySpeed: Math.random() * 0.01 + 0.005,
      swayAmplitude: Math.random() * 25 + 10,
      swayOffset: Math.random() * 100,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));

    // Soft glowing stars
    const starCount = Math.min(18, Math.floor(width / 60));
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.8,
      speedY: Math.random() * 0.25 + 0.1,
      opacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      pulseOffset: Math.random() * Math.PI,
    }));

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // Draw subtle glowing golden stars
      stars.forEach((star) => {
        star.y += star.speedY;
        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }

        const pulse = Math.sin(tick * star.pulseSpeed + star.pulseOffset) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(200, 164, 107, ${star.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw delicate rose petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        const sway = Math.sin(tick * p.swaySpeed + p.swayOffset) * 0.8;
        const currentX = p.x + sway * (p.swayAmplitude / 20);

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(currentX, p.y);
        ctx.rotate(p.rotation);

        // Draw organic curved petal
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.ellipse(0, 0, p.size, p.size * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 opacity-70"
      aria-hidden="true"
    />
  );
};
