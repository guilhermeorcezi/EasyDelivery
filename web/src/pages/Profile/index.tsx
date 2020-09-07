import React, { useState, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Container, Content, Form } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';

const Profile: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const formRef = useRef<FormHandles>(null);

  function handleEditProfile() { }

  return (
    <Container id="page-profile">
      <Header profile>Meu Perfil</Header>
      <Content className="container">
        <Form onSubmit={handleEditProfile} ref={formRef}>
          <span>Seus dados</span>

          <div className="input-block">
            <legend>Nome</legend>
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              label="Nome"
              className="input"
            />
          </div>

          <div className="input-block">
            <legend>Email</legend>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              label="Email"
              className="input"
            />
          </div>

          <div className="input-block">
            <legend>Nova senha</legend>
            <Input
              type="text"
              placeholder="Nova Senha"
              name="password"
              label="Nova senha"
              className="input"
            />
          </div>

          <div className="input-block">
            <legend>Whatsapp</legend>
            <Input
              type="text"
              placeholder="Whatsapp"
              name="whatsapp"
              label="Whatsapp"
              className="input"
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <legend>Seu estado</legend>
              <UfInput name="uf" selectedUf={uf} setSelectedUf={setUf} />
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
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
