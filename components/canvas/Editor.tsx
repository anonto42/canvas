import { Canvas, Ellipse, Line, Rect, Textbox, Triangle, Group } from "fabric";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function CanvasEditor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  // Example: Your selectors for currently selected tool & artboard type
  const artbordTab = useSelector((state: any) => state.canvasTab.type);
  const selectedTools = useSelector((state: any) => state.toolsForSystemCanvas.selectedTool);
  const selectedToolsAPI = useSelector((state: any) => state.toolsForAPICanvas.selectedTool);
  const selectedToolsDB = useSelector((state: any) => state.toolsForDBCanvas.selectedTool);

  const updateCanvasSize = (fabricCanvas: Canvas) => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    fabricCanvas.setWidth(width);
    fabricCanvas.setHeight(height);
    fabricCanvas.renderAll();
  };

  // Add shape for all your cases
  const addShapeByCommand = (command: string, fabricCanvas: Canvas) => {
    if (!fabricCanvas) return;

    const shapeType = command.trim().toUpperCase();

    let shape: fabric.Object | null = null;

    switch (shapeType) {
      case "SELECTION":
        return;

      case "RECTANGLE":
      case "RETANGLE":
        shape = new Rect({
          left: 100,
          top: 100,
          width: 150,
          height: 100,
          fill: "rgba(0, 128, 255, 0.5)",
          stroke: "blue",
          strokeWidth: 2,
        });
        break;

      case "ELLIPSE":
        shape = new Ellipse({
          left: 150,
          top: 150,
          rx: 75,
          ry: 50,
          fill: "rgba(255, 0, 128, 0.5)",
          stroke: "red",
          strokeWidth: 2,
        });
        break;

      case "LINE":
        shape = new Line([50, 50, 200, 200], {
          stroke: "green",
          strokeWidth: 3,
        });
        break;

      case "ARROW":
        const arrowLine = new Line([50, 50, 200, 50], {
          stroke: "orange",
          strokeWidth: 3,
          originX: 'center',
          originY: 'center'
        });
        const arrowHead = new Triangle({
          width: 10,
          height: 15,
          fill: "orange",
          left: 200,
          top: 50,
          angle: 90,
          originX: 'center',
          originY: 'center',
        });
        const arrow = new Group([arrowLine, arrowHead], {
          left: 50,
          top: 50,
        });
        shape = arrow;
        break;

      case "TEXT":
        shape = new Textbox("Sample Text", {
          left: 100,
          top: 100,
          width: 200,
          fontSize: 20,
          fill: "#333",
        });
        break;

      case "TABLE":
        const cellWidth = 100;
        const cellHeight = 40;
        const rows = 3;
        const cols = 3;
        const cells: fabric.Object[] = [];
        for(let r=0; r < rows; r++){
          for(let c=0; c < cols; c++){
            const rect = new Rect({
              left: c * cellWidth,
              top: r * cellHeight,
              width: cellWidth,
              height: cellHeight,
              fill: 'white',
              stroke: 'black',
              strokeWidth: 1,
              selectable: false
            });
            cells.push(rect);
          }
        }
        const table = new Group(cells, {
          left: 100,
          top: 100,
        });
        shape = table;
        break;

      case "DRAW":
        fabricCanvas.isDrawingMode = !fabricCanvas.isDrawingMode;
        return;

      default:
        console.warn("Unknown shape type:", shapeType);
        return;
    }

    if (shape) {
      fabricCanvas.add(shape);
      fabricCanvas.requestRenderAll();
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new Canvas(canvasRef.current, {
        backgroundColor: "#232323",
        selection: true,
      });

      updateCanvasSize(fabricCanvas);
      setCanvas(fabricCanvas);

      const handleResize = () => {
        updateCanvasSize(fabricCanvas);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        fabricCanvas.dispose();
      };
    }
  }, []);

  const handleAddShape = () => {
    let toolToUse: string | null = null;
    switch (artbordTab) {
      case "SYSTEM":
        toolToUse = selectedTools;
        break;
      case "API":
        toolToUse = selectedToolsAPI;
        break;
      case "DATABASE":
        toolToUse = selectedToolsDB;
        break;
    }
    if (toolToUse && canvas) {
      addShapeByCommand(toolToUse, canvas);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
      <canvas id="canvas" ref={canvasRef} />
      <button
        onClick={handleAddShape}
        className="absolute top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded z-10"
      >
        Add Shape
      </button>
    </div>
  );
}