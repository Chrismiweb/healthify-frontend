import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Session = () => {
  const [institute, setInstitute] = useState("");
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const navigate = useNavigate();

   const handleNext = () => {
    if (!institute || !doctor || !location || !date || !timeSlot) {
      toast.error("Please fill all fields.");
      return;
    }

    navigate("/summary", {
      state: { institute, doctor, location, date, timeSlot }
    });

  };

  return (
     <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
          <ToastContainer/>
          <div className="w-[80%] mx-auto mt-[38px] bg-gray-100 p-6 rounded shadow-md">
            {/* Dropdowns */}
            <select
              className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
            >
              <option value="">Select Institute</option>
              <option value="University of Ilorin Teaching Hospital">University of Ilorin Teaching Hospital</option>
              <option value="General Hospital Ilorin">General Hospital Ilorin</option>
              <option value="Sobi Specialist Hospital">Sobi Specialist Hospital</option>
              <option value="Kwara State Civil Service Hospital">Kwara State Civil Service Hospital</option>
            </select>

            <select
              className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="">Select Doctor</option>
              <option value="Dr Chrismi">Dr Chrismi</option>
              <option value="Dr Farouq">Dr Farouq</option>
              <option value="Dr. Miss Nike">Dr. Miss Nike</option>
              <option value="Mr Khalil">Mr Khalil</option>
              <option value="Miss Muslimah">Miss Muslimah</option>
              <option value="Dr AGM">Dr AGM</option>
              <option value="Dr Kennedy">Dr Kennedy</option>
              <option value="Miss Liya">Miss Liya</option>

            </select>

            <select
              className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="Kwara state, Ilorin">Kwara state, Ilorin</option>
            </select>

            {/* Date Picker */}
            <div className="flex gap-[14px] items-center mb-4">
              <p className="font-medium">Select Date:</p>
              <input
                type="date"
                className="border cursor-pointer w-[20%] border-gray-400 rounded px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Time Slot Buttons */}
            <div className="flex w-[100%] justify-center items-center gap-[30px] mb-6">
              {["Morning", "Afternoon", "Evening"].map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTimeSlot(slot)}
                  className={`px-[64px] py-2 rounded text-white font-medium ${
                    timeSlot === slot ? "bg-[#4369B2]" : "bg-[#4369B2]"
                  } hover:bg-blue-700 transition`}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <div className="text-center">
              <button onClick={handleNext} className="px-6 py-2 border border-[#4369B2] rounded hover:bg-[#4369B2] hover:text-white font-semibold">
                Next
              </button>
            </div>
          </div>
        </main>
    </div>

  );
};

export default Session;
