import React from 'react';

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="button">ボタン</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          //使えない
          // &:hover {
          //   background-color: #3d84a8;
          //   color: rgb(255, 255, 255);
          //   cursor: pointer;
          // }
        }
      `}</style>
    </>
  );
};
