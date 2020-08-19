import React, { useState, FormEvent } from 'react';

import PasswordInput from '../../components/PasswordInput';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

import './styles.css';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');

	function handleLogin(e: FormEvent) {
		e.preventDefault();
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
						<Link to="/forgot-password">Esqueci minha senha</Link>
					</div>

					<button type="submit">Entrar</button>
				</form>

				<div className="footer">
					<div className="register-block">
						<span>Não tem conta?</span>
						<Link to="/sign-up">Cadastre-se</Link>
					</div>
					<span>É de graça</span>
				</div>
			</div>
		</main>
	);
};

export default Login;
