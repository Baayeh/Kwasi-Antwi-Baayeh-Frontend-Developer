import { Outlet } from 'react-router-dom';
import { ToasterProvider } from '../../libs';
import Navigation from '../Navigation';

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
        <ToasterProvider />
      </main>
    </>
  );
};

export default RootLayout;
