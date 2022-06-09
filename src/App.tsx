import React from 'react';
import classes from './App.module.css';
import { Organizations, Users } from './components';

// I didn't include the repositories column as the github's api endpoint
// for getting the repositories doesn't support per_page query, unlike the other two endpoints.

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1 className={classes.title}>GSD Recruitment Task</h1>
      </header>
      <main className={classes.container}>
        <Organizations />
        <Users />
      </main>
    </>
  );
};

export default App;
