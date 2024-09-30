// Example ID Page Component
import React from 'react';
import { useLocation } from 'react-router-dom';

const IDPage = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <div className="mt-4">
        <img
          src={user.image} // Use the image URL from the user object
          alt={user.name}
          className="w-32 h-32 rounded-full border-2 border-gray-300" // Styles for circular image
        />
      </div>
      <p><strong>Passport:</strong> {user.passport}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default IDPage;
