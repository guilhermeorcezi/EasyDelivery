import React, { useState, FormEvent, useRef, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import goBackIcon from '../../assets/icons/goback-blue.png';

import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Dropzone from '../../components/Dropzone';
import UfInput from '../../components/UfInput';

import { Container, FormSide, Form } from './styles';
import CityInput from '../../components/CityInput';
import BannerSide from '../../components/BannerSide';
import getValidationErrors from '../../utils/getValidationErrors';
import phoneRegex from '../../utils/numberRegex';

interface SignUpFormData {
  name: string;
  email: string;
  whatsapp: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [SelectedUF, setSelectedUF] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      if (!SelectedUF || !selectedCity) {
        return alert('Escolha UF e cidade');
      }

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        whatsapp: Yup.string().matches(
          phoneRegex,
          'Precisa ser um número válido',
        ),
        uf: Yup.object().shape({
          value: Yup.string().required('UF obrigatória'),
        }),
      });

      await schema.validate(data, { abortEarly: false });

      /*  await signIn({
        email: data.email,
        password: data.password,
      }); */

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <FormSide>
        <Link to="/">
          <img src={goBackIcon} alt="Back" />
        </Link>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Cadastre-se</h1>
          <span className="describe">
            Preencha os dados abaixo para começar.
          </span>
          <div className="avatar-block">
            <Dropzone onFileUploaded={setSelectedFile} />
          </div>
          <div className="input-block">
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              label="Nome"
              className="input-initial"
            />
          </div>
          <Input type="text" placeholder="E-mail" name="email" label="E-mail" />

          <PasswordInput />

          <Input
            type="text"
            placeholder="Ex: 12996158865"
            name="whatsapp"
            label="Whatsapp"
          />

          <div className="input-group">
            <UfInput
              name="uf"
              selectedUf={SelectedUF}
              setSelectedUf={setSelectedUF}
            />

            <CityInput
              selectedCity={selectedCity}
              selectedUF={SelectedUF}
              setSelectedCity={setSelectedCity}
            />
          </div>

          <button type="submit">Concluir cadastro</button>
        </Form>
      </FormSide>

      <BannerSide />
    </Container>
  );
};

export default SignUp;
