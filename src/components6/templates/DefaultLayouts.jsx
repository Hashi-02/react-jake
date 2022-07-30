import React from 'react';
import { Footer } from '../Atoms/layout/Footer';
import { Header } from '../Atoms/layout/Header';

export const DefaultLayouts = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
