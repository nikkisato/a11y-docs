import styles from './Input.module.css';

interface Props {
	label: string;
	type: string;
	placeholder: string;
	id: string;
	name: string;
}

export function Input({ label = ' ', type = '', placeholder = '', id = '', name = '' }: Props) {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				name={name}
			/>
		</div>
	);
}
