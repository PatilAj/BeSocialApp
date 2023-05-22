import React from "react";
import "./profile.css";

const Profile = ({ userDetails }) => {
  return (
    <div className="UserProfile">
      <div className="UserData">
        <div className="ProfileImage">
          <img
            src={userDetails.profilepicture}
            alt="ProfileImage"
            className="Profile-Image"
          />
        </div>
        <h3 className="name">{userDetails.name}</h3>
        <p className="details">
          Username : <span className="data">{userDetails.username}</span>
        </p>
        <p className="details">
          Email : <span className="data">{userDetails.email}</span>
        </p>
        <p className="details">
          Phone : <span className="data">{userDetails.phone}</span>
        </p>
        <p className="details">
          Website : <span className="data">{userDetails.website}</span>
        </p>
      </div>
      <div className="Border-l"></div>
      <div className="Company">
        <h3 className="Title">Company</h3>
        <p className="C_details">
          Name : <span className="data">{userDetails.company.name}</span>
        </p>
        <p className="C_details">
          Catchphrase : <span className="data">{userDetails.company.catchPhrase}</span>
        </p>
        <p className="C_details">
          bs : <span className="data">{userDetails.company.bs}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
