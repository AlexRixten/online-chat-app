import AuthLayout from '../../layouts/auth-layout';
import RegisterForm from './register-form';

function SignUpPage() {
	return (
		<AuthLayout>
			<RegisterForm />
		</AuthLayout>
	);
}

export default SignUpPage;
