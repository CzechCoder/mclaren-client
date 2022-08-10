import React from "react";
import { useAppSelector } from "../app/hooks";

const Profile: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);  

  return (
    <>
      <div className="respCont profile">
        <h1>Customer Profile</h1>
        {user.name}
      </div>
    </>
  );
};

export default Profile;
