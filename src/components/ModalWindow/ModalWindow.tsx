import { useState, FC } from 'react';
import { Modal } from 'antd';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next';

interface ModalWindowProps {
  isModalWindowActive: boolean;
  setIsModalWindowActive: (bool: boolean) => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ isModalWindowActive, setIsModalWindowActive }) => {
  const [currentFormType, setCurrentFormType] = useState<string>('login.title');
  const { t } = useTranslation();
  const handleCancel = () => {
    setIsModalWindowActive(false);
    setCurrentFormType('login.title');
  };

  const handleFormTypeChange = () => {
    if (currentFormType === 'login.title') {
      setCurrentFormType('registration.title');
    } else {
      setCurrentFormType('login.title');
    }
  };

  return (
    <div>
      <Modal
        title={t(currentFormType)}
        visible={isModalWindowActive}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          {currentFormType === 'login.title' && (
            <LoginForm handleCancel={handleCancel} handleFormTypeChange={handleFormTypeChange} />
          )}
          {currentFormType === 'registration.title' && (
            <RegistrationForm
              handleCancel={handleCancel}
              handleFormTypeChange={handleFormTypeChange}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
