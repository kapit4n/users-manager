import React from 'react';

export default function UserList({ users }) {
  return <div>
    <h1>User List</h1>
    <table>
      <tr>
        <td>Name</td>
        <td>Points</td>
      </tr>
      {users.map(u => (<tr>
        <td>{u.name}</td>
        <td>{u.points}</td>
      </tr>))}
    </table>
  </div>
}