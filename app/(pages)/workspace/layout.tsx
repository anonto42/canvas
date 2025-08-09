"use client";
import LeftBar from '@/components/Bars/Left'
import TopBar from '@/components/Bars/Right'
import { store } from '@/redux/store';
import React from 'react'
import { Provider } from 'react-redux'

export default function WorkSpaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className='w-full h-[100vh] bg-[#333333]'>

        {/* Top Bar */}
        <TopBar />
        {/* Left Bar */}
        <LeftBar />
        
        <div>
          {children}
        </div>

      </div>
    </Provider>
  )
}
