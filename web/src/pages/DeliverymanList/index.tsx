import React, { useState, useRef } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';
import Header from '../../components/Header';
import DeliverymanItem from '../../components/DeliverymanItem';
import Textarea from '../../components/Textarea';

import {
  Container,
  Content,
  SearchGroup,
  InputBlock,
  HasNothing,
  ContactContainer,
} from './styles';

const DeliverymanList: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [service, setService] = useState('');
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(false);

  const formRef = useRef<FormHandles>(null);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <Container id="page-list">
      <Header list deliveryman_amount={2}>
        Buscar entregador
      </Header>
      <Content className="container">
        <SearchGroup className="search-group">
          <Form className="input-group" onSubmit={() => { }} ref={formRef}>
            <InputBlock className="input-block">
              <legend>Seu estado</legend>
              <UfInput selectedUf={uf} name="uf" setSelectedUf={setUf} />
            </InputBlock>
            <InputBlock className="input-block">
              <legend>Sua cidade</legend>
              <CityInput
                selectedUF={uf}
                selectedCity={city}
                setSelectedCity={setCity}
              />
            </InputBlock>
            <button>
              <FiSearch color="#FFF" size="24" />
            </button>
          </Form>
        </SearchGroup>
        {show ? (
          <>
            <DeliverymanItem />
            <DeliverymanItem />
          </>
        ) : (
          <HasNothing>
            Nenhum entregador encontrado com a sua pesquisa.
          </HasNothing>
        )}
      </Content>

      {toggle && (
        <ContactContainer className="contact-container">
          <div className="contact-form">
            <FaTimes onClick={handleToggle} />
            <form>
              <h2>Quase lá!</h2>
              <div className="input-group">
                <div className="input-block">
                  <legend>Descreva o serviço (Máximo 300 caracteres)</legend>
                  <Textarea
                    placeholder="Descrição"
                    name="description"
                    label="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <legend>Tipo de serviço</legend>
                  <select
                    placeholder="Descrição"
                    id="service"
                    name="service"
                    value={service}
                  >
                    <option key="a" value="a">
                      A
                    </option>
                    <option key="a" value="a">
                      B
                    </option>
                    <option key="a" value="a">
                      C
                    </option>
                    <option key="a" value="a">
                      D
                    </option>
                    <option key="a" value="a">
                      Outros
                    </option>
                  </select>
                </div>
              </div>

              <div className="action-button">
                <a
                  href="https://api.whatsapp.com/send?phone=phone&text=text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Confirmar
                </a>
              </div>
            </form>
          </div>
        </ContactContainer>
      )}
    </Container>
  );
};

export default DeliverymanList;
