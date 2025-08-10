import { CanvasType } from '@/redux/slices/canvasSlice';
import { SystemCanvasToolsType } from '@/redux/slices/ToolsForAPISlice';
import { APICanvasToolsType } from '@/redux/slices/ToolsForAPI/CavasSlice';
import React from 'react';
import { IconType } from 'react-icons';
import { useDispatch } from 'react-redux';

export default function BarButton({
  Icon,
  IconSize,
  Title,
  SetState,
  StateValue,
  ButtonValue,
  topBorder = false,
  bottomBorder = false
}: {
  Icon: IconType;
  IconSize: number;
  Title: string;
  SetState: any;
  topBorder?: boolean;
  bottomBorder?: boolean;
  StateValue: CanvasType | SystemCanvasToolsType | APICanvasToolsType;
  ButtonValue: CanvasType | SystemCanvasToolsType | APICanvasToolsType;
}) {
  const Dispatch = useDispatch();

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        transition: 'opacity 0.3s ease-in-out', 
        opacity: StateValue === ButtonValue ? 1 : 0.5, 
        backgroundColor: StateValue === ButtonValue ? '#f3f3f3' : 'transparent', 
        color: StateValue === ButtonValue ? '#00226d' : '#f3f3f3', 
        borderTop: topBorder ? '1px solid #f3f3f3' : 'none',
        borderBottom: bottomBorder ? '1px solid #f3f3f3' : 'none',
      }}
      title={Title}
      onClick={() => Dispatch(SetState())}
    >
      <Icon size={IconSize} />
    </div>
  );
}
