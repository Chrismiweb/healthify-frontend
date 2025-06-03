import React from 'react'
import Sidebar from '../../components/Sidebar'
import ExploreComponent from './ExploreComponent'

function Explore() {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
            <div className='text-[50px] font-bold w-[100%] h-[100vh] flex text-center justify-center items-center'>
                <ExploreComponent/>
            </div>
        </main>
    </div>

  )
}

export default Explore