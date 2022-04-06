import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import Navbar from '../common/Navbar/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
