import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../Atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: '/user', state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: '/user', state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>Topページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
