import React from 'react';
import UserResult from '../components/user/UserResult'
import UserSearch from '../components/user/UserSearch';

export default function Home() {
  return (
    <>
      <UserSearch />
     <UserResult />
    </>
  );
}
