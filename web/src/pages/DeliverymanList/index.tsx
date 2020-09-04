import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

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
} from './styles';

const DeliverymanList: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [service, setService] = useState('');
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(true);

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
          <div className="input-group">
            <InputBlock className="input-block">
              <legend>Seu estado</legend>
              <UfInput selectedUf={uf} setSelectedUf={setUf} />
            </InputBlock>
            <InputBlock className="input-block">
              <legend>Sua cidade</legend>
              <CityInput
                selectedUF={uf}
                selectedCity={city}
                setSelectedCity={setCity}
              />
            </InputBlock>
          </div>
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

      {/* toggle && (
        <div className="contact-container">
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
                >
                  Confirmar
                </a>
              </div>
            </form>
          </div>
        </div>
      ) */}
    </Container>
  );
};

export default DeliverymanList;
