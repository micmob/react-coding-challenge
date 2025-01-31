import produce from 'immer';
import { ActionTypes } from '../../actions/action-types';

const initialState = {
    loading: true,
    error: null,
    data: null,
};

const reducer = produce((state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_SHOWS:
            state.loading = true;
            state.error = null;
            state.data = null;

            return state;
        case ActionTypes.FETCH_SHOWS_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.data = null;

            return state;
        case ActionTypes.FETCH_SHOWS_COMPLETE:
            state.loading = false;
            state.data = action.payload;

            return state;
        default:
            return state;
    }
});

export default reducer;
