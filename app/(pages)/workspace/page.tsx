"use client";
import React from 'react'
import { useSelector } from 'react-redux';

export default function WorkSpace() {

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);
  const selectedTools = useSelector( (state: any) => state.toolsForSystemCanvas.selectedTool);
  const selectedToolsAPI = useSelector( (state: any) => state.toolsForAPICanvas.selectedTool);
  const selectedToolsDB = useSelector( (state: any) => state.toolsForDBCanvas.selectedTool);

  return (
    <div>
      
      <h2> Artbord Tab: {artbordTab} </h2>

      <h2> Selected Tools System Canvas: {selectedTools} </h2>

      <h2> Selected Tools API Canvas: {selectedToolsAPI} </h2>

      <h2> Selected Tools DB Canvas: {selectedToolsDB} </h2>

    </div>
  )
}