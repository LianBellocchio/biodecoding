import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Dashboard</h1>
      <p>Total de inscritos: {users.length}</p>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
