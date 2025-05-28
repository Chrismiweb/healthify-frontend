import React, { useState } from "react";
import { FaChevronUp, FaTimes } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Invoice = () => {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  // Dummy empty data
  const data = [];

  return (
    <div className="border-2 rounded-md p-4 w-full max-w-4xl mt-[70px] mx-auto bg-[#F9F9F9] shadow">
      {/* Header */}
      <div className="flex justify-between bg-[#EBE9E9] px-[13px] py-[8px] items-center mb-4">
        <div className="flex justify-center items-center gap-[5px]">
            <CgProfile className="cursor-pointer text-[20px]" />
            <h2 className="flex items-center gap-2 font-semibold text-lg">
            Finance
            </h2>
        </div>
        <div className="flex gap-2 text-gray-600">
          <IoMdSettings className="cursor-pointer" />
          <FaChevronUp className="cursor-pointer" />
          <FaTimes className="cursor-pointer" />
        </div>
      </div>

      {/* Info Message */}
      <div className="bg-[#BDD0F5] text-[#3C3C3C] p-2 rounded-[8px] mb-4">
        View your finances and click the button to view the relative invoice.
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <label className="font-bold" htmlFor="entries">Show</label>
          <select
            id="entries"
            className="border rounded px-2 py-1"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <span className="font-bold">entries</span>
        </div>
        <input
          type="text"
          placeholder="Search here"
          className="border px-3 py-1 rounded-[10px] w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border font-normal px-4 py-2">Note</th>
              <th className="border font-normal px-4 py-2">Debit</th>
              <th className="border font-normal px-4 py-2">Credit</th>
              <th className="border font-normal px-4 py-2">Balance</th>
              <th className="border font-normal px-4 py-2">TransDate</th>
              <th className="border font-normal px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500 bg-[#EBE9E9]">
                  No data available in table
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.note}</td>
                  <td className="border px-4 py-2">{row.debit}</td>
                  <td className="border px-4 py-2">{row.credit}</td>
                  <td className="border px-4 py-2">{row.balance}</td>
                  <td className="border px-4 py-2">{row.transDate}</td>
                  <td className="border px-4 py-2">Action</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
        <div>Showing 0 to 0 of 0 Entries</div>
        <div className="flex gap-4">
          <button className="">Previous</button>
          <button className="text-blue-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
