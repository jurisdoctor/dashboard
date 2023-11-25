'use client';

import Dashboard from '@/app/dashboard';
import Login from './components/Login';
import React from 'react';
import scss from './page.module.scss';
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
