import * as types from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
    case types.CREATE_ERROR:
        return 'There was an error inserting this record';
    case types.CLEAR_ERROR:
        return '';
    default:
        return state;
    }
};
