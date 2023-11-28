import Footer from '../Footer';
import SideMenu from '../SideMenu';
import scss from './Layout.module.scss';
import { useSession } from 'next-auth/react';

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <main
      className={scss.layout}
      style={{ padding: session ? '0 24px 0 80px' : 0 }}
    >
      {session && <SideMenu />}
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
