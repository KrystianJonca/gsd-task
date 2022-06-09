import React from 'react';
import Column from '../UI/Column';
import List from '../UI/List';
import Button from '../UI/Button';
import Organization from './Organization';
import useInfiniteScrollData from '../../hooks/useInfiniteScrollData';
import classes from './Organizations.module.css';

const baseOrgsUrl = 'https://api.github.com/organizations';

export interface OrganizationType {
  login: string;
  id: number;
  avatar_url: string;
  description: string | null;
}

const Organizations: React.FC = () => {
  const {
    data: orgs,
    isLoading,
    error,
    fetchMore,
  } = useInfiniteScrollData<OrganizationType>(baseOrgsUrl);

  return (
    <Column>
      <h2>Organizations</h2>
      <List>
        {orgs &&
          orgs.map((org) => (
            <Organization
              key={Math.random()}
              login={org.login}
              avatar_url={org.avatar_url}
              description={org.description}
            />
          ))}
        {error && (
          <li className={classes.error}>Sorry there was an error: {error}</li>
        )}
        {isLoading && <li className={classes.loader}>Loading...</li>}
      </List>
      <Button onClick={fetchMore}>Load more</Button>
    </Column>
  );
};

export default Organizations;
