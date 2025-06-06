import React from 'react'
import Sidebar from '../../components/Sidebar'
import Homepage from '../../components/Homepage'

function DashboardTwo() {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
            <Homepage/>
        </main>
    </div>
  )
}

export default DashboardTwo