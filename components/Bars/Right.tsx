"use client";
import React from 'react';
import { LuServerCog } from "react-icons/lu";
import { IoServerOutline } from "react-icons/io5";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { CanvasType, setTabToAPI, setTabToDatabase, setTabToSystem } from '@/redux/slices/canvasSlice';
import BarButton from '../BarButton/BarButton';


export default function RightBar() {

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);
  
  return (
    <div className='w-auto h-full flex items-center justify-center absolute right-0'>

      <div className='h-[350px] w-[50px] mr-[15px] bg-[#00226d33] border-1 rounded-full border-[#f3f3f3] overflow-hidden grid grid-rows-3items-center cursor-pointer'>

        <BarButton
          Icon={PiShareNetworkDuotone}
          IconSize={28}
          Title="API Design"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

        <BarButton
          Icon={LuServerCog}
          IconSize={28}
          Title="System Design"
          SetState={setTabToSystem}
          StateValue={artbordTab}
          ButtonValue={CanvasType.SYSTEM}
          topBorder={true}
          bottomBorder={true}
        />

        <BarButton
          Icon={IoServerOutline}
          IconSize={28}
          Title="Database Design"
          SetState={setTabToDatabase}
          StateValue={artbordTab}
          ButtonValue={CanvasType.DATABASE}
        />

      </div>

    </div>
  )
}