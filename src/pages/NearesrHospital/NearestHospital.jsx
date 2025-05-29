import React from 'react'
import Sidebar from '../../components/Sidebar'

function NearestHospital() {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 p-4">
            <div className='text-[50px] w-[80%] font-bold w-[100%] h-[100vh] flex text-center justify-center items-center'>
                NEAREST HOSPITAL WILL DISPLAY HERE
            </div>
        </main>
    </div>

  )
}

export default NearestHospital