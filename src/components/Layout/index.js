import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './styles';

/**
 * Main app layout component
 * @param {object} children destructured from props
 * @returns {Element} JSX
 */
function Layout({ children }) {
  return (
    <>
      <Menu />
      <Main>
        { children }
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
