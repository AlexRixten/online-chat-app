import { Navigate, Route, Routes } from 'react-router-dom';
import { ERoutes } from '../emuns/routes.enum.ts';
import SignUpPage from '../pages/sign-up';
import SignInPage from '../pages/sign-in';

function AuthRoutes() {
	return (
		<Routes>
			<Route path="*" element={<Navigate to={ERoutes.SignIn} />} />
			<Route path={ERoutes.SignUp} element={<SignUpPage />} />
			<Route path={ERoutes.SignIn} element={<SignInPage />} />
		</Routes>
	);
}

export default AuthRoutes;
