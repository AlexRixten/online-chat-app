import React from 'react';
import './MainLayout.scss';

interface IProps {
	children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
	return <div className="main-layout">{children}</div>;
}

export default MainLayout;
