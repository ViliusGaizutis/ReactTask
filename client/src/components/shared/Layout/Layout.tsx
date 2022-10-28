import React, { FunctionComponent, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Store
import { selectTheme } from 'redux/reducers/theme';

// Custom hooks
import { useAppSelector } from 'redux/hooks';

// Components
import Header from 'components/shared/Header/Header';
import Sidebar from 'components/shared/Sidebar/Sidebar';
import Footer from 'components/shared/Footer/Footer';

// Styles
import GlobalStyle from './Layout.styles';

const Layout: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <GlobalStyle themeType={theme} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
