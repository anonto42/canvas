"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CanvasType } from '@/redux/slices/canvasSlice';
import { RootState } from '@/redux/store';
import { 
  AllToolsType,
  setSelectedTool,
  setSelectedToolToRectangle,
  setSelectedToolToEllipse,
  setSelectedToolToArrow,
  setSelectedToolToLine,
  setSelectedToolToDraw,
  setSelectedToolToText,
  setSelectedToolToTable
} from '@/redux/slices/AllTools';

// Icons
import { LuMousePointerClick } from 'react-icons/lu';
import { FaRegCircle, FaRegSquare, FaTable } from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineDraw } from 'react-icons/md';
import { CiRoute, CiText } from 'react-icons/ci';
import ToolsButton from '../BarButton/ToolsButton';
import { HiTableCells } from 'react-icons/hi2';

const TOOLBAR_STYLE = 'w-[50px] ml-[15px] rounded-full border-1 border-[#f3f3f3] bg-[#00226d33] overflow-hidden grid items-center cursor-pointer absolute';

export default function LeftBar() {
  const dispatch = useDispatch();
  const artbordTab = useSelector((state: RootState) => state.canvasTab.type);
  const systemTool = useSelector((state: RootState) => state.allTools.selectedTool);
  const apiTool = useSelector((state: RootState) => state.allTools.selectedToolForAPI);
  const dbTool = useSelector((state: RootState) => state.allTools.selectedToolForDB);

  const getToolbarPosition = (type: CanvasType) => ({
    transition: 'left 0.3s ease-in-out',
    left: artbordTab === type ? 0 : -150,
  });

  return (
    <div className='absolute h-full w-auto flex justify-center items-center z-50'>
      {/* SYSTEM CANVAS TOOLS */}
      <div
        style={getToolbarPosition(CanvasType.SYSTEM)}
        className={`${TOOLBAR_STYLE} h-[470px] grid-rows-8`}
      >
        <ToolsButton
          key={AllToolsType.SELECTION}
          Icon={LuMousePointerClick}
          IconSize={24}
          Title="Selection Tool"
          SetState={() => dispatch(setSelectedTool())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.SELECTION}
          ShortCartKey="S"
        />

        <ToolsButton
          key={AllToolsType.RECTANGLE}
          Icon={FaRegSquare}
          IconSize={23}
          Title="Rectangle Tool"
          SetState={() => dispatch(setSelectedToolToRectangle())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.RECTANGLE}
          ShortCartKey="R"
        />

        <ToolsButton
          key={AllToolsType.ELLIPSE}
          Icon={FaRegCircle}
          IconSize={23}
          Title="Ellipse Tool"
          SetState={() => dispatch(setSelectedToolToEllipse())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.ELLIPSE}
          ShortCartKey="E"
        />

        <ToolsButton
          key={AllToolsType.TABLE}
          Icon={FaTable}
          IconSize={23}
          Title="Table Tool"
          SetState={() => dispatch(setSelectedToolToTable())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.TABLE}
          ShortCartKey="T"
        />

        <ToolsButton
          key={AllToolsType.ARROW}
          Icon={CiRoute}
          IconSize={30}
          Title="Arrow Tool"
          SetState={() => dispatch(setSelectedToolToArrow())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.ARROW}
          ShortCartKey="A"
        />

        <ToolsButton
          key={AllToolsType.LINE}
          Icon={IoAddOutline}
          IconSize={32}
          Title="Line Tool"
          SetState={() => dispatch(setSelectedToolToLine())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.LINE}
          ShortCartKey="L"
        />

        <ToolsButton
          key={AllToolsType.DRAW}
          Icon={MdOutlineDraw}
          IconSize={24}
          Title="Draw Tool"
          SetState={() => dispatch(setSelectedToolToDraw())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.DRAW}
          ShortCartKey="D"
        />

        <ToolsButton
          key={AllToolsType.TEXT}
          Icon={CiText}
          IconSize={24}
          Title="Text Tool"
          SetState={() => dispatch(setSelectedToolToText())}
          StateValue={systemTool}
          ButtonValue={AllToolsType.TEXT}
          ShortCartKey="X"
        />
      </div>

      {/* API CANVAS TOOLS */}
      <div
        style={getToolbarPosition(CanvasType.API)}
        className={`${TOOLBAR_STYLE} h-[268px] grid-rows-4`}
      >
        <ToolsButton
          key="API_TABLE"
          Icon={FaTable}
          IconSize={24}
          Title="Table Tool"
          SetState={() => dispatch(setSelectedToolToTable())}
          StateValue={apiTool}
          ButtonValue={AllToolsType.TABLE}
          ShortCartKey="W"
        />

        <ToolsButton
          key="API_RECTANGLE"
          Icon={FaRegSquare}
          IconSize={23}
          Title="Rectangle Tool"
          SetState={() => dispatch(setSelectedToolToRectangle())}
          StateValue={apiTool}
          ButtonValue={AllToolsType.RECTANGLE}
          ShortCartKey="R"
        />

        <ToolsButton
          key="API_ARROW"
          Icon={CiRoute}
          IconSize={30}
          Title="Arrow Tool"
          SetState={() => dispatch(setSelectedToolToArrow())}
          StateValue={apiTool}
          ButtonValue={AllToolsType.ARROW}
          ShortCartKey="A"
        />

        <ToolsButton
          key="API_TEXT"
          Icon={CiText}
          IconSize={23}
          Title="Text Tool"
          SetState={() => dispatch(setSelectedToolToText())}
          StateValue={apiTool}
          ButtonValue={AllToolsType.TEXT}
          ShortCartKey="T"
        />
      </div>

      {/* DATABASE CANVAS TOOLS */}
      <div
        style={getToolbarPosition(CanvasType.DATABASE)}
        className={`${TOOLBAR_STYLE} h-[200px] grid-rows-3`}
      >
        <ToolsButton
          key="DB_TABLE"
          Icon={HiTableCells}
          IconSize={23}
          Title="Table Tool"
          SetState={() => dispatch(setSelectedToolToTable())}
          StateValue={dbTool}
          ButtonValue={AllToolsType.TABLE}
          ShortCartKey="D"
        />

        <ToolsButton
          key="DB_TEXT"
          Icon={CiText}
          IconSize={23}
          Title="Text Tool"
          SetState={() => dispatch(setSelectedToolToText())}
          StateValue={dbTool}
          ButtonValue={AllToolsType.TEXT}
          ShortCartKey="T"
        />

        <ToolsButton
          key="DB_ARROW"
          Icon={CiRoute}
          IconSize={28}
          Title="Arrow Tool"
          SetState={() => dispatch(setSelectedToolToArrow())}
          StateValue={dbTool}
          ButtonValue={AllToolsType.ARROW}
          ShortCartKey="A"
        />
      </div>
    </div>
  );
}
