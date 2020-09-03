import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';
import Header from '../../components/Header';
import DeliverymanItem from '../../components/DeliverymanItem';
import Textarea from '../../components/Textarea';

import './styles.css';

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
        {show ? (
          <>
            <DeliverymanItem />
            <DeliverymanItem />
          </>
        ) : (
          <div className="has-nothing">
            Nenhum entregador encontrado com a sua pesquisa.
          </div>
        )}
      </div>

      {toggle && (
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
      )}
    </div>
  );
};

export default DeliverymanList;
