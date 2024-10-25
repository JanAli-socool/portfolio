"use client"
import HomeBanner from '@/app/components/banner/page';
import Skills from '@/app/components/skills/page';
import { useEffect } from 'react';


export default function App() {
  useEffect(()=>{
    document.title = "Jan Ali Kazmi Portfolio"
  },[])
  return (
    <>
      <HomeBanner />
      <Skills />
    </>
  );
}
