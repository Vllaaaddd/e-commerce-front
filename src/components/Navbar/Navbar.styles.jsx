import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: rgb(34, 31, 31);
`;

export const Wrapper = styled.div`
  padding: 14px 64px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  /* flex: 1; */
`;

export const Center = styled.div`
  /* flex: 1; */
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
