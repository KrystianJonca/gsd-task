import React from 'react';
import classes from './App.module.css';
import { Organizations, Repositories, Users } from './components';

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1 className={classes.title}>GSD Recruitment Task</h1>
      </header>
      <main className={classes.container}>
        <Organizations />
        <Repositories />
        <Users />
      </main>
    </>
  );
};

export default App;
