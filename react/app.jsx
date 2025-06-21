import React from 'react';
import UserCard from './components/UserCard';

function App() {
  const users = [
    { name: 'Alice', role: 'Frontend Developer' },
    { name: 'Bob', role: 'Backend Developer' },
    { name: 'Charlie', role: 'Full Stack Developer' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Team Members</h1>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default App;
