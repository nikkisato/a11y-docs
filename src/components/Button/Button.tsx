'use client';

import { ReactNode } from 'react';

interface Props {
	link: string;
	text?: string;
	icon: React.ReactNode;
	iconLeft?: boolean;
	iconRight?: boolean;
	type: string;
	onClick: () => void;
}

export default function Button({
	link = '',
	text = '',
	icon = '',
	iconRight = false,
	iconLeft = false,
	type = '',
	onClick = () => {},
}: Props) {
	return (
		<>
			<button onClick={onClick}>
				{iconLeft && icon}
				{text}
				{iconRight && icon}
			</button>
		</>
	);
}
