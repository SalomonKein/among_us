import * as yup from 'yup';

export const validationsSchemaAuth = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup.string().typeError('Must be a string').required('Required'),
});

export const validationsSchemaReg = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup.string().typeError('Must be a string').required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password mismatch')
    .required('Required'),
});

export const validationsSchemaCreateTodo = yup.object().shape({
  title: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  description: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательно'),
  year: yup.string().typeError('Должно быть строкой').required('Обязательно'),
});
