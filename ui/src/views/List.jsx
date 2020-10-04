import React from 'react';
import UserList from '../components/user-list';

export default function List() {
  return (
    <UserList users={[{ name: 'Luis Arce', points: 12 }]}></UserList>
  )
}