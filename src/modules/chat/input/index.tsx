import { IoIosAttach, MdAddPhotoAlternate } from 'react-icons/all';
import './InputChat.scss';

function ChatInput() {
	return (
		<div className="input">
			<input type="text" placeholder="Type something..." />
			<div className="send">
				<IoIosAttach />
				<input style={{ display: 'none' }} type="file" id="file" />
				<label htmlFor="file">
					<MdAddPhotoAlternate />
				</label>
				<button>Send</button>
			</div>
		</div>
	);
}

export default ChatInput;
