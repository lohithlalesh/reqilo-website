import { useEffect, useRef } from "react";

export default function DNASpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(15, 23, 41, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Draw multiple DNA spirals
      for (let spiral = 0; spiral < 3; spiral++) {
        const spiralOffset = (spiral * Math.PI * 2) / 3;
        const spiralScale = 1 + spiral * 0.3;

        // Draw the helix
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 - spiral * 0.08})`;
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let i = 0; i < Math.PI * 8; i += 0.05) {
          const x = Math.cos(i + time + spiralOffset) * 80 * spiralScale;
          const y = (i - Math.PI * 4) * 15 * spiralScale;
          const z = Math.sin(i + time + spiralOffset) * 80 * spiralScale;

          // Simple perspective
          const scale = (z + 150) / 300;
          const screenX = x * scale;
          const screenY = y * scale;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();

        // Draw nodes along the spiral
        for (let i = 0; i < Math.PI * 8; i += Math.PI / 4) {
          const x = Math.cos(i + time + spiralOffset) * 80 * spiralScale;
          const y = (i - Math.PI * 4) * 15 * spiralScale;
          const z = Math.sin(i + time + spiralOffset) * 80 * spiralScale;

          const scale = (z + 150) / 300;
          const screenX = x * scale;
          const screenY = y * scale;

          ctx.fillStyle = `rgba(0, 212, 255, ${0.6 - spiral * 0.15})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, 3 * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
