import React, { useState } from 'react';

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

import './styles.css';

const Login: React.FC = () => {
	const [inputType, setInputType] = useState('password');

	function handleChangeInputType(type: string) {
		setInputType(type);
	}

	return (
		<main id="page-login">
			<div className="banner-side">EasyDelivery</div>

			<div className="form-side">
				<form>
					<h1>Fazer login</h1>
					<input type="text" placeholder="E-mail" className="input" />
					<div className="input-icon">
						<input
							type={inputType}
							placeholder="Senha"
							className="input password"
						/>
						{inputType === 'password' ? (
							<RiEyeLine
								color="#9C98A6"
								size="24"
								className="eye-icon"
								onClick={(e) => handleChangeInputType('text')}
							/>
						) : (
							<RiEyeOffLine
								color="#8257E5"
								size="24"
								className="eye-icon"
								onClick={(e) => handleChangeInputType('password')}
							/>
						)}
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
