import React from 'react'
import Sidebar from '../../components/Sidebar'

function Subscription() {
  const subscription = {
    plan: "Premium",
    status: "Active",
    renewalDate: "July 15, 2025",
    amount: "$19.99/month",
  };
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
          <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
              <h2 className="text-2xl font-bold mb-4">📝 Manage Subscription</h2>

              <div className="space-y-4 border p-4 rounded">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Plan:</span>
                  <span className="text-gray-900 font-semibold">{subscription.plan}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Status:</span>
                  <span className={`font-semibold ${subscription.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                    {subscription.status}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Renewal Date:</span>
                  <span className="text-gray-800">{subscription.renewalDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Amount:</span>
                  <span className="text-gray-800">{subscription.amount}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3 md:space-y-0 md:flex md:justify-between">
                <button className="w-full md:w-[32%] bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Upgrade Plan
                </button>
                <button className="w-full md:w-[32%] bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
                  Renew
                </button>
                <button className="w-full md:w-[32%] bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </main>
    </div>

  )
}

export default Subscription