import React from "react";
import Sidebar from "../../components/Sidebar";

const ConsultationPayment = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
            <div className="flex flex-col md:flex-row min-h-screen bg-[#5b8cd9] text-gray-800 p-6 md:items-center md:justify-center">
      {/* Left Side */}
      <div className="space-y-6 mr-6">
        {/* Logo and Heading */}
        <div className="text-white text-2xl font-semibold flex items-center gap-2">
          <span>💙</span> Consultation fee
        </div>

        {/* Price Summary */}
        <div className="bg-white p-4 rounded shadow-md">
          <p className="text-gray-600 text-sm">Price summary</p>
          <p className="font-bold text-xl">2000</p>
        </div>

        {/* Phone Number */}
        <div className="bg-white p-4 rounded shadow-md flex items-center gap-2">
          <span className="text-xl">👤</span>
          <div>
            <p className="text-sm text-gray-600">Using as</p>
            <p className="font-semibold">+234875234567</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl mt-6 md:mt-0">
        <h2 className="text-center text-lg font-semibold border-b pb-2 mb-4">
          Payment options
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Payment Options */}
          <div className="flex-1 space-y-4">
            <div>
              <p className="font-semibold mb-2">Recommended</p>

              {/* Cards */}
              <div className="bg-gray-100 p-2 rounded mb-2">
                <p className="text-sm font-medium mb-2">Cards</p>
                <div className="flex gap-2">
                  <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" className="h-6" />
                  <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
                </div>
              </div>

              {/* Wallet */}
              <div className="bg-gray-200 p-2 rounded mb-2">
                <p className="text-sm font-medium mb-2">Wallet</p>
                <div className="flex gap-2">
                  <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6" />
                  <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" className="h-6" />
                </div>
              </div>

              {/* Net Banking */}
              <div className="bg-gray-100 p-2 rounded">
                <p className="text-sm font-medium mb-2">Net banking</p>
                <div className="flex gap-2">
                  <img src="https://img.icons8.com/ios-filled/50/000000/bank.png" alt="Bank" className="h-6" />
                  <img src="https://img.icons8.com/ios-filled/50/000000/bank-cards.png" alt="Card" className="h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Card Details Form */}
          <div className="flex-1 space-y-3 border p-4 rounded">
            <input
              type="text"
              placeholder="Card number"
              className="w-full border p-2 rounded"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 border p-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Card Pin"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Name"
              value="IBUKUN"
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
        </main>
    </div>
    
  );
};

export default ConsultationPayment;
