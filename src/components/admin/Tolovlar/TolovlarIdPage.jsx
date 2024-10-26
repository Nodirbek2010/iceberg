import React from 'react';
import { Link } from "react-router-dom";

const StudentIDPage = () => {
  const student = {
    name: "Narzulayev Jahongir Qahramon o'g'li",
    totalDebt: 500000,
    totalPaid: 500000,
    remainingAmount: 0,
    activeGroups: ["Guruh-1"],
    paymentHistory: [
      { id: 1, groupName: "Guruh - 1", coursePrice: 400000, discount: 0, amountDue: 400000 },
    ],
    imageUrl: "https://via.placeholder.com/100", 
  };

  return (
    <div className="flex">
      <div className="flex-grow ml-64 p-6 bg-gray-100">
        <div className="w-full p-4 bg-gray-100">
          <div className="flex items-center text-gray-500 text-xl mb-4">
            <Link to={"/admin/Tolovlar"}>
              <span>O'quvchilar ro'yxati</span>
            </Link>
            <span className="mx-2">/</span>
            <span className="font-bold text-[#354e94]">To'lov</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">O'quvchining To'lov Tarixi</h1>

      
        <div className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-md">
          <img
            src={student.imageUrl}
            alt={student.name}
            className="rounded-full w-24 h-24 mr-4"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{student.name}</h2>
          </div>
        </div>

   
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-blue-500">Umumiy qarzi:</h2>
            <p className="text-gray-600 text-lg">{student.totalDebt} so'm</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-blue-500">Umumiy to'lanmagan summa:</h2>
            <p className="text-gray-600 text-lg">{student.totalPaid} so'm</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-blue-500">To'langan summa:</h2>
            <p className="text-gray-600 text-lg">{student.remainingAmount} so'm</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-blue-500">Aktiv guruhlar:</h2>
            <p className="text-gray-600 text-lg">{student.activeGroups.join(', ')}</p>
          </div>
        </div>

      
        <table className="w-full text-sm text-left bg-white shadow-md rounded-lg mt-6">
          <thead className="bg-[#354e94] text-white">
            <tr>
              <th scope="col" className="px-6 py-3">N</th>
              <th scope="col" className="px-6 py-3">Guruh nomi</th>
              <th scope="col" className="px-6 py-3">Kurs narxi</th>
              <th scope="col" className="px-6 py-3">Chegirma</th>
              <th scope="col" className="px-6 py-3">To'lanishi kerak</th>
            </tr>
          </thead>
          <tbody>
            {student.paymentHistory.map((payment, index) => (
              <tr key={payment.id} className="border-b">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{payment.groupName}</td>
                <td className="px-6 py-4">{payment.coursePrice} so'm</td>
                <td className="px-6 py-4">{payment.discount} so'm</td>
                <td className="px-6 py-4">{payment.amountDue} so'm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentIDPage;
