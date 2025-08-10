"use client";
import React from 'react'
import { CanvasType, setTabToAPI } from '@/redux/slices/canvasSlice';
import { useSelector } from 'react-redux';
import { LuMousePointerClick } from 'react-icons/lu';
import { FaRegCircle, FaRegSquare } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineDraw } from 'react-icons/md';
import { CiText } from 'react-icons/ci';
import ToolsButton from '../BarButton/ToolsButton';
import { setSelectedTool, setSelectedToolToArrow, setSelectedToolToDraw, setSelectedToolToEllipse, setSelectedToolToLine, setSelectedToolToRectangle, setSelectedToolToText, SystemCanvasToolsType } from '@/redux/slices/ToolsForSystemCanvasSlice';

export default function LeftBar() {

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);
  const selectedTools = useSelector( (state: any) => state.toolsForSystemCanvas.selectedTool);

  return (
    <div className='absolute h-full w-auto flex justify-center items-center'>
      
      <div className='h-[470px] w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid grid-rows-7 items-center cursor-pointer'>

        <ToolsButton
          key={SystemCanvasToolsType.SELECTION}
          Icon={LuMousePointerClick}
          IconSize={24}
          Title="Selection Tool"
          SetState={setSelectedTool}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.SELECTION}
          ShortCartKey="A"
        />

        <ToolsButton
          key={SystemCanvasToolsType.RECTANGLE}
          Icon={FaRegSquare}
          IconSize={23}
          Title="Rectangle Tool"
          SetState={setSelectedToolToRectangle}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.RECTANGLE}
          ShortCartKey="R"
        />

        <ToolsButton
          key={SystemCanvasToolsType.ELLIPSE}
          Icon={FaRegCircle}
          IconSize={23}
          Title="Ellipse Tool"
          SetState={setSelectedToolToEllipse}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.ELLIPSE}
          ShortCartKey="E"
        />

        <ToolsButton
          key={SystemCanvasToolsType.ARROW}
          Icon={IoIosArrowRoundBack}
          IconSize={34}
          Title="Arrow Tool"
          SetState={setSelectedToolToArrow}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.ARROW}
          ShortCartKey="A"
        />

        <ToolsButton
          key={SystemCanvasToolsType.LINE}
          Icon={IoAddOutline}
          IconSize={32}
          Title="Line Tool"
          SetState={setSelectedToolToLine}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.LINE}
          ShortCartKey="L"
        />

        <ToolsButton
          key={SystemCanvasToolsType.DRAW}
          Icon={MdOutlineDraw}
          IconSize={24}
          Title="Draw Tool"
          SetState={setSelectedToolToDraw}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.DRAW}
          ShortCartKey="D"
        />

        <ToolsButton
          key={SystemCanvasToolsType.TEXT}
          Icon={CiText}
          IconSize={24}
          Title="Text Tool"
          SetState={setSelectedToolToText}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.TEXT}
          ShortCartKey="T"
        />

      </div>

    </div>
  )
}