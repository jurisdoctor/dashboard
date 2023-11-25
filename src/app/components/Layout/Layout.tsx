import { Metadata } from 'next';
import SideMenu from '../SideMenu';
import scss from './Layout.module.scss';
import { useSession } from 'next-auth/react';

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <main className={scss.layout}>
      {session && <SideMenu />}
      {props.children}
    </main>
  );
};

export default Layout;
