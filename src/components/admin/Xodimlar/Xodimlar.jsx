import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

function StateTable() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [state, setState] = useState({
    name: "",
    passport: "",
    gender: "Erkak",
    address: "",
    phone: "",
  });
  const [image, setImage] = useState(null); // Add state for image
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const savedStateList = localStorage.getItem("stateList");
    if (savedStateList) {
      setStateList(JSON.parse(savedStateList));
    }
  }, []);

  useEffect(() => {
    if (stateList.length > 0) {
      localStorage.setItem("stateList", JSON.stringify(stateList));
    }
  }, [stateList]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newState = { ...state, image }; // Include the image in the state
    if (editIndex !== null) {
      const updatedStateList = [...stateList];
      updatedStateList[editIndex] = newState;
      setStateList(updatedStateList);
    } else {
      setStateList([...stateList, newState]);
    }
    resetForm();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setState(stateList[index]);
    setImage(stateList[index].image); // Set the current image for editing
    setModal(true);
  };

  const handleDelete = (index) => {
    const updatedStateList = stateList.filter((_, i) => i !== index);
    setStateList(updatedStateList);
  };

  const handleView = (index) => {
    navigate("/admin/id", { state: { user: stateList[index] } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setState({ name: "", passport: "", gender: "Erkak", address: "", phone: "" });
    setImage(null); // Reset the image state
    setEditIndex(null);
    setModal(false);
  };

  const exportToExcel = () => {
    const formattedData = stateList.map((item, index) => ({
      N: index + 1,
      "Direktor F.I.SH": item.name,
      "Passport Seriyasi": item.passport,
      "Jinsi": item.gender,
      "Manzili": item.address,
      "Telefon": item.phone,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, "StateData.xlsx");
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg max-w-4xl mx-auto">
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleAdd}
            className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
          >
            <h2 className="text-lg font-bold mb-4">{editIndex !== null ? 'Edit Entry' : 'Add Entry'}</h2>
            <input
              type="text"
              placeholder="Name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Passport"
              value={state.passport}
              onChange={(e) => setState({ ...state, passport: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={state.gender}
              onChange={(e) => setState({ ...state, gender: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Erkak">Erkak</option>
              <option value="Ayol">Ayol</option>
            </select>
            <input
              type="text"
              placeholder="Address"
              value={state.address}
              onChange={(e) => setState({ ...state, address: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone"
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition">
              {editIndex !== null ? 'Update' : 'Add'}
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2 hover:bg-red-600 transition"
              onClick={resetForm}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => {
            resetForm();
            setModal(true);
          }}
        >
          + Qo'shish
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={exportToExcel}
        >
          Excel
        </button>
      </div>
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
                  <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition" onClick={() => handleView(index)}>
                    👁️
                  </button>
                  <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition" onClick={() => handleEdit(index)}>
                    ✏️
                  </button>
                  <button className="bg-red-200 p-2 rounded hover:bg-red-300 transition" onClick={() => handleDelete(index)}>
                    🗑️
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

export default StateTable;
