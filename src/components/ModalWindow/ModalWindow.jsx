import { useState } from 'react';
import { Modal } from 'antd';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const ModalWindow = ({ isModalWindowActive, setIsModalWindowActive }) => {
  const [component, setComponent] = useState('Login');

  const handleCancel = () => {
    setIsModalWindowActive(false);
    setComponent('Login');
  };

  const change = () => {
    if (component === 'Login') {
      setComponent('Registration');
    } else {
      setComponent('Login');
    }
  };

  return (
    <div>
      <Modal title={component} visible={isModalWindowActive} onCancel={handleCancel} footer={null}>
        <div>
          {component === 'Login' && <LoginForm handleVisibility={change} />}
          {component === 'Registration' && <RegistrationForm handleVisibility={change} />}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
