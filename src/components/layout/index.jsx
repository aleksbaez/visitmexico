import React from 'react';
import Header from '../header';
import Rss from '../Rss';
import Footer from '../footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Rss />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;