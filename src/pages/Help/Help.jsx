import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaUser, FaCog, FaTimes } from 'react-icons/fa';

function Help() {
  const [message, setMessage] = useState(''); 
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
          <div className="w-[85%] mx-auto mt-6 shadow-md">
            {/* Header */}
            <div className="bg-[#EBE9E9] p-3 font-semibold text-gray-700">Contact us</div>

            {/* Profile Header */}
            <div className="flex mt-[34px] items-center justify-between bg-gray-200 p-3">
              <div className="flex bg-[#EBE9E9] items-center gap-2">
                <FaUser />
                <span className="font-semibold">Profile</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FaCog />
                <FaTimes />
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-100 text-sm text-gray-800 p-3 mt-[32px] leading-relaxed">
              Let us know if you have any complaints about our platform. Our support team will reach out immediately. Please do not ask for any medical advice using this form, it is only meant for help with technical issues. Keep your conversation confidential and talk to doctors only!
            </div>

            {/* Form */}
            <div className="flex justify-between items-center gap-4 p-6">
              {/* Pencil image */}
              <img
                src="/Group 6.png" // place pencil image in public/pencil.png
                alt="Pencil"
                className="w-[100px] h-[100px] mt-2"
              />

              <div className='w-[70%]'>
                <label className="block font-medium mb-1">Report platform issues</label>
                <textarea
                  rows="4"
                  className="w-full border rounded shadow-sm p-2 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className="mt-2 bg-[#4369B2] text-white px-4 py-2 rounded-[8px] hover:bg-blue-800">
                  📤 Send
                </button>
              </div>
            </div>
          </div>
        </main>
    </div>

  )
}

export default Help