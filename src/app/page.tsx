'use client';

import { LoginButton } from '@/components/auth/login/login-button';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		console.log('useEffect');
	}, []);

	return (
		<main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400 to-emerald-800">
			<div className="space-y-6 text-center">
				<h1 className="text-6xl font-semibold text-white drop-shadow-md">🔐 Auth</h1>
				<p className="text-white text-lg">A simple authentication service</p>
				<div>
					<LoginButton>
						<Button
							variant={'secondary'}
							size={'lg'}>
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
