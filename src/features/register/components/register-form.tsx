'use client';

import React from 'react';

import { CardWrapper } from '../../../components/auth/card-wrapper';

const RegisterForm = () => {
	return (
		<CardWrapper
			headerLabel="Welcome new user"
			backButtonLabel="Already have an account?"
			backButtonHref="/auth/login"
			showSocial>
			Register Form !!!
		</CardWrapper>
	);
};

export default RegisterForm;
