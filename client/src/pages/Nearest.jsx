import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nearest = () => {
  // const { currentUser } = useSelector((state) => state.user);
  const [nearestUser, setNearestUsers] = useState([]);

  useEffect(() => {
    // Fetch nearest users data from the server using Fetch API
    const fetchNearestUsers = async () => {
      try {
        const response = await fetch('/server/user/nearest');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNearestUsers(data);
      } catch (error) {
        console.error('Error fetching nearest users:', error);
      }
    };
    fetchNearestUsers();
  }, []);

  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-5">Nearest Users</h2>
      {nearestUser.map(user => (
        <div key={user._id} className="mb-4 p-4 border rounded-lg">
          <img src={user.profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{user.username}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
          </div>
        </div>
      ))}
      <Link to="/profile" className="text-blue-500 hover:underline mt-4 block">Back to Profile</Link>
    </div>
  );
};

export default Nearest;
