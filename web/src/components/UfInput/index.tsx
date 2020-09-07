import React, {
  useEffect,
  useState,
  ChangeEvent,
  InputHTMLAttributes,
  useRef,
  useCallback,
} from 'react';

import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import axios from 'axios';

import { Container, Error } from './styles';

interface ApiUFResponse {
  sigla: string;
}

interface Props {
  name: string;
  selectedUf: string;
  setSelectedUf: (e: string) => void;
}

const UfInput: React.FC<Props> = ({
  name,
  selectedUf,
  setSelectedUf,
  ...rest
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const [ufs, setUfs] = useState<string[]>([]);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    axios
      .get<ApiUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const UFinitials = response.data.map(uf => uf.sigla);
        setUfs(UFinitials);
      });
  }, []);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  return (
    <>
      <Container
        name={name}
        id="uf"
        value={selectedUf}
        onChange={handleSelectUf}
        {...rest}
        ref={inputRef}
      >
        <option value="0">Selecionar UF</option>
        {ufs.map(uf => (
          <option key={uf} value={uf}>
            {uf}
          </option>
        ))}
      </Container>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </>
  );
};

export default UfInput;
