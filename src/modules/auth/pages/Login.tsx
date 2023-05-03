import { useForm } from 'react-hook-form';

import Input from '../../../common/components/Input/Input';
import MainButton from '../../../common/components/MainButton/MainButton';
import Loader from '../../../common/components/Loader/Loader';
import Snackbar from '../../../common/components/Snackbar/Snackbar';

import { useAppDispatch } from '../../../hooks/store';
import { useAppSelector } from '../../../hooks/store';
import { login } from '../duck';

import Logo from '../../../common/components/PromartLogo/Logo';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isAuthenticating = useAppSelector((state) => state.auth.isAuthenticating);
  const authError = useAppSelector((state) => state.auth.authError);
  const dispatch = useAppDispatch();

  const submitForm = (data: { [key: string]: string }) => {
    dispatch(login(data));
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-orangeLight'>
      {isAuthenticating && <Loader />}
      {<Snackbar type='error' message={authError} />}
      <Logo color='orange' className='mb-20 scale-150' />
      <div className='bg-white border-2 border-orange rounded-2xl p-8 w-11/12 max-w-lg'>
        <h1 className='text-4xl font-bold text-gray-900 mb-6'>Iniciar sesión</h1>
        <form noValidate>
          <div className='mb-4'>
            <Input
              disabled={isAuthenticating}
              name='username'
              label='Usuario'
              placeholder='Usuario'
              errors={errors}
              formRef={register('username', {
                required: 'Campo obligatorio',
              })}
            />
          </div>
          <div className='mb-6'>
            <Input
              disabled={isAuthenticating}
              type='password'
              name='password'
              label='Contraseña'
              placeholder='Contraseña'
              errors={errors}
              formRef={register('password', {
                required: {
                  value: true,
                  message: 'Campo requerido',
                },
                minLength: {
                  value: 6,
                  message: 'Mínimo 6 caracteres',
                },
              })}
            />
          </div>
          <MainButton
            disabled={isAuthenticating}
            className='w-full'
            onClick={handleSubmit(submitForm)}
          >
            Iniciar sesión
          </MainButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
