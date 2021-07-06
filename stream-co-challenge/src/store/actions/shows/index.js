import { ActionTypes } from '../action-types';

export const fetchShows = () => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.FETCH_SHOWS,
        });

        try {
            const response = await fetch(
                'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
            );

            const json = await response.json();

            // normally you'd check the status, but I don't see any status field in the response
            if (response.ok && json.total > 0) {
                dispatch({
                    type: ActionTypes.FETCH_SHOWS_COMPLETE,
                    payload: json.entries,
                });
            } else {
                dispatch({
                    type: ActionTypes.FETCH_SHOWS_ERROR,
                    // normally you'd pass the error message but I don't know a failed request looks like in this case
                    // payload: 'Shows - ' + json.error_message,
                    payload: 'Shows - Error fetching shows.',
                });
            }
        } catch (err) {
            dispatch({
                type: ActionTypes.FETCH_SHOWS_ERROR,
                payload: 'Shows - Error fetching shows.',
            });
        }
    };
};
