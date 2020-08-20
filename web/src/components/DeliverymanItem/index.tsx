import React from 'react';

import './styles.css';

import imgUser from '../../assets/images/user-avatar.png';
import iconWhatsapp from '../../assets/icons/whatsapp.png';

const DeliverymanItem: React.FC = () => {
	return (
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
					<img src={iconWhatsapp} alt="Whatsapp" />
					Entrar em contato
				</a>
			</div>
		</div>
	);
};

export default DeliverymanItem;
