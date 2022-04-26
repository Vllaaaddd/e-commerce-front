import { FC } from 'react';
import { Submit } from './SubmitBtn.styles';

interface SubmitBtnProps {
  title: string;
}

const SubmitBtn: FC<SubmitBtnProps> = ({ title }) => {
  return <Submit>{title}</Submit>;
};

export default SubmitBtn;
