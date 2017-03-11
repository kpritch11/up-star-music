import _ from 'lodash';
import * as types from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
    case types.SELECT_ARTIST:
        return [...state, action.payload];
    case types.DESELECT_ARTIST:
        return _.without(state, action.payload);
    case types.RESET_SELECTION:
        return [];
    default:
        return state;
    }
};
