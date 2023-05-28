import { Link } from 'react-router-dom';
import { ERoutes } from '../../../emuns/routes.enum.ts';
import './LoginForm.scss';

function RegisterForm() {
	return (
		<>
			<span className="title">Login</span>
			<form>
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="Enter your password" />
				<button>Sign in</button>
			</form>
			<p>
				You don't have an account? <Link to={ERoutes.SignUp}>Register</Link>
			</p>
		</>
	);
}

export default RegisterForm;
