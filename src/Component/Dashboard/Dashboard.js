import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Address from "../Profile/Address";
import Header from "../Header/Header";


const Dashboard = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("https://panorbit.in/api/users.json");
        if (response.ok) {
          const data = await response.json();
          const user = data.users.find((user) => user.id === parseInt(id));
          setUserDetails(user);
        } else {
          throw new Error("Failed to fetch user details");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  console.log(userDetails);

  return (
    <div className="main">
      <div className="container row">
        <div className="Section1 col-md-4">
          <Sidebar />
        </div>
        <div className="Section2 col-md-8">
          <Header userDetails={userDetails} isOpen={openProfile} />
          <div className="Section2-Header">
            <div className="Heading">Profile</div>
            <div
              onClick={() => setOpenProfile((prev) => !prev)}
              className="ProfileButton"
            >
              <div className="Head-profile ">
                <img
                  src={userDetails.profilepicture}
                  alt="ProfileImage"
                  className="head-profile-image"
                />
              </div>
              <p>{userDetails.name}</p>
            </div>
          </div>
          <div className="Head-border"></div>
          <div className="SubSection row">
            <div className="subsection1 col-sm-6">
              <Profile userDetails={userDetails} />
            </div>
            <div className="border-l col-sm-2 "></div>
            <div className="subsection2 col-md-6">
              <Address userDetails={userDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
