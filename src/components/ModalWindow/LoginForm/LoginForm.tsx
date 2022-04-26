import { useEffect, useContext, FC } from 'react';
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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, defaultValues, ILogin } from '../../../validators/login';
import { userService } from '../../../services/user-service';
import { setToLocalStorage } from '../../../services/local-storage-service';
import { USER_TOKENS, USER_ID } from '../../../constants/config';
import { Context } from '../../../context';
import useAxios from '../../../hooks/use-axios';
import Loader from '../../Loader';

const styles = {
  eyeOutlined: {
    margin: '0 0 3% 3%'
  }
};

interface LoginFormProps {
  handleCancel: () => void;
  handleFormTypeChange: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ handleCancel, handleFormTypeChange }) => {
  const { userStore } = useContext(Context);
  const { t } = useTranslation();
  const { response, loading, error, fetchData } = useAxios();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  async function onSubmit(data: ILogin) {
    fetchData({ service: userService.login, data });
  }

  useEffect(() => {
    if (response) {
      const { accessToken, customer } = response.data;

      userStore.setAuth(true);

      setToLocalStorage(USER_TOKENS.ACCESS_TOKEN, accessToken);
      setToLocalStorage(USER_ID, customer.id);

      handleCancel();
    }
  }, [response, userStore, handleCancel]);

  return (
    <Container>
      <Loader loading={loading}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Left>
            <Label>{t('login.emailOrPhone')}</Label>
            <Controller
              control={control}
              name='login'
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.login?.message && <p>{t(errors.login?.message)}</p>}
                </>
              )}
            />

            <Label>{t('login.password')}</Label>
            <Fieldset>
              <Controller
                control={control}
                name='password'
                render={({ field }) => (
                  <>
                    <Input {...field}></Input>
                  </>
                )}
              />
              <EyeOutlined style={styles.eyeOutlined} />
            </Fieldset>
            {errors.password?.message && <p>{t(errors.password?.message)}</p>}

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
      </Loader>
    </Container>
  );
};

export default LoginForm;
