
import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';
import Sidebar from '../../components/Sidebar';


function Profile() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '+234',
    gender: '',
    emailNotifications: false,
    smsNotifications: false,
    termsAccepted: false,
    autoResponder: false,
    autoResponse: ''
  })

  const [profileImage, setProfileImage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    console.log('Profile data saved:', formData)
  }

  const handleAutoResponderSave = () => {
    console.log('Auto responder saved:', formData.autoResponse)
  }

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar/>
      
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button className="p-2 bg-white rounded-lg shadow-md">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
          </div>
        </button>
      </div>

      <main className="flex-1 lg:ml-0">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-auto h-auto rounded-full" />
             
            </div>
            
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 lg:p-8">
          {/* Profile Header */}
          <div className="bg-gray-200 rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-300 rounded">⚙️</button>
                <button className="p-1 hover:bg-gray-300 rounded">▲</button>
                <button className="p-1 hover:bg-gray-300 rounded">✕</button>
              </div>
            </div>
          </div>

          {/* Edit Notice */}
          <div className="bg-blue-100 border border-blue-200 rounded-none p-3 mt-4">
            <p className="text-blue-800 text-sm">You can edit your profile</p>
          </div>

          {/* Profile Content */}
          <div className="bg-gray-200 rounded-b-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
              {/* Left Column - Profile Image */}
              <div className="lg:col-span-1">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <User size={48} className="text-gray-500" />
                      )}
                    </div>
                  </div>
                  <label className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Camera size={20} />
                    <span>Upload your Profile photo...</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Edit Icon */}
                <div className="mt-12 flex justify-center">
                  <div className="text-6xl">✏️</div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm">
                  <h2 className="text-lg font-medium bg-blue-200 text-gray-800 p-2 rounded-lg mb-2">Edit your personal info here</h2>
                  
                  <div className="space-y-6 p-2">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="emailNotifications"
                          checked={formData.emailNotifications}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I want to receive email from this site
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="smsNotifications"
                          checked={formData.smsNotifications}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I want to receive SMS from this site Notes: SMS comes at a cost
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I Agree to the Terms and Conditions of using this platform
                        </span>
                      </label>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={handleSave}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                       Save
                      </button>
                    </div>
                  </div>
                </div>

                {/* Auto Responder Section */}
                <div className="bg-white  rounded-lg mt-6">
                  <h2 className="text-lg bg-blue-50 font-medium text-gray-800 mb-6 rounded-lg p-4">Update Auto responder here</h2>
                  
                  <div className="space-y-4 p-6">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="autoResponder"
                        checked={formData.autoResponder}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Enable</span>
                    </label>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Auto response
                      </label>
                      <textarea
                        name="autoResponse"
                        value={formData.autoResponse}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Enter your auto response message..."
                      />
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={handleAutoResponderSave}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile