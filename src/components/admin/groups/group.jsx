import React, { useState, useEffect } from "react";

// Modal component
const Group = () => {
  const Modal = ({ isOpen, onClose, onCreate }) => {
    const [groupName, setGroupName] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [teacherName, setTeacherName] = useState("");

    const handleSubmit = () => {
      if (groupName && subjectName && teacherName) {
        onCreate({ groupName, subjectName, teacherName });
        setGroupName("");
        setSubjectName("");
        setTeacherName("");
        onClose();
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white p-5 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Create Group</h2>
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Subject Name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Teacher Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [activeGroups, setActiveGroups] = useState([]);
  const [inactiveGroups, setInactiveGroups] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // Load groups from localStorage on mount
  useEffect(() => {
    const savedActiveGroups =
      JSON.parse(localStorage.getItem("activeGroups")) || [];
    const savedInactiveGroups =
      JSON.parse(localStorage.getItem("inactiveGroups")) || [];
    setActiveGroups(savedActiveGroups);
    setInactiveGroups(savedInactiveGroups);
  }, []);

  // Save groups to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("activeGroups", JSON.stringify(activeGroups));
    localStorage.setItem("inactiveGroups", JSON.stringify(inactiveGroups));
  }, [activeGroups, inactiveGroups]);

  const handleCreateGroup = (newGroup) => {
    setInactiveGroups([...inactiveGroups, newGroup]);
  };

  const activateGroup = (groupIndex) => {
    const groupToActivate = inactiveGroups[groupIndex];
    setActiveGroups([...activeGroups, groupToActivate]);
    setInactiveGroups(
      inactiveGroups.filter((_, index) => index !== groupIndex)
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Shakllanmagan guruhlar (Inactive Groups)
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
        onClick={() => setModalOpen(true)}
      >
        + Guruh qo'shish
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">N</th>
            <th className="px-4 py-2 border">Guruh nomi</th>
            <th className="px-4 py-2 border">Fan nomi</th>
            <th className="px-4 py-2 border">Dars vaqti</th>
            <th className="px-4 py-2 border">O'qituvchi</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inactiveGroups.map((group, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{group.groupName}</td>
              <td className="px-4 py-2 border">{group.subjectName}</td>
              <td className="px-4 py-2 border">8:00-9:30</td>
              <td className="px-4 py-2 border">{group.teacherName}</td>
              <td className="px-4 py-2 border">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => activateGroup(index)}
                >
                  Aktivlashtirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl font-bold mt-8 mb-4">
        Aktiv guruhlar (Active Groups)
      </h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">N</th>
            <th className="px-4 py-2 border">Guruh nomi</th>
            <th className="px-4 py-2 border">Fan nomi</th>
            <th className="px-4 py-2 border">Dars vaqti</th>
            <th className="px-4 py-2 border">O'qituvchi</th>
          </tr>
        </thead>
        <tbody>
          {activeGroups.map((group, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{group.groupName}</td>
              <td className="px-4 py-2 border">{group.subjectName}</td>
              <td className="px-4 py-2 border">8:00-9:30</td>
              <td className="px-4 py-2 border">{group.teacherName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateGroup}
      />
    </div>
  );
};

export default Group;
