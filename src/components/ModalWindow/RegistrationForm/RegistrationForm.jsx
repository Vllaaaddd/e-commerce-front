import { useContext, useEffect } from 'react';
import {
  Acception,
  Container,
  Form,
  Input,
  Label,
  Left,
  Right,
  Rlink,
  Fieldset,
  Divider
} from './RegistrationForm.styles';
import { EyeOutlined } from '@ant-design/icons/lib/icons';
import ModalSocial from '../Social';
import SubmitBtn from '../SubmitBtn';
import Loader from '../../Loader';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAxios from '../../../hooks/use-axios';
import { userService } from '../../../services/user-service';
import { schema, defaultValues } from '../../../validators/registration';
import { useTranslation } from 'react-i18next';
import { setToLocalStorage } from '../../../services/local-storage-service';
import { USER_TOKENS, USER_ID } from '../../../constants/config';
import { Context } from '../../../context';
import { observer } from 'mobx-react-lite';

const styles = {
  eyeOutlined: { margin: '0 0 3% 3%' }
};

const RegistrationForm = ({ handleCancel, handleFormTypeChange }) => {
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

  async function onSubmit(data) {
    fetchData({ service: userService.register, data });
  }

  useEffect(() => {
    if (response) {
      const { accessToken, refreshToken, customer } = response.data;

      userStore.setAuth(true);

      setToLocalStorage(USER_TOKENS.ACCESS_TOKEN, accessToken);
      setToLocalStorage(USER_TOKENS.REFRESH_TOKEN, refreshToken);
      setToLocalStorage(USER_ID, customer.id);

      handleCancel();
    }
  }, [response, userStore, handleCancel]);

  return (
    <Container>
      <Loader loading={loading}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Left>
            <Label>{t('registration.login')}</Label>
            <Controller
              control={control}
              name='login'
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.login?.message && <p>{t(errors.login?.message)}</p>}
                  {error?.response?.data?.errors?.login && <p>{t('registration.loginUnique')}</p>}
                </>
              )}
            />
            <Label>{t('registration.name')}</Label>
            <Controller
              control={control}
              name='firstName'
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.firstName?.message && <p>{t(errors.firstName?.message)}</p>}
                </>
              )}
            />
            <Label>{t('registration.surname')}</Label>
            <Controller
              control={control}
              name='lastName'
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.lastName?.message && <p>{t(errors.lastName?.message)}</p>}
                </>
              )}
            />
            <Label>{t('registration.phone')}</Label>
            <Controller
              control={control}
              name='phone'
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.phone?.message && <p>{t(errors.phone?.message)}</p>}
                  {error?.response?.data?.errors?.phone && <p>{t('registration.phoneUnique')}</p>}
                </>
              )}
            />
            <Label>{t('registration.email')}</Label>
            <Controller
              control={control}
              name='email'
              render={({ field }) => (
                <>
                  <Input {...field}></Input>
                  {errors.email?.message && <p>{t(errors.email?.message)}</p>}
                  {error?.response?.data?.errors?.email && <p>{t('registration.emailUnique')}</p>}
                </>
              )}
            />
            <Label>{t('registration.createPassword')}</Label>
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
            <Acception>
              <a target='_blank' href='https://rozetka.com.ua/pages/privacy/'>
                {' '}
                {t('registration.terms')}
              </a>
            </Acception>
            <SubmitBtn title={t('registration.submitBtn')} />
            <Rlink>
              <a onClick={() => handleFormTypeChange()} target='_blank'>
                {t('registration.alreadyRegistered')}
              </a>
            </Rlink>
            <Divider>{t('registration.or')}</Divider>
          </Left>
          <Right>
            <ModalSocial />
          </Right>
        </Form>
      </Loader>
    </Container>
  );
};

export default observer(RegistrationForm);
