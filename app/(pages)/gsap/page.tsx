'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    
    ScrollSmoother.create({
      smooth: 2.5,
      effects: true, 
      smoothTouch: 0.1, 
    });

  }, []);

  return (
    <div id="smooth-wrapper" className='h-screen bg-[#232323]'>
      <div id="smooth-content" className=''>
        
        <div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div><div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div><div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div><div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div><div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div><div className='w-[59px] h-[10vh] bg-amber-400 mx-auto'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>
        <div className='w-[59px] h-[10vh] bg-amber-400 my-2'></div>

      </div>
    </div>
  );
}