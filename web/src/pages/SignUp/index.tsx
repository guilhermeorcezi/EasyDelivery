import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import goBackIcon from '../../assets/icons/goback-blue.png';

import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Dropzone from '../../components/Dropzone';
import UfInput from '../../components/UfInput';

import './styles.css';
import CityInput from '../../components/CityInput';

interface Props {
	is_motoboy: boolean;
}

const SignUp: React.FC<Props> = ({ is_motoboy }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [SelectedUF, setSelectedUF] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedFile, setSelectedFile] = useState<File>();

	function handleSignUp() {
		console.log(selectedCity);
	}

	return (
		<main id="page-user-sign-up">
			<div className="form-side">
				<Link to="/">
					<img src={goBackIcon} alt="Back" />
				</Link>

				<form onSubmit={handleSignUp}>
					<h1>Cadastre-se</h1>
					<span className="describe">
						Preencha os dados abaixo para começar.
					</span>
					<div className="avatar-block">
						<Dropzone onFileUploaded={setSelectedFile} />
					</div>

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

					<div className="input-group">
						<UfInput selectedUf={SelectedUF} setSelectedUf={setSelectedUF} />

						<CityInput
							selectedCity={selectedCity}
							selectedUF={SelectedUF}
							setSelectedCity={setSelectedCity}
						/>
					</div>

					<button type="submit">Concluir cadastro</button>
				</form>
			</div>

			<div className="banner-side">EasyDelivery</div>
		</main>
	);
};

export default SignUp;
