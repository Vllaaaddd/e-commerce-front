import * as yup from 'yup';

export const schema = yup.object({
  firstName: yup.string().required('Введите свое имя на кириллице'),
  lastName: yup.string().required('Введите свою фамилию на кириллице'),
  phone: yup.string().required('Введите свой номер телефона'),
  email: yup.string().email().required('Введите свою эл. почту'),
  password: yup.string().required('Введите пароль'),
});

export const defaultValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
};
