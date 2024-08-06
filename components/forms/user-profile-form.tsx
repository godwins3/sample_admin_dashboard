// components/UserCard.tsx
'use client';
import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdLock } from 'react-icons/md';

interface UserCardProps {
  name: string;
  imageUrl: string;
  role: string;
  department: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, imageUrl, role, department }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({ name, role, department });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    alert(`Password changed to: ${newPassword}`);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleProfileUpdate = () => {
    alert(`Profile updated to: ${JSON.stringify(profileInfo)}`);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 p-8 flex flex-col md:flex-row md:items-start">
      {/* Left Side - User Info */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <img className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg" src={imageUrl} alt={name} />
      </div>
      <div className="flex-grow">
        <div className="font-bold text-4xl text-gray-800">{profileInfo.name}</div>
        <div className="text-blue-600 text-lg font-semibold">{profileInfo.role}</div>
        <div className="text-gray-500 text-md mb-4">{profileInfo.department}</div>

        <p className="text-gray-700 mb-6">
          A short description of the user goes here. This can include interests or a brief bio.
        </p>

        {/* Profile Update Section */}
        <div className="border-t border-gray-300 pt-4 mt-6">
          <h2 className="font-bold text-lg mb-2">Update Profile</h2>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={profileInfo.name}
                onChange={(e) => setProfileInfo({ ...profileInfo, name: e.target.value })}
                placeholder="Name"
                className="border border-gray-300 rounded-lg p-3 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={profileInfo.role}
                onChange={(e) => setProfileInfo({ ...profileInfo, role: e.target.value })}
                placeholder="Role"
                className="border border-gray-300 rounded-lg p-3 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={profileInfo.department}
                onChange={(e) => setProfileInfo({ ...profileInfo, department: e.target.value })}
                placeholder="Department"
                className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-4">
                <button
                  onClick={handleProfileUpdate}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
            >
              <AiFillEdit className="mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Change Password Section */}
      <div className="mt-6 md:mt-0 md:ml-8 border-l border-gray-300 pl-6">
        <h2 className="font-bold text-lg mb-2 flex items-center">
          <MdLock className="mr-2 text-gray-600" />
          Change Password
        </h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="border border-gray-300 rounded-lg p-3 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
        <button
          onClick={handlePasswordChange}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserCard;
