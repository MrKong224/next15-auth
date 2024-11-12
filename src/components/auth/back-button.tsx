'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

interface BackButtonProps {
	href: string;
	label: string;
}

export const BackButton = (props: BackButtonProps) => {
	return (
		<Button
			variant={'link'}
			size={'sm'}
			className="font-normal w-full">
			<Link href={props.href}>{props.label}</Link>
		</Button>
	);
};
