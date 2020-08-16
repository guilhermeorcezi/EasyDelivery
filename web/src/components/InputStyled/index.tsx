import React, { InputHTMLAttributes } from 'react';
import { Input, LabelText } from './styled';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	type: string;
	name: string;
	value: string;
	label: string;
	hasValue: string;
	placeholder: string;
	onChange?: (e: any) => void;
}

const InputStyled: React.FC<IProps> = ({
	label,
	id,
	type,
	name,
	value,
	onChange,
	placeholder,
}) => {
	const fieldId = `id_${name}`;
	const hasValue = 'a';

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
