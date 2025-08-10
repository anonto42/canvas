import React from 'react'
import { IconType } from 'react-icons';
import { CanvasType } from '@/redux/slices/canvasSlice';
import BarButton from './BarButton';
import { APICanvasToolsType } from '@/redux/slices/ToolsForAPISlice';
import { SystemCanvasToolsType } from '@/redux/slices/ToolsForSystemCanvasSlice';

export default function ToolsButton(
{
  Icon,
  IconSize,
  Title,
  SetState,
  StateValue,
  ButtonValue,
  ShortCartKey,
  topBorder = false,
  bottomBorder = false,
  textSize = 'text-xs'
}: {
  Icon: IconType;
  IconSize: number;
  Title: string;
  SetState: any;
  ShortCartKey: string;
  topBorder?: boolean;
  bottomBorder?: boolean;
  textSize?: string;
  StateValue: CanvasType | SystemCanvasToolsType | APICanvasToolsType;
  ButtonValue: CanvasType | SystemCanvasToolsType | APICanvasToolsType;
}){

  return (
    <div className='h-full w-full justify-center items-center relative flex'>
      <BarButton
        Icon={Icon}
        IconSize={IconSize}
        Title={Title}
        SetState={SetState}
        StateValue={StateValue}
        ButtonValue={ButtonValue}
        topBorder={topBorder}
        bottomBorder={bottomBorder}
      />
      <span className={textSize + ' text-[#f3f3f3] absolute top-11 left-8'}>{ShortCartKey}</span>
    </div>
  )
}
