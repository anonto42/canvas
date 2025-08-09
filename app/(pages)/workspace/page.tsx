"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function WorkSpace() {

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);

  return (
    <div>
      
      <h2> Artbord Tab: {artbordTab} </h2>

    </div>
  )
}