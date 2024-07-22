import StreamVideoProvider from '@/StreamClientProvider'
import { Metadata } from 'next';
import React,{ ReactNode }  from 'react'

export const metadata: Metadata = {
  title: "MoWe",
  description: "Vide0 calling app",
  icons:{
    icon:"/icons/logo.svg"
  }
};
const RootLayout = ({children}:{children: ReactNode}) => {//here childern type is defined as react node a funcitonality of type script
  return (
    <main> 
      <StreamVideoProvider >
        {children}
      </StreamVideoProvider>
        
    </main>
  )
}

export default RootLayout