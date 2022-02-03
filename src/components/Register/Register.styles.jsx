import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled(Modal)`
  display: flex;
  flex-direction: row;
  a {
    color: #3e77aa;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #d35232;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 10px;
  color: #797878;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px;
  font-size: 10px;
  border: 0.5px solid #a6a5a5;
  border-radius: 4px;
  cursor: text;
`;

export const Fieldset = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Acception = styled.span`
  font-size: 10px;
  margin: 10px 0px;
`;

export const Submit = styled.button`
  font-size: 14px;
  color: white;
  width: 100%;
  height: 10%;
  padding: 10px;
  background-color: #00a046;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #13b85a;
  }
`;

export const Rlink = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
`;

export const Right = styled.div`
  flex: 1;
`;
