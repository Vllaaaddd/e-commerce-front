import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RegistrationForm from '../RegistrationForm';
import LoginForm from '../LoginForm';
import { LoginOutlined } from '@ant-design/icons';

const ModalWindow = () => {
  const [isLoginModal, setLoginModal] = useState(false);
  const [isComponent, setComponent] = useState('Login');

  const handleClick = () => {
    setLoginModal(true);
  };

  const handleCancel = () => {
    setLoginModal(false);
    setComponent('Login');
  };

  const change = () => {
    if (isComponent === 'Login') {
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

      <Modal
        title={isComponent}
        visible={isLoginModal}
        onCancel={() => handleCancel()}
        footer={null}
      >
        <div>
          {isComponent === 'Login' && <LoginForm visibility={change} />}
          {isComponent === 'Registration' && <RegistrationForm visibility={change} />}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
