import React, { useEffect, useState, ChangeEvent } from 'react';

import axios from 'axios';

import './styles.css';

interface ApiUFResponse {
	sigla: string;
}

interface ApiCityResponse {
	nome: string;
}


interface Props {
	selectedCity: string;
	selectedUf: string;
	setSelectedUf: (e: string) => void;
	setSelectedCity: (e: string) => void;
}

const UfInput: React.FC<Props> = ({
	selectedUf,
	setSelectedUf,
	selectedCity,
	setSelectedCity,
}) => {
	const [ufs, setUfs] = useState<string[]>([]);
	const [cities, setCities] = useState<string[]>([]);

	useEffect(() => {
		axios
			.get<ApiUFResponse[]>(
				'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
			)
			.then((response) => {
				const UFinitials = response.data.map((uf) => uf.sigla);
				setUfs(UFinitials);
			});
	}, []);

	useEffect(() => {
        console.log(selectedUf)
		if (selectedUf === '0') return;

		axios
			.get<ApiCityResponse[]>(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
			)
			.then((response) => {
				const CitiesNames = response.data.map((city) => city.nome);
				setCities(CitiesNames);
			});
	}, [selectedUf]);

	function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
		const uf = event.target.value;

		setSelectedUf(uf);
	}

	function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
		const uf = event.target.value;

		setSelectedCity(uf);
	}

	return (
		<>
			<select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
				<option value="0">Selecionar UF</option>
				{ufs.map((uf) => (
					<option key={uf} value={uf}>
						{uf}
					</option>
				))}
			</select>
			<select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
				<option value="0">Selecionar Cidade</option>
				{cities.map((city) => (
					<option key={city} value={city}>
						{city}
					</option>
				))}
			</select>
		</>
	);
};

export default UfInput;
