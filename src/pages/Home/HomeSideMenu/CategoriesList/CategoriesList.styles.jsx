import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 450px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const IconWrapper = styled.div`
  svg {
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
`;
