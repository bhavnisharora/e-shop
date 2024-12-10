import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const onClose = () => {
    setAddress(newAddress);
    setIsModelOpen(false);
  };

  const [newAddress, setNewAddress] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter new address"
        className="w-full p-2 border mb-4 outline-none"
        onChange={(e) => setNewAddress(e.target.value)}
      />

      <div className="flex justify-end">
        <button
          className="bg-gray-500 hover:bg-gray-700 py-2 px-4 text-white rounded mr-2"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded text-white"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
