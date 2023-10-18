'use client';

import styles from './Input.module.css';
import React from 'react';
import Button from '../Button/Button';

// const handleClick = () => {
// 	// Handle button click logic here
// 	console.log('Button clicked');
// };
interface Props {
	label: string;
	type: string;
	placeholder: string;
	id: string;
	name: string;
	icon?: React.ReactNode;
}

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
				className={styles.input}
			/>
			<Button
				link="#"
				type="button"
				icon={icon}
				iconRight={true}
				// onClick={handleClick}
			/>
		</div>
	);
}
