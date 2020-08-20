import React, { useState } from 'react';

import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';
import Header from '../../components/Header';

import imgUser from '../../assets/images/user-avatar.png';
import iconWhatsapp from '../../assets/icons/whatsapp.png'

import './styles.css';

const DeliverymanList: React.FC = () => {
	const [uf, setUf] = useState('');
	const [city, setCity] = useState('');

	return (
		<div id="page-list">
			<Header list deliveryman_amount={2}>
				Buscar entregador
			</Header>
			<div className="container">
				<div className="search-group">
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
				</div>

				<div className="list-item">
					<div className="item-profile">
						<img src={imgUser} alt="User" className="image-avatar" />
						<div className="item-about">
							<h3>Guilherme Orcezi</h3>
							<span>Potim/SP</span>
						</div>
					</div>

					<div className="item-action">
						<a href="#" target="_blank">
                            <img src={iconWhatsapp} alt="Whatsapp"/>
							Entrar em contato
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliverymanList;
