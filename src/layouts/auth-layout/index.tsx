import React from 'react';
import './AuthLayout.scss';

interface IProps {
	children: React.ReactNode;
}

function AuthLayout({ children }: IProps) {
	return (
		<div className="auth-layout">
			<div className="wrapper">
				<span className="logo">Online Chat</span>
				{children}
			</div>
		</div>
	);
}

export default AuthLayout;
