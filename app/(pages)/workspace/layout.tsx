import LeftBar from '@/components/Bars/Left'
import TopBar from '@/components/Bars/Top'
import React from 'react'

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-[100vh] bg-[#333333]'>

        {/* Top Bar */}
        <TopBar />

        {/* Left Bar */}
        <LeftBar />

        
        <div>
            {children}
        </div>

    </div>
  )
}
