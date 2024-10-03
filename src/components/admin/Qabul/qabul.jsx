import React, { useState } from 'react';

const Qabul = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [selectedSubject, setSelectedSubject] = useState(null); // Track the selected subject
  const [selectedGroup, setSelectedGroup] = useState(null); // Track the selected group
  const [formData, setFormData] = useState({ // Store form data
    surname: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    dob: ''
  });

  // Dummy subject data
  const subjects = [
    { id: 1, name: 'Matematika' },
    { id: 2, name: 'Biologiya' },
    { id: 3, name: 'Ingliz tili' },
    { id: 4, name: 'Rustili' },
  ];

  // Dummy group data for each subject
  const groups = {
    Matematika: [
      {
        id: 1,
        teacher: 'Olimov T.',
        time: '10:00 - 12:00',
        startTime: '10:00',
        endTime: '12:00',
        teacherPhone: '+998900000000',
        details: 'Algebra va geometriya fanlari.',
      },
      {
        id: 2,
        teacher: 'Karimova N.',
        time: '14:00 - 16:00',
        startTime: '14:00',
        endTime: '16:00',
        teacherPhone: '+99890000000',
       
      },
    ],
    Fizika: [
      {
        id: 3,
        teacher: 'Turgunov S.',
        time: '09:00 - 11:00',
        startTime: '09:00',
        endTime: '11:00',
        teacherPhone: '+998900000000',
       
      },
    ],
    Ingliz_tili: [
      {
        id: 4,
        teacher: 'Baxromova S.',
        time: '13:00 - 15:00',
        startTime: '13:00',
        endTime: '15:00',
        teacherPhone: '+998000000000',
        details: 'Grammatika va soʻz boyligi.',
      },
    ],
    Tarix: [
      {
        id: 5,
        teacher: 'Rahimov R.',
        time: '16:00 - 18:00',
        startTime: '16:00',
        endTime: '18:00',
        teacherPhone: '+998900000000',
 
      },
    ],
  };

  // Function to move to the next step
  const goToNextStep = () => {
    setStep(step + 1);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle subject selection
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setSelectedGroup(null); // Reset group when new subject is selected
  };

  // Function to handle group selection
  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">
          {step === 1 ? "Yangi talaba qo'shish" : 'Fan va guruh tanlash'}
        </h1>

        {/* Step 1: Student Information Form */}
        {step === 1 && (
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label className="block font-semibold mb-2">Familiya</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Familiya"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Ismi</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Ismi"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Telefon raqami</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Telefon raqami"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Ota Onasining telefon raqami</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Elektron pochta"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Manzil</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Manzil"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Tug'ilgan sana</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>

            <div className="flex gap-10">
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
                Saqlash
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
                onClick={goToNextStep} // Move to the next step
              >
                Keyingisi
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Subject and Group Selection */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Fanlar ro'yxati</h2>

            {/* Subject Cards using Flexbox */}
            <div className="flex flex-wrap gap-6 mb-6">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`border rounded-lg p-4 shadow-lg cursor-pointer flex-1 max-w-xs ${
                    selectedSubject && selectedSubject.name === subject.name
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                  onClick={() => handleSubjectSelect(subject)}
                >
                  <h3 className="text-lg font-semibold">{subject.name}</h3>
                </div>
              ))}
            </div>

            {/* Group Cards (Show after selecting a subject) */}
            {selectedSubject && (
              <>
                <h2 className="text-xl font-bold mb-4">
                  {selectedSubject.name} guruhlari
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {groups[selectedSubject.name.replace(' ', '_')]?.map((group) => (
                    <div
                      key={group.id}
                      className={`border rounded-lg p-4 shadow-lg cursor-pointer ${
                        selectedGroup && selectedGroup.id === group.id
                          ? 'border-green-500'
                          : 'border-gray-300'
                      }`}
                      onClick={() => handleGroupSelect(group)}
                    >
                      <h3 className="text-lg font-semibold">
                        O'qituvchi: {group.teacher}
                      </h3>
                      <p className="text-gray-600">
                        Dars vaqti: {group.startTime} - {group.endTime}
                      </p>
                      <p className="text-gray-600">
                        O'qituvchi telefon raqami: {group.teacherPhone}
                      </p>
                      <p className="text-gray-600">{group.details}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Action buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setStep(1)} // Go back to step 1
              >
                Oldingi
              </button>
              <button
                className={`bg-blue-500 text-white py-2 px-4 rounded ${
                  !selectedGroup ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!selectedGroup} // Disable if no group selected
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qabul;
