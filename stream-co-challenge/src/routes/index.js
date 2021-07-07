import './index.css';
import { Route } from 'react-router-dom';

import Home from '../screens/Home';
import Series from '../screens/Series';
import Movies from '../screens/Movies';

import PageHeader from '../components/PageHeader';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import Text from '../components/Text';

const Routes = () => {
    const shows = useSelector(state => state.shows);

    // ******************* FETCH DATA ******************

    const { fetchShows } = useActions();
    useEffect(() => {
        fetchShows();
    }, [fetchShows]);

    // ******************* LOADING ******************
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        if (shows.loading) {
            setIsLoading(true);
        } else {
            if (!shows.loading) {
                setIsLoading(false);
            }
        }
    }, [shows.loading]);

    // ******************* HANDLE ERRORS AND SET DATA ******************

    useEffect(() => {
        if (shows.data && !shows.error) {
            setHasError(false);
            console.log(shows.data);
        } else {
            if (shows.error) {
                setHasError(true);
            }
        }
    }, [shows.error, shows.data]);

    const Screen = ({ children }) => (
        <>
            <PageHeader title="Popular Titles" />
            <div className="page">
                {hasError ? (
                    <Text>Oops, something went wrong.</Text>
                ) : isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    children
                )}
            </div>
        </>
    );

    return (
        <>
            <Route path="/" exact>
                <Screen>
                    <Home />
                </Screen>
            </Route>
            <Route path="/home">
                <Screen>
                    <Home />
                </Screen>
            </Route>
            <Route path="/series" exact>
                <Screen>
                    <Series />
                </Screen>
            </Route>
            <Route path="/movies" exact>
                <Screen>
                    <Movies />
                </Screen>
            </Route>
        </>
    );
};

export default Routes;
