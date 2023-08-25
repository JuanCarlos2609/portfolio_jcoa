import { useFormik } from 'formik';
import { FormValues } from '@models';
import { useAuth } from '../Auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  const navigation = useNavigate();
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: FormValues) => {
      auth.login(values);
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: 320,
          padding: 20,
          alignItems: 'center',
          backgroundColor: 'grey',
          borderRadius: '10px',
        }}
        onSubmit={formik.handleSubmit}
      >
        <input
          placeholder='E-mail'
          type='email'
          id='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          placeholder='Contraseña'
          type='password'
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <a onClick={() => navigation('/create-account')}>Crear Cuenta</a>
        <button style={{ marginTop: '20px' }} type='submit'>
          Log in
        </button>
      </form>
    </div>
  );
};

export { Login };
