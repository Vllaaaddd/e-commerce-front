import * as yup from 'yup';

export interface ILogin {
  login: string;
  password: string;
}

export const schema = yup.object({
  login: yup.string().required('registration.loginRequired'),
  password: yup.string().required('registration.passwordRequired')
});

export const defaultValues: ILogin = {
  login: '',
  password: ''
};
