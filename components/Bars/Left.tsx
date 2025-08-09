"use client";
import { increment } from '@/redux/slices/counterSlice';
import React, { useState } from 'react'
import { PiShareNetworkDuotone } from 'react-icons/pi';
import { useDispatch } from 'react-redux';

export default function LeftBar() {

  const [select, setSelect] = useState<"API Design" | "System Design" | "Database Design">('Database Design');

  const dispatch = useDispatch();

  return (
    <div className='absolute h-full w-auto flex justify-center items-center'>
      
      <div className='h-[450px] w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid grid-rows-3 items-center'>

        <div 
          className={
              select === "API Design" ? 'bg-[#f3f3f3] text-[#00226d] w-full h-full flex items-center justify-center' : 'text-[#f3f3f3] w-full h-full flex items-center justify-center'}
            title='API Design'
            onClick={() => {
              setSelect("API Design"); 
              dispatch( increment() )
            }}
          >
            <PiShareNetworkDuotone size={28} />
        </div>

        <div 
          className={
              select === "Database Design" ? 'bg-[#f3f3f3] text-[#00226d] w-full h-full flex items-center justify-center' : 'text-[#f3f3f3] w-full h-full flex items-center justify-center'}
            title='API Design'
            onClick={() => setSelect("Database Design")}
          >
            <PiShareNetworkDuotone size={28} />
        </div>

        <div 
          className={
              select === "System Design" ? 'bg-[#f3f3f3] text-[#00226d] w-full h-full flex items-center justify-center' : 'text-[#f3f3f3] w-full h-full flex items-center justify-center'}
            title='API Design'
            onClick={() => setSelect("System Design")}
          >
            <PiShareNetworkDuotone size={28} />
        </div>

      </div>

    </div>
  )
}