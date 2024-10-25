import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ClientTable() {
  const navigate = useNavigate();
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const savedStateList = localStorage.getItem("stateList");
    if (savedStateList) {
      setStateList(JSON.parse(savedStateList));
    }
  }, []);

  const handleView = (index) => {
    navigate("/client/view", { state: { user: stateList[index] } });
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg max-w-4xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="py-2 px-4 border-b">N</th>
              <th className="py-2 px-4 border-b">Direktor F.I.SH</th>
              <th className="py-2 px-4 border-b">Passport Seriyasi</th>
              <th className="py-2 px-4 border-b">Jinsi</th>
              <th className="py-2 px-4 border-b">Manzili</th>
              <th className="py-2 px-4 border-b">Telefon</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateList.map((item, index) => (
              <tr className="hover:bg-gray-100" key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.passport}</td>
                <td className="py-2 px-4 border-b">{item.gender}</td>
                <td className="py-2 px-4 border-b">{item.address}</td>
                <td className="py-2 px-4 border-b">+998 {item.phone}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
                    onClick={() => handleView(index)}
                  >
                    👁️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default ClientTable;