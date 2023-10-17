'use client';

import styles from './Input.module.css';
import { ReactNode } from 'react';
import Button from '../Button/Button';

const handleClick = () => {
	// Handle button click logic here
};
interface Props {
	label: string;
	type: string;
	placeholder: string;
	id: string;
	name: string;
	icon?: ReactNode;
}

//TODO: ASK CHRIS ABOUT ICON can i do like this has an icon show it if it doesn't don't show it
export default function Input({
	label = ' ',
	type = '',
	placeholder = '',
	id = '',
	name = '',
	icon = false,
}: Props) {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				name={name}
			/>
			<Button
				link="#"
				type="button"
				icon={icon}
			/>
		</div>
	);
}

// Input ==> Search Icon ==> Button
