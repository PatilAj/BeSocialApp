import React from "react";
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="container">
        <div className="pages">
          Profile
          <div className="BORDER-l"></div>
        </div>
        <div className="pages">
          Post
          <div className="BORDER-l"></div>
        </div>
        <div className="pages">
          Gallery
          <div className="BORDER-l"></div>
        </div>
        <div className="pages">ToDo</div>
      </div>
    </div>
  );
};

export default Sidebar;
