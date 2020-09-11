import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  ChangeEvent,
} from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaTimes } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Form } from './styles';

import { Deliveryman } from '../DeliverymanItem';
import Input from '../Input';
import getValidationErrors from '../../utils/getValidationErrors';

interface ModalProps {
  deliveryman: Deliveryman;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ServicesInterface {
  id: string;
  name: string;
}

interface createDeliveryFormData {
  description: string;
  service_id: string;
  deliveryman_id: string;
}

const Modal: React.FC<ModalProps> = ({ deliveryman, setOpenModal }) => {
  const [services, setServices] = useState<ServicesInterface[]>([]);

  const [description, setDescription] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('services').then(response => {
      setServices(response.data);
    });
  }, []);

  const handleSelectedService = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const service = event.target.value;
      setSelectedService(service);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (data: createDeliveryFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          description: Yup.string()
            .required('Descreva o serviço')
            .max(300, 'Limite de 300 caracteres'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('delivery', {
          description: data.description,
          service_id: selectedService,
          deliveryman_id: deliveryman.id,
        });

        const service = services.filter(
          service => service.id === selectedService,
        );

        const serviceName = service[0].name;
        const message = `Oi! Preciso de um serviço de entrega
        ${serviceName !== 'Outros' ? ` sobre ${serviceName}.` : `!`} `;

        window.open(
          `https://api.whatsapp.com/send?phone=${deliveryman.whatsapp}&text=${message} ${data.description}`,
          '_blank',
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [deliveryman.id, selectedService],
  );

  return (
    <>
      <Container>
        <div>
          <FaTimes onClick={() => setOpenModal(false)} className="close-icon" />

          <Form onSubmit={handleSubmit} ref={formRef}>
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
                <select
                  placeholder="Descrição"
                  id="service"
                  name="service"
                  onChange={handleSelectedService}
                >
                  <option value="0">Selecionar serviço desejado</option>
                  {services.map((service: ServicesInterface) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="action-button">
              <button type="submit">Confirmar</button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Modal;
