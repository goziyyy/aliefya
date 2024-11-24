// 'use client'

// import React, { useEffect, useRef } from 'react';

// const DynamicBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       const { innerWidth, innerHeight } = window;
//       canvas.width = innerWidth;
//       canvas.height = innerHeight;
//     };

//     resizeCanvas();

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       color: string;

//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//         this.color = `rgba(128, 203, 196, ${Math.random() * 0.5 + 0.1})`;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width) this.x = 0;
//         else if (this.x < 0) this.x = canvas.width;

//         if (this.y > canvas.height) this.y = 0;
//         else if (this.y < 0) this.y = canvas.height;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//       }
//     }

//     const particles: Particle[] = [];
//     const particleCount = 100;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (const particle of particles) {
//         particle.update();
//         particle.draw();
//       }
//       requestAnimationFrame(animate);
//     };

//     animate();

//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 w-full h-full z-[-1]"
//       style={{ background: 'radial-gradient(circle, #0f172a 0%, #080808 100%)' }}
//     />
//   );
// };

// export default DynamicBackground;
