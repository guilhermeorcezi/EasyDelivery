import React from 'react';

import { Container, Profile, Contact } from './styles';

import imgUser from '../../assets/images/user-avatar.png';
import iconWhatsapp from '../../assets/icons/whatsapp.png';

const DeliverymanItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img src={imgUser} alt="User" />
        <div>
          <h3>Guilherme Orcezi</h3>
          <span>Potim/SP</span>
        </div>
      </Profile>

      <Contact>
        <a href="a" target="_blank">
          <img src={iconWhatsapp} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Contact>
    </Container>
  );
};

export default DeliverymanItem;
