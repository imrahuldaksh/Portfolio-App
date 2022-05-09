import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.module.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
    <AuthContextProvider>
        <Router>
            <App />
        </Router>
    </AuthContextProvider>,
    document.getElementById('root')
);