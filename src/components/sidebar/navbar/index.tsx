import './Navbar.scss';

function NavBar() {
	return (
		<div className="navbar">
			<span className="logo">Online Chat</span>
			<div className="user">
				<img
					src="https://static.wikia.nocookie.net/warner-bros-entertainment/images/1/1a/Neo_%28The_Matrix%29.jpg"
					alt="avatar"
				/>
				<span>John</span>
				<button>Logout</button>
			</div>
		</div>
	);
}

export default NavBar;
