import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalHeader from './components/GlobalHeader';
import Footer from './components/Footer';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="page-wrapper">
                    <GlobalHeader />
                    <Switch>
                        <Routes />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
