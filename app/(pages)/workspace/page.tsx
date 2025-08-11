"use client";
import CanvasEditor from '@/components/canvas/Editor';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  setSelectedTool,
  setSelectedToolToRectangle,
  setSelectedToolToEllipse,
  setSelectedToolToArrow,
  setSelectedToolToLine,
  setSelectedToolToDraw,
  setSelectedToolToText,
  setSelectedToolToTable
} from '@/redux/slices/AllTools';

export default function WorkSpace() {
  const artbordTab = useSelector((state: RootState) => state.canvasTab.type);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent shortcuts from triggering when typing in inputs
      if (document.activeElement?.tagName === 'INPUT') return;

      switch(event.key.toLowerCase()) {
        case "s":
          dispatch(setSelectedTool());
          break;
        case "r":
          dispatch(setSelectedToolToRectangle());
          break;
        case "e":
          dispatch(setSelectedToolToEllipse());
          break;
        case "a":
          dispatch(setSelectedToolToArrow());
          break;
        case "l":
          dispatch(setSelectedToolToLine());
          break;
        case "d":
          dispatch(setSelectedToolToDraw());
          break;
        case "t":
          dispatch(setSelectedToolToTable());
          break;
        case "x":  // Changed from 't' to 'x' for text to avoid conflict with table
          dispatch(setSelectedToolToText());
          break;
        case "w":
          // Add your specific action for 'w' here
          break;
        case "b":
          // Add your specific action for 'b' here
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <div>
      <div>
        <CanvasEditor />
      </div>
    </div>
  );
}