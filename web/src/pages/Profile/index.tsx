import React, { useState } from 'react';

import './styles.css';
import Header from '../../components/Header';
import Input from '../../components/Input';
import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';

const Profile: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [uf, setUf] = useState('');
	const [city, setCity] = useState('');

	function handleEditProfile() {}

	return (
		<div id="page-profile">
			<Header profile>Meu Perfil</Header>
			<div className="container">
				<form onSubmit={handleEditProfile}>
					<span>Seus dados</span>

					<div className="input-block">
						<legend>Nome</legend>
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
						<legend>Email</legend>
						<Input
							type="text"
							placeholder="Email"
							name="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="input-block">
						<legend>Nova senha</legend>
						<Input
							type="text"
							placeholder="Nova Senha"
							name="password"
							label="Nova senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="input-block">
						<legend>Whatsapp</legend>
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
						<div className="input-block">
							<legend>Seu estado</legend>
							<UfInput selectedUf={uf} setSelectedUf={setUf} />
						</div>
						<div className="input-block">
							<legend>Sua cidade</legend>
							<CityInput
								selectedUF={uf}
								selectedCity={city}
								setSelectedCity={setCity}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Profile;
