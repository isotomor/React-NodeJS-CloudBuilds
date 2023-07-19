import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router-dom";

const backendUrl = 'https://react-nodejs-cloudbuilds-server-5lcjppv6ea-ew.a.run.app';

function UsersDatabase() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <h3 className="title">Lista de usuarios ({users.length})</h3>
    <div className="botones">
      
      <div className="botones-2">
      
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
      </div>
      
       <Link to="/register"  className="links" > Registrar nuevo usuario</Link> 
    </div>
    </div>
  );
}

export default UsersDatabase;