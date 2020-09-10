import React, { useState, useRef, useEffect, useCallback } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import api from '../../services/api';

import UfInput from '../../components/UfInput';
import CityInput from '../../components/CityInput';
import Header from '../../components/Header';
import DeliverymanItem, { Deliveryman } from '../../components/DeliverymanItem';

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
  const [deliveryman, setDeliveryman] = useState<Deliveryman[]>([]);
  const [deliverymanAmount, setDeliverymanAmount] = useState(0);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('deliveryman/count').then(response => {
      setDeliverymanAmount(response.data);
    });
  }, []);

  const handleSearch = useCallback(async () => {
    const response = await api.get('deliveryman', { params: { uf, city } });

    setDeliveryman(response.data);
  }, [city, uf]);

  return (
    <Container id="page-list">
      <Header list deliveryman_amount={deliverymanAmount}>
        Buscar entregador
      </Header>
      <Content className="container">
        <SearchGroup className="search-group">
          <Form className="input-group" onSubmit={handleSearch} ref={formRef}>
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
            <button type="submit">
              <FiSearch color="#FFF" size="24" />
            </button>
          </Form>
        </SearchGroup>
        {deliveryman.length > 0 ? (
          <>
            {deliveryman.map((deliverymanItem: Deliveryman) => (
              <DeliverymanItem
                deliveryman={deliverymanItem}
                key={deliverymanItem.id}
              />
            ))}
          </>
        ) : (
            <HasNothing>
              Nenhum entregador encontrado com a sua pesquisa.
            </HasNothing>
          )}
      </Content>
    </Container>
  );
};

export default DeliverymanList;
