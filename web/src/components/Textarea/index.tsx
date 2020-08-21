import React, { InputHTMLAttributes } from 'react';

import { TextareaStyled, LabelText } from './styled';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	value: string;
	label: string;
	placeholder: string;
	onChange?: (e: any) => void;
}

const Textarea: React.FC<IProps> = ({
	label,
	name,
	value,
	onChange,
	placeholder,
}) => {
	const fieldId = `id_${name}`;

	return (
		<>
			<TextareaStyled
				id={fieldId}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<LabelText>{label}</LabelText>
		</>
	);
};

export default Textarea;
