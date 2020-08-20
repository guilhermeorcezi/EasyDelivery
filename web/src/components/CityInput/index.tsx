import React, { useEffect, useState, ChangeEvent } from 'react';

import axios from 'axios';

import './styles.css';

interface ApiCityResponse {
	nome: string;
}
interface ApiCityResponse {
	nome: string;
}

interface Props {
	value: string;
	selectedUf: string;
	setSelectedCity: (e: string) => void;
}

const CityInput: React.FC<Props> = ({ value, selectedUf, setSelectedCity }) => {
	const [cities, setCities] = useState<string[]>([]);

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
	}, []);

	function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
		const uf = event.target.value;

		setSelectedCity(uf);
	}

	return (
		<>
			<select name="city" id="city" value={value} onChange={handleSelectCity}>
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

export default CityInput;
