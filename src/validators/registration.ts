import * as yup from 'yup';

export const schema = yup.object({
  login: yup.string().required('registration.loginRequired'),
  firstName: yup.string().required('registration.firstNameRequired'),
  lastName: yup.string().required('registration.lastNameRequired'),
  phone: yup.string().required('registration.phoneRequired'),
  email: yup.string().email().required('registration.emailRequired'),
  password: yup.string().required('registration.passwordRequired')
});

export const defaultValues = {
  login: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: ''
};
