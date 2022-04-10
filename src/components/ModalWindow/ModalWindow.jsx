import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { LoginOutlined } from '@ant-design/icons';

const ModalWindow = () => {
  const [isLoginModal, setLoginModal] = useState(false);
  const [component, setComponent] = useState('Login');

  const handleClick = () => {
    setLoginModal(true);
  };

  const handleCancel = () => {
    setLoginModal(false);
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
      <LoginOutlined
        onClick={() => handleClick()}
        style={{ color: 'white', cursor: 'pointer', transform: 'scale(1.32)' }}
      />

      <Modal title={component} visible={isLoginModal} onCancel={() => handleCancel()} footer={null}>
        <div>
          {component === 'Login' && <LoginForm visibility={change} />}
          {component === 'Registration' && <RegistrationForm visibility={change} />}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
