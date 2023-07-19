import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = 'https://react-nodejs-cloudbuilds-server-5lcjppv6ea-ew.a.run.app';

function Create() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      _id: id,
      name,
      email,
    };

    try {
      const response = await axios.post(`${backendUrl}/api/users/create`,
        newUser
      );
      console.log("Usuario creado exitosamente");
      setNewUser(response.data);
    } catch (error) {
      console.error(error);
    }

    setId("");
    setName("");
    setEmail("");
  };

  return (
    
    <div className="botones">
      
      <form onSubmit={handleSubmit}>
      
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>

      {newUser && (
        <div>
          
        </div>
      )}
      <div>
      <Link to="/database" className="links" > Consultar usuarios</Link>
      </div>
    </div>
  );
}

export default Create;
