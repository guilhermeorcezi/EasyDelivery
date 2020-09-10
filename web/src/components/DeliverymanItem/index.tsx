import React, { useState } from 'react';

import { Container, Profile, Contact } from './styles';

import iconWhatsapp from '../../assets/icons/whatsapp.png';
import Modal from '../Modal';

export interface Deliveryman {
  id: string;
  avatar: string;
  name: string;
  uf: string;
  city: string;
  whatsapp: string;
}
export interface DeliverymanItemProps {
  deliveryman: Deliveryman;
}

const DeliverymanItem: React.FC<DeliverymanItemProps> = ({ deliveryman }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Profile>
          <img
            src={`http://localhost:3333/files/${deliveryman.avatar}`}
            alt="User"
          />
          <div>
            <h3>{deliveryman.name}</h3>
            <span>{`${deliveryman.city}/${deliveryman.uf}`}</span>
          </div>
        </Profile>

        <Contact onClick={() => setOpenModal(true)}>
          <img src={iconWhatsapp} alt="Whatsapp" />
          Entrar em contato
        </Contact>
      </Container>
      {openModal && (
        <Modal deliveryman={deliveryman} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default DeliverymanItem;
