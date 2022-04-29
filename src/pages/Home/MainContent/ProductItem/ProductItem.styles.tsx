import styled from 'styled-components';

type ImgSrc = {
  src: string;
};

export const Container = styled.div`
  border-right: 1px solid var(--light-grey);
  border-bottom: 1px solid var(--light-grey);
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 200px;
  height: 300px;
  position: relative;
`;

export const Info = styled.div`
  margin-top: 20px;
  font-size: 16px;
  a {
    color: #333333;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #dc6344;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  /* width: 100%;
  height: 100%; */
  top: 0;
  left: 87%;
  transform: scale(1.4);
  cursor: pointer;
  color: orange;
`;

export const Image = styled.img<ImgSrc>`
  height: 60%;
`;

export const Price = styled.h2`
  color: #221f1f;
`;
