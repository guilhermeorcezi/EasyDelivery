import React, { InputHTMLAttributes } from 'react';
import { Input, LabelText } from './styled';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	type: string;
	name: string;
	value: string;
	label: string;
	placeholder: string;
	onChange?: (e: any) => void;
}

const InputStyled: React.FC<IProps> = ({
	label,
	type,
	name,
	value,
	onChange,
	placeholder,
}) => {
	const fieldId = `id_${name}`;

	return (
		<>
			<Input
				id={fieldId}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<LabelText>{label}</LabelText>
		</>
	);
};

export default InputStyled;
