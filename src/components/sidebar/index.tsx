import './Sidebar.scss';
import NavBar from './navbar';
import Search from './search';
import Chats from './chats';

function SideBar() {
	return (
		<div className="sidebar">
			<NavBar />
			<Search />
			<Chats />
		</div>
	);
}

export default SideBar;
