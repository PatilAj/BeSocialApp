import React from "react";
import "./Header.css";

const Header = ({ userDetails, isOpen }) => {

  const handleSignOut= () => {
    window.location.href = '/';
  };

  return (
    <div>
      <div className="Section2-Header">
        {isOpen && (
          <div className="flex flex-col dropdown-profile shadow-lg">
            <ul className="flex flex-col justify-center items-center">
              <li className="dropimage">
                <img
                  src={userDetails.profilepicture}
                  alt="ProfileImage"
                  className="w-full h-full"
                />
              </li>
              <li className="font-semibold">{userDetails.name}</li>
              <li className="email">{userDetails.email}</li>
            </ul>
            <div className="border-L"></div>
            <button className="btn btn-danger rounded-3xl" onClick={handleSignOut}>Sign out</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Header;
