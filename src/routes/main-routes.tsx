import { /*Navigate, */ Route, Routes } from 'react-router-dom';
import { ERoutes } from '../emuns/routes.enum.ts';
import HomePage from '../pages/home';

function MainRoutes() {
	return (
		<Routes>
			{/*<Route path="*" element={<Navigate to={ERoutes.SignIn} />} />*/}
			<Route path={ERoutes.Home} element={<HomePage />} />
		</Routes>
	);
}

export default MainRoutes;
