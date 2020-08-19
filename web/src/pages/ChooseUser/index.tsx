import React from 'react';

import motoboyImg from '../../assets/images/motoboy-icon.png';
import clientImg from '../../assets/images/user-icon.png';

import './styles.css';

const ChooseUser: React.FC = () => {
	return (
		<div id="page-choose-user">
			<div className="client-side">
				<div className="image-container">
					<img src={clientImg} alt="Cliente" className="image" />
					SOU UM CLIENTE
				</div>
			</div>
			<div className="motoboy-side">
				<image className="image-container">
					<img src={motoboyImg} alt="Motoboy" className="image" />
					SOU UM MOTOBOY
				</image>
			</div>
		</div>
	);
};

export default ChooseUser;
