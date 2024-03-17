import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUserProfile } from '../redux/user/userSlice'

const Profile = () => {
  const { currentUser} = useSelector((state) => state.user);
  // const { username, email, phone, zipCode, latitude,longitude, profilePic } = currentUser;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    phone: currentUser.phone,
    zipCode: currentUser.zipCode,
    latitude: currentUser.latitude,
    longitude: currentUser.longitude,
    profilePic:currentUser.profilePic})
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProfileData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    const toggleEdit = () => {
      setIsEditing(!isEditing);
      if (isEditing) {
        // Save the updated profile
        dispatch(updateUserProfile(profileData));
      }
    };
  

  return (
    <div className="max-w-lg mx-auto p-5 border rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">User Profile</h2>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        <Link to="/nearest" className="text-white-500 hover:underline">
          Check Nearest 5
        </Link>
        </button>
        <button onClick={toggleEdit} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col items-start gap-3">

      <div>
          <label className="font-semibold">Name:</label><br />
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="font-semibold">Email:</label><br />
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="font-semibold">Phone:</label><br />
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="font-semibold">Zip Code:</label><br />
          <input
            type="text"
            name="username"
            value={profileData.zipCode}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="font-semibold">Latitude:</label><br />
          <input
            type="text"
            name="latitude"
            value={profileData.latitude}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="font-semibold">Longitude:</label><br />
          <input
            type="text"
            name="longitude"
            value={profileData.longitude}
            onChange={handleInputChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="font-semibold">Profile Picture:</label><br></br>
          <img src={profileData.profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
        </div>
      </div>
      </form>
    </div>
  );
};

export default Profile;
