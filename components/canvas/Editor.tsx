"use client";
import { Canvas, Ellipse, Line, Rect, Textbox, Triangle, Group, Object as FabricObject } from "fabric";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AllToolsType } from  "@/redux/slices/AllTools";

export default function CanvasEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  // Get current tool from Redux store
  const selectedTool = useSelector((state: RootState) => state.allTools.selectedTool);
  const artbordTab = useSelector((state: RootState) => state.canvasTab.type);

  // Responsive canvas sizing
  const updateCanvasSize = (fabricCanvas: Canvas) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    fabricCanvas.setDimensions({ width, height });
    fabricCanvas.renderAll();
  };

  // Enhanced shape creation with better typing
  const addShapeByTool = (tool: AllToolsType, fabricCanvas: Canvas) => {
    if (!fabricCanvas) return;

    const center = {
      x: fabricCanvas.getWidth() / 2,
      y: fabricCanvas.getHeight() / 2
    };

    let shape: FabricObject | Group | null = null;

    switch (tool) {
      case AllToolsType.SELECTION:
        fabricCanvas.selection = true;
        fabricCanvas.isDrawingMode = false;
        return;

      case AllToolsType.RECTANGLE:
        shape = new Rect({
          left: center.x - 75,
          top: center.y - 50,
          width: 150,
          height: 100,
          fill: 'rgba(0, 128, 255, 0.5)',
          stroke: 'blue',
          strokeWidth: 2,
        });
        break;

      case AllToolsType.ELLIPSE:
        shape = new Ellipse({
          left: center.x,
          top: center.y,
          rx: 75,
          ry: 50,
          fill: 'rgba(255, 0, 128, 0.5)',
          stroke: 'red',
          strokeWidth: 2,
          originX: 'center',
          originY: 'center'
        });
        break;

      case AllToolsType.LINE:
        shape = new Line(
          [center.x - 100, center.y, center.x + 100, center.y], 
          {
            stroke: 'green',
            strokeWidth: 3,
          }
        );
        break;

      case AllToolsType.ARROW:
        const arrowLine = new Line(
          [center.x - 100, center.y, center.x + 80, center.y], 
          {
            stroke: 'orange',
            strokeWidth: 3,
          }
        );
        const arrowHead = new Triangle({
          width: 20,
          height: 20,
          fill: 'orange',
          left: center.x + 80,
          top: center.y,
          angle: 90,
          originX: 'center',
          originY: 'center',
        });
        shape = new Group([arrowLine, arrowHead], {
          originX: 'center',
          originY: 'center',
        });
        break;

      case AllToolsType.TEXT:
        shape = new Textbox('Double click to edit', {
          left: center.x,
          top: center.y,
          width: 200,
          fontSize: 20,
          fill: '#333',
          originX: 'center',
          originY: 'center',
          editable: true,
        });
        break;

      case AllToolsType.TABLE:
        const cellWidth = 80;
        const cellHeight = 30;
        const rows = 3;
        const cols = 4;
        const cells: FabricObject[] = [];
        
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            cells.push(
              new Rect({
                left: c * cellWidth,
                top: r * cellHeight,
                width: cellWidth,
                height: cellHeight,
                fill: r === 0 ? '#f0f0f0' : 'white',
                stroke: '#ddd',
                strokeWidth: 1,
              })
            );
            if (r === 0 || c === 0) {
              cells.push(
                new Textbox(r === 0 ? `Col ${c+1}` : `Row ${r+1}`, {
                  left: c * cellWidth + cellWidth/2,
                  top: r * cellHeight + cellHeight/2,
                  fontSize: 10,
                  originX: 'center',
                  originY: 'center',
                  selectable: false,
                }
              )
              )
            }
          }
        }
        shape = new Group(cells, {
          left: center.x - (cols * cellWidth)/2,
          top: center.y - (rows * cellHeight)/2,
        });
        break;

      case AllToolsType.DRAW:
        fabricCanvas.isDrawingMode = !fabricCanvas.isDrawingMode;
        fabricCanvas.selection = !fabricCanvas.isDrawingMode;
        return;

      default:
        console.warn(`Unknown tool: ${tool}`);
        return;
    }

    if (shape) {
      fabricCanvas.add(shape);
      fabricCanvas.setActiveObject(shape);
      fabricCanvas.requestRenderAll();
    }
  };

  // Initialize canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new Canvas(canvasRef.current, {
      backgroundColor: '#232323',
      selection: true,
      preserveObjectStacking: true,
    });

    setCanvas(fabricCanvas);
    updateCanvasSize(fabricCanvas);

    const handleResize = () => updateCanvasSize(fabricCanvas);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      fabricCanvas.dispose();
    };
  }, []);

  // Handle adding shapes based on current tool
  const handleAddShape = () => {
    if (!canvas) return;
    addShapeByTool(selectedTool, canvas);
  };

  return (
    <div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <button
        onClick={handleAddShape}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md z-10 transition-colors"
      >
        Add Current Tool
      </button>
    </div>
  );
}