import './Search.scss';

function Search() {
	return (
		<div className="search">
			<div className="search-form">
				<input type="text" placeholder="Find a user" />
			</div>
			<div className="user-chat">
				<img
					src="https://static.wikia.nocookie.net/warner-bros-entertainment/images/1/1a/Neo_%28The_Matrix%29.jpg"
					alt="avater"
				/>
				<div className="user-chat_info">
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
}

export default Search;
