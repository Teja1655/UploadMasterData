import React from 'react';
import { useUser } from './UserContext';

const UserDisplay = () => {
  const { user } = useUser();

  return <p>{user ? `Logged in as: ${user}` : 'Not logged in'}</p>;
};

export default UserDisplay;
