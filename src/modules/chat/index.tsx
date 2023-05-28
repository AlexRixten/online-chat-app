import './Chat.scss';
import Messages from './messages';
import ChatInput from './input';
import { BsPersonPlusFill, FiMoreHorizontal, IoMdVideocam } from 'react-icons/all';

function Chat() {
	return (
		<div className="chat">
			<div className="chat-info">
				<span>Jane</span>
				<div className="chat-icons">
					<IoMdVideocam />
					<BsPersonPlusFill />
					<FiMoreHorizontal />
				</div>
			</div>
			<Messages />
			<ChatInput />
		</div>
	);
}

export default Chat;
