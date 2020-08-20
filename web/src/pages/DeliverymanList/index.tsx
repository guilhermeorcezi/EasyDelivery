import React from 'react';

import './styles.css';
import Header from '../../components/Header';

const DeliverymanList: React.FC = () => {
	return (
        <div id="page-list">
            <Header list deliveryman_amount={2}>Buscar entregador</Header>
        </div>
    )
};

export default DeliverymanList;
