"use client";
import React from 'react'
import { CanvasType } from '@/redux/slices/canvasSlice';
import { useSelector } from 'react-redux';
import { LuMousePointerClick } from 'react-icons/lu';
import { FaRegCircle, FaRegSquare } from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineDraw } from 'react-icons/md';
import { CiRoute, CiText } from 'react-icons/ci';
import ToolsButton from '../BarButton/ToolsButton';
import { VscWindow } from 'react-icons/vsc';
import { setSelectedTool, setSelectedToolToArrow, setSelectedToolToDraw, setSelectedToolToEllipse, setSelectedToolToLine, setSelectedToolToRectangle, setSelectedToolToText, SystemCanvasToolsType } from '@/redux/slices/ToolsForSystemCanvasSlice';
import { APICanvasToolsType, setSelectedToolOnAPI, setSelectedToolToArrowOnAPI, setSelectedToolToRectangleOnAPI, setSelectedToolToTextOnAPI } from '@/redux/slices/ToolsForAPISlice';
import { HiTableCells } from 'react-icons/hi2';
import { DBCanvasToolsType, setSelectedToolToArrowDB, setSelectedToolToTableDB, setSelectedToolToTextDB } from '@/redux/slices/ToolsForDBSlice';

export default function LeftBar() {

  const artbordTab = useSelector( (state: any) => state.canvasTab.type);
  const selectedTools = useSelector( (state: any) => state.toolsForSystemCanvas.selectedTool);
  const selectedToolsAPI = useSelector( (state: any) => state.toolsForAPICanvas.selectedTool);
  const selectedToolsDB = useSelector( (state: any) => state.toolsForDBCanvas.selectedTool);

  return (
    <div className='absolute h-full w-auto flex justify-center items-center z-50'>
      

      {/* System Canvas Tools */}
      <div
        style={{
          transition: 'left 0.3s ease-in-out', 
          left: artbordTab === CanvasType.SYSTEM ? 0 : -150,
        }}
        className='h-[470px] w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid grid-rows-7 items-center cursor-pointer absolute'
        >

        <ToolsButton
          key={SystemCanvasToolsType.SELECTION}
          Icon={LuMousePointerClick}
          IconSize={24}
          Title="Selection Tool"
          SetState={setSelectedTool}
          StateValue={selectedTools}
          ButtonValue={SystemCanvasToolsType.SELECTION}
          ShortCartKey="S"
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
          Icon={CiRoute}
          IconSize={30}
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

      {/* API Canvas Tools */}
      <div 
        style={{
          transition: 'left 0.3s ease-in-out', 
          left: artbordTab === CanvasType.API ? 0 : -150,
        }}
        className='h-[268.572px] w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid grid-rows-4 items-center cursor-pointer absolute'>
    
        <ToolsButton
          key={APICanvasToolsType.TABLE}
          Icon={VscWindow}
          IconSize={24}
          Title="Table Tool"
          SetState={setSelectedToolOnAPI}
          StateValue={selectedToolsAPI}
          ButtonValue={APICanvasToolsType.TABLE}
          ShortCartKey="W"
          textSize="text-[10px]"
        />

        <ToolsButton
          key={APICanvasToolsType.RETANGLE}
          Icon={FaRegSquare}
          IconSize={23}
          Title="Rectangle Tool"
          SetState={setSelectedToolToRectangleOnAPI}
          StateValue={selectedToolsAPI}
          ButtonValue={APICanvasToolsType.RETANGLE}
          ShortCartKey="R"
        />

        <ToolsButton
          key={APICanvasToolsType.ARROW}
          Icon={CiRoute}
          IconSize={30}
          Title="Arrow Tool"
          SetState={setSelectedToolToArrowOnAPI}
          StateValue={selectedToolsAPI}
          ButtonValue={APICanvasToolsType.ARROW}
          ShortCartKey="A"
        />

        <ToolsButton
          key={APICanvasToolsType.TEXT}
          Icon={CiText}
          IconSize={23}
          Title="Text Tool"
          SetState={setSelectedToolToTextOnAPI}
          StateValue={selectedToolsAPI}
          ButtonValue={APICanvasToolsType.TEXT}
          ShortCartKey="T"
        />
        

      </div>

      {/* DB Canvas Tools */}
      <div 
        style={{
          transition: 'left 0.3s ease-in-out', 
          left: artbordTab === CanvasType.DATABASE ? 0 : -150,
        }}
        className='h-[200px] w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid grid-rows-3 items-center cursor-pointer absolute'>

        <ToolsButton
          key={DBCanvasToolsType.TABLE}
          Icon={HiTableCells}
          IconSize={23}
          Title="Table Tool"
          SetState={setSelectedToolToTableDB}
          StateValue={selectedToolsDB}
          ButtonValue={DBCanvasToolsType.TABLE}
          ShortCartKey="D"
        />

        <ToolsButton
          key={DBCanvasToolsType.TEXT}
          Icon={CiText}
          IconSize={23}
          Title="Text Tool"
          SetState={setSelectedToolToTextDB}
          StateValue={selectedToolsDB}
          ButtonValue={DBCanvasToolsType.TEXT}
          ShortCartKey="T"
        />

        <ToolsButton
          key={DBCanvasToolsType.ARROW}
          Icon={CiRoute}
          IconSize={28}
          Title="Arrow Tool"
          SetState={setSelectedToolToArrowDB}
          StateValue={selectedToolsDB}
          ButtonValue={DBCanvasToolsType.ARROW}
          ShortCartKey="A"
        />


      </div>

    </div>
  )
}