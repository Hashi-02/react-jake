import React from 'react';
import CssModule from './CssModules.module.scss';

export const CssModules = () => {
  return (
    <div className={CssModule.container}>
      <p className={CssModule.title}>CssModules</p>
      <button className={CssModule.button}>ボタン</button>
    </div>
  );
};
