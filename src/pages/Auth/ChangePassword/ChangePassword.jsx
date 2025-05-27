import React, { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password confirmation check
    if (newPassword !== confirmPassword) {
      alert("New and Confirm passwords do not match");
      return;
    }

    // Simulate API call and success
    setTimeout(() => {
      setSuccess(true);
      // Clear form
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-gray-50 p-6 rounded-md shadow">
      {/* Title */}
      <div className="bg-gray-200 p-3 rounded-t-md font-semibold">
        Settings/Change Password
      </div>

      {/* Tab-like header */}
      <div className="bg-blue-200 text-blue-800 font-medium p-2 rounded mt-2">
        Change Password
      </div>

      {/* Success message */}
      {success && (
        <div className="bg-gray-200 text-green-700 p-2 mt-2 rounded">
          Password Successfully Changed!
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="oldPassword">
            Old Password*
          </label>
          <input
            type="password"
            id="oldPassword"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="newPassword">
            New Password*
          </label>
          <input
            type="password"
            id="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="confirmPassword">
            Confirm Password*
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
