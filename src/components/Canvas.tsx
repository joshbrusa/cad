"use client";

import { useState, useEffect, useRef } from "react";
import type { MouseEventHandler } from "react";

type Point = {
  x: number;
  y: number;
};

type Line = {
  lineStart: Point;
  lineEnd: Point;
};

export default () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [lineStart, setLineStart] = useState<Point | null>(null);
  const [lineEnd, setLineEnd] = useState<Point | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.strokeStyle = "white";
    context.lineWidth = 2;

    lines.forEach((line) => {
      context.beginPath();
      context.moveTo(line.lineStart.x, line.lineStart.y);
      context.lineTo(line.lineEnd.x, line.lineEnd.y);
      context.stroke();
    });

    if (!lineStart || !lineEnd) return;

    context.beginPath();
    context.moveTo(lineStart.x, lineStart.y);
    context.lineTo(lineEnd.x, lineEnd.y);
    context.stroke();
  }, [lines, lineStart, lineEnd]);

  const handleMouseDown: MouseEventHandler<HTMLCanvasElement> = (event) => {
    // start line
    if (!lineStart || !lineEnd) {
      setLineStart({ x: event.pageX, y: event.pageY });
      setLineEnd(null);
      return;
    }

    // end line
    setLines((prev) => [...prev, { lineStart, lineEnd }]);
    setLineStart(null);
    setLineEnd(null);
  };

  const handleMouseMove: MouseEventHandler<HTMLCanvasElement> = (event) => {
    if (!lineStart) return;
    setLineEnd({ x: event.pageX, y: event.pageY });
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    />
  );
};
