import React from 'react'
import { useNavigate } from 'react-router-dom';

const SubSections = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section onClick={() => navigate("/account/profile")}>Profile</section>
      <section onClick={() => navigate("/profile")}>Orders</section>
      <section>Address</section>
      <section>Change Password</section>
    </div>
  );
}

export default SubSections