import React from 'react';
import Column from '../UI/Column';
import List from '../UI/List';
import useInfiniteScrollData from '../../hooks/useInfiniteScrollData';

const baseUsersUrl = 'https://api.github.com/users';

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const Users: React.FC = () => {
  const {
    data: users,
    isLoading,
    error,
    fetchMore,
  } = useInfiniteScrollData<User>(baseUsersUrl);

  return (
    <Column>
      <h2>Users</h2>
      <List>
        {users && users.map((user) => <li key={Math.random()}>{user.id}</li>)}
        {isLoading && <li>Loading...</li>}
        {error && <li>Sorry there was an error: {error}</li>}
      </List>
      <button onClick={fetchMore}>Fetch More</button>
    </Column>
  );
};

export default Users;
