import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import Series from '../screens/Series';
import Movies from '../screens/Movies';

const Template = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/series" exact>
                            <Series />
                        </Route>
                        <Route path="/movies" exact>
                            <Movies />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default Template;
