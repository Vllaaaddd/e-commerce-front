import Modal from 'antd/lib/modal/Modal';
import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  a {
    color: #3e77aa;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #d35232;
    }
  }

  p {
    font-size: 10px;
    color: red;
    margin: -3px 0px 3px 0px;
  }
`;

export const Left = styled.div`
  flex: 1.5;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9e9e9;
  padding-right: 20px;
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
  min-height: 35px;
  align-items: center;
  justify-content: center;
  background-color: var(--button);
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

export const Divider = styled.span`
  position: absolute;
  left: 100%;
  top: 50%;
  font-size: 12px;
  background-color: var(--main);
  transform: translate(-50%, -50%);
  color: #a6a5a5;
`;

export const Right = styled.div`
  flex: 1;
`;
