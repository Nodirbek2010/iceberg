import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Bosh sahifa</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/admin/directors" className="text-blue-500 hover:underline">Direktor</Link>
        </li>
        <li>
          <Link to="/admin/administrators" className="text-blue-500 hover:underline">Administratorlar</Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </div>
  );
}

export default Sidebar;