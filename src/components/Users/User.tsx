import React from 'react';
import Card from '../UI/Card';
import type { UserType } from './Users';

const User: React.FC<Partial<UserType>> = ({ login, avatar_url, html_url }) => {
  return (
    <Card
      title={login as string}
      img={avatar_url as string}
      link={html_url as string}
    />
  );
};

export default User;
