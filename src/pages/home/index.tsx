import SideBar from '../../components/sidebar';
import Chat from '../../modules/chat';
import MainLayout from '../../layouts/main-layout';
import './Home.scss';

function HomePage() {
	return (
		<MainLayout>
			<div className="container">
				<SideBar />
				<Chat />
			</div>
		</MainLayout>
	);
}

export default HomePage;
