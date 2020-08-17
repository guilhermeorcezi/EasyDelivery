import React, { useState, FormEvent } from 'react';

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import PasswordInput from '../../components/PasswordInput';
import Input from '../../components/Input';

import './styles.css';

const Login: React.FC = () => {
	const [inputType, setInputType] = useState('password');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	function handleChangeInputType(type: string) {
		setInputType(type);
	}

	function handleLogin(e: FormEvent) {
		e.preventDefault();

		console.log(password);
	}

	return (
		<main id="page-login">
			<div className="banner-side">EasyDelivery</div>

			<div className="form-side">
				<form onSubmit={handleLogin}>
					<h1>Fazer login</h1>
					<div className="input-block">
						<Input
							type="text"
							placeholder="E-mail"
							name="email"
							label="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-icon">
						<PasswordInput />
					</div>

					<div className="actions">
						<div className="input-block">
							<input
								type="checkbox"
								id="remember_pwd"
								name="remember_pwd"
								className="input-checkbox"
							/>
							<label htmlFor="remember_pwd">Lembrar-me</label>
						</div>
						<span>Esqueci minha senha</span>
					</div>

					<button type="submit">Entrar</button>
				</form>

				<div className="footer">
					<div className="register-block">
						<span>Não tem conta?</span>
						<a href="/">Cadastre-se</a>
					</div>
					<span>É de graça</span>
				</div>
			</div>
		</main>
	);
};

export default Login;
