import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      setUserList(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-600 to-purple-600">
      <div className="max-w-lg w-full py-8 bg-gray-100 border rounded-3xl">
        <h1 className="text-center text-2xl font-bold mb-8">
          Select an Account
        </h1>
        <div className="max-h-80 px-5 bg-white overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-500" style={{ scrollbarWidth: "thin" }}>
          {userList.map((user) => (
            <div key={user.id}>
              <Link to={`/user/${user.id}`} className="py-2 flex items-center space-x-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full">
                  <img src={user.profilepicture} alt={user.name} className="w-full h-full rounded-full" />
                </div>
                <h3 className="font-semibold">{user.name}</h3>
              </Link>
              <div className="h-[0.8px] w-[90%] bg-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
