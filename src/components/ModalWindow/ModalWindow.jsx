import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { LoginOutlined } from '@ant-design/icons';

const styles = {
  loginOutlined: { color: 'white', cursor: 'pointer', transform: 'scale(1.32)' }
};

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
      <LoginOutlined onClick={() => handleClick()} style={styles.loginOutlined} />

      <Modal title={component} visible={isLoginModal} onCancel={() => handleCancel()} footer={null}>
        <div>
          {component === 'Login' && <LoginForm handleVisibility={change} />}
          {component === 'Registration' && <RegistrationForm handleVisibility={change} />}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
