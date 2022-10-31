import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
    <Layout>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" width="200px" height="200px"/>
        <h6>{user?.name}</h6>
        <h6>{user?.email}</h6>
      </div>
    </Layout>
      </div>
  )
}

export default UserProfile