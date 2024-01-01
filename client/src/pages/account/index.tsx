import React from 'react'
import SubSections from './SubSections';
import AccountData from './AccountData';
import { Outlet } from 'react-router-dom';

const Account = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-[20%] border">
        <SubSections />
      </div>
      <div className="w-[80%] border">
        <Outlet />
      </div>
    </div>
  );
}

export default Account