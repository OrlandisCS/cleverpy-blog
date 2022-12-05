import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { auth } from '../mock';
import { iniciarSesion } from '../actions/actions';
import configuration from '../config/Configuration';
import { useNavigate } from 'react-router-dom';

const { logo } = configuration;
const Login = () => {
	const navigate = useNavigate();
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');

	const dispath = useDispatch();

	const handleChangeUsuario = (
		e: React.FormEvent<HTMLInputElement>
	) => {
		setUsuario(e.currentTarget.value);
	};

	const handleChangePassword = (
		e: React.FormEvent<HTMLInputElement>
	) => {
		setPassword(e.currentTarget.value);
	};
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer);
				toast.addEventListener('mouseleave', Swal.resumeTimer);
			},
		});
		if (usuario.length <= 0 || password.length <= 0) {
			return Toast.fire({
				icon: 'error',
				title: 'Todos los campos son requeridos',
			});
		}
		if (usuario !== auth.usuario && password !== auth.password) {
			return Toast.fire({
				icon: 'error',
				title: 'Usuario/Contraseña incorrectos',
			});
		}
		dispath(iniciarSesion(auth.usuario));
		navigate('/');
	};

	return (
		<>
			<div className='container login'>
				<form onSubmit={handleSubmit} data-cy='form-login'>
					{logo}
					<div className='login__content'>
						<input
							id='usuario'
							type='text'
							className='login__input'
							name='usuario'
							onChange={handleChangeUsuario}
							autoComplete='off'
							data-cy='usuario-input'
						/>
						<label
							htmlFor='usuario'
							className={`login__label  ${
								usuario.length > 0 ? 'quitarTransition' : ''
							}`}
							id='usuario__label'
						>
							Usuario
						</label>
					</div>
					<div className='login__content'>
						<input
							id='password'
							type='password'
							className={`login__input`}
							name='password'
							onChange={handleChangePassword}
							autoComplete='off'
							data-cy='password-input'
						/>
						<label
							htmlFor='password'
							className={`login__label  ${
								password.length > 0 ? 'quitarTransition' : ''
							}`}
							id='password__label'
						>
							Password
						</label>
					</div>
					<button type='submit' className='btn'>
						Iniciar Sesión
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
