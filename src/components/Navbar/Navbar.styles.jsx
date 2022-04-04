import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  padding: 12px 30px;
  background-color: var(--secondary);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Name = styled.span`
  margin: 10px;
  color: var(--main);
`;

export const Catalog = styled.button`
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

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding-inline-start: 0px;
  }
  li {
    padding: 0px 10px;
  }
`;

export const Language = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;
  padding: 3px 0px 0px 0px;

  a {
    color: var(--main);
    transition: 0.2s ease-in-out;
    margin: 0px 4px;

    &:hover {
      color: #d35232;
    }
  }
`;
