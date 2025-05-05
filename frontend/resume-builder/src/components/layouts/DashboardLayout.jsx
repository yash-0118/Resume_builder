import React, { Children, useContext } from 'react'
import { userContext } from '../../context/userContext'
import Navbar from './Navbar';

const DashboardLayout = ({activeMenu, children}) => {
    const { user } = useContext(userContext);
  return (
    <div>
        <Navbar activeMenu = {activeMenu} />

        {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout
