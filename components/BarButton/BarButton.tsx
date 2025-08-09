// import { CanvasType } from '@/redux/slices/canvasSlice';
// import React from 'react'
// import { IconType } from 'react-icons';
// import { useDispatch } from 'react-redux';

// export default function BarButton({
//   Icon,
//   IconSize,
//   Title,
//   SetState,
//   StateValue,
//   ButtonValue,
//   topBorder = false,
//   bottomBorder = false
// } : {
//   Icon: IconType,
//   IconSize: number,
//   Title: string,
//   SetState: any,
//   topBorder?: boolean,
//   bottomBorder?: boolean,
//   StateValue: CanvasType,
//   ButtonValue: CanvasType
// }){

//   const Dispatch = useDispatch();

//   return (
//     <div 
//       className={
//           StateValue === ButtonValue ? 
//           `bg-[#f3f3f3] text-[#00226d] w-full h-full flex items-center justify-center ` : 
//           'text-[#f3f3f3] w-full h-full flex items-center justify-center'
//         }
//           style={{
//             borderTop: topBorder ? '1px solid #f3f3f3' : 'none',
//             borderBottom: bottomBorder ? '1px solid #f3f3f3' : 'none',
            
//           }}
//           title={Title}
//           onClick={() => Dispatch(SetState())}
//       >
//           <Icon size={IconSize} />
//     </div>
//   )
// }


import { CanvasType } from '@/redux/slices/canvasSlice';
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
  StateValue: CanvasType;
  ButtonValue: CanvasType;
}) {
  const Dispatch = useDispatch();

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        transition: 'opacity 0.3s ease-in-out', // Inline transition for opacity
        opacity: StateValue === ButtonValue ? 1 : 0.5, // Opacity changes based on state
        backgroundColor: StateValue === ButtonValue ? '#f3f3f3' : 'transparent', // Change background color on selection
        color: StateValue === ButtonValue ? '#00226d' : '#f3f3f3', // Text color based on selection
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
