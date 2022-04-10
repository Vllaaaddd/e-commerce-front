import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  padding: 18px 30px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const Name = styled.span`
  margin: 0px 10px 0px 0px;
  color: var(--main);
  font-size: 20px;
  font-weight: bold;
`;

export const Catalog = styled.button`
  display: flex;
  flex-direction: row;
  padding: 5px;
  color: var(--main);
  background-color: RGB(78, 76, 76);
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 2;
  width: 100%;
  height: 25px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  svg {
    transform: scale(0.7);
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  flex: 8;
`;

export const Search = styled.button`
  flex: 1;
  border: none;
  border-radius: 0px 3px 3px 0px;
  background-color: var(--button);
  color: var(--main);
  font-size: 12px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  margin-top: 12px;
  ul {
    margin-left: 20px;
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: flex-start;
    padding-inline-start: 0px;
  }
  li {
    padding: 0px 10px;
  }
`;

export const Language = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;

  a {
    color: var(--main);
    transition: 0.2s ease-in-out;
    margin: 0px 4px;

    &:hover {
      color: #d35232;
    }
  }
`;
