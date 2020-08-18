import React, { useState } from 'react';

import goBackImg from '../../assets/images/goback.png';

import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Dropzone from '../../components/Dropzone';

import './styles.css';

const SignUp: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [selectedFile, setSelectedFile] = useState<File>();

	function handleSignUp() {}

	return (
		<main id="page-user-sign-up">
			<div className="form-side">
				<img src={goBackImg} />

				<form onSubmit={handleSignUp}>
					<h1>Cadastre-se</h1>
					<span className="describe">
						Preencha os dados abaixo para começar.
					</span>
					<div className="avatar-block">
						<Dropzone onFileUploaded={setSelectedFile} />
					</div>

					<div className="input-group">
						<div className="input-block">
							<Input
								type="text"
								placeholder="Nome"
								name="name"
								label="Nome"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
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

					<div className="input-group">
						<div className="input-icon">
							<PasswordInput />
						</div>

						<div className="input-block">
							<Input
								type="text"
								placeholder="Whatsapp"
								name="whatsapp"
								label="Whatsapp"
								value={whatsapp}
								onChange={(e) => setWhatsapp(e.target.value)}
							/>
						</div>
					</div>

					<button type="submit">Concluir cadastro</button>
				</form>
			</div>

			<div className="banner-side">EasyDelivery</div>
		</main>
	);
};

export default SignUp;
