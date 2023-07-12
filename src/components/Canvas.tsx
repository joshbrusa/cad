"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Coordinate = {
  x: number;
  y: number;
};

export default () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [coordinate, setCoordinate] = useState<Coordinate | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  console.log(coordinate);
  console.log(coordinates);

  const drawing = useCallback(
    (event: MouseEvent) => {
      setCoordinates((prev) => [
        ...prev,
        { x: event.clientX, y: event.clientY },
      ]);
      setIsDrawing(!isDrawing);
    },
    [isDrawing, coordinate]
  );

  const draw = useCallback(
    (event: MouseEvent) => {
      if (!isDrawing) return;
      setCoordinate({ x: event.clientX, y: event.clientY });
    },
    [isDrawing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousedown", drawing);
    canvas.addEventListener("mousemove", draw);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", drawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [drawing, draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.strokeStyle = "white";
    context.lineWidth = 2;

    // for (let i = 1; i <= coordinates.length; i++) {
    //   context.beginPath();
    //   context.moveTo(coordinates[i - 1].x, coordinates[i - 1].y);
    //   context.lineTo(coordinates[i].x, coordinates[i].y);
    //   context.stroke();
    // }

    if (!coordinate) return;

    context.beginPath();
    context.moveTo(
      coordinates[coordinates.length - 1].x,
      coordinates[coordinates.length - 1].y
    );
    context.lineTo(coordinate.x, coordinate.y);
    context.stroke();
  }, [coordinate, coordinates]);

  return <canvas ref={canvasRef} />;
};
