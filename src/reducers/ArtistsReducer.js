import * as types from '../actions/types';

const INITIAL_STATE = {
    all: [],
    offset: 0,
    limit: 20
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case types.SEARCH_ARTISTS:
        return action.payload;
    case types.FIND_ARTIST:
        return { ...state, artist: action.payload };
    case types.RESET_ARTIST:
        return { ...state, artist: null };
    default:
        return state;
    }
};
