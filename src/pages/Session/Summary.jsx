import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Summary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p className="p-4">No data to show.</p>;

  const { doctor, institute, location, date, timeSlot } = state;

  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
            <div className="w-[80%] mt-10 p-6 bg-[#F1F1F1] rounded shadow space-y-4">
                <h2 className="text-xl font-bold">Session Summary</h2>
                <p><strong>Doctor:</strong> {doctor}</p>
                <p><strong>Fees:</strong> 2000</p>

                <div className="h-[1px] w-[100%] bg-black"></div>

                <p><strong>Institute:</strong> {institute}</p>
                {/* <p><strong>Location:</strong> {location}</p> */}
                <p><strong>Date:</strong> {new Date(date).toDateString()}</p>
                <div className="h-[1px] w-[100%] bg-black"></div>
                <p><strong>Time:</strong> {timeSlot}</p>

                <div className="w-[100%] flex justify-center items-center">
                    <button
                        className="mt-4 bg-[#4369B2] text-white px-[30px] py-2 rounded"
                        onClick={() => navigate("/consultationPayment")}
                        >
                        Pay 2000
                    </button>
                </div>
            </div>
        </main>
    </div>



  );
};

export default Summary;
