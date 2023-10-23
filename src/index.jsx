import ReactDOM from 'react-dom';
import App from './components/App';
import './App.css';

const root = document.getElementById('app');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
