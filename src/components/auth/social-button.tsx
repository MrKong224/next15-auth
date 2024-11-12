'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const SocialButton = () => {
	return (
		<div className="flex items-center justify-center w-full gap-x-2">
			<Button
				variant={'outline'}
				size={'lg'}
				className="w-full">
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button
				variant={'outline'}
				size={'lg'}
				className="w-full">
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
};
