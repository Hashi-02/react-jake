import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Atoms/button/PrimaryButton';
import { BaseInput } from '../Atoms/input/BaseInput';

export const SearchInput = () => {
  return (
    <SContainer>
      <BaseInput placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
