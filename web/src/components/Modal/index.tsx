import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Container, Form } from './styles';

import { Deliveryman } from '../DeliverymanItem';
import api from '../../services/api';
import Input from '../Input';

interface ModalProps {
  deliveryman: Deliveryman;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ServicesInterface {
  id: string;
  name: string;
}

const Modal: React.FC<ModalProps> = ({ deliveryman, setOpenModal }) => {
  const [description, setDescription] = useState('');
  const [services, setServices] = useState<ServicesInterface[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('services').then(response => {
      setServices(response.data);
    });
  }, []);

  return (
    <>
      {console.log('chegou', deliveryman)}
      <Container>
        <div>
          <FaTimes onClick={() => setOpenModal(false)} />

          <Form onSubmit={() => { }} ref={formRef}>
            <h2>Quase lá!</h2>
            <div className="input-group">
              <div className="input-block">
                <legend>Descreva o serviço (Máximo 300 caracteres)</legend>
                <Input
                  placeholder="Descrição"
                  name="description"
                  label="Descrição"
                  textarea
                />
              </div>
              <div className="input-block">
                <legend>Tipo de serviço</legend>
                <select placeholder="Descrição" id="service" name="service">
                  <option value="0">Selecionar serviços</option>
                  {services.map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
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
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Modal;
