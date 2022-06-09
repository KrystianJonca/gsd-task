import React from 'react';
import Card from '../UI/Card';
import type { OrganizationType } from './Organizations';

const Organization: React.FC<Partial<OrganizationType>> = ({
  login,
  avatar_url,
  description,
}) => {
  return (
    <Card
      title={login as string}
      img={avatar_url as string}
      desc={description as string}
    />
  );
};

export default Organization;
