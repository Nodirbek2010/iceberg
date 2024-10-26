import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import LogoAdmin from "../../../assest/images/Logotip.PNG";
import { FaMoneyBills } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-64 bg-white shadow-md h-screen p-4 overflow-y-auto">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-200 rounded-full p-3">
          <img className="h-12 w-12" src={LogoAdmin} alt="Logo" />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4 text-center">IceBerg</h2>
      <ul className="space-y-2">
        <li className="rounded-lg hover:bg-blue-100 p-2">
          <Link to="/admin/directors" className="flex items-center text-gray-800 hover:text-blue-600">
            <IoMdHome className="mr-2 text-lg" />
            <span className="font-medium">Direktor</span>
          </Link>
        </li>
        <li className="rounded-lg hover:bg-blue-100 p-2">
          <Link to="/admin/administrators" className="flex items-center text-gray-800 hover:text-blue-600">
            <IoPeople className="mr-2 text-lg" />
            <span className="font-medium">Administratorlar</span>
          </Link>
        </li>
        <li className="rounded-lg hover:bg-blue-100 p-2">
          <Link to="/admin/qabul" className="flex items-center text-gray-800 hover:text-blue-600">
            <FaUserPlus className="mr-2 text-lg" />
            <span className="font-medium">Qabul</span>
          </Link>
        </li>
        <li className="rounded-lg hover:bg-blue-100 p-2">
          <Link to="/admin/Tolovlar" className="flex items-center text-gray-800 hover:text-blue-600">
            <FaMoneyBills className="mr-2 text-lg" />
            <span className="font-medium">Tolovlar</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
