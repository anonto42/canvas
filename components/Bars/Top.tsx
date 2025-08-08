import React from 'react';
import { LuServerCog } from "react-icons/lu";
import { IoServerOutline } from "react-icons/io5";
import { PiShareNetworkDuotone } from "react-icons/pi";

export default function TopBar() {

  const SelectTap = (e: any) => {
    console.log(e.target.getAttribute('title'));
  }

  
  return (
    <div className='w-full h-auto flex items-center justify-center absolute'>

      <div className='h-[50px] w-[350px] mt-[15px] bg-[#00226d33] border-1 rounded-full border-[#f3f3f3] overflow-hidden flex justify-between items-center'>

        <div 
          className='text-[#f3f3f3] w-full h-full flex items-center justify-center'
          title='API Design'
        >
          <PiShareNetworkDuotone size={28} />
        </div>

        <div 
          className='text-[#f3f3f3] w-full h-full flex items-center justify-center border-x-1 border-[#f3f3f3]'
          title='System Design'
        >
          <LuServerCog size={26} />
        </div>

        <div 
          className='text-[#f3f3f3] w-full h-full flex items-center justify-center'
          title='Database Design'
        >
          <IoServerOutline size={28} />
        </div>

      </div>

    </div>
  )
}