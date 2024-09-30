import React from 'react';

function Administrators() {
  const administrators = [
    { id: 1, name: 'Administrator One', phone: '+998 99 111 11 11' },
    { id: 2, name: 'Administrator Two', phone: '+998 99 222 22 22' },
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Administrators</h2>
      <ul className="space-y-3">
        {administrators.map((admin) => (
          <li key={admin.id} className="border p-3 rounded hover:bg-gray-100">
            <div className="font-semibold">{admin.name}</div>
            <div className="text-gray-500">{admin.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Administrators;
