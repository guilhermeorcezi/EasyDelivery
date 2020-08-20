import React, { useState } from 'react';

import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';
import Header from '../../components/Header';
import DeliverymanItem from '../../components/DeliverymanItem';

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

				<DeliverymanItem />
				<DeliverymanItem />
			</div>
		</div>
	);
};

export default DeliverymanList;
