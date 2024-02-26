import Sidebar from '@/components/shared/Sidebar'
import React from 'react'
import MobileNav from '@/components/shared/MobileNav'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className='root'>
        <Sidebar/>
        <MobileNav/>
        <div className='root-contaniner'>
            <div className='wrapper'>
            {children}
            </div>
      
      </div>
      <Toaster/>
    </main>
  )
}

export default Layout
