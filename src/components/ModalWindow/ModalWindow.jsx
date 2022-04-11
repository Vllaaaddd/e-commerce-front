import { useState } from 'react';
import { Modal } from 'antd';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const ModalWindow = ({ isModalWindowActive, setIsModalWindowActive }) => {
  const [currentFormType, setCurrentFormType] = useState('Login');

  const handleCancel = () => {
    setIsModalWindowActive(false);
    setCurrentFormType('Login');
  };

  const handleFormTypeChange = () => {
    if (currentFormType === 'Login') {
      setCurrentFormType('Registration');
    } else {
      setCurrentFormType('Login');
    }
  };

  return (
    <div>
      <Modal
        title={currentFormType}
        visible={isModalWindowActive}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          {currentFormType === 'Login' && <LoginForm handleFormTypeChange={handleFormTypeChange} />}
          {currentFormType === 'Registration' && (
            <RegistrationForm handleFormTypeChange={handleFormTypeChange} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
