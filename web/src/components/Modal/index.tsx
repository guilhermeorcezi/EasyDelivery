import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container, Form } from './styles';

import { Deliveryman } from '../DeliverymanItem';
import Textarea from '../Textarea';

interface ModalProps {
  deliveryman: Deliveryman;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ deliveryman, setOpenModal }) => {
  const [description, setDescription] = useState('');

  return (
    <>
      {console.log('chegou', deliveryman)}
      <Container>
        <div>
          <FaTimes onClick={() => setOpenModal(false)} />

          <Form>
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
                <select placeholder="Descrição" id="service" name="service">
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
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Modal;
