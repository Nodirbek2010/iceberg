import React from 'react';

function TopBar() {
  return (
    <div className="bg-white p-4 shadow-sm flex justify-between items-center">
      <div className="text-gray-500">
        <span className="mr-4">+998900664455</span>
        <span>RU</span>
      </div>
      <div className="flex items-center space-x-3">
        <img
          className="w-10 h-10 rounded-full"
          src="/path-to-profile-image.jpg"
          alt="User Profile"
        />
        <div>
          <span className="block font-semibold">Abdullayev Abdulla</span>
          <span className="block text-sm text-gray-500">Talaba</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
