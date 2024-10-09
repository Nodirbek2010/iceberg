import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tolovlar = () => {
  const navigate = useNavigate();

 
  const students = [
    {
      groupName: "Guruh 1",
      fullName: "Narzulayev Jahongir Qahramon o'g'li",
      paymentDate: "2024-10-01",
      paymentMonth: "Oktyabr",
      paymentAmount: "500 000",
      paymentType: "Naqd",
    },
    {
      groupName: "Guruh 2",
      fullName: "Narzulayev Jahongir Qahramon o'g'li",
      paymentDate: "2024-10-02",
      paymentMonth: "Oktyabr",
      paymentAmount: "400 000",
      paymentType: "Naqd",
    },
    {
      groupName: "Guruh 3",
      fullName: "Narzulayev Jahongir Qahramon o'g'li",
      paymentDate: "2024-10-03",
      paymentMonth: "Oktyabr",
      paymentAmount: "400 000",
      paymentType: "Naqd",
    },
  ];

  return (
    <div className="ml-64 p-4">
  
      <div className="flex items-center text-gray-500 text-xl mb-4">
      <span className="font-bold text-[#354e94]">O'quvuchilar ro'yxat</span>
    
       
      </div>

      
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right bg-white shadow-md border border-gray-300 rounded-t-lg">
          <thead className="bg-[#354e94] text-white">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-tl-lg border-b border-gray-300">
                GURUH NOMI
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                O'QUVCHI F.I.SH
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                TO'LOV SANASI
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                TO'LOV OYI 
              </th>
              <th scope="col" className="px-6 py-3 border-b border-gray-300">
                TO'LOV MIQDORI 
              </th>
              <th scope="col" className="px-6 py-3 rounded-tr-lg border-b border-gray-300">
                TO'LOV TURI 
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b border-gray-300">
                  {student.groupName}
                </th>
                <td className="px-6 py-4 border-b border-gray-300" onClick={() => navigate(`/admin/student/${index}`)} style={{ cursor: 'pointer' }}>
                  {student.fullName}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">{student.paymentDate}</td>
                <td className="px-6 py-4 border-b border-gray-300">{student.paymentMonth}</td>
                <td className="px-6 py-4 border-b border-gray-300">{student.paymentAmount}</td>
                <td className="px-6 py-4 border-b border-gray-300">{student.paymentType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tolovlar;
