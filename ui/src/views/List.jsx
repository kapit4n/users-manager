import React from 'react';
import UserList from '../components/user-list';
import axios from 'axios';

export default function List() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(async () => {
    axios.get('http://localhost:3001/users').then(users => {
      setUsers(users.data);
    })
  }, [])

  return (
    <UserList users={users}></UserList>
  )
}