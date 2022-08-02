import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../Atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
import { userState } from '../store/userState';
import { useSetRecoilState } from 'recoil';

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);
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
