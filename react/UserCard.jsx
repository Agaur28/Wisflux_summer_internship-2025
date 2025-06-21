import React from 'react';

function UserCard({ name, role }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px'
    }}>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default UserCard;
