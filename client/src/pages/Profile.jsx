// import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { name, email, phone, zipCode, latitude,longitude, profilePic } = currentUser;
  console.log({currentUser});

  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">User Profile</h2>
        <Link to="/nearest" className="text-blue-500 hover:underline">
          Check Nearest 5
        </Link>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div>
          <label className="font-semibold">Name:</label>
          <span>{name}</span>
        </div>
        <div>
          <label className="font-semibold">Email:</label>
          <span>{email}</span>
        </div>
        <div>
          <label className="font-semibold">Phone:</label>
          <span>{phone}</span>
        </div>
         <div>
          <label className="font-semibold">Zip Code:</label>
          <span>{zipCode}</span>
        </div>
        <div>
          <label className="font-semibold">Latitude:</label>
          <span>{latitude}</span>
        </div>
        <div>
          <label className="font-semibold">Longitude:</label>
          <span>{longitude}</span>
        </div>
        <div>
          <label className="font-semibold">Profile Picture:</label>
          <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
