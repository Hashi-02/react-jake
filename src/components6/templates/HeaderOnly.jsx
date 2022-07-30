import React from 'react';
import { Header } from '../Atoms/layout/Header';

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      {/* <div style={{ height: '50px', backgroundColor: 'red' }} /> */}
      <Header />
      {children}
    </>
  );
};
