import React from 'react';
import { Footer } from '../Atoms/layout/Footer';
import { Header } from '../Atoms/layout/Header';

export const DefaultLayouts = (props) => {
  const { children } = props;
  return (
    <>
      {/* <div style={{ height: '50px', backgroundColor: 'red' }} /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};
