import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setUsers(result);
    };
    fetchUsers();
  }, []);

  return (
    <div className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <p>Total de inscritos: {users.length}</p>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
