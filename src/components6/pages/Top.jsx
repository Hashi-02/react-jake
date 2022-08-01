import React, { useContext } from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../Atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
export const Top = () => {
  const { setUserInfo } = useContext(UserContext);
  const history = useHistory();
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/user');
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/user');
  };
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
