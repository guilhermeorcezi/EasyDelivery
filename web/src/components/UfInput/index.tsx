import React, { useEffect, useState, ChangeEvent } from 'react';

import axios from 'axios';

import { Container } from './styles';

interface ApiUFResponse {
  sigla: string;
}

interface ApiCityResponse {
  nome: string;
}

interface Props {
  selectedUf: string;
  setSelectedUf: (e: string) => void;
}

const UfInput: React.FC<Props> = ({ selectedUf, setSelectedUf }) => {
  const [ufs, setUfs] = useState<string[]>([]);

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
    <Container name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
      <option value="0">Selecionar UF</option>
      {ufs.map(uf => (
        <option key={uf} value={uf}>
          {uf}
        </option>
      ))}
    </Container>
  );
};

export default UfInput;
