"use client";
import React from 'react'
import BarButton from '../BarButton/BarButton';
import { CanvasType, setTabToAPI } from '@/redux/slices/canvasSlice';
import { useSelector } from 'react-redux';
import { PiShareNetworkDuotone } from 'react-icons/pi';
import { LuMousePointerClick } from 'react-icons/lu';
import { FaRegCircle, FaRegSquare } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineDraw } from 'react-icons/md';
import { CiText } from 'react-icons/ci';

export default function LeftBar() {

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);


  return (
    <div className='absolute h-full w-auto flex justify-center items-center'>
      
      <div className='h-[450px] w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid grid-rows-7 items-center'>

        <div className='h-full w-full justify-center items-center relative flex'>
          <BarButton
            Icon={LuMousePointerClick}
            IconSize={24}
            Title="Selection Tool"
            SetState={setTabToAPI}
            StateValue={artbordTab}
            ButtonValue={CanvasType.API}
          />
          <span className='text-[#f3f3f3] text-xs absolute top-11 left-8'>A</span>
        </div>

        <BarButton
          Icon={FaRegSquare}
          IconSize={28}
          Title="Rectangle Tool"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

        <BarButton
          Icon={FaRegCircle}
          IconSize={28}
          Title="Ellipse Tool"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

        <BarButton
          Icon={IoIosArrowRoundBack}
          IconSize={28}
          Title="Arrow Tool"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

        <BarButton
          Icon={IoAddOutline}
          IconSize={28}
          Title="Line Tool"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

        <BarButton
          Icon={MdOutlineDraw}
          IconSize={28}
          Title="Draw Tool"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

        <BarButton
          Icon={CiText}
          IconSize={28}
          Title="Text Tool"
          SetState={setTabToAPI}
          StateValue={artbordTab}
          ButtonValue={CanvasType.API}
        />

      </div>

    </div>
  )
}