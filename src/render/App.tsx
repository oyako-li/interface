import icon from '@assets/mikoto.png';
import './App.css';
import { Link } from 'react-router-dom';
export default function App() {
  return (
	<div>
	  <div className="Hello">
		<img width="200" alt="icon" src={icon} />
	  </div>
	  <h1>命 Project</h1>
	  <div className="Hello">
		<button type='button'>
			<Link to="/chat">Chat</Link>
		</button>
		<button type='button'>
			<Link to="/body">Body</Link>
		</button>
	  </div>
	</div>
  );
}

