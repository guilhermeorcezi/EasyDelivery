import React, { useState } from 'react';

import goBackImg from '../../assets/images/goback.png';

import Input from '../../components/Input';

import './styles.css';

const ForgotPassword: React.FC = () => {
	const [email, setEmail] = useState('');

	function handleSignUp() {}

	return (
		<main id="page-forgot-password">
			<div className="form-side">
				<img src={goBackImg} />

				<form onSubmit={handleSignUp}>
					<h1>Eita, esqueceu sua senha?</h1>
					<span className="describe">
						Não esquenta, vamos dar um jeito nisso.
					</span>

					<div className="input-group">
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
					</div>

					<button type="submit">Enviar</button>
				</form>
			</div>

			<div className="banner-side">EasyDelivery</div>
		</main>
	);
};

export default ForgotPassword;
