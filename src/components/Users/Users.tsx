import React from 'react';
import Column from '../UI/Column';
import List from '../UI/List';
import Button from '../UI/Button';
import User from './User';
import useInfiniteScrollData from '../../hooks/useInfiniteScrollData';
import classes from './Users.module.css';

const baseUsersUrl = 'https://api.github.com/users';

export interface UserType {
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
  } = useInfiniteScrollData<UserType>(baseUsersUrl);

  return (
    <Column>
      <h2>Users</h2>
      <List>
        {users &&
          users.map((user) => (
            <User
              key={Math.random()}
              login={user.login}
              avatar_url={user.avatar_url}
              html_url={user.html_url}
            />
          ))}
        {error && (
          <li className={classes.error}>Sorry there was an error: {error}</li>
        )}
        {isLoading && <li className={classes.loader}>Loading...</li>}
      </List>
      <Button onClick={fetchMore}>Load More</Button>
    </Column>
  );
};

export default Users;
