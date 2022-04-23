import * as yup from 'yup';

export const schema = yup.object({
  login: yup.string().required('registration.loginRequired'),
  password: yup.string().required('registration.passwordRequired')
});

export const defaultValues = {
  login: '',
  password: ''
};
