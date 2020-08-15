import React from 'react';

import './styles.css';

const Login: React.FC = () => {
	return (
		<main id="page-login">
			<div className="banner-side">EasyDelivery</div>
			<div className="form-side">
				<form>
					<h1>Fazer login</h1>
					<input type="text" placeholder="E-mail" className="input" />
					<input type="text" placeholder="Senha" className="input password" />
					<div className="actions">
						<span>Lembrar-me</span>
						<span>Esqueci minha senha</span>
					</div>
					<button type="submit">Entrar</button>
				</form>
				<div className="footer">
					<span>Não tem conta?</span>
					<span>Cadastre-se</span>
					<span>É de graça</span>
				</div>
			</div>
		</main>
	);
};

export default Login;
