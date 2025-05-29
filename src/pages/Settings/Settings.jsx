import React from 'react'
import Sidebar from '../../components/Sidebar'

function Settings() {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 p-4">
            <div className='text-[50px] font-bold w-[100%] h-[100vh] flex text-center justify-center items-center'>
                SETTINGS WILL DISPLAY HERE
            </div>
        </main>
    </div>

  )
}

export default Settings