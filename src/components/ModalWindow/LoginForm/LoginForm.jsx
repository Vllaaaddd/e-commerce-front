import {
  Container,
  Form,
  Input,
  Label,
  Left,
  Right,
  Rlink,
  Fieldset,
  Remember,
  Divider
} from './LoginForm.styles';
import { EyeOutlined } from '@ant-design/icons/lib/icons';
import SubmitBtn from '../SubmitBtn';
import ModalSocial from '../Social';
import { useTranslation } from 'react-i18next';

const styles = {
  eye: {
    margin: '0 0 3% 3%'
  }
};

const LoginForm = ({ handleFormTypeChange }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Form>
        <Left>
          <Label>{t('login.emailOrPhone')}</Label>
          <Input />

          <Label>{t('login.password')}</Label>
          <Fieldset>
            <Input />
            <EyeOutlined style={styles.eye} />
          </Fieldset>

          <Remember>{t('login.rememberMe')}</Remember>

          <SubmitBtn title={t('login.submitBtn')} />

          <Rlink>
            <a onClick={() => handleFormTypeChange()} target='_blank'>
              {t('login.register')}
            </a>
          </Rlink>
          <Divider>{t('login.or')}</Divider>
        </Left>
        <Right>
          <ModalSocial />
        </Right>
      </Form>
    </Container>
  );
};

export default LoginForm;
