"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function WorkSpace() {

  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);

  return (
    <div>
       <h1>Count: {count}</h1>
      
      <h2> Artbord Tab: {artbordTab} </h2>

    </div>
  )
}