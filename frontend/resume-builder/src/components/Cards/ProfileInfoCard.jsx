import React, { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';

const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(userContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/');
    };

  return (
    user && 
    <div className='flex items-center'>
      <img src={user.profileImageUrl} alt="" 
        className='w-11 h-11 bg-gray-300 rounded-full mr-3' />
        <div>
            <div className="text-[15px] font-bold loading-3">{user.name || ""}</div>
            <button className='text-purple-500 text-sm font-semibold cursor-pointer hover:underline'
                onClick={handleLogout}>
                    Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfoCard
