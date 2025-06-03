import React from 'react'
import Sidebar from '../../components/Sidebar'

import { FaMapMarkerAlt } from 'react-icons/fa';
function NearestHospital() {

const hospitals = [
  {
    name: "Hope Medical Center",
    address: "123 Health St, Kwara",
    distance: "2.3 km",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "CityCare Hospital",
    address: "456 Wellness Ave, Kwara",
    distance: "3.8 km",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Greenlife Clinic",
    address: "789 Healing Blvd, Port Harcourt",
    distance: "5.1 km",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded shadow">
              <h2 className="text-2xl font-bold mb-4">🏥 Nearest Hospitals</h2>
              <ul className="space-y-4">
                {hospitals.map((hospital, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-white p-4 rounded border hover:shadow-md transition"
                  >
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-24 h-24 rounded object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{hospital.name}</h3>
                      <p className="text-sm text-gray-600">{hospital.address}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Distance: {hospital.distance}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span className="text-sm">Map</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
        </main>
    </div>

  )
}

export default NearestHospital