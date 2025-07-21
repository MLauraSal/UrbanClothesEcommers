// src/pages/UserProfile.jsx
import React from "react";

const UserProfile = () => {
  const user = {
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+54 11 1234 5678",
    address: "Av. Siempre Viva 123, Buenos Aires",
    avatar: "https://i.pravatar.cc/150?img=3"
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          src={user.avatar}
          alt="Avatar"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600">{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
