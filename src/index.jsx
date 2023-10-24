import { createRoot } from "react-dom/client";
import App from './components/App';
import './App.css';

const root = document.getElementById('app');
const appRoot = createRoot(root);
appRoot.render(<App />);
